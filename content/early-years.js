// Content for pregnancy to age 3. Loaded after situations.js and added to the same list.
// Two kinds of card:
//  - kind "guide": health & safety guidance. Fields: guidance[], partner[] (optional), help_when[], links[{t,url}], checked.
//    Guides state official guidance plainly and are not turned into quizzes.
//  - normal cards (no kind): same shape as the 3-12 cards (say/avoid/steps/why/tip/scenarios).
// Every card has a `stage`. Research and full source list: sources/Conception to 3 - Research Findings.md
(function () {
  const C = window.CONTENT;
  C.ageRange = "pregnancy–12";
  C.stages = [
    { id: "expecting", title: "Expecting", emoji: "🤰", ages: "Pregnancy", intro: "From finding out through to the birth, for both partners." },
    { id: "newborn", title: "Newborn", emoji: "👶", ages: "0–3 months", intro: "Survival mode. Safe sleep, crying, feeding and looking after each other." },
    { id: "baby", title: "Baby", emoji: "🧸", ages: "3–12 months", intro: "Talking, sleep changes, starting solids and separation." },
    { id: "toddler", title: "Toddler", emoji: "🚼", ages: "1–3 years", intro: "Big feelings, limits, milestones and toilet training." },
    { id: "kids", title: "Kids", emoji: "🧒", ages: "3–12 years", intro: "Everyday situations and how to handle them." }
  ];
  C.help = {
    intro: "If you or your partner are struggling, you're not failing, and help works. About 1 in 5 mums and 1 in 10 dads have anxiety or depression in pregnancy or the first year.",
    lines: [
      { name: "Emergency", num: "000", note: "If anyone is in immediate danger." },
      { name: "Lifeline", num: "13 11 14", note: "24/7 crisis support." },
      { name: "PANDA National Helpline", num: "1300 726 306", note: "Perinatal anxiety and depression, for mums, dads and partners. 7 days. Not a crisis line." },
      { name: "Pregnancy, Birth and Baby", num: "1800 882 436", note: "Maternal and child health nurses, 7am–midnight AET, pregnancy to age 5." },
      { name: "healthdirect", num: "1800 022 222", note: "24/7 nurse advice for any health worry." }
    ],
    crying: [
      "Check the basics: hungry, nappy, too hot or cold, unwell (fever or not feeding: call your GP or healthdirect).",
      "If you feel you're losing it, put the baby down on their back in a safe cot and walk out of the room.",
      "Breathe, have a glass of water, call someone. It's okay to let them cry for a few minutes while you calm down.",
      "Never shake a baby. Shaking for even a few seconds can cause brain damage or death.",
      "Go back when you're calmer. Crying peaks around 6–8 weeks and usually eases by 3–5 months."
    ],
    checked: "Nov 2026",
    links: [
      { t: "PANDA", url: "https://www.panda.org.au/" },
      { t: "Pregnancy, Birth and Baby helplines", url: "https://www.pregnancybirthbaby.org.au/pregnancy-helpline-numbers" },
      { t: "healthdirect: need help now", url: "https://about.healthdirect.gov.au/need-help-now" }
    ]
  };

  const cards = [
    // ---------- EXPECTING ----------
    {
      id: "pregnancy-health", stage: "expecting", kind: "guide", title: "Health basics in pregnancy", emoji: "🍎",
      blurb: "Supplements, alcohol, smoking, food safety and caffeine.",
      guidance: [
        "Folic acid: 0.5 mg a day (a 400 mcg supplement is also fine) from at least 1 month before conception through the first 3 months. Your doctor may advise 5 mg in some situations.",
        "Iodine: a 150 mcg supplement daily when planning, pregnant or breastfeeding. Avoid kelp supplements.",
        "Alcohol: there is no known safe amount in pregnancy. Not drinking is safest when breastfeeding too.",
        "Smoking and second-hand smoke raise the risk of sudden infant death, before and after birth. This applies to partners too.",
        "Food safety: avoid deli meats, pâté, raw or smoked seafood, raw sushi, and soft cheeses unless cooked to 75°C. Limit high-mercury fish (shark, swordfish, marlin).",
        "Caffeine: under 200 mg a day (roughly one coffee)."
      ],
      partner: ["Go alcohol- and smoke-free together; it's easier as a team.", "Take on the cooking and shopping that keep these rules easy."],
      help_when: ["You have diabetes, take epilepsy medicine or have a family history of neural tube defects: ask about a higher folic acid dose.", "You're finding it hard to stop drinking or smoking: talk to your GP or midwife; there's no judgment."],
      links: [
        { t: "Pregnancy, Birth and Baby: vitamins", url: "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/vitamins-and-supplements-during-pregnancy" },
        { t: "Pregnancy, Birth and Baby: foods to avoid", url: "https://www.pregnancybirthbaby.org.au/foods-to-avoid-when-pregnant" },
        { t: "NHMRC: iodine", url: "https://www.nhmrc.gov.au/about-us/publications/iodine-supplementation-pregnant-and-breastfeeding-women" }
      ],
      checked: "Nov 2026",
      tip: "Put folic acid and iodine on the shopping list this week.",
      sources: ["Pregnancy, Birth and Baby", "NHMRC", "NHS", "ACOG"]
    },
    {
      id: "becoming-a-team", stage: "expecting", title: "Becoming a team", emoji: "🤝",
      blurb: "The partner's role in pregnancy, and starting as equals.",
      going_on: "Pregnancy can leave the non-pregnant partner feeling like a spectator. But the habits you build now (showing up, sharing the load, talking honestly) are the ones you'll rely on when the baby arrives.",
      say: ["\"What would help you most this week?\"", "\"I'm coming to the appointment.\"", "\"I'm excited, and I'm a bit scared too.\""],
      avoid: ["Treating it as 'her pregnancy'", "Waiting to be asked to help", "Bottling up your own worries"],
      steps: ["Go to appointments and antenatal classes together. The more you know, the better you can support.", "Take on more of the home load so your partner can rest.", "Talk about what each of you hopes for, and fears, about becoming parents.", "Plan practicalities together: route to hospital, car seat, safe sleep space, who helps in the first weeks."],
      why: "Partners who are involved early feel more confident and connected, and couples who share the load cope better after birth.",
      tip: "Book in to the next antenatal appointment or class together.",
      sources: ["Raising Children Network", "Pregnancy, Birth and Baby (partners)", "NHS", "Podcast: Maggie Dent"],
      scenarios: [
        { q: "Your pregnant partner says she's exhausted and the house is a mess. You've had a big week at work too.",
          options: [
            { t: "\"I'm tired too, we'll sort it on the weekend.\"", why: "Understandable, but it misses what she's telling you she needs." },
            { t: "\"You've been carrying a lot. What would help most right now? I'll take dinner and the dishes tonight.\"", why: "Notices her need and takes concrete action. That's the team habit you want." },
            { t: "Quietly clean up without saying anything.", why: "Helpful, but talking about it builds the shared understanding you'll need later." }
          ], best: 1 }
      ]
    },
    {
      id: "birth-ready", stage: "expecting", kind: "guide", title: "Getting ready for the birth", emoji: "🏥",
      blurb: "The birth partner's job, car seat and the safe sleep space.",
      guidance: [
        "Birth partner: your main job is continuous support and encouragement: drinks, snacks, massage, help changing positions, and staying calm.",
        "Know the birth plan, but expect it to change. Ask staff for time to discuss unplanned procedures unless it's an emergency.",
        "Advocate when your partner can't: speak to staff on her behalf about what she wants.",
        "Car seat: by law, babies ride rear-facing until at least 6 months. Best practice is rear-facing for as long as they fit the seat. Have it fitted before the birth.",
        "Have a safe sleep space ready: a cot (or bassinet) with a firm flat mattress, nothing else in it, in your room."
      ],
      partner: ["Learn the route to the hospital and how long it takes.", "Practise breathing and relaxation together beforehand.", "Look after yourself during labour too: eat, drink, take short breaks."],
      help_when: ["You're anxious about the birth: tell your midwife; many hospitals offer extra support or tours."],
      links: [
        { t: "Raising Children: birth support", url: "https://raisingchildren.net.au/pregnancy/dads-guide-to-pregnancy/late-pregnancy/men-birth-support" },
        { t: "NHS: tips for birth partners", url: "https://www.nhs.uk/best-start-in-life/pregnancy/preparing-for-labour-and-birth/tips-for-your-birthing-partner-or-partners/" },
        { t: "NSW: child car seats", url: "https://www.nsw.gov.au/driving-boating-and-transport/roads-safety-and-rules/safe-driving/child-seats" }
      ],
      checked: "Nov 2026",
      tip: "Get the car seat fitted at least a month before the due date.",
      sources: ["Raising Children Network", "Pregnancy, Birth and Baby", "NHS", "Kidsafe"]
    },
    {
      id: "parent-feelings", stage: "expecting", title: "Your feelings about becoming a parent", emoji: "💭",
      blurb: "Excitement, fear, \"am I ready?\", and old memories surfacing.",
      going_on: "Almost everyone feels unready. Becoming a parent can also stir up memories of how you were parented. Neither means you'll be a bad parent; noticing them is the first step to doing it your way.",
      say: ["\"I don't feel ready, and I'm still in.\"", "\"What from your childhood do you want to keep, and what do you want to change?\"", "\"I've been feeling flat lately. Can we talk?\""],
      avoid: ["Waiting until you 'feel ready' (nobody does)", "Hiding low mood or anxiety", "Assuming dads and partners don't get perinatal depression (about 1 in 10 do)"],
      steps: ["Name the fear out loud to your partner or a mate. Fear of fatherhood is often fear of vulnerability.", "Talk about your own childhood: the parts to repeat and the parts to change.", "Watch for signs that last more than 2 weeks: low mood, anxiety, irritability, withdrawing. These happen to partners too.", "Get help early: GP or the PANDA helpline (1300 726 306)."],
      why: "Parents who make sense of their own story raise more securely attached kids, and early support for anxiety or depression helps the whole family.",
      tip: "Ask each other: \"What's one thing from your childhood you want our kid to have?\"",
      sources: ["Siegel & Hartzell, Parenting from the Inside Out", "PANDA", "Podcast: Wayne Hope, Maggie Dent"],
      scenarios: [
        { q: "Late in the pregnancy, you notice you've been snappy, not sleeping and dreading the birth for weeks.",
          options: [
            { t: "Push through. It's her that needs the support right now.", why: "Partners' mental health matters for the whole family, and it's common to struggle." },
            { t: "Tell your partner how you've been feeling and book in with your GP or call PANDA.", why: "Early help works, and it's what you'd want your partner to do." },
            { t: "Wait and see if it passes once the baby's here.", why: "Rates of depression in dads often rise in the months after birth; earlier is better." }
          ], best: 1 }
      ]
    },

    // ---------- NEWBORN ----------
    {
      id: "safe-sleep", stage: "newborn", kind: "guide", title: "Safe sleep", emoji: "🛏️",
      blurb: "Red Nose's six recommendations, wrapping and dummies.",
      guidance: [
        "Always put baby on their BACK to sleep, day and night.",
        "Keep their face and head uncovered.",
        "Keep baby smoke-free, before and after birth.",
        "Safe sleep environment: safe cot, firm flat mattress, no pillows, bumpers, toys or loose bedding.",
        "Sleep baby in their own safe space in your room for at least the first 6 months.",
        "Breastfeed if you can; it lowers the risk of sudden infant death.",
        "Sharing a bed with your baby isn't recommended. Never sleep with a baby on a sofa or armchair.",
        "Wrapping: light cotton, firm not tight, room for hips to bend up and out. Stop wrapping for sleep at the first signs of rolling, or about 3 months, whichever comes first.",
        "Dummies: consistent dummy use is linked to lower SIDS risk. If breastfeeding, wait until it's established (about 4–6 weeks). Don't force it."
      ],
      partner: ["Both parents should know these rules, and so should grandparents and babysitters."],
      help_when: ["Your baby has trouble breathing, goes blue or floppy: call 000.", "You're unsure about a product (sleep positioners, inclined sleepers, wedges): don't use it until you've checked with Red Nose."],
      links: [
        { t: "Red Nose: six safe sleep recommendations", url: "https://rednose.org.au/safe-sleep-and-safer-pregnancy/pregnancy-to-birth/six-safe-sleep-recommendations/" },
        { t: "Red Nose: wrapping", url: "https://rednose.org.au/safe-sleep-and-safer-pregnancy/newborn-to-1-year/wrapping-or-swaddling-babies/" },
        { t: "Red Nose: dummies", url: "https://rednose.org.au/news/using-a-dummy-safely/" }
      ],
      checked: "Nov 2026",
      tip: "Walk your baby's grandparents through the six safe sleep rules.",
      sources: ["Red Nose", "AAP 2022 safe sleep policy"]
    },
    {
      id: "crying-settling", stage: "newborn", title: "Crying and settling", emoji: "😭",
      blurb: "Tired signs, settling techniques, and the crying peak at 6–8 weeks.",
      going_on: "Newborn crying increases from about 2 weeks, peaks around 6–8 weeks, and usually eases by 3–5 months. Some crying can't be soothed, and that's normal. Babies settle best when you catch the early tired signs.",
      say: ["\"You're tired. Let's get you to sleep.\" (quietly, at the first yawn)", "\"Shh, shh, I'm here.\"", "To each other: \"I need ten minutes. Can you take her?\""],
      avoid: ["Waiting until they're screaming (crying is the last tired sign)", "Too much stimulation when they're tired", "Putting a baby to sleep on their side or tummy (only hold them that way while awake)", "Ever shaking a baby"],
      steps: ["Check the basics: hungry? nappy? too hot or cold? unwell?", "Watch for early tired signs: yawning, staring, frowning, jerky movements, clenched fists, rubbing eyes. Newborns are usually ready for sleep after 1–2 hours awake.", "Settle: rock or hold until drowsy, then lay them on their back. Or hands-on settling: hands on baby in the cot, gentle patting, rocking and 'shh' until asleep. Pick up if distressed, then try again.", "Use a dim, quiet room, a light wrap until rolling starts, and rhythm (pram, sling). Any white noise should be low and well away from the cot.", "If you're at breaking point: put baby down safely, leave the room, calm down, call someone. Swap with your partner."],
      why: "Responsive settling (comfort, then gradually less help) is what Australia's early-parenting services recommend. It meets the baby's need for safety while they learn to sleep.",
      tip: "Learn your baby's first tired sign this week, and start settling the moment you see it.",
      sources: ["Tresillian", "Karitane", "Pregnancy, Birth and Baby", "Red Nose", "Period of PURPLE Crying"],
      scenarios: [
        { q: "It's 2am, your 6-week-old has cried for an hour despite a feed and a clean nappy, and you feel yourself getting angry.",
          options: [
            { t: "Keep bouncing her harder; she has to stop eventually.", why: "Frustration can turn into rough handling. That's exactly when to step away." },
            { t: "Lay her on her back in the cot, step out for a few minutes to breathe, wake your partner or call someone, then go back.", why: "Safe, honest and responsible. Crying for a few minutes in a safe cot won't hurt her." },
            { t: "Put her on her tummy; it seems to calm her.", why: "Tummy sleeping raises the risk of SIDS. Tummy positions are only for awake, supervised time." }
          ], best: 1 },
        { q: "Your 5-week-old has been awake and playing for nearly two hours and is now yawning and staring off.",
          options: [
            { t: "Play a bit longer to tire him out so he sleeps longer.", why: "Overtired babies usually find it harder, not easier, to settle." },
            { t: "Take him to a dim room, wrap him lightly, and rock or pat him on his back until he's drowsy.", why: "Catches the early tired signs and uses responsive settling." },
            { t: "Wait until he cries; then you'll know he's tired.", why: "Crying is the last tired sign; by then settling is harder." }
          ], best: 1 }
      ]
    },
    {
      id: "feeding-care", stage: "newborn", kind: "guide", title: "Feeding, movement and check-ups", emoji: "🍼",
      blurb: "Breast or bottle, tummy time, sleep needs and immunisations.",
      guidance: [
        "WHO recommends breastfeeding within an hour of birth, exclusively for about 6 months, then alongside food to 2 years or beyond. Feed on demand.",
        "Formula feeding is a valid choice. A fed, loved baby is what matters. Use formula as directed and ask your child health nurse if unsure.",
        "Tummy time: at least 30 minutes a day spread across the day while awake and supervised.",
        "No screens for babies under 1. Limit time strapped in prams or car seats to 1 hour at a time.",
        "Sleep: 14–17 hours a day at 0–3 months, in short stretches. Frequent night waking is normal.",
        "Immunisations: hepatitis B at birth, then the National Immunisation Program at 2 (from 6 weeks), 4, 6, 12 and 18 months, plus flu yearly from 6 months."
      ],
      partner: ["Bottle-fed or expressed milk: partners can do a night feed. If breastfeeding: bring her water and snacks, do the burping, changing and resettling."],
      help_when: ["Baby isn't feeding well, has few wet nappies or has a fever (especially under 3 months): call your GP or healthdirect (1800 022 222) the same day.", "Breastfeeding hurts or isn't working: ask your midwife, child health nurse or a lactation consultant early."],
      links: [
        { t: "WHO: breastfeeding", url: "https://www.who.int/health-topics/breastfeeding" },
        { t: "WHO: activity, screens and sleep under 5", url: "https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more" },
        { t: "Australian immunisation schedule", url: "https://www.health.gov.au/childhood-immunisation/immunisation-schedule" }
      ],
      checked: "Nov 2026",
      tip: "Put the 6-week check and 2-month immunisations in the calendar now.",
      sources: ["WHO", "health.gov.au"]
    },
    {
      id: "first-weeks-team", stage: "newborn", title: "The first weeks as a team", emoji: "🌙",
      blurb: "Sleep deprivation, sharing the load, and the relationship changing.",
      going_on: "Everything changes at once: sleep, roles, your relationship. Many partners quietly feel left out or useless in the early weeks, and many mothers feel overwhelmed and alone. Both are common and both pass faster when you talk.",
      say: ["\"What do you need from me today?\"", "\"I'll do the first wake-up so you can get four hours.\"", "\"I miss us a bit. I love what we've got, and I miss what we had.\""],
      avoid: ["Keeping score of who's more tired", "Criticising how the other parent does things (there's more than one right way)", "Trying to fix a crying baby or an upset partner instead of just being there"],
      steps: ["Split the nights so each of you gets one longer block of sleep.", "Take over whole jobs (baths, nappies, a night feed, the shopping) rather than 'helping'.", "In a calm moment, ask: \"When you're really upset, what do you want me to do?\"", "Check in on each other's mood. Signs lasting 2+ weeks: call your GP or PANDA (1300 726 306)."],
      why: "Babies do better when parents support each other. Owning tasks builds confidence, and talking about the hard parts keeps you close.",
      tip: "Agree a night-shift plan tonight, before you're both exhausted.",
      sources: ["Podcast: Maggie Dent", "Podcast: Nathan Fa'avae", "PANDA"],
      scenarios: [
        { q: "Your partner, exhausted, snaps at you for putting the nappy on 'wrong'.",
          options: [
            { t: "\"Fine, you do it then.\"", why: "Understandable, but it pushes you out of the job and builds resentment." },
            { t: "Let the moment pass. Later, calmly: \"I want to do this my way and learn. Can you give me room to get it a bit wrong?\"", why: "Takes the heat out, then asks for space to parent your way." },
            { t: "Argue it out on the spot about who's right.", why: "Two sleep-deprived people arguing in the moment rarely ends well." }
          ], best: 1 }
      ]
    },

    // ---------- BABY ----------
    {
      id: "serve-return", stage: "baby", title: "Talking, reading and play", emoji: "🗣️",
      blurb: "Serve and return: how babies' brains are built.",
      going_on: "When a baby babbles, points or cries and you respond, that back-and-forth builds the brain circuits for language and emotion. Conversation turns matter more than how many words they hear.",
      say: ["\"Oh, you see the dog! Woof woof! Big dog.\" (name what they're looking at)", "\"Ba-ba? Ba-ba!\" (copy their sounds and wait for a reply)", "\"What's that? ... A duck!\" (while reading)"],
      avoid: ["Background TV most of the day", "Talking at them without pausing for their turn", "Your phone in your hand during play"],
      steps: ["Notice the serve: what are they looking at, pointing to or babbling about?", "Return it: smile, name it, copy the sound.", "Pause and wait for their turn. Babies need time to respond.", "Read together every day from early on: point, ask, let them turn pages."],
      why: "Back-and-forth exchanges build the brain (Harvard), and more conversational turns are linked to stronger language and brain response (MIT).",
      tip: "During one nappy change today, narrate everything and wait for their coos.",
      sources: ["Harvard Center on the Developing Child", "MIT (Romeo & Gabrieli)", "AAP literacy policy 2024"],
      scenarios: [
        { q: "Your 8-month-old is babbling 'da-da-da' at you while you're scrolling your phone.",
          options: [
            { t: "Say \"yes, darling\" without looking up.", why: "Misses the serve. They need your face and a response they can read." },
            { t: "Put the phone down, look at her: \"Da-da-da! You're talking to me!\" then wait for her next sound.", why: "Serve and return in action: respond, then give her a turn." },
            { t: "Hand her a toy so you can finish.", why: "Sometimes needed, but this was an invitation to connect." }
          ], best: 1 }
      ]
    },
    {
      id: "baby-sleep", stage: "baby", title: "Sleep changes and settling (3–12 months)", emoji: "😴",
      blurb: "Regressions, moving from hands-on settling to less help.",
      going_on: "Sleep often falls apart just before a developmental leap (around 4 months, 8–10 months, 12 months). It's normal and temporary. From about 6 months, babies can learn to settle with less help.",
      say: ["\"It's sleep time. I'm right here.\"", "\"Shh, shh. Night night.\"", "To each other: \"This is a leap, not a failure.\""],
      avoid: ["Changing approach every night", "Giving up on the safe sleep rules when you're exhausted", "Thinking a regression means you've done something wrong"],
      steps: ["Keep a short, calm bedtime routine (bath, feed, book, song) at the same time each night.", "Stop wrapping as soon as rolling starts; move to a safe sleeping bag with armholes.", "Comfort settling (6+ months): put down awake, pat or shush a few minutes, leave; go back to comfort in the cot if crying builds.", "Or 'camping out': sit by the cot, and move your chair a little further away every few nights over 1–4 weeks.", "If it's not working, go back to more help for a while and try again later."],
      why: "Responsive settling gradually builds independent sleep. A large Australian trial found gentle sleep techniques had no lasting harm and no lasting benefit, so choose what suits your family.",
      tip: "Write your bedtime routine down so both parents do it the same way.",
      sources: ["Tresillian", "Pregnancy, Birth and Baby", "Brazelton, Touchpoints", "Price et al. 2012 (Pediatrics)"],
      scenarios: [
        { q: "Your 4-month-old, who had been sleeping well, is suddenly waking every two hours.",
          options: [
            { t: "Something's wrong with our routine; let's try a totally new method tonight.", why: "Regressions are normal before a leap. Big changes mid-regression usually make it harder." },
            { t: "Recognise it's likely a regression, keep the routine steady, settle responsively, and share the nights.", why: "Steady and supportive; it usually passes in a few weeks." },
            { t: "Start bringing him into your bed to sleep so everyone gets rest.", why: "Bed sharing isn't recommended. Use a safe cot in your room." }
          ], best: 1 }
      ]
    },
    {
      id: "solids-allergy", stage: "baby", kind: "guide", title: "Starting solids and allergies", emoji: "🥄",
      blurb: "When to start, and introducing egg, peanut and other allergens.",
      guidance: [
        "Start solids at around 6 months when your baby shows signs of readiness, and not before 4 months.",
        "Introduce well-cooked egg (e.g. hard-boiled and mashed) and smooth peanut (butter or paste, never whole nuts) soon after starting solids.",
        "Introduce other common allergens in the first year: dairy, wheat, soy, sesame, tree nuts (as smooth paste), fish.",
        "Introduce one new common allergen at a time.",
        "Once introduced, keep each allergen in the diet at least once a week.",
        "Keep breastfeeding if you can while starting solids."
      ],
      partner: ["Take turns doing first tastes, and keep a simple list of which allergens are in and how often."],
      help_when: ["Hives, swelling of face/lips/eyes or vomiting after a food: stop that food and see your GP.", "Trouble breathing, swelling of the tongue, or floppiness: call 000 immediately.", "Your baby has severe eczema or a known food allergy: ask your GP before introducing allergens."],
      links: [
        { t: "ASCIA guideline update (Jan 2026)", url: "https://www.allergy.org.au/about-ascia/info-updates/updated-ascia-guideline-infant-feeding-for-food-allergy-prevention-published-january-2026" },
        { t: "ASCIA: how to introduce solid foods", url: "https://www.allergy.org.au/patients/allergy-prevention/ascia-how-to-introduce-solid-foods-to-babies" }
      ],
      checked: "Nov 2026",
      tip: "Make a simple allergen tracker and stick it on the fridge.",
      sources: ["ASCIA (2026)", "WHO"]
    },
    {
      id: "separation", stage: "baby", title: "Separation and stranger anxiety", emoji: "🫂",
      blurb: "Clinginess, crying when you leave, wariness of new people (around 8–12 months).",
      going_on: "Around 8–10 months babies realise you exist when you're gone, and that you can leave. Clinginess and stranger wariness are signs of a healthy attachment, not a problem to fix.",
      say: ["\"Bye-bye, I'll be back after your nap.\" (then go)", "\"Grandma's a bit new today. You can stay on my lap.\"", "\"I came back, just like I said.\""],
      avoid: ["Sneaking out (it makes them more anxious next time)", "Handing them straight to a stranger who wants a cuddle", "Long, drawn-out goodbyes"],
      steps: ["Keep goodbyes short, warm and the same every time.", "Let them warm up to new people from your lap, at their pace.", "Play peekaboo and hide-and-seek: they practise 'gone and back again'.", "Tell the story afterwards: \"Daddy went to work, and now he's home.\""],
      why: "A secure base lets babies explore. Predictable goodbyes and reunions teach them you always come back.",
      tip: "Play peekaboo every day this week.",
      sources: ["Kennedy, Good Inside", "Attachment research (Bowlby, Ainsworth)", "Brazelton, Touchpoints"],
      scenarios: [
        { q: "Your 9-month-old screams when you try to leave him with his grandparents.",
          options: [
            { t: "Wait until he's distracted and slip out quietly.", why: "Sneaking out tends to increase anxiety next time." },
            { t: "Hug him, say \"Bye-bye, I'll be back after lunch,\" hand him over warmly, and go.", why: "Short, honest, predictable. He learns you leave and come back." },
            { t: "Stay until he stops crying, however long it takes.", why: "Long goodbyes usually stretch out the distress." }
          ], best: 1 }
      ]
    },

    // ---------- TODDLER ----------
    {
      id: "toddler-tantrums", stage: "toddler", title: "Toddler tantrums", emoji: "🌋",
      blurb: "Meltdowns from around 18 months, when wants outrun words.",
      going_on: "Toddlers want independence they don't yet have the words or self-control for. Tantrums usually start around 18 months and ease as language grows. They're not trying to manipulate you.",
      say: ["\"You really wanted the blue cup. I know.\"", "\"I'm right here.\"", "\"Do you want to walk or ride in the pram?\""],
      avoid: ["Reasoning mid-tantrum", "Giving in to stop it (it teaches tantrums work)", "Laughing at it", "Yelling back"],
      steps: ["Prevent: watch for hunger and tiredness, warn before transitions, offer simple choices.", "During: keep everyone safe, stay calm and close, name the feeling, don't negotiate.", "If they hit or throw, calmly but firmly stop it.", "After: comfort and reconnect. If tantrums interfere with daily life or relationships, talk to your child health nurse or GP."],
      why: "Calm adults help toddlers calm down. Holding the line while accepting the feeling teaches that feelings are okay and limits are real.",
      tip: "Plan one tricky outing around nap and snack times this week.",
      sources: ["Raising Children Network", "ZERO TO THREE", "Kennedy, Good Inside"],
      scenarios: [
        { q: "Your 2-year-old melts down because you cut her toast into squares instead of triangles.",
          options: [
            { t: "\"It's the same toast! Stop being silly.\"", why: "Logic doesn't help, and it dismisses a real (toddler-sized) disappointment." },
            { t: "Crouch down: \"You wanted triangles. That's so frustrating.\" Stay calm and close until it passes, then offer the toast again.", why: "Names the feeling, stays steady, and doesn't make a new toast on demand." },
            { t: "Quickly make new toast in triangles.", why: "Fine occasionally, but if it's always the fix, tantrums become the way to get things." }
          ], best: 1 }
      ]
    },
    {
      id: "toddler-limits", stage: "toddler", title: "Hitting, biting and limits", emoji: "🛑",
      blurb: "Setting limits without smacking.",
      going_on: "Hitting and biting are common at this age; toddlers act before they can stop themselves. They need you to be the brakes. Smacking increases aggression later and, in babies, risks injury.",
      say: ["\"I won't let you hit.\"", "\"Gentle hands. You can stomp your feet.\"", "\"Biting hurts. You can bite this teether.\""],
      avoid: ["Smacking, threatening, shaming or humiliating", "Long lectures", "Biting back 'so they learn'"],
      steps: ["Stop it straight away: block, move them, or separate them.", "Say the limit in a few calm words, and offer what they CAN do.", "Comfort the hurt child first; it also models kindness.", "Prevent: watch for crowded, tired, hungry moments, and praise gentle play when you see it."],
      why: "The AAP recommends positive discipline (limits, redirection, praise) over physical punishment, which is linked to more aggression.",
      tip: "Practise saying \"I won't let you hit\" in a calm, steady voice.",
      sources: ["AAP: Effective Discipline (2018, reaffirmed 2024)", "ZERO TO THREE", "Kennedy, Good Inside"],
      scenarios: [
        { q: "At playgroup your 20-month-old bites another child who took his toy.",
          options: [
            { t: "Give him a quick smack on the hand so he knows it's wrong.", why: "Hitting to teach not hurting confuses toddlers and is linked to more aggression." },
            { t: "Calmly move him away: \"I won't let you bite. Biting hurts.\" Check on the other child, then help him find another toy.", why: "Stops it, states the limit, and models care for the hurt child." },
            { t: "Explain at length why biting is wrong.", why: "A long lecture is too much for a toddler; a few words work better." }
          ], best: 1 }
      ]
    },
    {
      id: "milestones", stage: "toddler", kind: "guide", title: "Milestones and when to get help", emoji: "📈",
      blurb: "What the checklists mean, and why 'wait and see' isn't the answer.",
      guidance: [
        "CDC's 'Learn the Signs. Act Early.' checklists cover 2, 4, 6, 9, 12, 15, 18, 24 and 30 months, then 3, 4 and 5 years.",
        "Since 2022 they list what at least 75% of children do by that age. So a missed milestone is a reason to talk to your GP or child health nurse now, not to wait and see.",
        "The checklists start a conversation; they're not a diagnosis.",
        "Your child's health checks (and the 'blue book' in NSW, or your state's equivalent record) track development too.",
        "Losing skills they already had, at any age, should always be checked promptly."
      ],
      partner: ["Both parents can fill in the checklist; you each notice different things."],
      help_when: ["A missed milestone, a loss of skills, or a gut feeling something's off: talk to your GP or child health nurse. Early support works best."],
      links: [
        { t: "CDC milestone checklists by age", url: "https://www.cdc.gov/act-early/resources/milestones-checklist-by-age.html" },
        { t: "Pregnancy, Birth and Baby nurse line", url: "https://www.pregnancybirthbaby.org.au/pregnancy-helpline-numbers" }
      ],
      checked: "Nov 2026",
      tip: "Do the checklist for your child's current age together this week.",
      sources: ["CDC", "AAP"]
    },
    {
      id: "toddler-active", stage: "toddler", kind: "guide", title: "Screens, play and sleep for toddlers", emoji: "🧩",
      blurb: "WHO's daily guidelines for 1–2 and 3–4 year olds.",
      guidance: [
        "Screens: none at age 1; no more than 1 hour a day at age 2–4. Less is better.",
        "Activity: at least 180 minutes of varied physical activity a day, spread through the day (from 3, including at least 60 minutes of energetic play).",
        "Sleep: 11–14 hours a day (including naps) at 1–2 years; 10–13 hours at 3–4.",
        "Don't keep them strapped in prams, high chairs or car seats more than 1 hour at a time.",
        "Read and play together every day; when screens are used, watch with them and talk about it."
      ],
      partner: ["Agree the screen rules together, and model them (phones away at meals and play)."],
      help_when: ["Ongoing sleep problems, snoring with pauses in breathing, or a child who seems very tired in the day: see your GP."],
      links: [
        { t: "WHO: activity, screens and sleep under 5", url: "https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more" }
      ],
      checked: "Nov 2026",
      tip: "Pick one daily screen-free routine (meals, or the hour before bed).",
      sources: ["WHO 2019"]
    },
    {
      id: "toilet-training", stage: "toddler", title: "Toilet training", emoji: "🚽",
      blurb: "When they're ready (usually 18 months to 3 years), and how to keep it calm.",
      going_on: "There's no set age. Most children show readiness between 18 months and 3 years. Starting before they're ready usually takes longer, not shorter.",
      say: ["\"You told me you needed to go. Well done for listening to your body.\"", "\"Accidents happen. Let's clean up together.\"", "\"Want to sit on the potty before the bath?\""],
      avoid: ["Starting during big changes (new sibling, moving house, starting childcare)", "Punishing or shaming accidents", "Comparing with other kids"],
      steps: ["Look for signs: stays dry 1–2 hours, notices a wet or dirty nappy, shows interest, can sit and stand up, follows simple instructions.", "Make it routine: sit on the potty at set times (after waking, after meals, before bath).", "Praise trying, not just success. Keep it light.", "If it's a battle, stop for a few weeks and try again."],
      why: "Children learn this when their body and brain are ready. Calm, low-pressure routines avoid power struggles.",
      tip: "Watch for three readiness signs this week before deciding to start.",
      sources: ["NHS", "HealthyChildren.org (AAP)"],
      scenarios: [
        { q: "Three days into toilet training, your 2½-year-old has had several accidents and is now refusing the potty.",
          options: [
            { t: "Insist she sits on it until she goes.", why: "Forcing it usually creates a power struggle and more refusal." },
            { t: "Stay calm about accidents, go back to nappies for a few weeks, and try again when she's showing more signs.", why: "Low pressure and well timed. Most kids get there faster this way." },
            { t: "Tell her big girls don't wear nappies.", why: "Shame tends to backfire and can cause holding on." }
          ], best: 1 }
      ]
    }
  ];

  C.situations.forEach(s => { s.stage = s.stage || "kids"; });
  C.situations.push(...cards);
})();
