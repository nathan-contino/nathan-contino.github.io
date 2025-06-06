---
title:  "The macOS Quarantine Bit Error Message is Bad"
date:   2025-05-29 15:13:13 -0500
layout: default
categories: techblog
---

Whenever you download a file in macOS, your computer automatically sets a special bit called the _quarantine bit_. Apple has a complicated system that makes this precaution invisible for popular apps, involving developer certs, code signing, a system called GateKeeper that evaluates trustworthiness, and surely plenty of 30% mafia-style protection fees. For many users, this system acts as an extra sanity check before running a potentially malicious application or script. For those of us who dare to occasionally peek over the garden wall, the quarantine bit (sometimes) presents an annoyance.

If you've ever been annoyed by the quarantine bit, read on to learn how I deal with it on my Macs.

<!-- readmore -->

## Application is damaged and can't be opened

In 2025, computers are an absolute necessity in daily life. As long as that's the case, software should protect the most vulnerable, including people who don't think about computers nearly as much as nerds like me (and likely you). The quarantine bit accomplishes this quite well: if you know what you're doing with a computer, especially a terminal, it's a minimal hoop to jump through. But the quarantine bit presents a much larger obstacle to a scammer trying to trick a less-computer-savvy user into running a rogue data-stealing application. That's good!

But the error message is bad:

> Librewolf.app is damaged and can't be opened

> Feishin.app is damaged and can't be opened

[Librewolf](https://librewolf.net/) is my web browser. [Feishin](https://github.com/jeffvli/feishin) is my music player. Neither application is code-signed by an official Apple developer (a privilege that requires a $100+ fee every year to maintain). Whenever I update either of them through [Homebrew](https://brew.sh/) (an update method that prevents every application from constantly spamming me with 'UPDATE ME' notifications), I must pass the `--no-quarantine` flag, or I'll see this message. This also happens with releases distributed via GitHub for lots of indie applications.

Everything about this system? Fine by me, since we're protecting vulnerable users... up until this error message. My beef? "is damaged" and "can't be opened" are _both lies_. The application is not damaged; it has one single bit set that stops the OS from running it (never mind the fact that Unix already has the [executable bit](https://wiki.archlinux.org/title/File_permissions_and_attributes) for this purpose, with a simpler, better UX). And the application can absolutely be opened, the OS simply doesn't feel like opening it right now.

Apple should embrace it's own [awful behavior in the App Store](https://www.theverge.com/news/667484/apple-eu-ios-app-store-warning-payment-system) and make the error message both scarier and more informative. How about this?

> Since Librewolf.app is an unrecognized application, it has been quarantined. If you trust this developer, you can remove the application from quarantine.

The "unrecognized application" and "quarantined" wording is scary. "If you trust this developer" should dissuade confused users in the middle of a phishing scam. The rest of the error gives computer-savvy users just enough information to look up a solution, but not enough to lure your grandfather into the proverbial wilderness of running random terminal commands to comply with a scammer.

## Permanent Homebrew fix

If the quarantine bit mostly annoys you with unsigned applications distributed via Homebrew, there's a fix. On a case-by-case basis, pass the `--no-quarantine` flag when you install or upgrade a package to disable the quarantine bit on your installation. But it's easy to forget this eventually. So instead, I recommend adding the option to your Homebrew cask settings permanently. Add the following line to your shell configuration (`~/.zshrc` on modern macOS, unless you switched to a different shell):

```shell
HOMEBREW_CASK_OPTS="--no-quarantine $HOMEBREW_CASK_OPTS"
```

Run `~/.zshrc`, and you won't ever have to worry about de-quarantining a Homebrew cask again.

You can also add this to `HOMEBREW_OPTS`, but I've never had this problem with non-cask packages.

Personally, I'd prefer if I could configure quarantine bits for each cask individually in a Homebrew configuration file. But maybe it would be even better UX for Homebrew to always automatically de-quarantine files -- after all, if I'm explicitly installing a package, I probably trust it!

## Sick of quarantining files?

For a quick fix, try right clicking the file and clicking **Open** in the context menu. This ([usually](https://lapcatsoftware.com/articles/right-click.html)) sidesteps Gatekeeper if your application has been code signed and notarized.

You can also visit the **Privacy & Security** section of macOS Settings to individually de-quarantine apps via a GUI. But Settings is slow, poorly organized, and buggy, so I wouldn't recommend it.

To remove the quarantine bit from a single file, run the following command:

```zsh
xattr -dr com.apple.quarantine <file>
```

If you're sick of the workarounds and the hullabaloo, you can also entirely disable the quarantine bit entirely forever on your machine (until a major macOS update brings it back, unfortunately):

```zsh
sudo defaults write com.apple.LaunchServices LSQuarantine -bool NO
```

