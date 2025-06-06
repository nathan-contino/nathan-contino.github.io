---
title:  "Optimizing a Jekyll Blog Containing Lots of Images"
date:   2022-10-21 14:26:53 -0500
layout: default
categories: techblog
---
This website features blog posts with many images -- often more than 20 per post!

Meg and I take a lot of these pictures on bike trips. Frequently with a fancy mirrorless Sony camera. They can be pretty large. But they're also frequently very pretty. Neither of us wants to shrink the images into oblivion.

I used to host those chonky images directly in my Jekyll blog, via the `_images` subfolder.

Eventually my site's GitHub repo ballooned to over a gigabyte in size. I know you shouldn't host blobs in source control, but... GitHub doesn't seem to care if your repo is a little big. And it's the cheapest blob storage out there, at a grand total of $0 for a half decade of usage.

But all good things must come to an end, and I started to get worried about the long-term scalability of my blog. Deployments for GitHub pages, which I use to host my site, crept above 10 minutes.

Even worse, I knew my pages weren't respectful of user data connections. Opening one of my blog posts with 20+ images in it resulted in a 200MB download. That's $2 on my Google Fi metered data plan! For one page!

So I decided to solve the problem. I attacked it from multiple angles:

- I moved images out of my Jekyll GitHub Pages blog, and purged the blob files from the repo's history.
- I created a new repo, [images](https://github.com/nathan-contino/images), with one purpose: hosting blob files.
- I set up a GitHub Action that automatically generates thumbnails of all image files uploaded to the image repo.
- I overhauled my blog site to download only those thumbnails on page load.
- So users can still view images in full resolution, I set up the thumbnails to directly link to GitHub's raw user content API... to show the full image.

If you:

- would like to set up thumbnails for your own GitHub Pages-hosted Jekyll blog
- are just morbidly curious about the kinds of Rube Goldberg machines I assemble when I should be Halloween party planning

read on.

<!-- readmore -->

# Purge the Blobs

My Jekyll blog's GitHub repository weighed over 1GB -- one chonky boi. This resulted in painfully long deployment times, and I started to worry that GitHub would eventually start killing my Pages deployment processes altogether.

So I used [BFG Repo Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) to strip all blobs over 1MB out of my repository's history.

One caveat you should be aware of: the BFG doesn't delete blobs that exist in the $HEAD commit of your repo. So you should purge the blobs in the following order:

1. Copy the images over into a separate folder. A good initial solution: an `images` GitHub repository. If you plan on generating thumbnails for the images, I recommend nesting them within a folder named "images" within this repository.

2. Delete the blobs, either with your preferred file browser or on the CLI with `rm -rf`.

3. Add the deletions to a commit, and push that to GitHub.

4. Run the BFG to remove the no-longer-used blobs from your repo. I removed everything above 500KB in size. The BFG's interface makes this quite easy.

This is how I ran the BFG:

First clone a fresh copy of your repo, using the --mirror flag:

```zsh
git clone --mirror git://github.com/your-repository-name.git
```

This is a "bare repo", so files won't be visible.
But it is a full copy of the Git database of your repository.
Make a backup of it to ensure you don't lose anything.

Now you can run the BFG to clean your repository up:

```zsh
java -jar bfg.jar --strip-blobs-bigger-than 500K your-repository-name.git
```

The BFG rewrites your commits and all branches and tags to purge the blobs.
But it doesn't physically delete the unwanted stuff.
Examine the repo to make sure your history updated.
Then, use git's garbage collector to strip out the blobs:

```zsh
cd your-repository-name.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

Once you're happy with the updated state of your repo, push it back up.
WARNING: because your clone command used the `--mirror` flag, this push updates all refs at your git host:

```zsh
git push
```

Oddly, I didn't have to force push. If this fails, add the `-f` flag and it might work. I *did* see some failures related to github issues, but inspecting my repo revealed that the blobs no longer existed in my history. Seems like those errors didn't matter for my needs.

If any other people or machines still have copies of the old version of the repo (containing the blobs), you should delete those copies and re-clone the repo.

# Host the Blobs

You can host your images anywhere else -- a physical server in your home, a dedicated site that hosts images, a cheap cloud machine you purchased with bitcoin -- but I chose to host my gigabyte of shame on GitHub.

I used a GitHub Action to automatically generate thumbnails for all images uploaded into the "images" subdirectory. Take a look at it [here](https://github.com/nathan-contino/images/blob/main/.github/workflows/workflow.yml).

Basically, whenever I write to the website, this Action downloads my repo, scans it for images, and generates thumbnails for all of those images. If it generates any new thumbnails that didn't already exist, it commits them into the ".thumbnails" directory. The thumbnail generator matches the directory layout of the "images" folder when it creates thumbnails, so it's easy to find the thumbnail for a given image -- just swap the "images" folder name in the path for ".thumbnails".

I chose to create thumbnails with a maximum height or width of 1000 pixels. That way they never top 200KB in size (so far), but they look decent enough to use as the "default" image display mode in my blog.

Besides the workflow, you'll need to create a GitHub token with commit privileges for your images repo. Then, you'll have to add that token as a secret in your images repo. There are a lot of instructions out there to learn about both of these tasks, and both can change on a dime when GitHub releases new versions. Just know that your token needs the ability to write new commits to your images repo. To actually push to GitHub, you can just use the Git CLI in your workflow... or you can use an action, like `publish-to-github-action`.

# Show the Thumbnails and the Blobs

There are three steps involved in the process of displaying these new images on your site:

1. Add custom Jekyll variables to easily reference your image repository in `_config.yml`:

   ```yaml
   images: https://raw.githubusercontent.com/<your-username>/<repo-name>/main/images/
   thumbnails: https://raw.githubusercontent.com/<your-username>/<repo-name>/main/.thumbnails/images/
   ```

2. Create a figure HTML include for your Jekyll site. I created [figure.html](https://github.com/nathan-contino/nathan-contino.github.io/blob/master/_includes/figure.html) in my site's "_includes" subdirectory. This include uses the built-in HTML "figure" tag to display an image and a caption. I've wrapped the "img" tag within the "figure" tag in an anchor that links out to the full resolution version of the image.

3. Reference the include from blog posts with the syntax demonstrated [here](https://github.com/nathan-contino/nathan-contino.github.io/blob/master/_posts/blog/2022-06-21-mountain-biking-is-silly.markdown). Look for the "figure.html" mentions and the images should stick out.

With this arrangement, users should see thumbnails and captions on your site, and be able to view the full size image by clicking the thumbnail. For accessibility, the caption is reused as the image alt text.
There's one caveat to this setup: if you upload full-size images that exceed 5MB in size, GitHub doesn't serve them as image content. Instead, GitHub uses the content type `application/octet-stream`. This means folks can't easily open your images in a new tab right in their browser... instead, they'll have to download the image and open it either in browser or with an app that lets them preview images. So keep your full size images below 5MB if that bothers you. EDIT: I have since added a second image generator pipeline that creates "reasonably sized" 2000 pixel wide images. These still look pretty good, and are easy enough to reference with a *second* config variable. You could also simply edit the files before uploading them, but this was more fun.

I also had to implement a couple of minor styling fixes to make this work.

1. On my blog, links have styling that colors their background when you hover over them. This resulted in some weird behavior when I hovered over images that are also links. I added a class called "nohover" to my figure image tags, and used `:not(.nohover)` in my CSS to exclude that class from hover styling:

   ```css
   a:not(.nohover):hover {
	  background-color: #300A24;
	  color: #BBB;
   }
  ```

2. I added the following styling to all anchor links on my site, because honestly, I pretty much never want a link to open in the current tab:

   ```css
   target: _blank;
   rel: "noopener noreferrer";
   ```

Viola! You've got clickable thumbnails on your site that lead to full-size images. You respect user data connections a tiny bit more than you did before. You still aren't paying someone to host a single gigabyte of images. And you put your Jekyll blog on a mean diet so you don't lose your sweet GH Pages site hosting.