---
title:  "Install the Pebble App Persistently on iOS"
date:   2025-03-18 15:13:13 -0500
layout: default
categories: techblog
---

This guide explains how to permanently install the Pebble app on a new iPhone, assuming you already downloaded the Pebble app from your Apple ID/Account at some point in the past.

I've had this written up in a text file on my laptop for a few years now. Given the announcement of new Pebbles today, I figured I'd share this, in case anyone else was inspired to use their Pebble again but got stuck on the Pebble app installation on iOS. Hopefully Eric & co will have [Cobble](https://github.com/pebble-dev/mobile-app) up and running soon, providing an easier way to use old and new Pebbles on iOS. But for now, this works on my 13 Mini and served me well for a couple of years on my old 2016 SE.

<!-- readmore -->

If you still use a Pebble smartwatch like I do, you may have experienced this same frustration.

You downloaded the Pebble app years ago, when Pebble Inc. still existed.

Several years later, Pebble Inc collapsed. The app stopped receiving updates. All was OK.

Eventually, Apple [delisted](https://arstechnica.com/gadgets/2022/04/apple-moves-to-delist-older-app-store-apps-frustrating-developers/) the Pebble app, hiding it from users who hadn't already downloaded it. Fortunately, folks who'd already downloaded the Pebble app could still download it whenever we upgraded phones or reinstalled iOS. Unfortunately, new users were totally locked out from downloading or installing the Pebble app, as were new Apple IDs.

Several years later, Apple finally removed the ability to download the Pebble app *at all* via the App Store, even for users who downloaded it back when the company was alive. The only way to get an iPhone to pair with a Pebble watch suddenly became... [sideloading the app](https://help.rebble.io/sideload-ios-app/)... which, unless you pay $100 a year for a developer certificate, you have to repeat every 7 days, because Apple only allows unofficial devs to sign an app for 7 days at a time. (remind me how we own our iPhones, after paying hundreds of dollars for them?)

Fortunately, there's still a way to get the original Pebble Inc-signed app loaded onto your phone _if you downloaded the Pebble app previously through the App Store_. It's still compatible all the way up to iOS 18, even on the newest iPhone, the 16e. I've never tried using the Pebble app with an iPad, but it might even work with that.

## Get the App

You can follow [this tutorial](https://gist.github.com/minif/473310d7c556caadf4f2ed2d97389574) to download the Pebble app's IPA file from Apple using iMazing. To speed things up, skip the tedious "find the App ID" section: I can confirm that the Pebble App ID is `957997620`.

Because I'm not 100% sure how long that gist will stay up, I'm repeating the important steps below:

1. Download [iMazing](https://imazing.com/download).

1. Install iMazing onto your computer.

1. Plug your iPhone into your computer. Enter your passcode and 'trust' the computer from the dialog on your phone, if you haven't already.

1. Open iMazing. If prompted to back up your device, select "Later".

1. Select "Manage Apps".

1. Sign into your Apple ID. If you use a hardware key (e.g. a Yubikey) for 2FA, login will fail, never allowing you to use 2FA. To solve this, you must first remove your hardware keys from your Apple ID (when I did this, Apple made me wait in the corner for an hour for security/shame), then login using SMS 2FA.

1. Wait for a list of installed apps to appear. Note which apps use green checkmarks here (consider taking a screenshot) -- we *can't* use green checkmark apps for the duplication step later on in this guide).

1. Close out of iMazing.

1. In a terminal or Finder, navigate to `~/Library/Application Support/iMazing/Library`.

1. Delete `Apps.plist.backup`.

1. Open `Apps.plist` in a [Plist](https://en.wikipedia.org/wiki/Property_list) editor. I used (and recommend) [PlistEdit Pro](https://www.fatcatsoftware.com/plisteditpro/), which you can install via brew with `brew install --cask plistedit-pro`.

1. We need to add the Pebble app to this list. To do this, complete the following steps:

   1. Choose an app to duplicate and replace with the Pebble App. This shouldn't risk app data, but you should choose a low-risk app in case something goes wrong (don't duplicate your bank or password manager app!). Remember to choose one marked with a **grey** checkmark, not a **green** checkmark, in iMazing -- check the screenshot you took before to be sure.
   1. Duplicate the app's entry in the plist file. Right click the app entry and select **Duplicate** from the context menu. 
   1. Change the App ID of the duplicate entry to the App ID of the Pebble app (957997620). You don't have to change the other fields, but I changed the name to "Pebble App" and removed most other fields.
   1. Save your changes to the plist.

1. Open iMazing and open the "Manage Apps" screen for your iPhone.

1. You should see a broken app entry with a default graph-paper icon that has the same name as the app you duplicated. Click the cloud-inscribed-with-a-downward-arrow on the right side of the entry to download the app. If you didn't log into your Apple ID before, you'll have to login before you can download the app.

1. Close and reopen iMazing.

1. Click the trash can icon next to the Pebble app to delete it -- unfortunately, the first download is always broken (I told you this was a bit of a hack).

1. Click the cloud-inscribed-with-a-downward-arrow button to download the Pebble app again.

1. Right click on the Pebble app entry and select "Install" to install the Pebble app onto your phone.

1. (Optional, recommended) Right click on the Pebble app entry and select "Export .IPA" to save a copy of the IPA file used to install the app to your device. You now have an IPA file of the delisted app, signed with the original developer account keys, targeting your iPhone's CPU hardware, signed for your specific Apple ID! This is only useful for your Apple ID, and only for a subset of iOS devices. But for your currently-connected iPhone, you can always reinstall this IPA file to install the Pebble app.

1. Follow the [Rebble iOS setup guide](https://help.rebble.io/setup-ios/#2) (starting with step 2) to use Rebble's backend services to download and install watchfaces and Pebble OS updates onto your Pebble.

If you use an Android phone, your life is much easier: find a legitimate APK file for the Android Pebble app, and it should install onto any modern phone. If have a copy, if you can't find a trusted one anywhere else.
