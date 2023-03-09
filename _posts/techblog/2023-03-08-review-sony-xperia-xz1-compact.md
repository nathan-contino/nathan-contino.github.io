---
title:  "Review: Sony Xperia XZ1 Compact"
date:   2023-03-08 13:17:53 -0500
layout: default
categories: techblog
---

I recently switched to a "new" smartphone. This post explains why and how.

<!-- readmore -->

## Background

Since 2016, I've used an [iPhone SE](https://www.theverge.com/2016/3/25/11302968/apple-iphone-se-review) as my one-and-only smartphone. If you aren't familiar with it, it looks almost exactly the same as the iPhone 5S. It has a 4" screen. It fits comfortably in my hand. It only has 64GB of storage. It has a fingerprint sensor, a SIM card slot, cameras, and not much else. The battery is decent -- it lasts about a day of normal use -- but when I travel it can drain pretty fast, especially if I use GPS for a prolonged period of time.

Fortunately, Apple has continued to update the phone to the latest version of iOS every year for several years. Battery replacements are cheap ($30) and pretty easy to do myself. Recent phones outperform the SE's processing power... but honestly, the SE is plenty for my needs: reading a few forums in my browser, messaging friends, managing passwords and authentication tokens, navigating, and taking the occasional photo. It fits in my pocket easily, even when I exercise, and I can use it with one hand.

