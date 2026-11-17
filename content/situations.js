// Content for ages 3-12. Edit this file to add or change cards; the app reads it as-is.
// Each situation: id, title, emoji, blurb, going_on, say[], avoid[], steps[], why, tip, sources[], scenarios[]
// Each scenario: q (what happens), options[3] ({t: text, why: feedback}), best (index of the best option)
window.CONTENT = {
  ageRange: "3–12",
  situations: [
    {
      id: "tantrum", title: "Big meltdown", emoji: "🌪️",
      blurb: "Screaming, crying, on the floor, can't be reasoned with.",
      going_on: "Their feelings are bigger than their ability to manage them right now. In the moment there is 'nobody home' to reason with. They're not manipulating you; they're overwhelmed.",
      say: ["\"You really wish you could have ___. I know.\"", "\"Two things are true: the answer is no, and you're allowed to be upset.\"", "\"I'm right here.\""],
      avoid: ["Reasoning, lecturing or explaining while they're flooded", "\"Why are you doing this?\" (they honestly don't know)", "Punishing the feelings", "Giving in just to make it stop"],
      steps: ["Calm your own body first: slow, audible breaths. Mantra: \"Nothing is wrong with me, nothing is wrong with my child, I can cope.\"", "Keep them safe. Your job is not to stop the tantrum; it's to stay steady.", "Few words, soft slow voice. Name the wish, or the size of the feeling (\"You want it as big as this whole street!\").", "When calm, reconnect with a hug or by sitting close. Later, tell the story of what happened, with no lesson attached."],
      why: "Kids calm down by borrowing your calm. Connecting first lets the thinking part of the brain come back; lectures just add threat.",
      tip: "Next meltdown, say only \"I'm here\" and breathe slowly. Notice how much faster it passes.",
      sources: ["Kennedy, Good Inside", "Siegel & Bryson, The Whole-Brain Child", "Greene, The Explosive Child"],
      scenarios: [
        { q: "At the shops your 5-year-old drops to the floor screaming because you said no to a toy.",
          options: [
            { t: "Explain calmly why you can't buy it every time you shop, and how money works.", why: "Reasoning doesn't land when they're flooded. Save the explanation for later if at all." },
            { t: "Crouch down: \"You wish you could have that toy. I know. The answer is still no, and you're allowed to be upset. I'm right here.\"", why: "Holds the decision and welcomes the feeling. Exactly the 'two things are true' move." },
            { t: "Say \"If you don't stop right now we're leaving and there'll be no TV.\"", why: "A threat adds fear to an already overwhelmed child, and they can't process it anyway." }
          ], best: 1 }
      ]
    },
    {
      id: "aggression", title: "Hitting, throwing, biting", emoji: "✋",
      blurb: "Their body has lost control and someone could get hurt.",
      going_on: "When kids are out of control they don't enjoy it, and they can't stop themselves yet. They need an adult to provide the 'brakes' they don't have.",
      say: ["\"I won't let you hit.\"", "\"You're not in trouble. My job is to keep everyone safe.\"", "\"You're a good kid having a hard time.\""],
      avoid: ["\"Please stop!\" or \"You can't hit\" with a wobbly voice (it hands them the steering wheel)", "Shaming (\"What's wrong with you?\")", "Hitting back or any physical punishment"],
      steps: ["Say \"I won't let you ___\" and follow through with your body: block, step between, separate, or carry them to a safe place.", "Separate the urge from the action: wanting to hit is okay, hitting isn't. Offer a safe outlet (a pillow, stomping, a chew toy).", "Stay close, breathe, say very little. If you need a break: \"I need a few breaths. I'm right outside and I'll be back.\"", "Later, when calm: briefly retell what happened and repair. Ask what felt so bad."],
      why: "A firm, calm boundary is a form of love. It shows them their big feelings won't wreck the house, and that you're not scared of them.",
      tip: "Practise your 'I won't let you…' sentence out loud once today, so it comes out steady.",
      sources: ["Kennedy, Good Inside", "Ginott, Between Parent and Child"],
      scenarios: [
        { q: "Your 6-year-old, furious, starts hitting his sister.",
          options: [
            { t: "\"Please stop hitting, that's not nice!\" and wait for him to calm down.", why: "A request with no action behind it tells him no one is in charge, which is frightening for him." },
            { t: "Step between them: \"I won't let you hit. You're not in trouble. Something upset you.\" Then help him to a quiet spot.", why: "Calm limit, followed through, with no shame. Both kids are protected." },
            { t: "Smack his hand so he knows how it feels.", why: "It models the very behaviour you want to stop and adds shame, not skill." }
          ], best: 1 }
      ]
    },
    {
      id: "cooperation", title: "Not listening", emoji: "🙉",
      blurb: "Getting shoes on, leaving the park, turning off the screen.",
      going_on: "Cooperation grows out of connection. Kids resist being dictated to, and switching away from something enjoyable is genuinely hard.",
      say: ["\"You've worked so hard on that. Quick bath now, then more building before bed.\"", "\"Do you want to start now or in two minutes?\"", "\"There's a wet towel on the bed.\" (just describe it)"],
      avoid: ["Repeating the same order louder", "Nagging from across the room", "Threats and bribes as the first move"],
      steps: ["Connect before you ask: get down at their level and acknowledge what they're doing.", "Give a choice you're happy with, then trust them to follow through.", "Describe the problem or give information instead of commanding (\"The towel is making my blanket wet\").", "Add playfulness: a race, a silly voice, or the 'close your eyes' trick (\"If anyone has shoes on when I open my eyes, I'll have to do a silly dance!\")."],
      why: "Feeling seen and in control makes kids want to cooperate. Commands trigger resistance.",
      tip: "Before your next request, spend 10 seconds noticing what they're doing, out loud, then ask.",
      sources: ["Kennedy, Good Inside", "Faber & Mazlish, How to Talk So Kids Will Listen"],
      scenarios: [
        { q: "It's time to leave and your 4-year-old is deep in a game and ignores you for the third time.",
          options: [
            { t: "Walk over, comment on the game, then: \"We're leaving soon. Do you want to say bye to it now or after one more minute?\"", why: "Connect first, then a real choice. Much more likely to work." },
            { t: "Call out again, louder: \"I won't say it again!\"", why: "Repeating louder adds pressure and usually brings more resistance." },
            { t: "Pick them up and go without a word.", why: "Sometimes necessary, but it skips connection and tends to cause a bigger scene." }
          ], best: 0 },
        { q: "The bathroom floor has another wet towel on it and you're annoyed.",
          options: [
            { t: "\"You're so careless! I'm sick of telling you!\"", why: "Attacks character; they'll hear 'I'm bad' not 'put the towel up'." },
            { t: "\"There's a wet towel on the floor.\" (then pause)", why: "Describing the problem leaves them room to fix it. Words like these work better than orders." },
            { t: "Silently pick it up yourself, again.", why: "Avoids conflict but teaches nothing, and builds your resentment." }
          ], best: 1 }
      ]
    },
    {
      id: "siblings", title: "Siblings fighting", emoji: "🥊",
      blurb: "\"It's not fair!\", arguing over toys, name-calling.",
      going_on: "Sibling conflict is often about wanting more of YOU. Kids who feel secure with a parent see siblings as playmates, not rivals.",
      say: ["\"Two kids, one truck, that's tricky. I wonder if we have any problem-solvers here.\"", "\"In this family everyone gets what they need, not the same thing.\"", "\"You can tell me how annoyed you are about your sister, just us.\""],
      avoid: ["Playing judge and jury (\"Who started it?\")", "Always insisting on 'fair'", "Taking sides", "Allowing name-calling"],
      steps: ["Step in only for danger (hitting, cruelty). Say \"I won't let you…\" and separate them with 'you're not in trouble'.", "If it's just arguing: slow it down. Take a breath yourself, describe what each wants without taking sides, then wait.", "Let them problem-solve. Offer to help them brainstorm if stuck.", "Prevent it: give each child 10–15 minutes of one-on-one phone-free time. This fixes more sibling conflict than anything else."],
      why: "The children own their relationship. If you referee, you become the problem. If you slow things down, they learn to solve it.",
      tip: "Book 10 minutes of one-on-one play with each child today, phone in another room.",
      sources: ["Kennedy, Good Inside", "Gordon, P.E.T. (sibling conflicts)", "Ginott, Between Parent and Child"],
      scenarios: [
        { q: "Your two kids (7 and 5) are screaming over one toy, no hitting yet.",
          options: [
            { t: "\"Jess is five so she can have it first, then you, Max.\"", why: "You've decided for them and picked a side. They learn to ask you to solve it every time." },
            { t: "Take a deep breath, hold the toy: \"Two kids, one toy, that's tricky. I wonder how we could work this out.\" Then pause.", why: "Slows it down without judging and leaves the solving to them." },
            { t: "Take the toy away and put it on the top shelf.", why: "Ends this fight but teaches nothing and often feels like a punishment for both." }
          ], best: 1 },
        { q: "Your 8-year-old yells, \"It's not fair! She got a new bag and I didn't!\"",
          options: [
            { t: "\"Don't worry, I'll buy you one next week too.\"", why: "Teaches him to measure himself against his sister instead of his own needs." },
            { t: "\"It's hard to see your sister get something new. You're allowed to be upset. In our family everyone gets what they need, and your bag is still fine.\"", why: "Validates the feeling and gently turns attention to individual needs rather than 'fair'." },
            { t: "\"Life isn't fair. Stop complaining.\"", why: "Dismisses the feeling and creates distance." }
          ], best: 1 }
      ]
    },
    {
      id: "whining", title: "Whining", emoji: "😩",
      blurb: "The nasal, drawn-out \"I need my pyjamaaaas\".",
      going_on: "Whining usually means 'I need more attention, connection or warmth' or 'I feel powerless'. It also pushes the buttons of many parents.",
      say: ["\"Can you grab me that book? Thank you.\" (model the tone yourself and move on)", "Silliness: \"Oh no, the whines got in again! Out the window they go!\"", "\"Are you running low on Dad time? Can I fill you up?\""],
      avoid: ["Making them repeat the request in a 'proper voice' every time", "Mocking them (playfulness connects, mockery shames)", "Ignoring a child who actually needs you"],
      steps: ["Notice your own trigger. Take a breath and tell yourself \"I'm safe. I can handle this.\"", "Try humour first: the best match for whining is playfulness.", "Model the request in your own voice and deliver it. Skip the lecture.", "Look for the unmet need: phone down, get to their level, give them 10 minutes of undivided attention."],
      why: "Behaviour is a window onto a need. Meeting the need works better than fighting the tone.",
      tip: "Next whine, respond with silliness before anything else.",
      sources: ["Kennedy, Good Inside"],
      scenarios: [
        { q: "Your 4-year-old wails, \"I need my water bottle!!\" while you're cooking.",
          options: [
            { t: "\"I won't get it until you ask nicely! Say it again properly.\"", why: "Not wrong, but often starts a power struggle over a small thing." },
            { t: "Playfully: \"Oh no, the whines are back in the kitchen!\" Then: \"Dad, can you please get my bottle? Thanks, of course I can.\"", why: "Lightens the moment, models the tone, and the need is met." },
            { t: "Ignore it until they stop.", why: "If the whine is a bid for connection, ignoring it often makes it louder." }
          ], best: 1 }
      ]
    },
    {
      id: "lying", title: "Lying", emoji: "🤥",
      blurb: "\"I didn't do it!\" when you know they did.",
      going_on: "Kids lie from shame, fear of getting in trouble, or wishful thinking. A lie is often a wish: \"I wish I hadn't done it.\"",
      say: ["\"You wish that tower was still standing.\"", "\"If it did happen, I'd want to understand. You wouldn't be in trouble.\"", "\"What do you need from me so telling the truth feels safer?\""],
      avoid: ["Interrogating (\"Admit it!\")", "Calling them a liar", "Big punishments for honesty"],
      steps: ["Don't fight about the facts. Pause, give a slow nod, and keep your voice calm.", "Reframe the lie as a wish, and avoid pushing for a confession in the moment.", "Later, offer an opening: \"If a kid in this family had done it, I'd try to understand.\"", "Ask what's behind it: embarrassment? pressure? jealousy? Make honesty feel safe."],
      why: "Shame shuts kids down. Reducing it makes truth-telling possible next time.",
      tip: "When your child admits something hard this week, thank them for telling you before anything else.",
      sources: ["Kennedy, Good Inside"],
      scenarios: [
        { q: "You saw your 6-year-old knock over the puzzle, but she says, \"It just fell!\"",
          options: [
            { t: "\"I saw you do it! Why are you lying?\"", why: "Corners her and increases shame, which makes lying more likely next time." },
            { t: "A calm pause, then: \"You wish that puzzle was still all together. It's hard when that happens. Let's pick it up together.\"", why: "Sees the wish, avoids a fight, and focuses on repair." },
            { t: "\"Go to your room until you tell the truth.\"", why: "Punishing for honesty-by-force teaches hiding rather than honesty." }
          ], best: 1 }
      ]
    },
    {
      id: "anxiety", title: "Fears, worry and shyness", emoji: "🫣",
      blurb: "Scared of the dark, school nerves, clinging at parties.",
      going_on: "Their fear feels real even when it makes no sense to you. Avoiding it makes it bigger; being talked out of it makes them feel unheard.",
      say: ["\"There's something about that fire that feels scary. I believe you. I'm right here.\"", "\"You'll know when you're ready.\"", "\"I feel scared and brave at the same time.\""],
      avoid: ["\"There's nothing to be scared of!\"", "Pushing them into it", "Labelling them 'shy'", "Avoiding the topic hoping it'll go away"],
      steps: ["'Jump into the hole with them': name it and join them rather than pulling them out.", "Ask and listen: \"Tell me more about what it feels like.\" Validate that it makes sense.", "Prepare: dry runs with stuffed toys, say in advance who'll be there and how it might feel.", "Make a mantra together, and share a story of a fear you slowly got through (not a quick fix)."],
      why: "Facing fear in small, supported steps builds confidence. Avoidance builds phobias.",
      tip: "Share one story with your child about something that scared you and how you slowly got through it.",
      sources: ["Kennedy, Good Inside", "Mogel, The Blessing of a Skinned Knee"],
      scenarios: [
        { q: "Your 7-year-old clings to your leg at a birthday party and won't join in.",
          options: [
            { t: "\"Don't be silly, go and play!\" and give a nudge.", why: "Dismisses the feeling and can make him cling harder." },
            { t: "\"It's okay to check it out first. You'll know when you're ready to join. I'm right here.\"", why: "Validates, shows trust, and gives permission to ease in at his own pace." },
            { t: "Apologise to the others: \"He's just really shy.\"", why: "Labelling locks him into the role." }
          ], best: 1 }
      ]
    },
    {
      id: "frustration", title: "Giving up and perfectionism", emoji: "😤",
      blurb: "\"I can't do it!\", tears over homework, tearing up the drawing.",
      going_on: "Frustration is part of learning. Kids who equate difficulty with failure either quit or freeze; they need to learn how to cope, not how to win.",
      say: ["\"This feels hard because it is hard, not because you're doing something wrong.\"", "\"Learning feels frustrating. That's how you know your brain is growing.\"", "\"How did you think to do it that way?\""],
      avoid: ["Rescuing or doing it for them", "\"It's easy, just…\"", "Praising only the result (\"You're so smart\")"],
      steps: ["Stay calm and model a breath. Name it: \"Ugh, this is tricky.\"", "Teach coping, not success: breathing, a mantra (\"I can do hard things\"), and a short break.", "Make mistakes out loud yourself: \"I made a mess of that. Oh well, I learned something.\"", "Praise effort and process: \"You stuck with that even though it was frustrating.\""],
      why: "Confidence is built by getting through hard things, not by being told you're great.",
      tip: "Make a deliberate mistake out loud today and show how you recover.",
      sources: ["Kennedy, Good Inside", "Seligman, The Optimistic Child", "Lahey, The Gift of Failure"],
      scenarios: [
        { q: "Your 9-year-old throws his pencil: \"I'm so stupid, I can't do maths!\"",
          options: [
            { t: "\"You're not stupid! You're really smart, just try again.\"", why: "Reassurance rarely lands in the moment and doesn't teach coping." },
            { t: "\"That problem is making you really frustrated. It feels hard because it is hard. Want to take a break and breathe, then try one small step?\"", why: "Validates, reframes the struggle, and gives a coping tool." },
            { t: "Take the pencil and show him how to solve it.", why: "Fixes this one but teaches him to wait for rescue." }
          ], best: 1 }
      ]
    },
    {
      id: "rudeness", title: "Rudeness and back-talk", emoji: "😠",
      blurb: "\"I hate you!\", eye rolls, \"You're the worst!\"",
      going_on: "Harsh words usually mean 'I'm overwhelmed' and are aimed at the safest person. The behaviour needs a boundary; the feeling needs understanding.",
      say: ["\"I won't allow that tone. You must be really upset about something.\"", "\"I understand. It's frustrating you can't go.\"", "\"I'm here. I love you, even when you're mad at me.\""],
      avoid: ["Taking the bait and arguing", "Lectures about respect", "Withdrawing love"],
      steps: ["Breathe. Remind yourself: this is dysregulation, not disrespect.", "Put a boundary on the behaviour (\"I won't allow that tone\"), then acknowledge the feeling underneath.", "Sometimes presence is enough: a slow nod and 'I'm here'.", "Reconnect later with one-on-one time. Say 'You're a good kid who had a hard time.'"],
      why: "Responding to the feeling instead of the words stops the escalation and keeps the relationship intact.",
      tip: "When you hear a harsh word, silently ask: \"What's the feeling under that?\"",
      sources: ["Kennedy, Good Inside", "Ginott, Between Parent and Child"],
      scenarios: [
        { q: "Your 11-year-old snaps, \"I hate you! You never let me do anything!\"",
          options: [
            { t: "\"Don't you dare speak to me like that! Go to your room!\"", why: "Takes the bait and escalates, and she learns feelings aren't safe to share." },
            { t: "\"I won't allow that tone. I get that you're really upset about not going. That's a hard one. I'm here.\"", why: "Boundary plus understanding. Calm and steady." },
            { t: "Say nothing and walk away, hurt.", why: "She may read it as rejection. A calm few words works better." }
          ], best: 1 }
      ]
    },
    {
      id: "screens", title: "Screens", emoji: "📱",
      blurb: "Arguments about turning off the tablet, gaming, phones.",
      going_on: "Screens are designed to hold attention, and stopping is hard for a developing brain. Games can also fill a need (mastery, soothing, friends).",
      say: ["\"Before we start, let's think how it'll feel when it ends.\"", "\"Let's work out together what works for our family.\"", "\"What do you love about that game?\""],
      avoid: ["Changing the rules randomly (kids smell vague, caveat-filled rules)", "Using screens as your main reward or punishment", "Using your own phone constantly around them"],
      steps: ["Model it: phone away when talking to them. Meet your own rules first.", "Change the environment: no screens in bedrooms, no TV in view of the dinner table.", "Make the rules together at a calm time (everyone's needs), then keep them consistent.", "Prepare for the end: warn before screen time starts, name the feeling of stopping, give a next activity."],
      why: "Kids follow rules they helped write. Consistency and calm preparation beat daily battles.",
      tip: "Hold a 10-minute family chat this week: \"What would be a fair screen plan for all of us?\"",
      sources: ["Gordon, P.E.T. screen-time sheet", "Kennedy, Good Inside", "Garvey (Dr Billy, podcast finale)"],
      scenarios: [
        { q: "Screen time is up and your 8-year-old protests: \"Just five more minutes!\"",
          options: [
            { t: "\"Fine, five more minutes.\" (This happens every day.)", why: "Teaches that protest moves the boundary and makes the rule unreliable." },
            { t: "\"I know it's so hard to stop, you wish you had longer. Screen time ends now. Do you want to put it on the charger or hand it to me?\"", why: "Empathy plus a firm, consistent limit plus a small choice." },
            { t: "Rip the tablet away: \"That's it, no screens tomorrow!\"", why: "Escalates the fight and the punishment is disconnected from the problem." }
          ], best: 1 }
      ]
    },
    {
      id: "sleep", title: "Bedtime and sleep", emoji: "🌙",
      blurb: "Stalling, getting out of bed, nighttime fears.",
      going_on: "Bedtime means separation, and fears show up at night. Your steady presence helps more than rules alone.",
      say: ["\"Mummy/Daddy is near, you are safe, your bed is cozy.\"", "\"You want one more book. I know. We'll read it in the morning.\"", "\"This will end. There will be a moment when you're asleep. I can cope.\" (to yourself)"],
      avoid: ["Fighting about whether they 'should' be scared", "Changing the routine every night", "Rewarding stalling with big payoffs"],
      steps: ["Work on daytime separations first (practise goodbyes, even to go to the bathroom).", "Keep a short, repeatable routine and role-play it with a toy.", "Infuse your presence: a photo by the bed, a note with hearts left after they sleep, a recorded voice message button.", "Try the 'safe distance' method: stay in the room, then move your chair further away every few nights."],
      why: "Independence grows out of feeling safe. Gradual steps beat a sudden demand.",
      tip: "Make a short bedtime mantra with your child today and say it together at night.",
      sources: ["Kennedy, Good Inside"],
      scenarios: [
        { q: "Your 5-year-old gets out of bed for the fifth time saying she's scared.",
          options: [
            { t: "\"That's it. If you get up again I'm taking your teddy.\"", why: "Fear plus threat makes sleep harder." },
            { t: "Quiet and calm: walk her back, \"I know it feels scary. Mummy is near, you are safe, your bed is cozy.\" Repeat the mantra.", why: "Validates the fear and gives her something small to hold onto." },
            { t: "Let her sleep in your bed, just tonight, and say nothing about it.", why: "May help tonight but doesn't build the skill; better to plan a gradual step." }
          ], best: 1 }
      ]
    },
    {
      id: "eating", title: "Fussy eating", emoji: "🥦",
      blurb: "Refusing dinner, only wants snacks and dessert.",
      going_on: "Food battles become control battles. Pressure makes fussiness worse.",
      say: ["\"My job is what, when and where. Your job is whether and how much.\"", "\"You wish we were having pizza. Tonight it's this.\"", "\"You're allowed to be upset.\""],
      avoid: ["Forcing 'one more bite'", "Making dessert a prize for eating", "Cooking a separate meal on demand"],
      steps: ["Split the jobs: you choose what, when and where (always include one food they usually eat). They choose whether and how much.", "Serve a small dessert with dinner instead of using it as a prize.", "Announce any snack changes calmly, and tolerate the protest.", "Eat together and keep meals pleasant; talk about the day, not the plate."],
      why: "Removing pressure lets children listen to their own hunger and gradually accept more foods.",
      tip: "Serve dinner with at least one safe food and say nothing about how much they eat.",
      sources: ["Kennedy, Good Inside (Satter's division of responsibility)", "Mogel, The Blessing of a Skinned Knee"],
      scenarios: [
        { q: "Your 6-year-old refuses the dinner you made and only wants crackers.",
          options: [
            { t: "\"You can't leave the table until you eat three bites.\"", why: "Turns food into a fight and raises resistance." },
            { t: "\"You wish we were having crackers. Dinner's this tonight, and there's rice you usually like. Eat what you want. Kitchen closes after.\"", why: "Calm, holds your job, and leaves choice and amount to them." },
            { t: "Make a second meal: pasta, just this once.", why: "Teaches that refusing leads to a custom order." }
          ], best: 1 }
      ]
    },
    {
      id: "chores", title: "Chores and independence", emoji: "🧺",
      blurb: "Getting kids to help, and letting them do things themselves.",
      going_on: "Kids want to feel capable and needed. Doing everything for them (and fixing it afterwards) quietly tells them they can't.",
      say: ["\"We all pitch in to make our home work. This is your family contribution.\"", "\"Do it your way; I trust you.\"", "\"You've got this. I'm here if you want ideas.\""],
      avoid: ["Nagging and hovering", "Redoing it after them", "Paying for basic family contributions"],
      steps: ["Call them 'family contributions' and make them daily so they become habits.", "Don't underestimate them: a 7-year-old can make their own lunch.", "Let them do it their way, and let the consequences teach (the forgotten gym bag).", "Follow through calmly: certainty matters more than severity."],
      why: "Being needed builds self-worth and responsibility. Rescuing builds helplessness.",
      tip: "Pick one daily job your child can fully own this week, and don't redo it.",
      sources: ["Lahey, The Gift of Failure", "Mogel, The Blessing of a Skinned Knee"],
      scenarios: [
        { q: "Your 10-year-old forgot to pack her sports bag and asks you to rush it to school.",
          options: [
            { t: "Drop everything and drive it there. Again.", why: "Rescuing keeps her from learning to remember." },
            { t: "\"That's frustrating. I can't bring it today. What's your plan, and what could help you remember next time?\"", why: "Empathy, no rescue, and a nudge towards her own system." },
            { t: "\"You're so irresponsible!\" and then bring it anyway.", why: "Shames her and rescues her, both unhelpful." }
          ], best: 1 }
      ]
    },
    {
      id: "friends", title: "Friendship troubles", emoji: "🧑‍🤝‍🧑",
      blurb: "Left out, falling out, a friend you don't like.",
      going_on: "Friendships teach empathy and independence. Social pain is real, but fixing it for them takes away practice they need.",
      say: ["\"That sounds really painful.\"", "\"What do you think you might do?\"", "\"I'm here, and I trust you to work it out.\""],
      avoid: ["Calling the other parent right away", "Banning a friend (it makes the friend more attractive)", "Gossiping about the other child"],
      steps: ["Listen first. Reflect the feeling and don't rush to solutions.", "Share a story of a time you were left out.", "Ask what they think they could do; offer ideas only if invited.", "Step in only for real safety issues like bullying or cruelty."],
      why: "Kids who work through social conflict themselves become more capable and confident. You're their safe place, not their fixer.",
      tip: "Next time they tell you about a friend problem, only listen and reflect for the first few minutes.",
      sources: ["Lahey, The Gift of Failure", "Faber & Mazlish, How to Talk So Kids Will Listen"],
      scenarios: [
        { q: "Your 9-year-old says her best friend ignored her at lunch.",
          options: [
            { t: "\"I'll talk to her mum tonight to sort it out.\"", why: "Takes the problem away from her and can make things worse." },
            { t: "\"That sounds really hurtful. What happened? ... What do you think you might want to do?\"", why: "Listens, validates, and returns the problem to her." },
            { t: "\"Don't worry, she's not a good friend anyway.\"", why: "Passes judgment on the friendship and dismisses what she feels." }
          ], best: 1 }
      ]
    },
    {
      id: "homework", title: "Homework and school refusal", emoji: "🎒",
      blurb: "Daily battles, \"I won't!\", reluctance to go to school.",
      going_on: "Refusal usually means something specific is hard: a skill, a worry, a person. Kids do well if they can, so ask what's in the way.",
      say: ["\"I've noticed homework has been a struggle. What's up?\"", "\"The writing part is hard for you.\"", "\"What could we try that works for both of us?\""],
      avoid: ["\"You just don't want to!\"", "Threats and punishments as the first move", "Having the conversation while it's a battle"],
      steps: ["Choose a calm moment, not the heat of the fight.", "Empathy: reflect their concern in their words. Ask 'what's up?'", "State your concern (not your solution): \"I'm worried it'll stay hard if we don't practise.\"", "Invite ideas: \"How could we solve this?\" Pick a realistic plan together and review it."],
      why: "Collaborative problem-solving (Plan B) teaches skills and rarely loses you authority.",
      tip: "List the 3 recurring flashpoints in your house, and plan a calm chat for one of them.",
      sources: ["Greene, The Explosive Child (Plan B)", "Gordon, P.E.T. (Method III)"],
      scenarios: [
        { q: "Every evening your 8-year-old melts down over reading homework.",
          options: [
            { t: "Insist harder: \"You'll do it before dinner, no exceptions.\"", why: "Imposing your will harder tends to cause more explosions." },
            { t: "Later, when calm: \"I've noticed reading homework is hard lately. What's up?\" Listen, share your concern, and brainstorm together.", why: "Proactive, empathic collaborative problem-solving." },
            { t: "Quietly drop homework altogether.", why: "Dropping an expectation can be useful for a short while, but only as a first step towards solving it." }
          ], best: 1 }
      ]
    },
    {
      id: "repair", title: "I lost my temper", emoji: "🛠️",
      blurb: "You yelled, said something harsh, or feel awful afterwards.",
      going_on: "Every parent does this. A rupture is not what damages kids; an unrepaired rupture is. You can always reconnect.",
      say: ["\"I yelled earlier. That was my big feeling, not your fault. I'm sorry.\"", "\"I'm working on staying calm. Can we try again?\"", "\"I love you. You're a good kid.\""],
      avoid: ["Pretending nothing happened", "Over-explaining or defending yourself", "Beating yourself up (self-blame blocks change)"],
      steps: ["Calm yourself first. Hand on heart: \"I'm a good parent who had a hard moment.\"", "Reconnect when ready. Own it without blame: name what you did, apologise, say it wasn't their fault.", "Ask how it felt for them and listen without defending.", "Think about what triggered you and what you'll do next time (and whether old childhood feelings are involved)."],
      why: "Repair rebuilds trust and models how to take responsibility. Kids forgive quickly.",
      tip: "If you lose it today, make repair a habit: apologise within the hour.",
      sources: ["Kennedy, Good Inside", "Siegel & Hartzell, Parenting from the Inside Out", "Podcast: Wayne Hope, Christian O'Connell, Scott Cam"],
      scenarios: [
        { q: "You shouted at your 7-year-old over spilled juice and now he's sulking in his room.",
          options: [
            { t: "Wait it out. He'll get over it.", why: "A rupture with no repair leaves distance and shame." },
            { t: "Knock gently: \"Can I come in? I shouted before. That was my big feeling, not your fault. I'm sorry. Spills happen.\"", why: "Owns it, repairs, and removes his shame." },
            { t: "Go in and explain that he needs to be more careful so you don't get cross.", why: "Shifts blame back to him instead of repairing." }
          ], best: 1 }
      ]
    },
    {
      id: "praise", title: "Praise and confidence", emoji: "🌟",
      blurb: "What to say when they do well, or doubt themselves.",
      going_on: "Kids build confidence from what they accomplish and how they cope, not from being called 'smart' or 'amazing'.",
      say: ["\"You kept going even when it was tricky.\"", "\"I see a clean floor and your books lined up. It's a pleasure to walk in here.\"", "\"How did you think to do that?\""],
      avoid: ["\"You're so smart/talented/perfect\"", "Praising only results (grades, goals)", "Comparing to siblings"],
      steps: ["Describe what you see (effort, the specific thing), say how you feel, and sum it up in a word.", "Ask about their process: \"How'd you think to…?\"", "Value the 'inside stuff' (effort, attitude, kindness) over 'outside stuff' (scores, trophies).", "Let them overhear you say something good about them to someone else."],
      why: "Descriptive praise lets kids draw their own conclusion (\"I am strong\") instead of arguing with a label.",
      tip: "Give one specific, descriptive piece of praise today. No adjectives about them, only what you saw.",
      sources: ["Ginott, Between Parent and Child", "Faber & Mazlish, How to Talk So Kids Will Listen", "Kennedy, Good Inside"],
      scenarios: [
        { q: "Your 6-year-old shows you a drawing she worked hard on.",
          options: [
            { t: "\"You're such a great artist!\"", why: "A label to live up to (or doubt) that says nothing about what she did." },
            { t: "\"You used so many colours, and you stuck with it. Tell me how you thought of the sky.\"", why: "Describes effort and asks about process." },
            { t: "\"Lovely. Now go wash up for dinner.\"", why: "Misses the moment to connect." }
          ], best: 1 }
      ]
    }
  ]
};
