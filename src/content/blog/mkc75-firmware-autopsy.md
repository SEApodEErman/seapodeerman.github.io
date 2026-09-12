---
title: "I Reverse Engineered a Keyboard's Firmware With AI and Nearly Lost My Mind (And $20)"
excerpt: "MyKeyClub shut down and took the MKC75's source code with them. What followed was a firmware autopsy, one extremely confident wrong AI, and a keymap that deletes itself when you look at it."
date: 2026-09-11
tags: ["keyboards", "qmk", "reverse-engineering", "firmware", "llm"]
sample: false
---
## The Setup: A Keyboard, A Corpse of a Company, and A Dumb Idea

> **Disclaimer:** This is not a general guide to reverse-engineering QMK-based keyboards. This is just my experience with a keyboard I own. Other boards may use vendor-specific feature implementations, custom bootloaders, and proprietary wireless/Bluetooth driver stacks, so what worked here may not apply and could possibly brick other keyboards.

I own a keyboard called the MKC75 which is designed by a company called MyKeyClub. When it first launched, people were going crazy about it since it's a CNC'ed aluminum 75% starting at $99. At the time that was practically theft in reverse. I didn't get in during the group buy period since I only started delving into the custom keyboard world around three years ago so I ended up paying closer to $130 for the configuration I went with. Didn't matter. I was happy at the time and it felt really special since it was my first "group buy" keyboard.

Then on October 6th 2025, MyKeyClub just vanished. No announcement. No farewell post. Nothing at all. Website? Down. Discord? Silence. Though most people saw it coming ever since the whole JRIS80 and MKC65 drama where they essentially left people in the dust with unfulfilled orders and no way to refund their hard-earned money. So I stashed it away in my closet, still fully built just unused, collecting dust while I daily drove other boards I picked up over the years.

On September 10th 2026, almost a year after their disappearance, I was struck by a genuinely dumb idea:

> *"Wait. LLMs can do stupidly complex stuff now. Can I just reverse engineer this keyboard's firmware into QMK with the help of LLMs? MKC is never going to provide the source code for their products ever again anyway, since they're gone."*

Because here's the thing, the board is almost certainly running QMK firmware or else there's no way they'd be able to let users edit their keymaps via VIA (see what I did there?). And it wouldn't hurt anyone. In fact it would benefit everyone. People would be able to edit their keymaps as they please and add whatever features they like. The possibilities are limitless.

I started digging and found MyKeyClub's Notion page that still had build guides and troubleshooting steps for all their released products. And most importantly, it had the precompiled firmware binary and the VIA definition `.json` for the MKC75. I downloaded both, dumped them in a folder and prepared myself for a prompt engineering session.

---

## Part 1: This Is Going Great... Until It Wasn't.

I pointed myself at the folder root and fired up Muse Code. The reason I went with this was mainly speed and cost. I was using their Muse Spark 1.3 Contributor model which is extremely cheap with the downside being that Meta will use my prompts and outputs for training which honestly I don't mind. I'm working on an open source project anyway so it's a win for me.

I asked it, very simply: *"Hey, is it possible to reverse engineer a QMK firmware from these files in the folder?"*

