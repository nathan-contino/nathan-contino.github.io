---
title:  "Peter Kovak' *Flash Boys: Not So Fast*"
date:   2018-01-24 11:42:53 -0500
layout: default
categories: techblog
---

Last week, I read Michael Lewis' *Flash Boys*. I was unimpressed. I had quite a few complaints, all of which you can read about in my post from last week. If you're looking for a summary, however, it boils down to this: *Flash Boys* was bad enough that I decided to read a book that is literally just a rebuttal to *Flash Boys* from the perspective of a former high frequency trader -- one of the many that Michael Lewis didn't bother to interview for his book.

<!-- readmore -->

Before reading *Flash Boys*, I had a lot of unanswered questions about high-frequency trading (henceforth referred to as HFT in this post). These questions included: "how do they make their money?", "why is their business legal?".

After reading *Flash Boys*, I had a lot of unanswered questions about high-frequency trading (henceforth referred to as HFT in this post). These questions included: "how do they make their money?", "why is their business legal?", and "why does Michael Lewis feel such a strong need to attack them?". 

After reading *Flash Boys: Not So Fast*, I had a lot of unanswered questions about high-frequency trading (henceforth referred to as HFT in this post). These questions included: "how do they make their money?", "why is their business legal?", "why does Michael Lewis feel such a strong need to attack them?", and "why does Peter Kovak refuse to talk about how the 'bad' HFTs make their money? (as opposed to the 'good' HFTs who seem to make money through efficient market making at large scales)". 

I have a lot of questions. Fortunately, after some independent research and a lot of staring at my ceiling trying to fall asleep, I came up with a few answers.

## How do HFTs make their money? 

Probably a combination of mostly ethically sound ultra-efficient
computationally driven market making (~60% of HFTs) and 40% of
god-knows-what ethically-filthy front-running,
dark-pool-information-harvesting somethingorother.

## Why is HFT legal?

Because market making is actually important for liquidity and stable
markets, so somebody has to do it. It seems like HFTs largely just
displaced overpaid Wall Street fat cats with computers, algorithms, and
programmers who could do the same job at larger scales and lower price
points. But some HFTs seem to be caught up in shady Wall Street
exploitation of clients and data, and it seems like front-running (which
Kovak explains is "impossible" rather unconvincingly) actually does happen
at some scale, whether between markets or in dark pools or whatever. Like
most businesses, HFT is a mix of useful and bad practices with a lot of
grey area. To make matters worse, financial markets are a pretty complex
thing (both because finance is complex and because people try to make it
more complex to bamboozle customers (*cough cough* CDS)). Basically it's a
tough nut to crack, legally speaking.

## Why does Michael Lewis feel such a strong need to attack HFTs?
    
This is probably the thing I'm most curious about when it comes to *Flash Boys*. As one of my favorite finance/tech writers (and, technically, my coworker) Matt Levine says: 

> In my alternative Michael Lewis story, the smart young whippersnappers
> build high-frequency trading firms that undercut big banks'
> gut-instinct-driven market making with tighter spreads and
> cheaper trading costs.

That is, Michael Lewis has made his career -- *Moneyball*, *The Big Short*, *Liar's Poker*, etc. -- by, for the most part, writing focus pieces on individuals who rise above the alpha jock status quo of an industry using brains, math, and statistics. His protagonists tend to use these advantages to disrupt industries much like HFTs disrupted stock exchanges and market makers in the naughties. So why doesn't Michael Lewis write a story glorifying HFTs? As far as I can tell, nobody knows. Maybe Lewis got tired of writing underdog stories. Or maybe he really hates computers. Maybe one of those "bad" HFTs was caught messing with some of his investments. My head-canon on the subject is that Lewis tried to write the story behind HFTs, but they were all so busy writing code and disrupting markets that none of them would talk to him. Then Lewis got upset, grumbled "nobody ignores Michael Lewis!" and wrote Flash Boys over a weekend while angrily guzzling scotch. At least, that would make most of the issues in *Flash Boys* make a lot more sense.

So what did I learn from this experience? Basically, I put too much trust in authors. I'm used to college textbooks, written by masters of a field, where I can take most statements at face value. But in the larger world of nonfiction writing, that's not a wise idea -- plenty of authors, including Lewis and Kovak, pad their pages with spurious or even outright ridiculous claims. These statements can seem reasonable enough in the spur of the moment, but in retrospect are obviously quite silly. I'll use a personal favorite from *Flash Boys* (that, to my great pleasure, Kovak also caught and makes fun of in *Flash Boys: Not So Fast*):

> Over several hours he watched the price of the fund on his Bloomberg
> terminal. It was midnight in China, nothing was happening, and the ETF’s
> price didn’t budge. He then clicked the Buy button on his online brokerage
> account screen, and the price on the Bloomberg screen jumped. Most people
> who used online brokerage accounts didn’t have Bloomberg terminals that
> enabled them to monitor the market in something close to real time. Most
> investors never would know what happened in the market after they pressed
> the Buy button. “I hadn’t even hit Execute,” says the hedge fund president.
> “I hadn’t done anything but put in a ticker symbol and a quantity to buy.
> And the market popped.

This is literally one of the craziest claims I've ever read in a book that claims to be nonfiction. This is the only quote I need to be convinced that Lewis has no clue how computers work. He claims here that HFTs are somehow able to predict large orders *before they ever leave their owner's computer*. Is Lewis claiming that HFTs are clairvoyants? Perhaps, more realistically, they've installed keyloggers on the computers of this hedge fund? Or maybe Bloomberg is monitoring what this hedge fund president types in -- before he hits *Execute* and decided to front-run their client (as someone who works for Bloomberg, I can verify that we probably don't do this). There is no logical explanation for this example -- it simply makes no sense. And if Lewis misunderstands his subject matter this dramatically, I don't want to know what else he got wrong in his book.

Anyway, if you read (and enjoyed) *Flash Boys* any time in the past few years, I suggest you go back and read it with a grain of salt. This isn't the only crazy claim in the book -- it's just my favorite. Try to find your own outrageous errors -- it's like a fun game! As for me, while Lewis didn't teach me anything useful about the stock market or computerized trading in *Flash Boys*, he at least taught me one valuable lesson: don't believe authors just because they seem confident and knowledgable. Even the smartest people tend to bend the truth once or twice in tens of thousands of words.
