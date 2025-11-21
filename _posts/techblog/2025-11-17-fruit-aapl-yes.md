---
title:  "Improve macOS Finder SMB Share Performance"
date:   2025-10-22 15:13:13 -0500
layout: default
categories: techblog
---

I've been using a Raspberry Pi 5 as a home server for years now. Simultaneously, I've been using Apple's Macbook Pro series as personal and work laptops for essentially my entire life. Normally, this grants me access to a proper Unix command line, no AI garbage or ads in most system menus, and the best ratio of energy usage to computing power in the home computer industry. But ever since I started building my collection of home media -- music, movies, and TV shows -- I have discovered that Finder is horribly, terribly, no-good at browsing samba (SMB) shares. Performance is incredibly inconsistent and laggy. Just browsing between a few folders can take tens of seconds.

The workaround I explain in this post can help improve Finder's performance when browsing SMB shares.

<!-- readmore -->

In the `global` section of your samba settings (likely found at `/etc/samba/smb.conf`), add the following line:

```conf
fruit:aapl = yes
```

This enables Apple's SMB2+ extension, codenamed AAPL. You can read the full description at in the [samba documentation](https://www.samba.org/samba/docs/current/man-html/vfs_fruit.8.html), but the important part of the description reads: "A global option whether to enable Apple's SMB2+ extension codenamed AAPL".

You can also enable the following other options, though I had some problems writing media to my own share via Finder with these enabled:

```conf
vfs objects = catia fruit streams_xattr
fruit:nfs_aces = no
fruit:zero_file_id = yes
fruit:metadata = stream
fruit:encoding = native
```

So use these at your own risk.

Once you've made your changes, run the following command to try out your new configuration:

```zsh
sudo service smbd restart
```

You should see snappier performance browsing around on your NAS, especially in folders that contain a lot of files and subfolders. I noticed a significant improvement when browsing my SMB shares over VPN over low bandwidth internet connections.

Note: while Apple is indeed [removing SMBv1 and AFP (Apple File Protocol) from macOS 27 in 2026](https://appleinsider.com/articles/25/06/10/time-machines-time-capsule-support-ends-with-macos-27), the AAPL SMB2+ extension is sticking around for a while yet. I held off publishing this article for a while because I conflated AFP and AAPL in my mind. Don't make the same mistake I did!