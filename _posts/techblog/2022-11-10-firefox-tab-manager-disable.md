---
title:  "Disable the Firefox Tab Manager"
date:   2022-11-10 14:26:53 -0500
layout: default
categories: techblog
---

Did you recently update to Firefox (or Librewolf) 106?

Do you use Tree Style Tabs, and hide the normal tab bar?

Did you notice an inverted caret (`ˇ`) that restored the height pixels of the hidden tab bar?
(alt text for this caret labels it "list all tabs")

Did it annoy you that you can't remove that button, even in the "customize toolbar" view?

If this is the case, visit your browser's [about:config](about:config) configuration and update the following value to `false`:

```
browser.tabs.tabmanager.enabled
```

Restart your browser.

Voila! The "tab manager" inverted caret (also known as a [háček](https://en.wiktionary.org/wiki/h%C3%A1%C4%8Dek#English)) should disappear.
