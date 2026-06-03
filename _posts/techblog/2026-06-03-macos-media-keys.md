---
title:  "Use macOS Media Keys for Third-party Apps"
date:   2026-06-03 15:14:13 -0500
layout: default
categories: techblog
---

Do you use an app other than Apple Music to listen to music on your Mac? Personally I use [Feishin](https://feishin.org/), sometimes [TauonMusicBox](https://tauonmusicbox.rocks/) or [Manet](https://tilosoftware.io/manet/).

Perhaps you've experienced the same frustration I've dealt with: sometimes your media keys work to skip, play, and pause. Sometimes they don't. Sometimes they launch Apple Music, right when you're trying to pause your music before a video call!

<!-- readmore -->

To grant full access to media keys on your mac:

1. Open **System Settings**.

1. Navigate to **Privacy & Security**.

1. Open **Media & Apple Music**.

1. Click the **+** button and add each of your music-playing apps (the dialog helpfully opens up the `/Applications folder` after you authenticate).

1. Click the **< (back)** button to navigate back to the **Privacy & Security** menu.

1. Open **Accessibility**.

1. Click the **+** button and add each of your music-playing apps (the dialog helpfully opens up the `/Applications folder` after you authenticate).

Quit and re-open your music apps. In their settings, make sure you enable 'global media hotkeys' (or similar; that's what Feishin labels it).

If Apple Music keeps launching when you hit the media keys, consider installing [noTunes](https://github.com/tombonez/noTunes) to stop that annoying behavior.