Unfortunately, Apple stopped updating iOS for the 2016 SE at the end of 2022. It was a good long run, but since devices [miss crucial security updates once Apple stops giving them the latest version of iOS](https://support.apple.com/guide/deployment/about-software-updates-depc4c80847a/web) and I've already completed 3 (necessary) battery replacements, I decided I'd hit the end of the line.

The question was: where do I go from here?

## Requirements

I have very basic needs for a smartphone:

- usable with one hand
- pocketable while I run or bike or walk
- fingerprint sensor
- headphone jack
- SIM card slot
- supports ad and annoyance blocking on the web
- enough battery to get me through a busy day
- ample offline storage for music
- decent camera
- definitely less than $1000, preferably under $500

Notably, I could not care less about battery-draining overhyped 5G. Check back in 5 years when I decide to upgrade phones again.

## Really Takes the I out of iPhone

I've used iPhones since I got my very first smartphone. I love well-crafted iOS apps like Narwhal and NetNewsWire. But when I created this list, I realized very quickly that an iPhone was just no longer a possibility for me based on my preferences. In fact, the most recently released iPhones fail all but the last 4 criteria, and barely scrape through the last 3!

I considered the Mini iPhone models. But they are too large, compromise too many essential features (headphone jack and fingerprint sensor), and too expensive to acquire with decent amounts of internal storage.

## More Like "Candroid"

{% include figure.html url="phone/phonesizes.png" description="My old phone, size compared to a few contemporary options." %}

There aren't many Android phones out there still made with headphone jacks. The two most notable exceptions? Google's Pixel "a" series (until the most recent 6a), ASUS's Zenfone series, and Sony's Xperia series.

Meg has a Pixel 4a. It's larger than I'd like, but better sized than just about every other phone on the market today. Unfortunately, the Pixel distribution of Android is full of "smart" features like always-listening assistants, pushy advertising feeds, and unremovable Google search bars. I don't care to use those features, and they constantly drain your battery, even when you don't use them. Add in the extremely limited storage in the 4a with no possibility of SD card expansion, and I just couldn't justify the jump. 

The more recent 5a and 6a are significantly larger than the 4a, and the 6a has even done away with the headphone jack. Clearly an evolutionary dead end for me.

ASUS's latest Zenfone models show some promise: a headphone jack, a side-mounted fingerprint sensor, a nice camera, a relatively-small-by-today's-standards size. But it's still too large, too expensive, and doesn't have enough internal storage to easily store music and photos without an SD card slot.

The disappointment of Pixel's A series and the Zenfone models led me to look at Sony's models a bit closer. They tick a lot of boxes: fingerprint sensor, SD card slot, headphone jack, good battery life, great screen, great camera. The recent Sony models are all outrageously tall: the smallest in recent memory is a full 6" tall. That's 50% taller than my iPhone SE, and I can barely reach the top of *that* screen. Prices aren't great either; the flagship models cost a staggering $1500.

## Memories of the Past

So I looked into the past. Has Sony (or any other Android OEM) released a reasonably sized phone that ticks my boxes in recent years? Back in the early 2010s, plenty of phones met my criteria. But they don't have the cellular bands required to get a decent LTE signal on today's phone networks, which have slowly rolled out new LTE bands since those phones were released. I'd also prefer to get a phone that can run the latest version of Android, or at least a custom ROM like LineageOS.

## XZ1 Compact

{% include figure.html url="phone/succulent.jpg" description="Bask in the glory of the XZ1C." %}

After much hand-wringing and searching, I found it. The Sony Xperia XZ1 Compact. It has:

- almost the same physical dimensions as the iPhone SE
- unofficial LineageOS support up to Android 13
- a top-of-the-line CPU that still runs great
- a fingerprint sensor
- only 32GB of internal storage, but support for up to 400GB of microSD storage
- most of the LTE bands required for modern T-Mobile LTE service
- VoLTE (voice-over-LTE) support
- a decent camera, with a useful set of manual mode features
- IP68 waterproofing
- surprisingly loud and nice sounding dual front-facing speakers
- a *notification LED*
- mint condition availability for less than $200

At some point, I'll have to upgrade as apps stop supporting older versions of Android. But that should take a long time -- most apps still support Android 5! Until then, I can benefit from LineageOS updates, SD card storage, a headphone jack, the latest Firefox releases, the wide variety of open source apps available on F-Droid, and astonishingly good battery life. All for about the same cost as two iPhone 14 battery replacements.

## My Setup

{% include figure.html url="phone/XZ1vsSE.jpg" description="Old phone vs. new phone." %}

- I immediately set up [LineageOS 20](https://forum.xda-developers.com/t/rom-lineageos-20-0-unofficial-1-1-2023-01-08.4500913/) for the latest Android OS and security updates. *Note: if you plan on following in my footsteps, consider [backing up your unique Sony DRM keys](https://forum.xda-developers.com/t/xz1c-xz1-xzp-temp-root-exploit-to-backup-drm-keys-implemented.3795510/page-88#post-88023479) so that you can return to stock firmware with full camera functionality.*

- Alternatively, you could use the latest version of the stock Android OS. You won't get the latest firmware security updates, but Google still updates the things that really matter, like Webview and Google Play Services. You're more at risk if someone physically hacks your phone *in person*, but a sufficiently motivated phsyical hacker is just going to [threaten you with a hammer]() anyway. *Note: if you live in the USA, you'll have to flash a small portion of the UK firmware to make the fingerprint sensor work.*

- I use [F-Droid](https://f-droid.org/en/) for all the software I possibly can. F-Droid is a free and open source app store; that is, it's kind of like Google Play or Apple's App Store, if everything was free and created by hobbyists who just want to make other people's lives easier, instead of bamboozling people into subscriptions or [enshittification](https://doctorow.medium.com/tiktoks-enshittification-bb3f5df91979). It doesn't have everything, but it has apps for most basic stuff on Android.

- I highly recommend the [Simple Mobile Tools](https://www.simplemobiletools.com/) family of apps -- dialer, launcher, keyboard, messenger, etc. They're rock-solid, very small, frequently updated, efficient, and a great starting point when you realize you don't want to use the default app for a given purpose on Android.

- A notable exception to the Simple suite: I use [Openboard](https://f-droid.org/packages/org.dslul.openboard.inputmethod.latin/) because Simple Keyboard just... didn't work that well with my hands, I guess?

- Consider using [Netguard](https://f-droid.org/en/packages/eu.faircode.netguard/) to fully control each individual app's ability to communicate with the internet. Your file manager probably doesn't need network access.

- [Fennec](https://f-droid.org/packages/org.mozilla.fennec_fdroid/) is an excellent F-Droid updated version of Firefox with Mozilla telemetry disabled. You can use nearly any Firefox add-on, as long as you [add it to a collection and hook up that collection to your Fennec instance's app list in the Fennec developer settings](https://support.mozilla.org/en-US/kb/extended-add-support). A silly set of hoops to jump through, but a proper ad-blocker and other convenience extensions make the mobile web actually usable (and secure) again. Huzzah!

- I use Pocket Casts for podcast listening.

- I use Finamp to listen to music on my personal Jellyfin server.

- I use Wireguard to communicate with my personal music and RSS servers when I'm away from home.

- I use [FeedMe](https://play.google.com/store/apps/details?id=com.seazon.feedme&gl=US) to read RSS feeds managed on my home FreshRSS instance.

- [FairEmail](https://f-droid.org/en/packages/eu.faircode.email/) has a significant learning curve as you set up the UI and accounts, but has worked *excellently* since then.

- [Signal](https://signal.org/#signal) is the most secure messaging app I have. I only wish I could convince anyone else to actually use it.

- [Nekogram X](https://f-droid.org/en/packages/nekox.messenger/) is an open source distribution of Telegram with less telemetry and some helpful options added on top.

- I use Google Maps as a necessary evil of address finding, and Osmand (with 10GB of downloaded detailed US maps) for bicycle touring and mountain biking navigation.

- Bitwarden has an Android app that's even better than their iOS app.

- My [Pebble](https://en.wikipedia.org/wiki/Pebble_(watch)) works great with the [Rebble](https://rebble.io/) workaround for device management. Thankfully, the Android pebble app still exists on the app store, and even if it didn't, I could always sideload it. Sadly, the Pebble app has been completely expunged from the Apple App Store, which meant my perfectly functional Pebble Time Round was a pain to manage when I lost my last functional version of the app. Shame on Apple for not allowing easy sideloading. I'm sure it contributes to plenty of unnecessary e-waste.

- I use the [Buzzkill](https://play.google.com/store/apps/details?id=com.samruston.buzzkill) app for custom vibration patterns, since I can't set any in the Settings app. Well worth the $1.99, thank you Sam Ruston. I can confirm that the design of the app is very very modern Android, which looks great, if slightly silly on older versions of Android.

## Conclusion

It's hard to find a small phone these days. Fortunately, Android's modular and open design means that old Android phones are still usable several years on. I'll keep my eye out for new small Android phones. But for at least the next couple of years, my "new" phone should easily cover my simple use cases. In the meantime, I'm really enjoying an OS that isn't quite as locked-down as iOS. If you're also feeling trapped by Apple's scumbag moves, like removing the headphone jack, the fingerprint sensor, and now the SIM card slot, I highly recommend trying an older Android phone. They can be picked up for pretty cheap, and after you overcome the basic learning curve, you might just find that you prefer a little more breathing room than Apple provides.