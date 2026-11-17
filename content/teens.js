// Content for ages 12-19. Loaded after early-years.js (which defines stages and the help page).
// Same two card kinds as early-years.js: relationship cards with scenarios, and "guide" cards (no quiz).
// Laws differ by state: guides say "check your state" and link official pages.
// Research and full source list: sources/Tweens and Teens (12-19) - Research Findings.md
(function () {
  const C = window.CONTENT;
  C.ageRange = "pregnancy–19";
  C.stages.push({ id: "teens", title: "Tweens and teens", emoji: "🎧", ages: "12–19 years", intro: "From manager to consultant. Staying close while they grow away, plus the health, safety and law you need to know." });

  C.help.intro = "If you, your partner or your kids are struggling, you're not failing, and help works. About 1 in 5 mums and 1 in 10 dads have anxiety or depression in pregnancy or the first year, and mental health problems often first show up in the teen years.";
  C.help.lines.push(
    { name: "Kids Helpline", num: "1800 55 1800", note: "24/7 counselling for young people aged 5–25." },
    { name: "headspace (eheadspace)", num: "1800 650 890", note: "Mental health support for 12–25 year olds and their families." },
    { name: "Butterfly Foundation", num: "1800 33 4673", note: "Eating disorders and body image, 8am–midnight, 7 days." }
  );
  C.help.teen = [
    "If your teen is in immediate danger or has hurt themselves badly: call 000.",
    "If you're worried they're thinking about suicide, ask directly and calmly: \"Are you thinking about killing yourself?\" Asking does not put the idea in their head.",
    "Listen more than you talk. Thank them for telling you. Stay with them, and keep them away from anything they could use to hurt themselves.",
    "Get help together: call Lifeline (13 11 14) or Kids Helpline (1800 55 1800), or book your GP or headspace.",
    "Look after yourself too. Call Lifeline or talk to your GP about your own stress."
  ];
  C.help.links.push(
    { t: "headspace: for families", url: "https://headspace.org.au/" },
    { t: "Kids Helpline", url: "https://kidshelpline.com.au/" },
    { t: "eSafety: report online abuse", url: "https://www.esafety.gov.au/report" },
    { t: "healthdirect: mental health helplines", url: "https://www.healthdirect.gov.au/mental-health-helplines" }
  );

  const cards = [
    // ---------- RELATIONSHIP CARDS ----------
    {
      id: "teen-connected", stage: "teens", title: "Staying connected", emoji: "🚗",
      blurb: "They talk less, close the door, and stop telling you things.",
      going_on: "Pulling away is a normal part of building their own identity. They still need you, just differently. Most of what you'll ever know about their life comes from them choosing to tell you, so the relationship is your main safety system.",
      say: ["\"Want to come for a drive? I need a hand with something.\"", "\"Sorry, I've gone into fix-it mode. Tell me again.\"", "\"Thanks for telling me. I'm glad you did.\""],
      avoid: ["Interrogating the moment they walk in", "Overreacting when they tell you something bad (they'll stop telling you)", "Lecturing when they just want to vent"],
      steps: ["Use side doors: car trips, walks, cooking, late-night snacks. Side by side beats face to face.", "Be a witness, not a fixer. Ask \"Do you want help or do you want me to listen?\"", "Stay calm when they share bad news. Your first reaction decides whether they tell you next time.", "Keep a small regular thing that's just yours (a breakfast, a game, a show)."],
      why: "Research shows parents mostly know what teens are up to because teens tell them. Warm, calm parents get told more, and that keeps teens safer.",
      tip: "Offer one side-door outing this week (a drive, a walk, a coffee) with no agenda.",
      sources: ["Stattin & Kerr 2000", "Podcast: Christian O'Connell, Russel Howcroft, Scott Cam", "Gordon, P.E.T."],
      scenarios: [
        { q: "In the car, your 14-year-old mentions a friend at a party \"got really drunk and vomited everywhere.\"",
          options: [
            { t: "\"Were YOU drinking? Right, you're not going to any more parties.\"", why: "An instant crackdown teaches them not to tell you things." },
            { t: "\"Oh wow. How did everyone handle it? Was she okay?\" Then later: \"If you're ever somewhere like that and need a lift, call me. No questions that night.\"", why: "Stays curious and calm, keeps the story coming, and adds a safety plan." },
            { t: "Say nothing and change the subject.", why: "A missed chance. They brought it up, which is often a test of how you'll react." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-rudeness", stage: "teens", title: "Eye-rolls, rudeness and pushing away", emoji: "🙄",
      blurb: "Sarcasm, slammed doors, \"you don't get it\".",
      going_on: "Teen brains react more strongly to emotion and stress, and their self-control is still developing. Rudeness is usually a sign of overwhelm, not contempt. You can hold the line on respect without taking the bait.",
      say: ["\"I won't be spoken to like that. And you sound really stressed. I'm here when you want to talk.\"", "\"Let's try that again.\"", "Later: \"Something's been going on for you. Want to tell me about it?\""],
      avoid: ["Matching their tone", "Getting into a power struggle in the heat of the moment", "Holding a grudge afterwards"],
      steps: ["Stay calm and name the limit in one sentence.", "Don't argue it out right then. Step away if you need to.", "Come back later when everyone's calm and ask what's really going on.", "Repair: if you lost it too, say sorry for your part."],
      why: "Calm limits model the self-control they're still building. Coming back to it later is when they can actually hear you.",
      tip: "Pick your one-line response to rudeness and practise it so it comes out calm.",
      sources: ["Kennedy, Good Inside", "NIMH, The Teen Brain", "Podcast: Wayne Hope"],
      scenarios: [
        { q: "You ask your 15-year-old to unload the dishwasher. She rolls her eyes and says \"Oh my god, you're SO annoying.\"",
          options: [
            { t: "\"Don't you dare speak to me like that! Phone. Now.\"", why: "Escalates fast and turns it into a power battle." },
            { t: "Calmly: \"Not okay to talk to me like that. Dishwasher still needs doing.\" Later: \"You seemed really fed up earlier. Rough day?\"", why: "Holds the limit and the task, doesn't take the bait, and reconnects later." },
            { t: "Do it yourself to avoid a fight.", why: "Keeps the peace now, but teaches that rudeness gets her out of jobs." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-rules", stage: "teens", title: "Rules, freedom and negotiating", emoji: "🗝️",
      blurb: "Curfews, sleepovers, \"everyone else is allowed\".",
      going_on: "Wanting independence isn't defiance; it's their job at this age. Freedom should grow as they show they can handle it. Teens accept rules better when they understand the reasons and have had a say.",
      say: ["\"Here's what I'm worried about. What would make this work?\"", "\"Make me a good case and I'll think about it.\"", "\"You handled the last one well, so let's try 11 instead of 10.\""],
      avoid: ["\"Because I said so\" as your only reason", "Rules that never change as they grow", "Saying yes in the moment, then backing out"],
      steps: ["Explain your reasons. Parents tend to under-explain to teens.", "Negotiate the non-safety stuff. Teach them to argue a case well.", "Hold firm on safety: knowing where they are, how they get home, no drink driving.", "Widen freedom step by step as trust is shown, and pull back a little (not completely) when it isn't."],
      why: "Authority based on reasons and fairness gets challenged less than authority based on power, and negotiation builds skills they'll need as adults.",
      tip: "Ask your teen which rule they think is unfair, and hear their case properly.",
      sources: ["Steinberg, The Ten Basic Principles of Good Parenting", "Baumrind (authoritative parenting)", "Podcast: Craig Foster"],
      scenarios: [
        { q: "Your 16-year-old asks to stay at a party until 1am. Your usual curfew is 11.",
          options: [
            { t: "\"No. Curfew's 11, end of discussion.\"", why: "Safe, but it shuts down the negotiation skill you want them to build." },
            { t: "\"Tell me more: whose place, who's going, how you'd get home. If it checks out, let's say 12:30 and I'll pick you up.\"", why: "Gets the safety facts, gives a little, and keeps you in the loop." },
            { t: "\"Sure, whatever, just be careful.\"", why: "No plan for getting home safely, and you've learned nothing about the party." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-trust", stage: "teens", title: "When they break your trust", emoji: "💔",
      blurb: "Lying, sneaking out, hiding risky behaviour.",
      going_on: "Most teens lie at some point, usually to protect their freedom or avoid your reaction. The goal isn't to catch them out; it's to rebuild a relationship where telling you the truth feels safer than lying.",
      say: ["\"I'm not angry that you're growing up. I'm scared because I couldn't keep you safe.\"", "\"I want you to feel safe telling me things, even bad things.\"", "\"Here's how we rebuild this.\""],
      avoid: ["Long-term blanket bans with no way back", "Shaming or humiliating them", "Reading their messages in secret (if they find out, trust breaks both ways)"],
      steps: ["Calm down first. Have the conversation when you're not furious.", "Say what you know, and how it made you feel (worry, not just anger).", "Ask for their side, and listen.", "Agree on a clear consequence and a clear path back to trust (what they'll do, for how long)."],
      why: "You can't yell someone into being honest. Teens who see a path back work to earn trust; teens who don't, get better at hiding.",
      tip: "Think about how you'd want to react if your teen told you something big, and say it out loud once.",
      sources: ["Podcast: Luke Carroll", "Stattin & Kerr 2000", "Lahey, The Gift of Failure"],
      scenarios: [
        { q: "You find out your 16-year-old said he was at a mate's house but was actually at a party an hour away.",
          options: [
            { t: "Ground him for two months and take his phone.", why: "Harsh and long, with no way back. It mostly teaches him to hide better." },
            { t: "Once you're calm: \"I know you weren't at Sam's. I was scared, because if something went wrong I wouldn't have known where you were. What happened?\" Then agree a consequence and how he can earn back trust.", why: "Honest, focused on safety, hears his side, and gives a path back." },
            { t: "Pretend you don't know, and check his location from now on.", why: "Avoids the conversation and swaps trust for surveillance." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-friends", stage: "teens", title: "Friends, peer pressure and parties", emoji: "🎉",
      blurb: "Friends matter more than ever, and so does fitting in.",
      going_on: "Teen brains are extra sensitive to reward and to what peers think, especially when friends are watching. Teens can make good decisions when calm; risky choices mostly happen in the moment with friends. Planning ahead helps.",
      say: ["\"Blame me. Tell them your dad's a nightmare.\"", "\"Text me 'X' anytime and I'll call with an 'emergency' to get you out.\"", "\"What would you do if someone offered you something?\""],
      avoid: ["Criticising their friends (they'll defend them and tell you less)", "Banning all parties", "Assuming 'my kid wouldn't'"],
      steps: ["Get to know their friends: make your house welcoming, drive them places.", "Plan exits ahead: a code word or 'X' text, and a no-questions-that-night pick-up.", "Know the basics of any party: whose house, adults home, how they're getting home.", "Rehearse what they'd say if pressured, while calm."],
      why: "Plans made in a calm moment are easier to follow in a hot one, and teens are more likely to bail out of a bad situation when they have an easy excuse.",
      tip: "Set up an 'X' text plan with your teen this week.",
      sources: ["Steinberg (dual systems)", "NIMH", "Podcast: Craig Foster, Scott Cam"],
      scenarios: [
        { q: "At 10:30pm your 15-year-old texts 'X' from a party.",
          options: [
            { t: "Call her straight away with a made-up 'family emergency', pick her up, and don't quiz her that night.", why: "Exactly the plan. She used it, and keeping your word means she'll use it again." },
            { t: "Pick her up and ask on the drive what happened and who was drinking.", why: "Understandable, but breaking 'no questions tonight' makes her less likely to use it next time." },
            { t: "Text back \"Are you okay? What's going on?\"", why: "Puts her on the spot in front of friends, which is what the plan avoids." }
          ], best: 0 }
      ]
    },
    {
      id: "teen-school", stage: "teens", title: "School pressure, motivation and failure", emoji: "📚",
      blurb: "Exams, low marks, \"what's the point\".",
      going_on: "Some teens push themselves too hard; others seem to have stopped caring. Both can be stress. Teens learn most from failures they own and recover from, as long as they don't feel their worth depends on marks.",
      say: ["\"What do you think went wrong? What will you try next time?\"", "\"I'm proud of how hard you worked, whatever the mark.\"", "\"Your marks don't change how much I love you.\""],
      avoid: ["Emailing teachers on their behalf about small things", "Doing their assignments", "Comparing them to siblings or other kids"],
      steps: ["Let them own their schoolwork and talk to teachers themselves.", "Ask about effort and strategy, not just the result.", "Watch for signs of too much stress: not sleeping, panic before tests, dropping everything else.", "If motivation has disappeared for weeks, look under it: tiredness, friendships, low mood, learning difficulties."],
      why: "Autonomy and recovering from failure build real confidence. Pressure and rescuing both make teens more anxious.",
      tip: "Next time a mark comes home, ask \"What did you learn from this?\" before anything else.",
      sources: ["Lahey, The Gift of Failure", "Seligman, The Optimistic Child", "Podcast: Dr Richard Harris"],
      scenarios: [
        { q: "Your 13-year-old fails a maths test and says \"I'm just dumb at maths.\"",
          options: [
            { t: "\"No you're not! You're really smart.\"", why: "Reassuring, but it doesn't help her work out what to do differently." },
            { t: "\"That's a rough result. What made it hard? What could you try before the next one?\"", why: "Treats it as a problem she can solve, not a verdict on her." },
            { t: "\"Right, I'm getting you a tutor and no more screens until your marks are up.\"", why: "Takes control away and makes maths feel like a punishment." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-puberty", stage: "teens", title: "Puberty and body talks", emoji: "🌱",
      blurb: "Periods, wet dreams, body changes and body image (usually 8–14).",
      going_on: "Puberty usually starts between 8 and 13 for girls and 9 and 14 for boys, and there's a wide range of normal. Kids cope much better when they know what's coming before it happens. Short, matter-of-fact chats work better than one big talk.",
      say: ["\"Your body's going to start changing soon. Here's what to expect.\"", "\"There's nothing you can't ask me about.\"", "\"Everyone's body changes at a different time. You're normal.\""],
      avoid: ["Leaving it all to the other parent", "Jokes or comments about their body or weight", "Waiting until it's already happening"],
      steps: ["Start before it begins (from around 8 for girls, 9 for boys).", "Use correct names for body parts. Keep it short and factual, and come back to it.", "Have the practical stuff ready: pads, deodorant, a plan for a first period at school.", "Comment on what their body can do, not how it looks. See a GP if puberty seems very early, very late, or you're worried."],
      why: "Kids who are prepared for puberty feel less anxious and ashamed, and are more likely to come to you with questions later.",
      tip: "Leave a good puberty book where your child will find it, and tell them they can ask you anything.",
      sources: ["NSW Kids Health Hub (Sydney Children's Hospitals)", "healthdirect", "Podcast: Maggie Dent"],
      scenarios: [
        { q: "Your 11-year-old son asks, embarrassed, why he's \"getting hairy.\" His mum isn't home.",
          options: [
            { t: "\"Ask your mum when she's back.\"", why: "Teaches him this topic isn't for talking about with you." },
            { t: "\"Good question. That's puberty starting. It's totally normal. Want me to explain what else will change?\"", why: "Calm, factual and open. He learns he can come to you." },
            { t: "Laugh: \"Welcome to manhood, mate!\"", why: "Friendly, but laughing can make him embarrassed to ask again." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-consent", stage: "teens", title: "Consent, dating and relationships", emoji: "💬",
      blurb: "Crushes, first relationships, and what respect looks like.",
      going_on: "Teens learn about relationships from friends, media and porn as much as from you, so your voice matters. Consent, respect and spotting controlling behaviour can be taught in everyday conversations long before they're dating. The age of consent is 16, or 17 in SA and Tasmania.",
      say: ["\"In a good relationship, you both feel free to say no.\"", "\"Someone checking your phone or telling you who to see isn't love. It's control.\"", "\"You can always talk to me, even if you think I'll be upset.\""],
      avoid: ["Teasing them about crushes", "Only talking about risks and never about respect and good feelings", "Different rules about relationships for sons and daughters"],
      steps: ["Use everyday moments (TV shows, songs, news) to ask what they think.", "Teach that consent is clear, freely given, and can be taken back anytime, and that drunk or pressured isn't consent.", "Talk about controlling behaviour: jealousy, checking phones, isolating from friends.", "Make sure they know you'd help them out of a bad situation without blame."],
      why: "Teens who've talked about consent and healthy relationships with a parent are better at recognising pressure and asking for help.",
      tip: "Next time a relationship comes up on screen, ask \"Was that okay? Why or why not?\"",
      sources: ["ReachOut", "Youth Law Australia", "eSafety"],
      scenarios: [
        { q: "Your 15-year-old's new boyfriend messages her constantly and gets upset if she doesn't reply fast. She says it's \"because he really likes me.\"",
          options: [
            { t: "\"He sounds controlling. You need to break up with him.\"", why: "May be right, but ordering it usually pushes her towards him." },
            { t: "\"How does it feel when he gets upset like that? What do you think a good relationship feels like?\"", why: "Helps her think it through herself, and keeps you as someone she can talk to." },
            { t: "Ignore it. It's just teenage stuff.", why: "Constant checking and upset can be early signs of control, so it's worth gently raising." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-phones", stage: "teens", title: "Phones, gaming and social media", emoji: "📱",
      blurb: "First phones, the under-16 social media rules, and screen battles.",
      going_on: "Since 10 December 2025, major platforms like Instagram, TikTok, Snapchat and YouTube must stop under-16s having accounts in Australia. Teens and parents aren't penalised. Group chats and gaming are still a big part of their social life. Rules work best when the family makes them together, and parents follow them too.",
      say: ["\"Let's write our family phone rules together, including mine.\"", "\"If anything online ever makes you feel weird or scared, tell me. You won't lose your phone for telling me.\"", "\"What's the best and worst thing about your group chat?\""],
      avoid: ["Taking the phone as a punishment for everything (they'll stop telling you about problems)", "Phones in bedrooms overnight", "Your own phone at the dinner table"],
      steps: ["Agree family rules together: where phones live at night, phone-free meals, recreational screens around 2 hours a day.", "Keep phones out of bedrooms overnight: charge them in the kitchen.", "Talk about the under-16 rules and help them prepare for 16 (privacy settings, what to post, how to block and report).", "Promise they won't lose their phone for telling you something went wrong online."],
      why: "Teens follow rules they helped write. Promising no punishment for reporting problems keeps the door open when something goes wrong.",
      tip: "Set up a family charging spot outside bedrooms tonight.",
      sources: ["eSafety Commissioner", "Australian 24-Hour Movement Guidelines", "P.E.T. screen-time infographic"],
      scenarios: [
        { q: "Your 13-year-old is upset because \"everyone\" in her class is still on Snapchat and she's the only one who isn't.",
          options: [
            { t: "\"Tough. It's the law now. End of story.\"", why: "True, but it dismisses a real social worry." },
            { t: "\"That sounds really hard, feeling left out. Let's work out how you can stay in touch with your friends in other ways, and what we'll do when you turn 16.\"", why: "Takes her feelings seriously, holds the line, and solves the real problem: connection." },
            { t: "Help her make an account with a fake birthday.", why: "Teaches her to get around safety rules, and these platforms are restricted for good reasons." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-independence", stage: "teens", title: "First jobs, money and independence", emoji: "💼",
      blurb: "Part-time work, managing money, getting around on their own.",
      going_on: "Teens build confidence by doing real things for themselves: catching public transport, earning money, sorting out their own problems. Part-time jobs around 15–17 build responsibility. Your job is to hand over a little more each year.",
      say: ["\"You can work it out. Tell me if you get stuck.\"", "\"What's your plan for your pay?\"", "\"Call the dentist yourself. I'll be here if you need help.\""],
      avoid: ["Doing things for them that they can now do themselves", "Rescuing them from every money mistake", "Holding them back because it's faster to do it yourself"],
      steps: ["List what they could take over this year: booking appointments, cooking a meal a week, their own laundry, catching the bus.", "Encourage a part-time job or volunteering when they're ready.", "Teach simple money skills: a budget, saving, the cost of things. Let small mistakes happen.", "Gradually hand over decisions, and tell them when you've noticed them handling things well."],
      why: "Competence builds confidence. Teens who've practised adult tasks with a safety net cope better when they leave home.",
      tip: "Hand over one adult task to your teen this month, and don't take it back.",
      sources: ["Lahey, The Gift of Failure", "Podcast: Scott Pape (Barefoot pocket money)", "Podcast: Dr Billy Garvey"],
      scenarios: [
        { q: "Your 16-year-old spends his first month of pay in a week and asks you for money for the movies.",
          options: [
            { t: "Give him the money. It's only the movies.", why: "Kind, but takes away a cheap lesson in budgeting." },
            { t: "\"Not this time. Want to sit down and work out a plan for next pay so you've got money for the things you care about?\"", why: "Lets the natural consequence teach, and offers help to plan." },
            { t: "\"That's it, I'm managing your money from now on.\"", why: "Takes away the independence he needs to learn from." }
          ], best: 1 }
      ]
    },
    {
      id: "teen-launching", stage: "teens", title: "18–19: from manager to consultant", emoji: "🧳",
      blurb: "Finishing school, gap years, uni, moving out.",
      going_on: "At 18 they're legally adults, but most are still working out who they are, what they want to do, and how to look after themselves. Psychologists call 18–25 'emerging adulthood'. Your role shifts from making decisions to giving advice when asked.",
      say: ["\"It's your call. Want my thoughts?\"", "\"You can always come home.\"", "\"I'm proud of who you're becoming.\""],
      avoid: ["Making their decisions for them", "Treating them like a 12-year-old because they live at home", "Hiding how sad you are, or making them responsible for it"],
      steps: ["Ask before giving advice.", "If they live at home, agree adult house rules together: contributing money or jobs, letting you know if they won't be home.", "Let them make their own study and work choices, including ones you wouldn't.", "Expect to grieve and celebrate at the same time when they leave. Keep in touch in ways that suit them."],
      why: "Young adults who feel respected and supported stay closer to their parents, and come back for advice more often.",
      tip: "Next time they tell you a plan, ask \"Do you want my thoughts, or should I just listen?\"",
      sources: ["Arnett, Emerging adulthood (2000)", "Podcast: Ben Quilty, Santo Cilauro, Christian O'Connell"],
      scenarios: [
        { q: "Your 18-year-old says she wants to defer uni and work at a ski resort for a year.",
          options: [
            { t: "\"Absolutely not. You'll never go back.\"", why: "She's an adult. Forbidding it mostly damages the relationship." },
            { t: "\"Sounds like an adventure. Want to talk through the plan together: money, where you'll live, and how deferring works?\"", why: "Respects her choice and offers help as a consultant." },
            { t: "\"Do whatever you want, it's your life.\"", why: "Respects her choice, but walks away from being her sounding board." }
          ], best: 1 }
      ]
    },

    // ---------- HEALTH AND SAFETY GUIDES ----------
    {
      id: "teen-mental-health", stage: "teens", kind: "guide", title: "Mental health and asking about suicide", emoji: "🧠",
      blurb: "Warning signs, how to ask, and where to get help.",
      guidance: [
        "Mental health problems often first appear in the teen years. In Australia's 2020–22 national survey, 38.8% of 16–24 year olds had a mental disorder in the past year, most often anxiety.",
        "Warning signs that last 2 weeks or more: withdrawing from friends, family or activities; big changes in sleep, eating or weight; falling grades or refusing school; new irritability; hopelessness; self-harm; talking about death or not wanting to be here.",
        "If you're worried, ask directly: \"Are you thinking about suicide?\" Research shows asking does not put the idea in their head, and may help.",
        "Listen without judging, thank them for telling you, and don't promise to keep it secret if they're at risk.",
        "Get help together: your GP (ask about a Mental Health Treatment Plan), headspace, Kids Helpline or Lifeline.",
        "If they're in immediate danger, call 000 and stay with them."
      ],
      partner: ["Agree who will check in, and share what you notice with each other. Look after your own mental health too."],
      help_when: ["Any talk of suicide, a plan, or self-harm: get help the same day (GP, Lifeline 13 11 14, Kids Helpline 1800 55 1800). Call 000 if they're in danger now.", "Low mood, anxiety or withdrawal lasting more than 2 weeks: see your GP or headspace."],
      links: [
        { t: "NIMH: The Teen Brain, 7 things to know", url: "https://www.nimh.nih.gov/health/publications/the-teen-brain-7-things-to-know" },
        { t: "headspace: for families", url: "https://headspace.org.au/" },
        { t: "healthdirect: mental health helplines", url: "https://www.healthdirect.gov.au/mental-health-helplines" }
      ],
      checked: "Nov 2026",
      tip: "Save Kids Helpline and Lifeline in your phone, and in your teen's.",
      sources: ["ABS National Study of Mental Health and Wellbeing 2020–22", "NIMH", "Dazzi et al. 2014; Blades et al. 2018"]
    },
    {
      id: "teen-eating", stage: "teens", kind: "guide", title: "Eating disorders and body image", emoji: "🪞",
      blurb: "Early signs, and why acting early matters.",
      guidance: [
        "Eating disorders usually begin in adolescence and are among the most serious mental illnesses. They affect boys and girls.",
        "Early signs: skipping meals or cutting out food groups, counting calories, secret or compulsive exercise, weight loss or gain, avoiding eating with others, and a lot of talk about weight or shape.",
        "People often hide it, so trust a gut feeling that something's off.",
        "At home: talk about what bodies can do, not how they look. Don't comment on weight (theirs, yours or anyone's). Eat together regularly.",
        "Early help works best. See your GP for an assessment, and don't wait for weight loss to get serious."
      ],
      partner: ["Make sure you're both avoiding diet talk and weight comments at home."],
      help_when: ["Any of the early signs: see your GP and call the Butterfly helpline (1800 33 4673).", "Fainting, chest pain, extreme weakness or very rapid weight loss: go to the emergency department or call 000."],
      links: [
        { t: "Butterfly Foundation: warning signs", url: "https://butterfly.org.au/?p=928" },
        { t: "NEDC: understanding the warning signs", url: "https://nedc.com.au/eating-disorders/early-intervention/understanding-the-warning-signs" }
      ],
      checked: "Nov 2026",
      tip: "Make your house a 'no comments about bodies' zone, starting with your own.",
      sources: ["Butterfly Foundation", "NEDC", "Flinders University study"]
    },
    {
      id: "teen-substances", stage: "teens", kind: "guide", title: "Alcohol, vaping and drugs", emoji: "🚫",
      blurb: "The guidelines, the law, and how to talk about it.",
      guidance: [
        "Alcohol: Australia's guidelines (NHMRC 2020) say under-18s should not drink alcohol. Their brains are still developing, and starting early raises the risk of problems later. Delaying the first drink is the goal.",
        "Giving alcohol to other people's under-18 children without their parents' permission is illegal in most states. The rules vary, so check your state.",
        "Vaping: since 1 October 2024, vapes can only be sold in pharmacies. Under-18s need a prescription, and some states don't allow it at all. Any vape bought from a shop or friend is illegal.",
        "Talk early and often, explain your reasons, and be clear about your family's rules.",
        "Agree a no-questions-that-night pick-up for whenever they're unsafe, drunk, or with a driver who's been drinking."
      ],
      partner: ["Agree your family rules together, and think about how your own drinking looks to them."],
      help_when: ["Your teen is drinking or using drugs regularly, or you're worried about their safety: talk to your GP or call the ADF's DrugInfo line via adf.org.au.", "Someone is unconscious, hard to wake, or having trouble breathing: call 000."],
      links: [
        { t: "NHMRC: alcohol guidelines", url: "https://www.nhmrc.gov.au/health-advice/alcohol" },
        { t: "ADF: secondary supply laws", url: "https://adf.org.au/insights/secondary-supply/" },
        { t: "TGA: vaping laws", url: "https://www.tga.gov.au/blogs/tga-topics/nicotine-vaping-laws-are-changing" }
      ],
      checked: "Nov 2026",
      tip: "Tell your teen about the no-questions pick-up, and mean it.",
      sources: ["NHMRC (2020)", "Australian Drug Foundation", "TGA", "Podcast: Scott Cam"]
    },
    {
      id: "teen-online-safety", stage: "teens", kind: "guide", title: "Online safety: porn, nudes and sextortion", emoji: "🛡️",
      blurb: "What they'll see, what the law says, and what to do if something goes wrong.",
      guidance: [
        "Most teens see online porn, often by accident and often before 13. Talk about it before they find it: it's not what real sex or relationships are like, and they can always talk to you.",
        "It's illegal under federal law for anyone, including teens, to make, have or send sexual images of someone under 18, even if they sent their own photo and the other person agreed. Some states have exceptions for young people.",
        "Sextortion (being threatened unless they send money or more images) is increasing. Tell them: don't pay, stop replying, keep the evidence, and tell an adult. It's not their fault.",
        "Report image-based abuse, sextortion and serious cyberbullying to eSafety (esafety.gov.au/report).",
        "Promise they won't be punished or lose their phone for telling you something went wrong online."
      ],
      help_when: ["Someone is sharing or threatening to share an image of your teen: report to eSafety now, and to police if they're under 18.", "Your teen seems frightened, withdrawn or talks about self-harm after something online: get help the same day (see Mental health)."],
      links: [
        { t: "eSafety: report abuse", url: "https://www.esafety.gov.au/report" },
        { t: "eSafety: young people and porn research", url: "https://www.esafety.gov.au/newsroom/blogs/too-much-too-soon-the-reality-of-childrens-access-to-porn-online" },
        { t: "Youth Law Australia (state laws)", url: "https://yla.org.au/" }
      ],
      checked: "Nov 2026",
      tip: "Tell your teen: \"If anyone ever threatens you online, come to me. You won't be in trouble.\"",
      sources: ["eSafety Commissioner", "ReachOut", "WA Health (Get the Facts)", "Youth Law Australia"]
    },
    {
      id: "teen-driving", stage: "teens", kind: "guide", title: "Learning to drive", emoji: "🚙",
      blurb: "L and P plates, passengers, and the riskiest first year.",
      guidance: [
        "The first year of solo driving has the highest crash risk. Graduated licensing (L and P plates) exists to get new drivers through it safely.",
        "Passengers raise the risk sharply. After Victoria limited P1 drivers to one peer passenger, crashes carrying 2 or more peers fell by about 70%.",
        "Do more than the minimum logbook hours, and practise in rain, at night, on highways and in heavy traffic.",
        "Agree family rules on top of the law, such as no friends in the car for the first 6–12 months, phone out of reach, and no driving when tired.",
        "Model it: no phone while you're driving.",
        "Licence ages and P-plate rules differ by state. Check your state's licensing authority."
      ],
      partner: ["Share the supervising, and agree the family driving rules together."],
      help_when: ["Your teen has a near miss, a crash or a fine: talk it through calmly, and consider more supervised practice or a professional lesson."],
      links: [
        { t: "VicRoads: evaluation of graduated licensing", url: "https://www.vicroads.vic.gov.au/~/media/files/documents/safety-and-road-rules/examination-of-the-impact-of-the-gls-on-young-drivers-oct-2017.pdf" },
        { t: "Research summary: night passenger limits", url: "https://www.aeaweb.org/research/charts/teen-drivers-australian-intervention" }
      ],
      checked: "Nov 2026",
      tip: "Write down your family driving rules before they get their Ps.",
      sources: ["VicRoads (2017)", "American Economic Association research summary", "Podcast: Scott Cam"]
    },
    {
      id: "teen-health-basics", stage: "teens", kind: "guide", title: "Sleep, activity and school vaccines", emoji: "😴",
      blurb: "Australia's guidelines for 12–17 year olds.",
      guidance: [
        "Sleep: 9–11 hours a night up to 13, then 8–10 hours at 14–17. Body clocks shift later at puberty, so teens genuinely aren't tired early.",
        "Keep bed and wake times within about 30 minutes of each other, weekends included. No screens for an hour before bed, and no screens in bedrooms.",
        "Activity: at least 60 minutes a day of moderate-to-vigorous activity, plus vigorous and muscle-strengthening activity 3 days a week.",
        "Recreational screen time: no more than 2 hours a day (schoolwork doesn't count).",
        "School vaccines (National Immunisation Program): HPV and a diphtheria-tetanus-whooping cough booster in Year 7; meningococcal ACWY in Year 10. Some states add more. Watch for the consent forms."
      ],
      partner: ["Model the screen and sleep habits you want them to follow."],
      help_when: ["They're very tired during the day, snore with pauses in breathing, or can't sleep for weeks: see your GP.", "They missed a school vaccine: your GP can catch them up for free."],
      links: [
        { t: "24-hour movement guidelines (5–17)", url: "https://www.health.gov.au/topics/physical-activity/24-hour-movement-guidelines-for-all-australians" },
        { t: "NSW Health: school vaccination program", url: "https://www.health.nsw.gov.au/immunisation/Pages/school-vaccination-parents.aspx" }
      ],
      checked: "Nov 2026",
      tip: "Agree a weekend wake-up time within an hour of the school-day one.",
      sources: ["Australian 24-Hour Movement Guidelines (2019)", "NIMH", "State health departments"]
    }
  ];

  C.situations.push(...cards);
})();
