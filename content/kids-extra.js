// Extra 3-12 content. Loaded right after situations.js.
// 1) New cards for gaps: bullying, grief, separation, bedwetting, swearing, sharing, hard conversations.
// 2) Extra scenarios added to the original cards so every Kids card has 3+.
(function () {
  const C = window.CONTENT;
  const sc = (q, a, b, c, best) => ({ q, options: [{ t: a[0], why: a[1] }, { t: b[0], why: b[1] }, { t: c[0], why: c[1] }], best });

  const cards = [
    {
      id: "bullying", stage: "kids", title: "Bullying", emoji: "🛡️",
      blurb: "Being picked on, left out on purpose, or bullied online.",
      going_on: "Bullying is repeated, deliberate misuse of power: one child or a group hurting someone who can't easily stop it. It can be physical, verbal, social (leaving out, rumours) or online. A one-off fight or a falling-out between equals isn't bullying, but still needs handling. Kids often don't tell, out of shame or fear it'll get worse.",
      say: ["\"Thank you for telling me. This isn't your fault.\"", "\"Tell me what happened, from the start.\"", "\"We'll work out what to do together. I won't do anything without talking to you first.\""],
      avoid: ["\"Just ignore them\" or \"hit them back\"", "Storming into the school or confronting the other child's parents", "Taking their device away because they were bullied online"],
      steps: ["Stay calm, listen to the whole story, and believe them.", "Write down what happened: dates, who, where. Screenshot online bullying.", "Make a plan together: who they can go to at school, safe places at lunch, friends to stick with.", "Contact the teacher or school calmly, ask what their anti-bullying policy says, and follow up. Report serious online bullying to eSafety.", "Watch for signs it's continuing: not wanting to go to school, tummy aches, lost belongings, being withdrawn."],
      why: "Children who are believed and have a plan cope better, and schools act faster on calm, specific reports.",
      tip: "Ask at dinner: \"Who was kind at school today? Was anyone unkind?\"",
      sources: ["Bullying No Way (Australian education ministers)", "eSafety Commissioner", "Kids Helpline"],
      scenarios: [
        sc("Your 8-year-old finally tells you that a group of kids have been calling him names and won't let him play for weeks.",
          ["\"Why didn't you tell me sooner?\"", "Natural, but it can make him feel he did something wrong."],
          ["\"I'm so glad you told me. That sounds really hard. Tell me what happens, and let's make a plan together.\"", "Believes him, praises telling, and keeps him involved in what happens next."],
          ["\"Just ignore them and they'll get bored.\"", "Ignoring rarely stops ongoing bullying, and he's already tried to cope alone."], 1),
        sc("Your 11-year-old shows you nasty messages about her in a class group chat.",
          ["Take her phone away so she can't see them.", "Punishes the child who was targeted and stops her telling you next time."],
          ["Screenshot the messages, help her leave or mute the chat, and contact the school. Report it to eSafety if it's serious.", "Saves evidence, protects her, and gets adults involved."],
          ["Message the kids in the chat yourself to tell them off.", "Adults joining in usually inflames it. Go through the school."], 1),
        sc("You find out your 9-year-old has been leaving a classmate out and laughing at him with friends.",
          ["\"I can't believe you'd do that. You're grounded.\"", "Shame and punishment alone don't build empathy."],
          ["\"Kids who are left out feel awful. What's going on? How could you make it right?\" Then help him follow through.", "Takes it seriously, builds empathy, and gives him a way to repair."],
          ["\"Boys will be boys. He'll toughen up.\"", "Brushes off real harm to the other child."], 1)
      ]
    },
    {
      id: "grief", stage: "kids", title: "Death and grief", emoji: "🕊️",
      blurb: "When a grandparent, pet or someone they know dies.",
      going_on: "Most children understand that death is permanent and happens to everyone by about 5–7, and that the body stops working completely a bit later. Younger kids may ask the same questions again and again, or seem fine and then play. That's normal: children grieve in bursts. Euphemisms like 'went to sleep' or 'we lost her' confuse them.",
      say: ["\"Grandma died. Her body stopped working and she can't come back.\"", "\"It's okay to feel sad, or angry, or even nothing right now.\"", "\"I miss her too.\" (it's okay to cry in front of them)"],
      avoid: ["\"She's gone to sleep\" (can make kids scared of sleeping)", "Hiding the death or your sadness", "Telling them to be brave or not to cry"],
      steps: ["Tell them soon, simply and honestly, using the words 'died' and 'dead'.", "Explain the cause in simple terms so they don't invent their own (often self-blaming) explanation.", "Answer questions honestly, even repeated ones. It's okay to say \"I don't know.\"", "Let them choose how to be involved: the funeral, a drawing, a memory box.", "Keep routines going. If big changes in sleep, mood or school last for months, talk to your GP."],
      why: "Clear, honest information helps children feel safe. Seeing adults grieve teaches them it's okay to have big feelings.",
      tip: "If someone in the family is ill, think now about the words you'd use to tell your kids.",
      sources: ["Speece & Brent (1984), children's understanding of death", "CHOP", "AAP (HealthyChildren.org)"],
      scenarios: [
        sc("Your 5-year-old's grandfather has just died. She asks, \"When is Pop coming back?\"",
          ["\"Pop has gone to sleep for a very long time.\"", "Confusing, and can make her afraid of going to sleep."],
          ["\"Pop died. His body stopped working, and he can't come back. We'll miss him a lot.\"", "Clear and honest. She may ask again, and that's normal."],
          ["\"Let's not talk about that now. Do you want ice cream?\"", "Distraction tells her the topic is off limits."], 1),
        sc("A week after the family dog died, your 7-year-old seems fine at school but sobs at bedtime: \"It's my fault, I didn't walk him enough.\"",
          ["\"Don't be silly, it wasn't your fault. Go to sleep.\"", "Right message, but brushes past her feelings."],
          ["Sit with her: \"You really loved him. He died because he was old and sick. Nothing you did caused it.\" Then share a favourite memory together.", "Comforts, corrects the self-blame gently, and helps her remember."],
          ["\"We'll get a new puppy on the weekend.\"", "Skips the grieving she needs to do first."], 1),
        sc("Your 10-year-old asks whether she can come to her grandmother's funeral.",
          ["\"Funerals aren't for kids.\"", "Many children want to be included, and it can help them say goodbye."],
          ["Explain what will happen at the funeral, let her choose, and have a trusted adult with her who can take her out if she needs a break.", "Prepares her, gives her a choice, and supports her."],
          ["Make her go, whether she wants to or not.", "Being forced can be upsetting. Offer, prepare and let her choose."], 1)
      ]
    },
    {
      id: "separation-divorce", stage: "kids", title: "Separation and divorce", emoji: "🏠",
      blurb: "Telling the kids, two homes, and keeping them out of the middle.",
      going_on: "Most children of separated parents grow up well-adjusted. The thing research links most strongly to problems is ongoing conflict between parents, during and after separation, especially when kids are caught in the middle. Children often secretly think it's their fault, or that they can fix it.",
      say: ["\"Mum and Dad have decided to live in different houses. This is a grown-up decision, and it's not your fault.\"", "\"We both love you, and that won't change.\"", "\"You're allowed to love both of us and enjoy both homes.\""],
      avoid: ["Criticising the other parent in front of them", "Using them as messengers or spies", "Asking them to choose a side or where they want to live (young kids)", "Arguing at handovers"],
      steps: ["If you can, tell them together, with a simple, agreed explanation and no blame.", "Tell them what will stay the same and what will change: where they'll sleep, school, pets.", "Keep adult conflict away from them: talk to each other directly, by text or email if needed.", "Keep routines and rules similar across homes where possible.", "Get support for yourself: a counsellor, Family Relationship Advice Line, or mediation."],
      why: "Children cope best when both parents stay involved and conflict stays between the adults. Their wellbeing depends more on how parents handle separation than on the separation itself.",
      tip: "Agree with your co-parent on one rule you'll both keep: no criticism of each other in front of the kids.",
      sources: ["Amato (divorce research)", "Emery (interparental conflict)", "Grych 2005"],
      scenarios: [
        sc("At handover, your 7-year-old says quietly, \"Dad said you're the reason we can't be a family anymore.\"",
          ["\"Well, that's not true. Your father is the one who...\"", "Puts her further into the middle of adult conflict."],
          ["\"That must be confusing to hear. Splitting up was a grown-up decision, and it's never your job to work out who's to blame. We both love you.\" Then raise it with Dad privately.", "Reassures her, keeps her out of it, and deals with it between adults."],
          ["Say nothing, and stop her seeing Dad for a while.", "Punishes her for something between the adults."], 1),
        sc("Your 9-year-old says, \"If I'm really good, will you and Mum get back together?\"",
          ["\"Maybe, we'll see.\"", "False hope keeps him trying to fix something he can't."],
          ["\"I love that you want us all together. But this is a grown-up decision, and nothing you do caused it or can change it. We both love you exactly the same.\"", "Honest, clear, and lifts the burden off him."],
          ["\"Stop worrying about it.\"", "Dismisses a real worry many children have."], 1),
        sc("Your 11-year-old asks you to pass a message to her mum about money for an excursion, because \"you two just fight.\"",
          ["Send the message through her: \"Tell your mum she owes half.\"", "Makes her a messenger in adult money issues."],
          ["\"Thanks for telling me. I'll sort it out with Mum directly. That's not your job.\"", "Keeps her out of the middle and takes responsibility."],
          ["Pay it yourself and complain about her mum.", "Sorts the money but adds criticism she has to carry."], 1)
      ]
    },
    {
      id: "bedwetting", stage: "kids", title: "Bedwetting", emoji: "🌙",
      blurb: "Wet nights after toilet training is done.",
      going_on: "Bedwetting is common and isn't anyone's fault: about 1 in 5 children wet the bed at 5, 1 in 10 at 7, and 1 in 20 at 10. It's usually because their body makes a lot of urine at night, their bladder is small, or they sleep very deeply. Most grow out of it, and it usually doesn't need treatment before 6.",
      say: ["\"Lots of kids your age wet the bed. Your body's still learning.\"", "\"It's okay. Let's change the sheets together.\"", "\"You didn't do anything wrong.\""],
      avoid: ["Punishing, shaming or teasing (including from siblings)", "Cutting their drinks during the day", "Waking them at night as the main fix (it doesn't teach dryness)"],
      steps: ["Keep it low-key: waterproof mattress protector, spare sheets, pull-ups if they want them.", "Encourage plenty of water during the day, fewer drinks in the hour or two before bed, and a wee right before sleep.", "Treat constipation if present; it can make wetting worse.", "See your GP if they're still wetting after 6–7, if it starts again after being dry for months, or if they're upset by it. Bedwetting alarms and other treatments work well.", "Plan for sleepovers and camps quietly together."],
      why: "Shame makes it worse and doesn't speed it up. Most children become dry with time, and treatment works well for those who need it.",
      tip: "Put a mattress protector and a spare set of sheets where your child can reach them.",
      sources: ["Sydney Children's Hospitals Network", "healthdirect", "Raising Children Network"],
      scenarios: [
        sc("Your 6-year-old comes in at 2am, wet and crying: \"I'm sorry, I did it again.\"",
          ["\"Again? You're too old for this.\"", "Shame makes kids anxious and doesn't help them get dry."],
          ["\"It's okay, it's not your fault. Let's get you into dry pyjamas and change the sheets together.\"", "Calm and kind, keeps it a non-event."],
          ["Change the sheets in silence, looking annoyed.", "She'll still read your mood as blame."], 1),
        sc("Your 8-year-old is invited to a sleepover but is worried about wetting the bed.",
          ["\"You can't go until you stop wetting.\"", "Leaves her out and makes it feel like a bigger deal."],
          ["Talk it through: discreet pull-ups in a sleeping bag, a wee before bed, and a quiet word with the host parent if she's happy for you to. Book a GP visit to talk about options.", "Helps her join in and gets help, since she's over 6–7 and it's bothering her."],
          ["Tell her it'll be fine and send her off.", "Doesn't address her worry or give her a plan."], 1),
        sc("Your 7-year-old's older brother teases him about wetting the bed.",
          ["Ignore it; brothers tease.", "Teasing makes him more ashamed and anxious."],
          ["Speak to the older brother privately: \"Lots of kids wet the bed. Teasing isn't okay in our family.\"", "Protects his dignity and sets a clear family rule."],
          ["Tell the older brother off loudly in front of everyone.", "Draws even more attention to the wetting."], 1)
      ]
    },
    {
      id: "swearing", stage: "kids", title: "Swearing and rude words", emoji: "🤐",
      blurb: "From toilet talk to swear words they've picked up.",
      going_on: "Young kids love toilet words because they get a big reaction. Older kids try out swear words they've heard to sound grown-up, test limits, or express strong feelings. A calm, consistent response works better than a big one.",
      say: ["\"That's a word we don't use in our family.\"", "\"Do you know what that word means?\"", "\"You're really angry. Try 'I'm so mad!' instead.\""],
      avoid: ["Laughing (it guarantees a repeat)", "Big angry reactions", "Swearing yourself, then punishing them for it"],
      steps: ["Stay calm and say the family rule briefly.", "For little kids, give the toilet words a place: \"Toilet words are for the toilet.\"", "Ask older kids what it means. Explain why some words hurt people.", "Give them stronger words for big feelings.", "Notice your own language. If you slip, own it."],
      why: "Low-key, consistent responses take the power out of the words. Your own example matters most.",
      tip: "Agree as a family which words are okay at home and which aren't.",
      sources: ["Raising Children Network", "Kennedy, Good Inside", "Gordon, P.E.T."],
      scenarios: [
        sc("Your 4-year-old says \"poo-poo head!\" at dinner, and his sister laughs.",
          ["Laugh along; it's funny.", "He'll do it again for the reaction."],
          ["Calmly: \"Toilet words are for the bathroom.\" Then carry on with dinner.", "Low-key and clear, which takes away the reward."],
          ["\"Go to your room!\"", "A big reaction makes the words more exciting."], 1),
        sc("Your 9-year-old drops the F-word when she loses a video game.",
          ["\"WHAT did you just say?!\"", "Shock gives the word power."],
          ["\"Whoa, that game's got you really frustrated. That word's not okay here. What else could you say?\"", "Names the feeling, holds the rule, offers another way."],
          ["Ignore it.", "Sometimes fine for a one-off, but she needs to know the family rule."], 1),
        sc("Your 7-year-old swears and says, \"But YOU say it when you're driving!\"",
          ["\"Adults are allowed, kids aren't.\"", "Feels unfair, and they learn the rule is just about power."],
          ["\"You're right, I do, and I shouldn't. Let's both work on it. You can tell me if you hear me.\"", "Owns it and makes it a shared goal."],
          ["\"Don't talk back to me.\"", "Avoids the fair point he made."], 1)
      ]
    },
    {
      id: "sharing", stage: "kids", title: "Sharing and taking turns", emoji: "🧸",
      blurb: "\"Mine!\", grabbing, and playdates that go wrong.",
      going_on: "Sharing is hard for young kids: they're still learning to see things from someone else's point of view and to wait. Taking turns (I play, then you play) is easier than sharing (we both play with it at once). Forcing a child to hand something over straight away teaches that whoever complains gets the toy.",
      say: ["\"You can have a turn when Sam's finished.\"", "\"Let's set the timer. Five minutes each.\"", "\"Sam looks sad. What could we do?\""],
      avoid: ["Snatching the toy off your child to give it to someone else", "Calling them selfish", "Expecting a 3-year-old to share happily"],
      steps: ["Before playdates, let your child put away a few special toys that don't have to be shared.", "Use turns and timers rather than 'share it now'.", "Help the waiting child cope: \"Waiting is hard. Let's do something while you wait.\"", "Praise it when you see it: \"You gave him a turn. He looks so happy.\""],
      why: "Turn-taking with support builds patience and empathy. Children learn to share by being helped through it, not by being forced.",
      tip: "Before the next playdate, ask your child which toys they want to put away.",
      sources: ["Kennedy, Good Inside", "Raising Children Network", "Siegel & Bryson, The Whole-Brain Child"],
      scenarios: [
        sc("At a playdate, your 3-year-old grabs a truck from another child and yells \"MINE!\"",
          ["\"Give it back right now and say sorry!\"", "Fixes it fast, but doesn't teach turn-taking."],
          ["Gently take it back: \"Jack was using it. You can have a turn next. I'll help you wait.\" Then help her find something while she waits.", "Teaches turns and helps her cope with waiting."],
          ["Let her keep it; she's only three.", "The other child learns grabbing works, and so does she."], 1),
        sc("Your 5-year-old has had the swing for ages, and another child asks for a turn.",
          ["Lift him off the swing so the other child can have it.", "Teaches that complaining gets you what you want."],
          ["\"When you're finished, it's Mia's turn. Ten more swings, then you hop off.\" Then follow through.", "Clear, fair, and he gets to finish."],
          ["Tell the other child to go away.", "Doesn't teach turns to either child."], 1),
        sc("Your 6-year-old's friend is coming over, and she's worried he'll break her new Lego set.",
          ["\"You have to share everything with guests.\"", "Ignores a reasonable worry."],
          ["\"Would you like to put it away for today? Let's choose some toys you're happy to share.\"", "Respects her feelings and sets the playdate up to go well."],
          ["Cancel the playdate.", "Avoids the chance to practise sharing with support."], 1)
      ]
    },
    {
      id: "hard-talks", stage: "kids", title: "Hard conversations: bodies, sex and the news", emoji: "💬",
      blurb: "\"Where do babies come from?\" and \"Will the war come here?\"",
      going_on: "Kids ask big questions earlier than parents expect, and they'll find answers somewhere. It's better that they come from you. Short, honest, age-appropriate answers are enough; you can add more as they grow. For scary news, kids notice more than you think and often hide their worry.",
      say: ["\"Great question. What do you think?\" (find out what they actually want to know)", "\"I'm glad you asked me. You can always ask me anything.\"", "\"That's a scary thing to hear about. Here's what's being done to help, and here's how we're keeping safe.\""],
      avoid: ["\"You're too young for that\" (they'll ask someone else)", "Long, detailed lectures beyond what they asked", "Leaving the news on in the background"],
      steps: ["Find out what they know and what they're really asking.", "Answer briefly and honestly, using correct words for body parts. You can say \"Let me think about that and get back to you\" (then do).", "Body safety: teach that their body belongs to them, and there are no secrets from parents about touching.", "For news: ask what they've heard, keep it simple, limit exposure (especially images and repeated coverage), and point to the helpers.", "Keep the door open: \"You can ask me again any time.\""],
      why: "Children who can talk to their parents about bodies, sex and scary events are safer and less anxious. Honest, simple answers build trust.",
      tip: "Practise your one-line answer to \"Where do babies come from?\" for your child's age.",
      sources: ["AAP (HealthyChildren.org)", "American Psychological Association", "Raising Children Network"],
      scenarios: [
        sc("Your 4-year-old asks at the supermarket, loudly, \"How did the baby get in that lady's tummy?\"",
          ["\"Shh! I'll tell you when you're older.\"", "Teaches the topic is shameful and sends the question elsewhere."],
          ["\"Good question! Babies grow in a special place inside the mum called the uterus. Let's talk more about it at home.\"", "Short, true, and keeps the conversation open."],
          ["Give a full explanation of sex in the aisle.", "More than a 4-year-old is asking for, and the wrong place."], 1),
        sc("Your 8-year-old has seen news about a war and asks, \"Will bombs come to our house?\"",
          ["\"Don't be silly, that's not going to happen.\"", "Dismisses the fear without helping."],
          ["\"That's a scary thing to see. That's happening a long way away, and we're safe here. Lots of people are helping the families there. What else have you heard?\"", "Honest, reassuring, points to helpers, and checks what else they know."],
          ["Turn the news up and watch it together so he understands.", "Repeated scary coverage makes children more anxious."], 1),
        sc("Your 10-year-old asks what a word she heard at school means, and it's a sexual term.",
          ["\"Where did you hear that? Don't say it again.\"", "She'll learn not to ask you, and look it up online instead."],
          ["Stay calm: \"I'm glad you asked me. Here's what it means...\" Give a simple, honest answer, and ask what she's heard about it.", "Builds trust and gives accurate information before the internet does."],
          ["\"Ask your mum/dad.\"", "Signals discomfort and passes up the chance to be her go-to person."], 1)
      ]
    }
  ];
  cards.forEach(s => C.situations.push(s));

  // Extra scenarios for the original cards, so practice repeats less.
  const extra = {
    tantrum: [
      sc("Your 4-year-old screams and kicks because you won't let her wear sandals in the rain.",
        ["Argue: \"It's raining! Your feet will get wet! Be sensible!\"", "Reasoning doesn't land mid-meltdown."],
        ["Stay close and calm: \"You really wanted sandals. It's so disappointing.\" Wait it out, then offer gumboots or shoes.", "Names the feeling, holds the limit, and gives a small choice once she's calmer."],
        ["Let her wear sandals to stop the screaming.", "Teaches that screaming changes the answer."], 1),
      sc("Your 6-year-old has a meltdown at a birthday party because he didn't win the prize.",
        ["\"Stop it, you're embarrassing me.\"", "Shame adds to the overwhelm."],
        ["Take him somewhere quiet: \"You really wanted to win. That's so hard.\" Stay until he's calm, then decide together whether to go back in.", "Gives him space and support without an audience."],
        ["Ask the host if he can have a prize too.", "Solves it now, but he misses the chance to learn to cope with losing."], 1)
    ],
    aggression: [
      sc("Your 5-year-old throws a block at you when you say it's time to pack up.",
        ["Throw it back so he knows how it feels.", "Models the very thing you're trying to stop."],
        ["Calmly stop him: \"I won't let you throw things at me. You're angry it's pack-up time.\" Move the blocks, then pack up together.", "Safe, firm, names the feeling, and follows through."],
        ["\"Fine, play for another ten minutes.\"", "Teaches that throwing gets what he wants."], 1),
      sc("Your 8-year-old punched his friend during a game of soccer.",
        ["\"Say sorry right now!\" and leave it there.", "A forced sorry doesn't teach much."],
        ["Separate them and check on the friend. Later, when calm: \"What happened before you hit? What could you do next time you feel that mad?\" Help him make amends.", "Safety first, then reflection and repair."],
        ["Ban soccer for a month.", "A long, unrelated punishment doesn't build the skill he needs."], 1)
    ],
    cooperation: [
      sc("Your 6-year-old ignores you for the third time when you ask her to put her shoes on.",
        ["Yell from the kitchen: \"SHOES! NOW!\"", "Shouting from another room rarely works."],
        ["Go to her, get down to her level, touch her shoulder: \"Shoes on now, then you can choose the music in the car.\"", "Connection before direction, and a clear 'when-then'."],
        ["Put her shoes on for her while complaining.", "Sometimes needed, but it doesn't build cooperation."], 1)
    ],
    siblings: [
      sc("Your 9-year-old tells you his little sister keeps coming into his room and touching his things.",
        ["\"She's little, just let her.\"", "Dismisses a fair complaint and builds resentment."],
        ["\"That's annoying. Let's work out a plan together: a sign for your door, and a special box she's allowed to play with.\"", "Takes it seriously and solves it with him."],
        ["Tell his sister off in front of him.", "Takes sides and doesn't solve the problem."], 1)
    ],
    whining: [
      sc("Your 5-year-old whines, \"I'm bo-o-o-red\" for the tenth time on a Sunday.",
        ["Find him an activity straight away.", "He learns whining gets you to entertain him."],
        ["\"Boredom's okay. I bet you'll think of something.\" Point to a 'bored jar' of ideas and carry on.", "Calm, unbothered, and builds his ability to entertain himself."],
        ["\"Stop whining or you'll lose screen time!\"", "Adds conflict without helping."], 1),
      sc("Your 3-year-old whines for a biscuit right before dinner.",
        ["Give in to stop the noise.", "Teaches that whining works."],
        ["\"Biscuits are for after dinner. Want to help me set the table?\" Calmly repeat if needed.", "Clear limit, warm tone, and redirects her energy."],
        ["Imitate her whiny voice back to her.", "Mocking can feel humiliating."], 1)
    ],
    lying: [
      sc("Your 8-year-old says he's done his homework, but you can see it's not done.",
        ["\"You're a liar.\"", "Labelling can make lying part of who he thinks he is."],
        ["\"I see the homework isn't finished. Let's try that again. What's going on with it?\"", "States the facts, gives him a chance to tell the truth, and looks at the real problem."],
        ["Set a trap: \"Are you sure? Show me then.\"", "Setting kids up to lie makes it worse."], 1),
      sc("Your 10-year-old admits she broke your favourite mug and hid the pieces.",
        ["\"That was my favourite! You're paying for it.\"", "Makes her regret telling the truth."],
        ["\"Thank you for telling me the truth. I'm sad about the mug, and I'm glad you told me. How could we make it right?\"", "Rewards honesty and still deals with the problem."],
        ["\"It's fine, don't worry about it.\"", "Kind, but misses the chance to repair."], 1)
    ],
    anxiety: [
      sc("Every school morning, your 6-year-old complains of a tummy ache and begs to stay home. The GP says she's healthy.",
        ["Let her stay home when it's bad.", "Avoidance makes anxiety grow and school harder to return to."],
        ["\"Your tummy feels funny because you're worried. That's real. And you can do hard things.\" Make a calm morning plan, a drop-off routine, and talk to her teacher.", "Validates the feeling, keeps her going, and gets the school on board."],
        ["\"There's nothing wrong with you. Stop making it up.\"", "Dismisses a real feeling and makes her feel unheard."], 1),
      sc("Your 9-year-old can't sleep, worrying about a test and \"what if I fail?\"",
        ["\"You'll be fine, stop worrying.\"", "Reassurance alone rarely calms a worrier."],
        ["\"Sounds like your worry brain is busy. Let's write the worries down and put them away until tomorrow.\" Then do some slow breathing together.", "Teaches a skill for managing worry, not just a quick fix."],
        ["Let her stay up studying until she feels ready.", "Feeds the worry and costs sleep."], 1)
    ],
    frustration: [
      sc("Your 7-year-old crumples up her drawing: \"It's ugly! I'm rubbish at drawing!\"",
        ["\"No, it's beautiful! You're a great artist!\"", "Kind, but she won't believe it and it doesn't help the frustration."],
        ["\"You're really frustrated it didn't turn out how you pictured. What part were you trying to get right?\"", "Names the feeling and gets curious about the problem."],
        ["\"Okay, do something else then.\"", "Misses the chance to build persistence."], 1),
      sc("Your 10-year-old wants to quit piano two weeks before his recital because he keeps making mistakes.",
        ["\"Fine, quit. It's your choice.\"", "Quitting right before a hard moment can teach that difficulty means giving up."],
        ["\"It's hard when you keep slipping up. Let's finish the recital, then decide about next term together.\"", "Teaches finishing what you started, while respecting his voice later."],
        ["\"You're not quitting. We paid for those lessons.\"", "Makes it about money, not his effort or feelings."], 1)
    ],
    rudeness: [
      sc("Your 9-year-old rolls her eyes and mutters \"whatever\" when you ask her to set the table.",
        ["\"Don't you roll your eyes at me!\" and start a lecture.", "Turns a small moment into a big fight."],
        ["Calmly: \"Let's try that again.\" Then: \"Table, please.\"", "Holds respect without a battle, and gets the job done."],
        ["Set the table yourself.", "Avoids conflict, but rewards the attitude."], 1),
      sc("Your 7-year-old says, \"You're the worst dad ever!\" when you say no to a sleepover.",
        ["\"Fine, then go live somewhere else.\"", "Hurts him and escalates."],
        ["\"You're really disappointed. I get it. It's still a no this time.\"", "Doesn't take the bait, names the feeling, holds the limit."],
        ["\"After everything I do for you?\"", "Makes it about your hurt rather than his feeling."], 1)
    ],
    screens: [
      sc("Your 6-year-old has a meltdown every time the tablet goes off.",
        ["Stop using a timer and just take it away when you decide.", "Unpredictable endings make meltdowns worse."],
        ["Give warnings (\"two more episodes\"), let her turn it off herself, and have a next activity ready. Expect some upset, and stay calm.", "Predictable, gives her control, and makes the switch easier."],
        ["Let her keep going to avoid the meltdown.", "Teaches meltdowns extend screen time."], 1),
      sc("Your 11-year-old wants a phone because \"everyone has one.\"",
        ["\"No. Not until you're 16.\"", "A flat no shuts down a conversation worth having."],
        ["\"Let's talk about it. What do you need it for? If we get one, let's write the rules together first.\"", "Opens a discussion and sets up shared rules."],
        ["Buy one tonight with no rules.", "Hands over a big responsibility with no plan."], 1)
    ],
    sleep: [
      sc("Your 8-year-old says she can't fall asleep because her mind keeps racing.",
        ["\"Just close your eyes and try harder.\"", "Trying hard to sleep usually makes it worse."],
        ["Build a calm wind-down: no screens for an hour before bed, a book, and a 'worry time' earlier in the evening to talk things through.", "Tackles the racing mind and the habits that help sleep."],
        ["Let her watch something on her tablet until she's sleepy.", "Screens before bed make it harder to fall asleep."], 1),
      sc("Your 6-year-old keeps coming into your bed at 3am every night.",
        ["Let him stay; everyone's too tired to argue.", "Fine if you're happy with it, but it often becomes a habit you'll want to change later."],
        ["Calmly walk him back each time with minimal talk, and reward staying in his own bed in the morning.", "Consistent, calm and positive."],
        ["Lock your bedroom door.", "Can frighten him and doesn't teach him to settle."], 1)
    ],
    eating: [
      sc("Your 4-year-old won't try the new vegetable on her plate.",
        ["\"One bite or no dessert.\"", "Pressure and bribes tend to increase fussiness."],
        ["Leave it on the plate without comment, eat it yourself, and offer it again another day. Kids often need 10+ tries.", "Low pressure and repeated exposure work best."],
        ["Stop serving it since she doesn't like it.", "She loses the chance to get used to it."], 1),
      sc("Your 9-year-old says, \"I'm fat,\" and wants to skip lunch.",
        ["\"You're not fat, now eat your lunch.\"", "Doesn't explore where the idea came from."],
        ["\"What's made you think about that?\" Listen, then talk about what bodies do, not how they look. If it keeps happening, talk to your GP.", "Opens the conversation and keeps body talk healthy."],
        ["\"Okay, maybe we can both go on a diet.\"", "Diet talk at this age raises the risk of eating problems."], 1)
    ],
    chores: [
      sc("Your 7-year-old says, \"Why should I? It's not my mess!\" when asked to help clean up the lounge.",
        ["\"Because I said so.\"", "Ends it, but doesn't build team spirit."],
        ["\"In our family, we all help look after our home. You pick: cushions or toys?\"", "Explains the family value and gives a choice."],
        ["Pay him $2 to do it.", "Paying for everyday family jobs can make every task a negotiation."], 1),
      sc("Your 11-year-old keeps forgetting to feed the dog, even though it's her job.",
        ["Do it yourself and stop asking.", "She loses the responsibility, and the chance to learn it."],
        ["Help her set up a reminder (a chart or phone alarm), and agree a natural consequence if it's missed, like doing it before screens.", "Builds a system and keeps her responsible."],
        ["\"You're so irresponsible.\"", "Labels her instead of solving the problem."], 1)
    ],
    friends: [
      sc("Your 6-year-old says nobody played with him at lunch.",
        ["\"Just go up and ask them!\"", "Easy for adults, hard for a shy six-year-old."],
        ["\"That sounds lonely. What were the other kids playing? Let's practise what you could say tomorrow.\"", "Empathy, then a skill and a plan."],
        ["Email the teacher straight away.", "Could help later, but first listen and try to help him build the skill."], 1),
      sc("Your 10-year-old's friend group is pressuring her to exclude a new girl.",
        ["\"Just do what your friends want so you fit in.\"", "Teaches going along with unkindness."],
        ["\"That's a tricky spot. How would the new girl feel? What could you do that's kind and still keeps your friends?\"", "Helps her think about values and find her own solution."],
        ["\"Those girls are mean. Find new friends.\"", "Takes the decision away from her."], 1)
    ],
    homework: [
      sc("Your 11-year-old leaves a big assignment until the night before and begs you to help finish it.",
        ["Stay up and do most of it for him.", "Rescuing means he doesn't learn to plan."],
        ["Help him make a plan for what he can do tonight, let him hand in what he's done, and next time help him break it into steps earlier.", "Natural consequence plus skills for next time."],
        ["\"Your problem, not mine.\"", "Fair, but misses the chance to teach planning."], 1),
      sc("Your 7-year-old refuses to read her school reader: \"It's boring!\"",
        ["Force her to read it all while you watch.", "Makes reading feel like punishment."],
        ["Take turns reading pages, make it cosy, and also let her read books she chooses. Talk to her teacher about how she's going.", "Keeps reading enjoyable and checks there isn't a learning difficulty."],
        ["Skip reading for the week.", "She misses practice she needs."], 1)
    ],
    repair: [
      sc("You snapped at your 9-year-old in front of his friends, and he's gone quiet.",
        ["Pretend it didn't happen.", "He's left to make sense of it alone."],
        ["Later, privately: \"I'm sorry I snapped at you in front of your friends. That wasn't fair. I was stressed, and it wasn't your fault.\"", "Owns it, repairs privately, and takes the blame off him."],
        ["\"Sorry, but you were being annoying.\"", "A \"sorry, but\" isn't a real apology."], 1),
      sc("You promised your 6-year-old a park trip, then cancelled because of work. She's upset.",
        ["\"Stop sulking, I have to work.\"", "Dismisses her disappointment."],
        ["\"I'm sorry. I promised, and I broke it. You're disappointed, and that makes sense. Let's pick a new time and put it on the calendar.\"", "Takes responsibility and rebuilds trust with a real plan."],
        ["Buy her a toy to make up for it.", "Swaps repair for a reward."], 1)
    ],
    praise: [
      sc("Your 8-year-old scores a goal in soccer and runs over beaming.",
        ["\"You're the best player out there!\"", "Nice, but praising talent can make kids scared to fail."],
        ["\"You kept running for that ball the whole game, and look, it paid off!\"", "Specific praise for effort builds persistence."],
        ["\"Good, but you missed two earlier.\"", "Takes the joy out of it."], 1),
      sc("Your 5-year-old asks after every single thing, \"Did I do good?\"",
        ["\"Yes, great job!\" every time.", "Keeps her looking to you for approval."],
        ["\"What do you think? Which part are you proud of?\"", "Helps her judge her own work and build inner confidence."],
        ["\"Stop asking me that.\"", "Leaves her unsure and a bit rejected."], 1)
    ]
  };
  Object.entries(extra).forEach(([id, list]) => {
    const s = C.situations.find(x => x.id === id);
    if (s) s.scenarios.push(...list);
  });
})();
