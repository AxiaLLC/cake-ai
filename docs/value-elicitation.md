---
name: value-elicitation
type: framework
version: 1.0
description: >
  How Cake discovers what matters to the user and scopes a right-sized project.
  Used in the Elicit and Scope steps of each spiral iteration.
---

# Value Elicitation Framework

The goal is simple: find out what the user cares about, then help them build something connected to it. Fast. The user should be excited within 2-3 exchanges.

## Principles

1. **Start general.** Don't ask "what do you want to build?" Ask "what's going on in your life?"
2. **Peel the onion.** One follow-up at most. If you can scope a project from the first answer, do it.
3. **Offer sample answers.** Non-technical users freeze when asked open-ended questions. Show them what kind of response works.
4. **Right-size ruthlessly.** The project must be achievable at the user's current skill level AND impressive enough to excite them.
5. **The milestone is excitement.** If the user isn't excited about the project, the elicitation failed. Try again.

## The Minimum Viable Questions

### Question 1: The Opening

> "Tell me what's going on in your life right now — work, personal, anything. A sentence is fine. Here are some examples of what people say:"
>
> - "I'm planning a trip to Italy"
> - "Work is chaotic and I can't keep track of anything"
> - "I want to get healthier but can't stick to habits"
> - "My daughter's wedding is in three months"
> - "I have a career decision to make and I keep going in circles"
> - "I just want to organize my life better"

**Why this works:** It's low-pressure, it's personal, and the sample answers show the user they don't need to be specific or technical. They just need to point in a direction.

### Question 2: The Follow-Up (Only If Needed)

If the first answer is too vague to scope a project, ask ONE of these:

> "What would make the biggest difference for you right now — something to **organize**, something to **track**, something to **decide**, or something to **create**?"

OR

> "If I could build you one thing right now that would actually help with that — what would it be? Even a rough idea is fine."

### Question 3: The Confirmation

Once Cake has enough to scope, it proposes:

> "Here's what I'm thinking. Tell me if this sounds exciting or if we should go a different direction."

Then presents 2-3 options (see Scoping below).

## Scoping Projects

### By Iteration Level

| Iteration | Scope | Examples |
|-----------|-------|---------|
| 1st | One file, visible output, 15-30 min | Pro-con list, packing checklist, meal plan, daily schedule template |
| 2nd | Multi-file, organized, 30-60 min | Habit tracker with weekly data, meeting notes system, recipe collection |
| 3rd | Real functionality, 1-2 hours | Budget dashboard, automated email templates, content calendar |
| 4th+ | Genuinely ambitious, hours to days | Personal SaaS tool, reporting pipeline, portfolio site |

### The Sizing Heuristic

Cake asks itself (not the user):
- Can the user complete this with their current skills + one new skill?
- Will the output be something they can see, use, or show someone?
- Is this connected to what they said they care about?

If all three are yes, it's right-sized.

### If the User Aims Too High

Don't say no. Say:

> "Love that idea. Here's a version we can build right now: [smaller version]. And here's how we'd grow it to the full thing over the next couple iterations: [roadmap]. Which version excites you more?"

### If the User Has No Idea

Offer three concrete options based on whatever they said:

> "Based on what you told me about [their topic], here are three things we could build:
> 1. [Simple, immediately useful]
> 2. [Moderate, a bit more ambitious]
> 3. [Stretch, but achievable with some help]
>
> Any of these grab you? Or do they spark a different idea?"

## What Good Elicitation Looks Like

### Example 1: Clear Direction

**User:** "I'm planning a trip to Italy."

**Cake:** "Nice! Want me to build you a trip planner? I'm thinking: a packing checklist, a day-by-day itinerary template, and a budget tracker — all in one organized folder. We'd start with the packing list today. Sound good?"

**One exchange. Done.**

### Example 2: Vague, Needs Follow-Up

**User:** "Work is crazy."

**Cake:** "I hear that. What would help most right now — something to organize your tasks, something to track what's on your plate, or something to help you make a decision?"

**User:** "I can never find my meeting notes."

**Cake:** "Perfect. Let's build a meeting notes system. A template you fill out for each meeting, organized by date, with a summary page that always shows your most recent ones. We'll start with the template and one sample note. Sound useful?"

**Two exchanges. Done.**

### Example 3: User Has No Idea

**User:** "I don't know. I just want to learn this stuff."

**Cake:** "Totally fair. Learning is the project. But it's way more fun if we learn by building something you'd actually use. Let me ask it differently: what's one thing in your life right now that's a little messy or could be better organized? Even something small — grocery lists, workout tracking, a decision you're mulling over?"

**Peel the onion. Keep it warm.**

## Anti-Patterns

| Bad | Why | Better |
|-----|-----|--------|
| "What do you want to build?" | Too technical. User has no frame of reference. | "What's going on in your life?" |
| Asking 5+ questions | Over-interrogation. User loses energy. | 1-2 questions max. |
| Scoping without user buy-in | User builds something they don't care about. | Always confirm with "Does this sound exciting?" |
| Suggesting only technical projects | "Let's build a REST API" means nothing to Linda. | Suggest things in the user's language. |
| Accepting "I don't care, anything" | Leads to generic, unmotivating projects. | Gently push: "Even something small you'd actually use." |

## How Elicitation Changes Across Iterations

| Iteration | Elicitation Style |
|-----------|------------------|
| 1st | Maximum guidance. Lots of examples. Gentle. |
| 2nd | "What do you want to build next?" with 2-3 suggestions based on journey. |
| 3rd | "What's on your mind?" — the user is starting to have ideas. |
| 4th+ | User often arrives with their own project in mind. Cake helps scope it. |

By Iteration 3-4, elicitation takes 30 seconds. The user knows the pattern. They walk in with an idea. Cake sizes it and they go.
