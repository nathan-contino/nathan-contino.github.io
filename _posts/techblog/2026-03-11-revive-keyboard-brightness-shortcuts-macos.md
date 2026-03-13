---
title:  "Revive Single-Key Keyboard Brightness Shortcuts on macOS"
date:   2026-03-11 15:13:13 -0500
layout: default
categories: techblog
---

Do you use a Macbook or an Apple Keyboard with backlighting? Was your keyboard made after 2016?

Take a look at your keyboard. What the hell are the magnifying glass and microphone keys?

I miss my old dedicated keyboard brightness keys. Here's how to bring 'em back.

<!-- readmore -->

If you've been using Macs for over a decade, you might remember when those keys looked like this:

{% include figure.html url="2026_03_11/2015mbp.webp" description="the 2015 macbook pro: note the dedicated keyboard brightness keys" %}

Today, we're faced with this:

{% include figure.html url="2026_03_11/2025mbp.webp" description="the 2025 macbook pro: note the dedicated keyboard brightness keys" %}

Apple has always struggled to fill the F keys row with useful functions. I know Dashboard has fans, and presumably some people still use the Exposé key, but motion gestures have always suited me better for those tasks. Thankfully the Dashboard/Launcher key is dead these days. But now we have... a key dedicated to Spotlight and a key dedicated to Dictation?

**CMD** + **space** is incredibly easy to hit and remember for launching Spotlight. I simply don't need a dedicated key for Spotlight when I have this shortcut.

I don't use Dictation. I don't enjoy talking to machines. (Dictation fans: feel free to disagree, I'm sure it's a great feature for some of you!)

I'll allow that the moon icon is theoretically useful, even if I don't use Focus modes on my Mac. But what if we could bring back the old 2015-era keyboard brightness controls instead of these useless Dictation and Spotlight keys?

Fortunately that's quite easy to do, and you don't need any third-party software to do it.

1. Create a LaunchAgent that uses Apple's built-in Human Interface Devices to remap the keys using the commands below:

   1. Create a `LaunchAgents` directory for your user profile, if you don't already have one:
      ```zsh
      mkdir -p ~/Library/LaunchAgents
      ```
   1. Write a Property List (`plist`) that maps source ("Src") keys to destination ("Dst") keys by setting a property with Apple's `hidutil`:
      * F5 (51539608097 in decimal) to `illumination_down` (1099511627785 in decimal)
      * F6 (51539607759 in decimal) to `illumination_up` (1099511627784 in decimal)

      ```zsh
      defaults write ~/Library/LaunchAgents/com.local.KeyRemapping.plist '{
         "Label": "com.local.KeyRemapping",
         "ProgramArguments": [
            "/usr/bin/hidutil", "property", "--set",
            "{\"UserKeyMapping\":[{\"HIDKeyboardModifierMappingSrc\":51539608097,\"HIDKeyboardModifierMappingDst\":1099511627785},{\"HIDKeyboardModifierMappingSrc\":51539607759,\"HIDKeyboardModifierMappingDst\":1099511627784}]}"
         ],
         "RunAtLoad": true,
         "LimitLoadToSessionType": "Aqua"
      }'
      ```
      Those mapping values are a lot less hideous in hexadecimal, but using `defaults write` forces us to write them in decimal instead. `RunAtLoad` ensures that this command runs every time you load a user session -- typically, when you first login after shutting down your computer.

1. Unload the old keymappings, if you have any:

   ```zsh
   launchctl unload ~/Library/LaunchAgents/com.local.KeyRemapping.plist 2>/dev/null
   ```

1. Load your new keymapping:

   ```zsh
   launchctl load ~/Library/LaunchAgents/com.local.KeyRemapping.plist
   ```

Hit your magnifying glass and microphone keys, and you should see the keyboard brightness change indicator pop up on your screen. And, of course, your keyboard backlight will change brightness. You won't need to ever change these settings again, unless Apple decides to remap the keys in the future or you reinstall macOS from scratch.

It's not _quite_ the same as having properly-labeled dedicated keys. They're not even the exact same keys -- this uses F4 and F5 instead of F5 and F6, so we can keep the vaguely-useful Focus key around while putting the keyboard brightness keys side-by-side. But as someone who misses the ability to change your keyboard brightness with a single click, I'll take it.
