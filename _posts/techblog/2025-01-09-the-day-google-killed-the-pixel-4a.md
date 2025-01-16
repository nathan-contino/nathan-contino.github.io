---
title:  "The Day Google Killed the Pixel 4a"
date:   2025-01-09 05:13:13 -0500
layout: default
categories: techblog
---

  
<p>
</p>

> **UPDATE**:
> 
> On 16 January 2024, my phone downloaded the update and prompted me to install it via a notification, despite disabling automatic update checks in Developer Options. As far as I know, there is no way to disable checks (and automatic downloads!) for this update. Without an option to disable the automatic update in the OS settings, you're stuck with the following options:
> 
> * install a custom ROM, like GrapheneOS or LineageOS
> * continue using the stock software, but block the update at the DNS level with a pi.hole, nextDNS, or similar
> 
> To block the updates, block the entire `googlezip.net` domain. Technically you can just block `ota.googlezip.net`, `ota-cache1.googlezip.net`, and `ota-cache2.googlezip.net`, but if you use nextDNS or pi.hole you can only block the whole domain.
> 
> When your phone inevitably decides to install the update _anyway_ (because VPNs on Android [leak traffic](https://mullvad.net/en/blog/2022/10/10/android-leaks-connectivity-check-traffic)), go to **Settings** > **Apps** > **All Apps** > **Google Play Services** > **Storage and cache** > **Manage Space** and click the **Clear all data** button to delete all data, including the update file. Fortunately, it seems that you at least have to click the notification to actually install the update!

Many of us use phones that are a couple of years out of date. As the phone industry insists on removing useful features while at the same time inflating new phones to a seeming minimum of $500, older phones have become increasingly attractive. Using an older phone is good for your wallet and good for the environment (the most environmentally-friendly phone purchase is no new phone purchase), but not good for security, since you likely miss out on OS security updates.

In 2023, Google abandoned the Pixel 4a, deciding to no longer publish security updates for the still-popular phone (as originally announced, in all fairness). Many of us kept using the 4a because it ticks a lot of boxes that no modern phone ticks (the 4a is smaller than any Pixel phone since, has a very fast rear-mounted fingerprint reader, and has a headphone jack), and it still works quite well.

In 2024, Google left us alone. Many people explored custom ROMs like LineageOS and GrapheneOS to keep the security updates flowing, despite the fact that those custom ROMS have no way to fix firmware vulnerabilities. It was sad to see a great phone slowly sink into obsolescence. But through the community efforts of a lot of volunteers, custom ROMs have kept the phone alive. Of course, only a small subset of people are comfortable or even able to install custom ROMs, so plenty of people -- the vast majority, in fact -- kept using the stock firmware. Sure, we don't get OS security updates. But we can update our browsers, our apps, Google Play Services, and just about anything else on the device, so it's not like we're walking around completely exposed. Life was good.

In 2025, Google killed the Pixel 4a.

<!-- readmore -->

**TL;DR**: In 2025, Google pushed an update for an unsupported phone that broke battery percentage reporting, limits charging speed to 1A (!!!), adds obnoxious warnings to the UI, and permanently limited the maximum charge capacity of the battery. Many users are reporting serious battery drain and capacity issues after the update, to the point where their phones are unusable.

* Even using developer options, you can't permanently stave off this update; you will eventually start getting notifications to download and install it, and you will eventually accidentally grant it permission to install when you're sleepy or not 100%.
* Installing a new battery may or may not fix the issues caused by this update; nobody has successfully eliminated all of the warnings and issues yet, even people with relatively recently replaced batteries.
* Google may or may not pay for a new battery installation; it's unclear what kind of costs you might end up on the hook for depending on the phone repair shop you go to.
* Google might give you $50 through a third party program that likely gets more than $50 of valuable personal data (including your social security number) out of you, and will likely take $50 of time and effort to redeem.
* The only way to fix this issue is custom ROMs, which Google has been gradually squeezing out of the ecosystem entirely thanks to services like the [Play Integrity API](https://developer.android.com/google/play/integrity/overview), which prevents essential apps like banking apps from working at all on custom ROMs.

And remember: _most users lack the technical ability to install custom ROMs!_

It all started with an email on 6 January 2025:

> Hi Nate
>
> We wanted to let you know about an upcoming software update for your Pixel 4a that will affect the overall performance and stability of its battery. Pixel phones, like other smartphones, use [rechargeable lithium-ion batteries](https://support.google.com/pixelphone/answer/15738128?p=battery-health&rd=1) that, over time, may experience performance, capacity, or runtime degradation.
>
> In the coming days, your Pixel 4a will receive an automatic software update to Android 13 that introduces new battery management features to improve the stability of the battery. This update will reduce your battery’s runtime and charging performance.
>
> To address this, we’re providing some [options](https://support.google.com/pixelphone/workflow/15642495?p=pixel4a_battery_help&rd=1) to consider. Please take a look and choose which one works best for you.
>
> More details related to this change are available [here](https://support.google.com/pixelphone/answer/15701861?p=pixel4a_battery&rd=1). Eligibility criteria and other terms will apply.
>
> Thank you,
>
> Pixel team

This came as a bit of a shock to many 4a owners, some of whom have been using their phones since August 2020 without any battery issues. I know my phone has been in constant use since late 2020, though previously my partner used it, not me. Neither of us ever had any complaints about battery life, though it has obviously diminished over the last 3.5 years.

Reading more information revealed that, just two days after the announcement, Google planned to release an update that would "reduce in battery capacity and charging performance"... a phone that Google doesn't even support with security updates any more. A surprise to be sure. Not a welcome one, especially since the [linked article](https://support.google.com/pixelphone/answer/15701861?p=pixel4a_battery&rd=1) is full of lengthy nonspecific corporate weasel-words that make _me_, a very technical communicator and developer, somehow less certain about the safety of my phone.

Fast forward to 8 January 2025. The update drops. Immediately, screams of cosmic horror (more than usual) issue from online communities of Pixel 4a owners:

* [many phones are stuck reporting 100% battery forever, dropping dead without warning](https://old.reddit.com/r/Pixel4a/comments/1hwx9m4/used_my_4a_for_20_minutes_and_its_still_at_100/)

* [many users are reporting that their battery lasts significantly less than it used to](https://old.reddit.com/r/Pixel4a/comments/1hx10zq/final_psa_do_not_update_to_the_latest_battery/); **Update**: many previously functional phones are draining up to 1% per minute after the update, and frequently get "stuck" at random battery percentages _other_ than 100% 

* [charging has been permanently limited to **1A**](https://old.reddit.com/r/Pixel4a/comments/1hwqvmb/warning_do_not_uodate_i_am_ineligible_and_they/)

* [the update added a giant non-removable warning to the Battery page in Settings](https://old.reddit.com/r/Pixel4a/comments/1hwtupc/battery_info_before_and_after_the_update/):

{% include figure.html url="2025_01_09/settings.png" description="annoying but at least out of the way" %}

* the update added a giant warning notification in the notifications tray:

{% include figure.html url="2025_01_09/notification.png" description="ugly permanent notification" %}

* the update permanently marked the battery icon in the top right with an exclamation point:

{% include figure.html url="2025_01_09/exclamation.png" description="seems subtle, but if you play a lot of RPGs this will constantly make you think you have a pending quest" %}

* users trying to redeem their $50 credit with Google are being forced to submit significant amounts of personal information to [Payoneer](https://old.reddit.com/r/Pixel4a/comments/1hwkhj5/what_is_this_payoneer_thing/), a highly legitimate trustworthy corporation that definitely won't sell or abuse my personal data or lose it in a leak eventually; **Update**: Payoneer requires a social security number. You should not give it to them. If you're not a US citizen, this also means that you have _no way_ to redeem the $50 offer.

The icing on the cake? The [only way to disable OTA is via developer options](https://old.reddit.com/r/Pixel4a/comments/1hxa9s0/forced_to_do_the_new_update/). Which is fine for me, as I already take this precaution on many devices to vet updates for serious errors before I install them. Unfortunately it isn't something I can easily communicate to less technical folks I know who still use the 4a.

Of course, you can also permanently save yourself from these issues by switching to a custom ROM. Also of course, most users aren't technical enough to do that, and they'll instead be forced to update to a new phone and throw away their 4a.

A small number of users are likely going to go to repair stores to redeem the supposed "free battery replacement". Unfortunately I don't live close enough to a repair store to take advantage of that right now, and neither I nor any other reasonable person who uses 2FA for anything can go without my phone for _two weeks_ for a mail-in repair. Hopefully replacing the battery will fix the issue, but some users with aftermarket batteries from iFixit and the like have already reported that the notification and battery warning remain.

It's also uncertain how this repair will work with third-party stores: if the Pixel 4a owner isn't paying them, who is? Google, presumably? What happens if they -- and they likely will -- crack the screen prying it off of the 4a to access the battery? Will my screen be replaced for free as well? Will Google compensate them for that extra cost? How do I know, or how does any repair shop know, what repair programs exist and where they can be redeemed?

I don't know. Nobody seems to. All I know is that pretty much anybody who was happily using the not-quite 3.5 year old Pixel 4a up until this point, who doesn't pay attention to online phone enthusiast communities, is likely now stuck with an annoying brick that will work significantly worse than it did before, since the battery gauge no longer works.

{% include figure.html url="2025_01_09/dead.png" description="4a is kill" %}

And I don't think that's OK.

<details><summary><strong>Full text of the "Pixel 4a Battery Performance Program" page, in case Google changes it:</strong></summary>

<blockquote>
Pixel 4a Battery Performance Program
<p></p>
January 6, 2025
<p></p>
Summary of program
<p></p>
Google has determined that certain Pixel 4a phones require a software update to improve the stability of their battery’s performance. An automatic update to Android 13 will roll out to all Pixel 4a devices starting January 8, 2025. For some devices (“Impacted Devices”), the software update reduces available battery capacity and impacts charging performance. We want our customers to have the best possible experience with their products, so users of these Impacted Devices are eligible for an appeasement from Google. Not all Pixel 4a devices are impacted by the reduction in battery capacity and charging performance, therefore if your device is not impacted the battery will perform the same as before, and you will not be eligible for an appeasement. You can find out if your device is eligible here.
Background
<p></p>
Pixel phones, like other smartphones on the market, use rechargeable lithium-ion batteries—and these batteries are consumable components that may experience performance, capacity, or runtime degradation as they are used. That’s why we recommend that you consider replacing your battery if you notice a decrease in your battery’s capacity or runtime. 
Changes coming to your device's battery management
<p></p>
From January 8, 2025, Pixel 4a devices will receive an automatic software update to Android 13. After the software update is downloaded, your device will restart automatically to apply the update. For some devices (“Impacted Devices”), the update includes new battery management features to improve the stability of your battery’s performance, so the battery may last for shorter periods between charges. Users of Impacted Devices may also notice other changes, like reduced charging performance or changes to how the battery-level indicator on your phone shows your battery capacity. 
<p></p>
If you own a Pixel 4a, you can manually download the latest software update from January 8, 2025. Otherwise, the software update will be automatically downloaded to your device when the software is released and your device is charged and connected to the internet. 
<p></p>
Not all Pixel 4a devices will experience these changes, but we want to help affected users in this situation. Impacted Devices are eligible for an appeasement. You can check your appeasement eligibility here. The software update does not impact any other Pixel phone models, such as Pixel 4a 5G.
Free battery replacement and other options for individual end-user owners of Impacted Devices
<p></p>
If your Pixel 4a is an Impacted Device, you may be eligible for a free battery replacement. You can visit our registration page to find a battery replacement option near you.
<p></p>
Battery replacement is available at walk-in repair centers in the United States, Canada, United Kingdom, Germany, Singapore, and India. Mail-in repair is also available for customers in the United States. Battery replacement is only available in eligible locations and while battery supplies last. For more details about eligibility, review criteria here.
<p></p>
If battery replacement is not convenient or you would like to explore other options, you can also visit our registration page to claim one of the other appeasement options:
<p></p>
<ul>
<li> $50 USD (or local equivalent) payment. </li>
<li> $100 USD (or local equivalent) Google hardware discount code applicable towards the purchase of another Pixel phone on the Google Store (as available). </li>
</ul>
<p></p>
Terms and conditions
<p></p>
Individual end users will have one year from the initial software release on January 8, 2025 to register and make a choice of one of the three appeasement options, which may vary by country. After January 8, 2026, these appeasement options will no longer be available. Payment and Google hardware discount code amounts may vary based on the daily exchange rate, at the time of conversion. The final amount will be calculated using the exchange rate in effect at the time you select your appeasement option.
<p></p>
Note: Only some Pixel 4a devices are impacted by the reduced battery capacity and eligible for appeasements - you can check your eligibility here. 
<p></p>
The options above are available exclusively for individual end-user consumers of Impacted Devices only (retailers, wholesalers, or owners of bulk devices other than for personal use are not eligible) that were purchased by or on behalf of that individual consumer prior to January 6, 2025. There is one appeasement per device after eligibility is confirmed. Proof of ownership may be required when claiming your appeasement. Appeasement options may not be available in all countries, as required by law. 
<p></p>
This Pixel 4a Battery Performance Program provides rights separate to rights provided to you by statutory law in the country where you purchased the device. Those statutory rights are in addition to, and not instead of or restricted by, this program.
<p></p>
Additional details regarding this program are provided in the frequently asked questions below.
<p></p>
Frequently asked questions
<p></p>
What should I expect if my Pixel 4a battery has been impacted?  Can I continue to use my Pixel 4a?
<p></p>
Yes, you can continue to use your Pixel 4a as before. After the software update is applied, Impacted Devices will experience improved stability of battery performance, but battery capacity will be reduced, which may affect runtime. You may also notice other changes, like reduced charging performance or changes to how the battery-level indicator on your phone shows your battery capacity.
<p></p>
How do I know if I have Pixel 4a?
<p></p>
Find your phone model in Settings About phone Model. Remember that not all Pixel 4a devices are impacted by the battery health features and eligible for appeasement. You can confirm here if your device is impacted and if you are eligible for an appeasement option.
<p></p>
How do I claim my appeasement?
<p></p>
To claim an appeasement for your Impacted Device, visit our registration page to begin the process. After you complete the registration process, you’ll be given a list of available options for your country and estimated time for fulfillment. 
<p></p>
The options may vary depending on country, and will only be available for individual end users until January 8, 2026. Terms and conditions apply.
<p></p>
How do I obtain a battery replacement?
<p></p>
If you choose to request one free battery replacement, eligible Pixel 4a devices can be taken to walk-in repair centers in the United States, Canada, United Kingdom, Germany, Singapore and India. Visit our registration page and after selecting the Repair option, you can find a service location near you. We recommend that you contact the walk-in repair location ahead of time and schedule an appointment. If you are in the United States, mail-in repair may also be available. We will send you a special box for mail-in repair if your device qualifies. Battery replacement is only available at eligible locations and only while battery supplies last.
<p></p>
For more information and to register for a battery replacement, visit our registration page.
<p></p>
About the battery replacement program
<p></p>
The battery replacement program provides one free battery replacement for eligible Pixel 4a devices following an initial eligibility check and physical inspection of your device. Initial eligibility is determined based on whether the phone is an Impacted Device. To find out if your Pixel 4a phone is eligible visit our registration page. 
<p></p>
If your Pixel 4a is eligible and you registered for a battery replacement, you can choose mail-in repair in the United States only, or take it to a walk-in repair location in the United States, Canada, United Kingdom, Germany, Singapore, and India. For more information on our repair partners, visit our registration page. 
<p></p>
Even if an Impacted Device is eligible for a free battery replacement, upon receipt, a physical inspection of your phone is conducted before starting the repair to verify that the phone is in suitable condition for repair. 
<p></p>
Important: If your Pixel 4a device exhibits other forms of damage, like liquid damage, exposure to sharp objects, or excessive force, it may not qualify for a free battery replacement. If your phone has out-of-warranty damage, such as display or coverglass cracks, then there may be a fee to repair your phone. Before we start any repairs, we'll provide a cost estimate. You then have the option to proceed with the repair or have your device returned to you.
<p></p>
If your Impacted Device is not eligible for the free battery replacement program following physical inspection, you will be redirected to select a different appeasement option.
<p></p>
Battery replacement doesn't extend the standard warranty coverage of your Pixel 4a. Your warranty will expire on the date it was originally set to expire, regardless of the battery replacement.
<p></p>
Tip: Before you bring in your phone or mail-in for repair, back up your data.
<p></p>
I have a Pixel 4a that I am no longer using, can I get the appeasement offer?
<p></p>
Yes, appeasement options are available for individual end-user owners of Impacted Devices (subject to terms and conditions).
<p></p>
Can I take my Pixel 4a device back to the carrier or retailer where I bought it? 
<p></p>
No. The appeasement options are offered by Google directly to individual end-user owners of Impacted Devices. To claim an appeasement, visit our registration page to begin the process. 
<p></p>
My Pixel 4a is working normally. Do I need to stop using it?
<p></p>
You do not need to stop using your Pixel 4a. Your device will receive the software update from January 8, 2025, or you can manually download the update. 
<p></p>
I haven’t had any issues with my Pixel 4a. Can I take it on a plane or put it in my checked luggage?
<p></p>
Follow local transportation guidance as usual. In general, rechargeable lithium-ion batteries are allowed in carry-on baggage but are prohibited from checked luggage. Please see the FAA’s PackSafe for Passengers webpage for more information.
<p></p>
Can I purchase a new Pixel 4a?
<p></p>
Google is no longer selling Pixel 4a, but you can review our current Pixel portfolio here. 
<p></p>
How do I dispose of my Pixel 4a if I can't return it?
<p></p>
Dispose of your phone, battery, and any accessories in accordance with local regulations. Don't dispose of them in normal household waste. Improper disposal may lead to fire, explosion, and/or other hazards. Don't open, crush, heat above 45°C (113°F), or incinerate. For more information on recycling your phone, visit g.co/pixel/recycle.
<p></p>
What happens to my Pixel 4a after I take the payment or Google hardware discount code appeasement offer? Can I still use it?
<p></p>
You will not be required to return your device. You can continue to use your Pixel 4a or you can dispose of it responsibly. For more information on recycling your phone, visit g.co/pixel/recycle.
<p></p>
Is it safe to charge my Pixel 4a?
<p></p>
Yes, you can continue to charge your Pixel 4a as before. As with all devices, use best practices for battery health and charging. Place your device in a well-ventilated area when charging or in-use. You can find additional safety-related information here or on your Pixel 4a at Settings About phone Safety & regulatory manual. 
<p></p>
Can I continue to request mail-in repairs for my device in the future?
<p></p>
Impacted Devices that qualify and receive a battery replacement will be able to request future mail-in repair service where available. If an Impacted Device claims an appeasement other than a battery replacement, that device will not qualify for future mail-in repair service but can still receive other non-mail in repair services where available.
</blockquote>


</details>