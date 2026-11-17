// Content for parents of adult children (20+). Loaded after teens.js.
// Same card kinds as early-years.js. Money content stays general: it is not financial advice.
// Research and full source list: sources/Young Adults (20+) - Research Findings.md
(function () {
  const C = window.CONTENT;
  C.ageRange = "pregnancy to adulthood";
  C.stages.push({ id: "adults", title: "Young adults", emoji: "🏡", ages: "20+", intro: "Parenting an adult: advice when asked, staying close, grandkids, and your own life again." });

  C.help.lines.push(
    { name: "Carer Gateway", num: "1800 422 737", note: "Free support, counselling and respite for unpaid carers (e.g. of ageing parents or an adult child). Mon–Fri 8am–5pm; emergency respite 24/7." },
    { name: "Red Nose Safe Sleep Advice Line", num: "1300 998 698", note: "Safe sleep questions, including for grandparents." }
  );
  C.help.links.push({ t: "Carer Gateway", url: "https://www.carergateway.gov.au/contact-us" });

  const cards = [
    {
      id: "adult-relationship", stage: "adults", title: "The adult relationship", emoji: "☕",
      blurb: "From manager to consultant to friend.",
      going_on: "Your child is an adult, and 18–25 is still a time of working things out. Research finds close, frequent contact between parents and adult children is mostly good for both. What adult kids resent isn't closeness; it's being treated like they can't run their own lives.",
      say: ["\"Do you want my thoughts, or should I just listen?\"", "\"It's your call. I trust you to work it out.\"", "\"I was wrong about that, and I'm sorry.\""],
      avoid: ["Unasked-for advice on their job, partner, money or appearance", "Doing things for them they can do themselves", "Keeping score of how often they call"],
      steps: ["Ask before advising, and accept 'just listen'.", "Respect their decisions, including ones you wouldn't make.", "Find contact that suits them: texts, a regular meal, a shared interest.", "Keep repairing. Saying sorry for old hurts, even years later, strengthens the relationship."],
      why: "Adult children stay closer to parents who respect their independence. Advice that's asked for gets heard; advice that's pushed gets resisted.",
      tip: "Next time they share a problem, ask \"Want advice or just a listen?\" before you say anything else.",
      sources: ["Arnett, Emerging adulthood (2000)", "Fingerman (frequent contact research)", "Pew Research (2019, 2024)", "Podcast: Scott Cam"],
      scenarios: [
        { q: "Your 24-year-old tells you she's quitting a stable job to start her own business.",
          options: [
            { t: "\"That's a terrible idea. You've got a good job, don't throw it away.\"", why: "She's an adult. Shutting it down mostly means she'll stop telling you her plans." },
            { t: "\"Wow, big move. Tell me about it. Do you want me to just be excited with you, or help poke holes in the plan?\"", why: "Curious and supportive, and lets her choose what kind of help she wants." },
            { t: "\"Do whatever you want.\"", why: "Respects the decision, but sounds like you don't care." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-at-home", stage: "adults", title: "Adult kids living at home", emoji: "🛋️",
      blurb: "Staying longer, moving back, and sharing a house as adults.",
      going_on: "Living at home longer is now common: in the 2021 Census, about half of 20–24 year olds lived with their parents. It works best when everyone treats it as adults sharing a home, with clear expectations agreed together.",
      say: ["\"Let's agree how this works for all of us.\"", "\"What do you think is a fair contribution?\"", "\"Just let me know if you won't be home so I don't worry.\""],
      avoid: ["Teenage rules (curfews, room checks)", "Doing all their washing and cooking without discussion", "Letting resentment build instead of talking about it"],
      steps: ["Sit down and agree the basics: contribution (money or jobs), chores, guests, noise, letting each other know plans.", "Talk about the plan: saving for a deposit, finishing study, a rough timeframe.", "Review it every few months.", "Treat their space as theirs."],
      why: "Clear, agreed expectations prevent the slow build-up of resentment, and adult rules help adult habits grow.",
      tip: "Book a 20-minute 'house meeting' to agree how living together works.",
      sources: ["AIFS (2021 Census)", "Pew Research (2024)"],
      scenarios: [
        { q: "Your 22-year-old son moved back home after uni. Three months on, he sleeps late, pays nothing and leaves dishes everywhere. You're getting resentful.",
          options: [
            { t: "Keep quiet and hope he notices.", why: "Resentment builds, and he genuinely may not know what you expect." },
            { t: "\"I'm glad you're home, and I need us to agree how it works. Can we sit down Sunday and work out jobs, a contribution and your plan?\"", why: "Warm, direct, and treats him as an adult who can negotiate." },
            { t: "\"Either you pay rent from Monday or you're out.\"", why: "An ultimatum out of the blue usually starts a fight rather than a plan." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-money", stage: "adults", title: "Helping with money", emoji: "💸",
      blurb: "Gifts, loans and deposits, without damaging the relationship.",
      going_on: "Most parents help their young adult kids with money at some point, often everyday costs like phone bills or rent. Money help goes wrong when expectations aren't clear: is it a gift or a loan, and what's fair between siblings? This is general guidance, not financial advice.",
      say: ["\"Is this a gift or a loan? Let's be clear so there's no awkwardness later.\"", "\"Here's what we can afford to do.\"", "\"We've helped your brother with this too, so here's what's fair.\""],
      avoid: ["Giving money you can't afford to lose, especially near retirement", "Vague 'pay it back sometime' loans", "Using money to control their choices"],
      steps: ["Decide clearly: gift or loan. Write loans down with simple repayment terms.", "Think about fairness between siblings, and explain any differences.", "Protect your own retirement and emergency savings first.", "For big amounts (house deposits, guarantees), both sides should get independent financial and legal advice."],
      why: "Clear arrangements protect the relationship. Unclear money is one of the most common sources of family resentment.",
      tip: "If you've lent money to a child, write down what you both understand the deal to be.",
      sources: ["Pew Research (2024)", "Moneysmart (ASIC) general guidance"],
      scenarios: [
        { q: "Your 27-year-old asks to borrow $5,000 to cover a car repair and some debts.",
          options: [
            { t: "Transfer it straight away and say \"pay us back whenever.\"", why: "Generous, but vague terms often lead to resentment later." },
            { t: "\"Let me check what we can afford. If we lend it, let's write down how you'll pay it back. And do you want help making a plan for the debts?\"", why: "Protects you, makes expectations clear, and helps with the underlying problem." },
            { t: "\"No. You need to learn to manage your own money.\"", why: "Sometimes right, but a flat no without talking misses the chance to help them plan." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-choices", stage: "adults", title: "Partners, values and big choices", emoji: "💍",
      blurb: "When you don't love their partner, job, beliefs or where they live.",
      going_on: "Adult kids will make choices you wouldn't: partners, careers, religion, politics, moving far away. Disagreement is normal. Turning it into a test of loyalty is one of the common paths to family distance.",
      say: ["\"I'd like to get to know him better.\"", "\"I see it differently, and I love you.\"", "\"I said my piece once. I won't keep bringing it up.\""],
      avoid: ["Criticising their partner (they'll defend them, and remember it)", "Repeating the same concern over and over", "Making family events uncomfortable for their partner"],
      steps: ["Welcome their partner. Get to know them on their own terms.", "If you have a real concern, raise it once, calmly and privately. Then respect their decision.", "Keep political and religious arguments out of family time if they cause hurt.", "If you're worried about their safety (e.g. a controlling or abusive partner), stay close rather than issuing ultimatums. Isolation makes it harder for them to leave."],
      why: "Respecting their choices keeps you in their life, which is where you need to be if they ever do need help.",
      tip: "Invite their partner to something just with you, like a coffee or a game.",
      sources: ["Coleman (estrangement clinical work)", "Reczek et al. 2022", "1800RESPECT (domestic violence support)"],
      scenarios: [
        { q: "You don't like your 26-year-old's new partner, who seems dismissive of your family. Your son seems happy.",
          options: [
            { t: "Tell your son you don't like his partner and he can do better.", why: "Puts him in the middle, and often pushes him closer to the partner." },
            { t: "Keep inviting them both, get to know the partner one-on-one, and keep your relationship with your son strong.", why: "Gives the partner a chance, and keeps you close whatever happens." },
            { t: "Stop inviting the partner to family events.", why: "Signals your son has to choose, which risks losing him." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-distance", stage: "adults", title: "Conflict, distance and estrangement", emoji: "🌉",
      blurb: "When they pull away, stop calling, or cut contact.",
      going_on: "Estrangement is more common than people think, especially after divorce, and in one large study most estrangements later ended. Adult kids usually pull away because they feel unheard or hurt, even if you don't see it that way. Repair starts with listening, not defending.",
      say: ["\"I want to understand what it was like for you.\"", "\"I'm sorry I hurt you.\" (without \"but\")", "\"I'll respect the space you need. The door's open whenever you're ready.\""],
      avoid: ["Defending yourself point by point", "Going through siblings or relatives to pressure them", "Turning up uninvited"],
      steps: ["Respect the distance they've asked for.", "If they're open to it, listen to their side fully, even if you remember it differently.", "Take responsibility for your part, without excuses.", "Consider a family therapist or counsellor, for yourself or together. Get support for your own grief."],
      why: "Most adult children who reconnect do so because they finally felt heard. Defending yourself, even when you're partly right, usually closes the door.",
      tip: "Think of one thing your adult child has complained about over the years, and ask them about it with curiosity.",
      sources: ["Reczek et al. 2022 (Journal of Marriage and Family)", "Coleman, Rules of Estrangement", "Siegel & Hartzell, Parenting from the Inside Out"],
      scenarios: [
        { q: "Your 29-year-old sends a long message saying you were critical throughout her childhood and she needs space.",
          options: [
            { t: "Reply explaining everything you did for her and how unfair she's being.", why: "Feels natural, but defending yourself usually confirms what she's saying." },
            { t: "\"Thank you for telling me. I'm sorry I hurt you. I'll give you the space you need, and I'd like to understand more when you're ready.\"", why: "Acknowledges her experience, respects her request, and leaves the door open." },
            { t: "Ask her sister to talk some sense into her.", why: "Pulls others in and feels like pressure; it often widens the gap." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-grandparent", stage: "adults", title: "Becoming a grandparent", emoji: "👵",
      blurb: "Supporting them as new parents, and following their rules.",
      going_on: "Your child is now the parent. New parents need help, but on their terms. A lot of baby advice has changed since you were a parent: safe sleep, solids and allergies, car seats, screens. Following their rules keeps you trusted and involved.",
      say: ["\"What would help most this week?\"", "\"How do you want me to do bedtime?\"", "\"You're doing a great job.\""],
      avoid: ["\"We did it this way and you turned out fine\"", "Undermining their rules when they're not around", "Turning up unannounced in the newborn weeks"],
      steps: ["Offer practical help: meals, washing, holding the baby so they can sleep or shower.", "Ask how they do things and follow it, even if it's different.", "Read up on what's changed (see the Newborn, Baby and Toddler cards in this app).", "If you disagree, ask a question rather than giving a verdict, and accept their answer."],
      why: "Grandparents who support rather than direct get more time with their grandkids, and new parents who feel trusted grow more confident.",
      tip: "Ask your child: \"What's one rule you want me to follow with the baby?\"",
      sources: ["Red Nose (grandparents and safe sleep)", "Podcast: Maggie Dent"],
      scenarios: [
        { q: "Your daughter asks you not to give the baby a hat or blanket in the cot. You put your kids to sleep that way and they were fine.",
          options: [
            { t: "\"You were fine. These rules change every five years.\"", why: "Safe sleep advice changed for good reasons and has greatly cut sudden infant deaths since the 1980s." },
            { t: "\"Okay, I'll do it your way. Can you show me how you set up the cot?\"", why: "Follows her rules and keeps you trusted with the baby." },
            { t: "Agree, then do it your way when she's not there.", why: "Unsafe, and if she finds out it badly damages trust." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-your-life", stage: "adults", title: "Your life after kids", emoji: "🌅",
      blurb: "The empty nest, your relationship, and who you are now.",
      going_on: "Mixed feelings when kids leave are normal: grief, relief, freedom, and sometimes 'who am I now?'. Research found marriages often improve after kids leave, because time together gets better. Your adult kids also do better when you have a full life of your own.",
      say: ["To your partner: \"What do we want the next 20 years to look like?\"", "To yourself: \"I can miss them and enjoy this.\"", "To your kids: \"I'm doing great. Tell me about you.\""],
      avoid: ["Leaning on your adult kids for all your emotional needs", "Filling the gap by over-managing their lives", "Waiting until they leave to invest in your relationship"],
      steps: ["Give yourself time to feel it.", "Rediscover friendships, interests and your relationship with your partner.", "Plan something new: study, travel, volunteering, a project.", "If low mood lasts more than 2 weeks, talk to your GP."],
      why: "Parents with their own full lives are easier for adult kids to stay close to, and more able to support them without smothering.",
      tip: "Book one thing this month that's just for you (or you and your partner).",
      sources: ["Gorchoff, John & Helson 2008 (Psychological Science)", "Erikson (generativity)", "Podcast: Ben Quilty, Santo Cilauro"],
      scenarios: [
        { q: "Your youngest has moved out, and you find yourself texting her several times a day and feeling flat.",
          options: [
            { t: "Keep texting; it's how you stay close.", why: "Contact is good, but leaning on her to fill the gap can feel like pressure." },
            { t: "Agree a regular catch-up with her, and start building things back into your own life: friends, interests, time with your partner.", why: "Keeps the connection and looks after your own wellbeing." },
            { t: "Ask her to move back home.", why: "Puts your needs on her at the moment she's building her independence." }
          ], best: 1 }
      ]
    },
    {
      id: "adult-sandwich", stage: "adults", title: "The sandwich generation", emoji: "🥪",
      blurb: "Supporting adult kids and ageing parents at the same time.",
      going_on: "Many parents in their 50s and 60s are helping adult kids while also caring for their own ageing parents. It's tiring, and carers often don't see themselves as carers, so they miss out on support.",
      say: ["\"I can't do everything. Here's what I can do.\"", "To siblings: \"Let's split the care for Mum fairly.\"", "\"I need a break. Can you help?\""],
      avoid: ["Trying to do it all yourself", "Hiding how stretched you are from your partner and kids", "Waiting for a crisis before planning"],
      steps: ["Call Carer Gateway (1800 422 737) for free counselling, respite and practical help.", "Share the load with siblings and other family, in writing if needed.", "Encourage your parents (and yourself) to sort out wills, powers of attorney and advance care plans while everyone is well.", "Protect some time for your own health and relationship."],
      why: "Carers who get support burn out less and keep caring for longer. Planning early avoids rushed decisions in a crisis.",
      tip: "Check whether you count as a carer, and look at what Carer Gateway offers.",
      sources: ["Carer Gateway (Australian Government)", "Pew Research (2024)"],
      scenarios: [
        { q: "Your dad needs more help at home, your 25-year-old has just moved back after a breakup, and you're exhausted.",
          options: [
            { t: "Push through and do everything yourself.", why: "Common, but a fast road to burnout." },
            { t: "Call Carer Gateway, ask your siblings to share Dad's care, and ask your son to take on some jobs at home.", why: "Gets support, shares the load, and treats your son as an adult who can help." },
            { t: "Tell your son he has to move out so you can focus on Dad.", why: "He may need support too; sharing jobs is usually better than an ultimatum." }
          ], best: 1 }
      ]
    },

    // ---------- GUIDES ----------
    {
      id: "adult-struggling", stage: "adults", kind: "guide", title: "When your adult child is struggling", emoji: "🫶",
      blurb: "Mental health, privacy, and how to help an adult.",
      guidance: [
        "16–24 year olds have the highest rate of mental disorder of any age group in Australia (38.8% in the past year, ABS 2020–22).",
        "At 18 your child has full legal capacity to consent to or refuse treatment. Doctors can't share their health information with you without their consent. (Parents lose automatic access to My Health Record at 15.)",
        "Ask, while they're well, if they'd like to add you as an emergency contact or nominated support person.",
        "If you're worried: notice changes lasting 2+ weeks, ask directly about suicide, listen without judging, and help them connect with their GP, headspace (up to 25) or Lifeline.",
        "It's their choice to get treatment, unless they're in immediate danger. Then call 000.",
        "Look after yourself too: Carer Gateway supports people caring for an adult child with mental illness."
      ],
      help_when: ["Talk of suicide, self-harm or a plan: get help the same day (GP, Lifeline 13 11 14). Call 000 if they're in danger now.", "Ongoing problems with alcohol, drugs or gambling: talk to your GP, or contact the ADF or Gambling Help Online for advice on supporting them."],
      links: [
        { t: "ReachOut: age and confidentiality", url: "https://au.reachout.com/articles/how-age-affects-confidentiality" },
        { t: "OAIC: health privacy", url: "https://www.oaic.gov.au/privacy/guidance-and-advice/guide-to-health-privacy/chapter-4-giving-access-to-health-information" },
        { t: "healthdirect: mental health helplines", url: "https://www.healthdirect.gov.au/mental-health-helplines" },
        { t: "Carer Gateway", url: "https://www.carergateway.gov.au/contact-us" }
      ],
      checked: "Nov 2026",
      tip: "Ask your adult child if they'd like you listed as their emergency contact.",
      sources: ["ABS National Study of Mental Health and Wellbeing 2020–22", "OAIC", "ReachOut", "Carer Gateway"]
    },
    {
      id: "grandparent-safety", stage: "adults", kind: "guide", title: "Grandparent health and safety: what's changed", emoji: "🍼",
      blurb: "Safe sleep, whooping cough vaccine, and other updates since the 1980s.",
      guidance: [
        "Safe sleep: always on their back from birth, face and head uncovered (no hats for sleep), nothing in the cot, own safe sleep space. Never sleep with a baby on a sofa or armchair.",
        "Whooping cough: adults in close contact with babies under 6 months, including grandparents, should ideally have a dTpa booster at least 2 weeks before contact if they haven't had one in the last 10 years. Ask your GP or pharmacist (adults usually pay).",
        "Smoke-free: no smoking around babies, in the car or house. Smoke on clothes matters too.",
        "Car seats: rear-facing until at least 6 months by law, and for as long as they fit. Have seats fitted properly.",
        "Food: egg and peanut are now introduced early (around 6 months), not delayed. Follow the parents' plan.",
        "Ask the parents for their rules and follow them. See the Newborn, Baby and Toddler cards in this app for the details."
      ],
      help_when: ["A baby has trouble breathing, goes blue or floppy: call 000.", "You're unsure about sleep products or set-up: call the Red Nose Safe Sleep Advice Line (1300 998 698)."],
      links: [
        { t: "Red Nose: grandparents and safe sleeping", url: "https://rednose.org.au/article/grandparents-and-safe-sleeping" },
        { t: "Australian Immunisation Handbook: whooping cough", url: "https://immunisationhandbook.health.gov.au/contents/vaccine-preventable-diseases/pertussis-whooping-cough" }
      ],
      checked: "Nov 2026",
      tip: "Check when you last had a whooping cough booster before the baby arrives.",
      sources: ["Red Nose", "Australian Immunisation Handbook", "NCIRS (2025)", "ASCIA (2026)"]
    }
  ];

  C.situations.push(...cards);
})();