And this thing just *zoomed*. No hesitation. It decompiled the binary. It read the VIA json. It started drawing connections between the keymap definitions and what it was pulling out of the compiled code. I watched it work and I was genuinely impressed with how far these LLMs have come especially at that price point. (Okay to be frank, the normal model that doesn't train on your data is priced differently and with other AI labs showing much better cost/performance especially the Chinese models but I went with Muse for the speed anyway.)

Then it asked me to crack the keyboard open to check the PCB, chip markings, available hardware and take pictures of those things. So I grabbed a screwdriver, popped the case, and suddenly I was doing a little forensic examination. There's the STM32 microcontroller, the clock crystal, the hot-swap sockets, the diodes, everything a keyboard PCB needs to function. I took photos like a deranged investigator and fed them back.

The first few interactions went great until... it got stuck.

It asked me: *"Can you check if there's an external EEPROM, or any other information you have that indicates where the user-configured keymap via VIA is stored?"*

And I'm thinking, okay, sure, fair question. And I just answered: "Well... it's gotta be internal flash on the STM32, right? There's no external chip for it, you can check the image I gave you of the PCB backside."

The agent paused. You can almost see it getting confused before blurting out: *"Please check the PCB again. Is there an EEPROM anywhere?"*

I looked, again and again. I think I checked over five times because by then I was genuinely afraid I'd missed something. I hadn't. I told it: "No. There is no EEPROM. There is no external storage chip. It's not there, I've looked at it over five times."

It blurted out the same reply again. At this point I was slightly annoyed but I decided to take a small breather and came up with what I thought was a brilliant plan: use the board's DFU mode to extract the contents of the MCU with and without changes to the keymap from VIA. I told it we were going to compare the flash data and asked it to fetch the dumps for me.

I booted the board into DFU, the agent pulled the dump, then I reinitialized the keyboard and went into VIA to change some keys, booted into DFU again, and the agent fetched it again as expected. It poked around for a bit and then hit me with a very disappointing message:

*"The diff between the two dumps is zero. They're identical."*

Now I know what caused that and I'll tell you later. But at that moment, in that exact second, my brain just went: *ain't no way bro.*

I told the agent this made no sense. And it responded, with full confidence:

*"Oh! The keyboard likely has transient RAM. It wipes everything after a complete power-down."*

You can imagine the face I made. This keyboard had been in my closet for months, unused, collecting dust, yet it still had my keymap from when I set it up ages ago. I said: "Well that's impossible, I've placed this keyboard in my closet for months, unused. How could it store those keymaps in the closet if it has transient RAM?" And this absolute menace of a model looked at me and said:

*"Well, it could have had standby power. Make sure you unplug it or else it could give you the illusion of persistence."*

**IN THE CLOSET!**

**WHY WOULD I PLUG A KEYBOARD I'M NOT USING INTO POWER IN A CLOSET!?**

**WHAT STANDBY POWER? IT WAS IN A DRAWER, NEXT TO MY CLOTHES I'VE NEVER WORN FOR YEARS!**

I then asked it gently since there's no reason to insult an LLM just to avoid being targeted in case AI takes over the world: "If there's no EEPROM, how is it storing the keymap?" And it thought for a while, skimmed through the decompilation a bit and then: "You must have been plugging it in, and standby power—"

"No."

"Standby power gives the—"

"No. It was in a closet."

"But the illusion of—"

"IT WAS IN A CLOSET!"

I crashed out in the terminal in the end. The loop just kept going on and on. This agent was so committed to its gaslighting arc, it was visibly trying to make me doubt my own lived experience of where I stored my keyboard. I almost had an existential crisis over this.

At one point I was so frustrated I was about to nuke the whole thing. Start over. Fresh context. But I hated the idea of losing all the progress I'd made. Thankfully I'd told it to write its findings to a folder as it went, so at least the notes existed somewhere. But I was still pissed, I closed Muse Code and lay on my bed and doomscrolled for a while.

---

## Part 2: A Fresh Pair of Eyes (That Cost Me a Kidney)

After a short dose of brain rot, I decided to boot up Qwen Code and run it on Qwen 3.8 Max with maximum reasoning effort. I knew this was the "I will eat instant noodles for a week" tier of API usage but I was in too deep. I'd already lost an evening to being gaslit about "closet standby power" as if there was some new hidden tech in there and I needed answers.

I typed out my first message and explained everything again, what I'd tried, what Muse found, the binary, the `.json`, the PCB photos, and then the whole stupid standoff. "It kept telling me the flash was empty via DFU and that my keymap persistence was an illusion from standby power. In a closet. For months."

And Qwen just... got it. Immediately. Like it actually sympathized with me before coming out with a short answer: "Okay, that's frustrating, let's actually look at this properly."

And then it did a full decompilation and disassembly of the compiled binary. Not a skim nor a surface read. A proper, line-by-line, "what is this function doing, what does this register touch, why is this block here" deep dive.

And it found the thing. The thing I didn't know. The thing that made me feel like an idiot but also vindicated.

Apparently, when you boot into DFU using the normal method on this board (hold Escape, plug in the cable), **it wipes the keymap.** As a "design choice." The bootloader clears the flash as part of the DFU entry sequence. So that's why Muse read an empty flash during DFU. The keymap wasn't mysteriously gone. It wasn't "transient RAM" nor was it a "standby power illusion." It was right there, saved perfectly in the STM32's internal flash and the act of entering DFU to check on it was the thing that deleted it.

And I don't know why MyKeyClub designed the bootloader to do that. You enter recovery mode and it nukes your settings? What possible reason could you have for that? You know what, fine, whatever. They're gone and they can't explain themselves anyway. I'll just be mildly furious about it in perpetuity.

I sat back. I facepalmed for a solid thirty seconds, then turned back to my monitor.

And okay, that's *partially* on me. I didn't know the DFU entry sequence wiped the storage. But how would I? There's no documentation. The company is *dead*. And by common sense, it shouldn't do that. But if Qwen hadn't gone full forensic on the binary, if it hadn't traced the bootloader initialization routine and noticed the flash-clear call, I would've never figured it out and I'd probably still be stuck in "standby power in the closet" hell to this day.

---

## Part 3: The Last 20%

So now we were going somewhere. Since we knew where the data was stored, it just asked me if it could scaffold the entire QMK source files. I gave it a yes and it worked on it for a solid while. What I got back was the whole QMK keyboard source (though with some bloat) and it kept going back to the disassembled binary to double-check itself as it worked.

The rest was minor, small prompts like the keyboard matrix and layout support etc. But then I asked it to check the VIA `.json` file. After a while.

**It compiled.**

Clean. No errors. A flashable firmware file sitting in my build folder.

And here's where I made a very stupid decision. My original thought process was: "If this bricks the board, it becomes a very expensive paperweight and I might need to design my own PCB. Whatever, let's go." No backup, no nothing. I just flashed it bare. Plugged it in. Hit the bootloader. Pressed Enter on my other board to initialize the flashing procedure.

*(Footnote: Qwen actually did dig into the bootloader at one point and noted that even if the flash got corrupted, the bootloader itself lives in a protected region and wouldn't break. So the board would've survived. But I only found that out after I'd already flashed it. Well, I already did it anyway but it's a good thing it told me that.)*

Once the flashing finished, I watched the keyboard disconnect from DFU and... it booted as if nothing had changed. I did a silent scream in my room, acting like a deranged mime as I yelled "Let's go!!!"

Once I got that settled, I asked it to build a VIA-compatible keymap layer and generate a new `.json` config. Flashed it again and it worked as expected. I opened VIA in the browser and fed it the json. It loaded. I remapped a few keys and tested them, works as expected. And since I was still traumatized by Muse telling me stuff about "transient RAM", I unplugged the keyboard, waited ten seconds and plugged it back in.

Keymap persisted.

No standby power, no closet illusions. Just a keyboard remembering what I told it to.

---

## Part 4: The Bill Arrives and I Feel Physical Pain

Remember how I said Qwen 3.8 Max at maximum reasoning effort was going to cost me a kidney? Well, it was half correct.

I had a budget limit set. Ten dollars, nothing more nor less. But apparently I forgot to enable the "hard stop when budget is exhausted" toggle. So Qwen just kept chugging and cheerfully disassembling the binary, running hypotheses, generating code, writing documentation, while my wallet quietly bled out past the finish line.

The final tally, after everything: the decompilation, the back-and-forth, the hypothesis testing, the compilation fixes, me asking it to write documentation, the VIA `.json` generation, the testing prompts.

**$20.**

That's RM100 in my currency which can basically feed me for an entire week. Twenty, freaking, dollars. For a keyboard firmware that realistically only I would ever care about.

Though it's no one else to blame but myself since I was using the same session for everything and the context just kept piling up, increasing the cost at an exponential rate. And don't forget I was using Max reasoning for all of this when realistically I could've gone back to Muse for the remaining tiny bits.

It's fine, I'll just eat Ice Soup for the rest of the month.

---

## Bonus Round: The RGB Ghost

Oh, one more thing. While Qwen was digging through the binary, it found something hilarious.

There's a full WS2812 RGB controller driver in the firmware. Complete with pin definitions, animation functions, color cycling routines and all. But here's the funny part.

This keyboard **has no RGB.** Only a single light which is the Caps Lock indicator.

My theory is that they originally wanted to create an RGB PCB with QMK since they had three offerings for the PCB:

- A solder/hotswap PCB with no flex cuts but all the options.
- An RGB PCB with flex cuts and a fixed layout.
- A tri-mode PCB with RGB and flex cuts.

But then during release, they ended up creating their own proprietary software for the RGB-equipped PCBs with the RGB code still sitting on the PCBs that don't have them. So it just sat there in every board they sold.

During the source remake, I stripped it off since it's useless dead weight sitting in the code.

---

## So What Now?

The firmware source is sitting in my QMK fork on GitHub. I've already created a pull request though I'm unsure how it'll proceed considering this has basically 90% of the work done via LLMs.

And for the hundreds of people who bought an MKC75 during that group buy (I know a lot of you have probably retired it as a daily driver by now, and fair enough, there's a lot more great budget offerings in this segment), you can now flash proper QMK firmware onto it. Remap and experiment all you want at the firmware level, you're not locked to VIA anymore.

Would I do it again? Highly likely, though there's a growing number of vendors that used to close their source finally sharing their source code these days. I wouldn't skip Muse though, it got me 80% of the way there and using the contributor version meant I wasn't bleeding money for that stretch.

But this whole experience gave me one thing: sometimes when you're stuck and the tool in front of you is trying to convince you that your keyboard has "standby power in a closet", you need a fresh pair of eyes. Even if those eyes cost twenty bucks and eat your food budget for a week.

Sometimes the expensive perspective is the one that finds the bootloader wipe you didn't know existed.
````

