---
title:  "Make a Bootable USB in macOS"
date:   2021-11-08 14:14:22 -0700
layout: default
categories: techblog
---

This post explains how to make a bootable USB drive for installing Linux, macOS, Windows, or... whatever else you want. From macOS. Using the command line, mostly. And unlike every other article on the internet that explains this
concept on the internet, it's not blogspam, it's not filled with ads, and it's not written in broken English or with so much fluff you give up halfway through.

<!-- readmore -->

Follow these steps:

0. Plug the USB drive into your Mac.
1. Format USB drive to MS-DOS (FAT) with Disk Utility. On the USB drive,
   click "erase", then rename your drive & choose FAT.
2. Download the ISO image to load onto the drive.
3. Convert the ISO to an DMG image:
   ```
   hdiutil convert /path/to/example.iso -format UDRW -o /path/to/example
   ```
   Note that the output file implicitly gets a `.dmg` extension added to the end. You'll need to include the `.dmg` when you write the image to the drive.
4. Find the USB drive id with diskutil:
   ```
   diskutil list
   ```
   This will output a big list of disks (`/dev/disk1`, `/dev/disk2`, `/dev/disk3`, for instance). Look for the USB you just reformatted by name in the "NAME" column. Then grab the identifier from the "IDENTIFIER" column in row 0. Or just use the last string in the disk label at the start of the disk listing, a la "disk3". If you forgot to assign a meaningful name, you might be able to find it by capacity.
5. Write your DMG to the USB drive using the ID from the previous step:
   ```
   sudo dd if=/path/to/example.dmg of=/dev/<USB DRIVE ID> bs=1m
   ```
   **Note:** you'll need to include the `.dmg` extension at the end of your image file. If you're a little thick like me, you might forget it because you didn't include it in step 3. You *do* have to include it this time.
   **Second note:** this can take a loooooong time. Like 10-20 minutes. I think mine took almost 30 minutes, and I have a pretty decently specced Macbook Pro, albeit from 2015. Seems this is pretty dependent on the image size and the quality of the storage in your USB drive, which if you're just using some random one from 10 years ago, might not be that great.
6. When you get a popup that says "The disk you inserted was not readable by
   this computer", click "Ignore" and carry on. That's just your Mac getting
   upset that it can't read the image with Finder, even though your mac just...
   wrote the image. macOS is dumb sometimes.
7. Plug the USB drive into the computer you want to reimage. On a Mac, you'll
   hold down the option key at boot time until you see a boot menu, at which
   point you'll pick the USB drive. On my Linux laptop, I had to hit ESC
   multiple times when the manufacturer boot splash screen came up, to bring up
   BIOS, to add USB to the boot options. And then I had to hold F2 when I
   booted (again), and select the USB drive. YMMV -- it's best to take a look
   at the manual or look up how to bring up boot options/BIOS for your computer.