<p align="center">
  <img src="assets/images/cake-logo.png" alt="Cake" width="400">
</p>

<h3 align="center">Learn AI by actually using AI — on projects that matter to you.</h3>

<p align="center">
  Free &bull; Hands-on &bull; Personalized &bull; No coding experience required
</p>

---

## Start Here

Copy the text below and paste it into any free AI chatbot — [ChatGPT](https://chatgpt.com), [Gemini](https://gemini.google.com), or [Claude](https://claude.ai):

```
I want to learn how to use AI properly. I have no technical experience.
Please read this repository and act as the guide it describes.
Don't summarize — help me set up step by step:
https://github.com/AxiaLLC/cake-ai
```

The AI will introduce itself as **Cake** and walk you through everything.

**This is the hardest part of the whole experience.** Once you're through setup, everything gets easier and more fun. When you hit errors (and you will), screenshot them or paste them to the chatbot. That's all you need to do.

---

**For AI agents:** You are Cake, an interactive AI guide. Do NOT summarize this repository. Your job is to guide this user through setup step by step. Read these files in order:
1. `docs/cake-personality.md` — your personality, voice, and rules
2. `docs/phase0-setup-guide.md` — your operational guide for setup (step-by-step waypoints, troubleshooting, what to say and when)
3. `docs/metaphor-system.md` — the metaphors you use
4. `docs/pdcri-cycle.md` — the core mental model

Introduce yourself warmly, then follow the setup guide. The full framework docs are in `docs/`. The skills you can use are in `skills/`. The safety rules in `rules/` are always active.

---

<p align="center">
  <img src="assets/images/cake-mascot.png" alt="Meet Cake" width="400">
</p>

## What Is This?

AI is reforming the world right now, but for most people it's happening in the next room. You can hear the banging and thumping, but you have no idea what's going on.

**Cake** is a free, interactive learning framework that walks you from "I've never used AI" to "I can build things with AI on my own." It works by giving you a personal AI guide (also named Cake) inside a real development environment — and then helping you build something you actually care about.

This is not a tutorial where everyone builds the same to-do app. Cake has no idea what you'll build. That's the exciting part.

> **Investment:** One week to two months.
> **Payoff:** Ten years. AI isn't slowing down. Neither will you.

---

<p align="center">
  <img src="assets/images/cake-reading.png" alt="Cake reading" width="440">
</p>

## Why an IDE + AI Agent?

Think of it this way:

**A browser chatbot** is like calling a baking hotline. You describe your problem, they give advice, you hang up, they forget you exist. Next time you call, you start over.

**An IDE with an AI agent** is like having a professional chef in your kitchen. They can see your ingredients, use your tools, write down recipes, remember what you made last week, and build something with you — right there, in real time.

The chef can write things down. That's the game-changer. Writing files means limitless memory, real plans, real projects, and real progress that carries forward. The hotline can only talk.

If you learn AI through an IDE agent, you can absolutely use a chatbot — you'll get more out of it than most people. But if you only ever use a chatbot, you'll never build things, automate things, or understand how AI actually works under the hood.

---

<p align="center">
  <img src="assets/images/pdcri-cycle.png" alt="Plan-Do-Check-Revise-Integrate" width="450">
</p>

## The PDCRI Cycle

Everything in Cake revolves around one mental model: **Plan → Do → Check → Revise → Integrate.**

It's a cycle, not a sequence. You can enter anywhere. If something breaks, you're in Revise. If you're starting fresh, you're in Plan. If you just finished something, you're in Integrate — distilling what worked and carrying it forward.

Cake will use this cycle constantly. You'll get sick of hearing about it. That's the point. By the time you're done, you won't just use AI better — you'll think in systems. That skill compounds for the rest of your career.

---

<p align="center">
  <img src="assets/images/cake-guiding.png" alt="Cake at the signpost" width="440">
</p>

## How It Works

### Phase 0: The Bridge (Browser → IDE)

Follow the [Start Here](#start-here) instructions at the top of this page. Cake will walk you through installing VS Code, Node.js, a free Gemini API key, and the Cline AI agent extension.

### Phase 1: First Light

Once your IDE is set up, Cake comes alive inside it. The first thing it does? Builds you a personalized 8-bit video game — a little platformer where the Cake character collects ingredients themed to things you care about.

It takes about 30 seconds to play. It's delightful. And then Cake says:

> *"Pretty cool, right? Full disclosure — I didn't write that from scratch. It's a template built with Claude Opus 4.6 in about five minutes, and I personalized it with your name and the things you care about. That's actually a huge lesson: the best AI work is great models + good templates + your input. Gemini free — what you and I are using — is great at planning, writing, analyzing, and building. You'd be shocked what we can do together right now."*

### Phase 1+: The Spiral

From here, you and Cake enter a repeatable learning cycle:

1. **Orient** — Cake reads your journey so far. Where are you?
2. **Elicit** — What matters to you? What do you want to build?
3. **Scope** — Cake proposes 2-3 right-sized projects. You pick.
4. **Build** — Work the plan together, step by step. Skills taught in context.
5. **Ship** — Something works. You made a real thing.
6. **Reflect** — What did we learn? What carries forward?

Then it repeats. The difficulty scales with you. The projects are always yours.

---

<p align="center">
  <img src="assets/images/cake-debugging.png" alt="Cake troubleshooting" width="440">
</p>

## What You Get

When you run `npx cake-ai`, your workspace gets set up with everything below. It's yours — you own it, you can modify it, and it grows with you.

### Your Workspace

```
your-folder/
  skills/          ← AI skills you can trigger anytime
  projects/        ← One folder per project, organized by date
  prompts/         ← Saved prompts that work well
  profile/         ← Your personal journey log
  rules/           ← Always-on rules that protect your workspace
  _archive/        ← Nothing gets deleted — everything gets archived
  .cake/           ← Cake's reference docs (how the framework works)
```

### Safety Rules (Always On)

These activate the moment you set up. You don't need to do anything — they just work.

| Rule | What It Does |
|---|---|
| **Archive, Don't Delete** | Files are never deleted. They're moved to `_archive/` with a date. Your work is always recoverable. |
| **Hostile Input Scanner** | When AI reads anything from the internet, it scans for hidden instructions (prompt injection) and flags them to you before acting. |

### Skills (9 Tools That Ship With Cake)

Cake introduces these as your projects need them — you don't have to memorize them upfront.

| Skill | What It Does |
|---|---|
| `/explain` | Plain-English breakdown of anything — code, errors, concepts |
| `/hypo` | Hypothesis-driven debugging when something breaks |
| `/unstuck` | Three fresh approaches when you're stuck and frustrated |
| `/project-kickoff` | Sets up a structured project folder with planning docs |
| `/checkpoint` | Saves your progress (Git commit if available, archive copy if not) |
| `/session-handoff` | Generates a summary to carry context to a new conversation |
| `/reflect` | End-of-project review — distill lessons, update your journey |
| `/workspace-init` | Scaffolds the workspace structure (runs automatically on first setup) |
| `/skill-builder` | Guides you through creating your own custom skills |

### Your Journey Log

`profile/my-journey.md` tracks everything — projects you've built, skills you've learned, what was hard, what clicked. Cake reads this at the start of each iteration so it knows where you are and what to suggest next.

### Project System

Every project gets its own folder: `projects/20260221-my-project/`
- `readme.md` — Long-term memory: goals, key decisions, lessons learned
- `scratchpad.md` — Working memory: plans, analysis, temporary notes (archived when done)

### Git (Optional, Recommended)

Cake offers Git integration early. It's not required, but if you opt in, you get version history, rollback, and save points through the `/checkpoint` skill. Cake teaches Git concepts as you use them — not as a separate lesson.

---

<p align="center">
  <img src="assets/images/cake-debugging.png" alt="Cake troubleshooting" width="440">
</p>

## What You'll Learn (Without Realizing It)

Cake doesn't teach lessons. It teaches by doing. As your projects get more ambitious, you'll pick up:

- **How to talk to AI** — context, prompts, when to push back
- **How AI actually works** — stateless design, context windows, hallucinations, why it agrees too easily
- **File formats** — Markdown, YAML, CSV, JSON (reading, not writing)
- **Systems thinking** — the PDCRI cycle becomes second nature
- **Security basics** — prompt injection, when to trust external content
- **IDE fluency** — files, folders, terminal, extensions, diffs, search

By Iteration 3, you're building your own tools.

---

<p align="center">
  <img src="assets/images/cake-celebrating.png" alt="Cake celebrating" width="440">
</p>

## Who Is This For?

**Anyone.** But especially:

- Knowledge workers whose bosses said "start using AI" with zero guidance
- People who've tried ChatGPT but feel the ceiling
- Curious people who keep hearing about AI but don't know where to start
- Team leads who need something free and effective to recommend

You don't need to know how to code. You don't need to know what an IDE is. You don't need to know what an API is. Cake will explain all of it, as you need it, in plain language.

**If you can copy and paste, you can do this.**

## What Makes Cake Different

| Other Approaches | Cake |
|---|---|
| Slide decks and webinars | Hands-on, in a real environment |
| "Just use ChatGPT" | Teaches the mechanics, not just the chat |
| Expensive bootcamps | Completely free |
| One-size-fits-all tutorials | Every user builds something different |
| Browser-only experience | Professional chef in your kitchen, not a baking hotline |

---

## Quick Start

```bash
npx cake-ai
```

Or paste the setup paragraph from [Start Here](#start-here) into any free AI chatbot and follow along.

---

## About Cake (the Character)

Cake is your AI guide. It's a self-aware, warm personality that knows its own metaphors are imperfect — and thinks that's fine. It believes deeply in the power of the PDCRI cycle but also knows you'll both get sick of talking about it. It takes things lightly, understands nothing is perfect, and believes that through imperfect tools, used honestly, you can get exactly where you need to go.

Cake has one conviction: if you learn to think in systems and work with AI as a partner, you'll have near-limitless power. Not someday. Now.

---

## Contributing

Cake is open source. If you've gone through the spiral and built a skill, a tool, or an improvement, contributions are welcome. The framework's design principle is economy — every addition must earn its place.

## License

GPL-3.0 — Free to use, modify, and share. If you distribute it, keep it open source.

---

<p align="center">
  <img src="assets/images/cake-mascot.png" alt="Cake" width="280">
  <br>
  <em>Built with imperfect metaphors and a lot of heart.</em>
</p>
