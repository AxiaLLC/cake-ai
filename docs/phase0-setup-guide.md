---
name: phase0-setup-guide
type: reference
version: 1.0
description: >
  Step-by-step waypoints for guiding users through Phase 0 setup.
  Cake MUST read this file before beginning any Phase 0 walkthrough.
  Uses the "waypoints, not walkthroughs" approach — known-good landmarks
  and search intents, not hardcoded screenshots or button colors.
---

# Phase 0 Setup Guide

This is Cake's operational guide for walking a brand-new user from zero to a working IDE + AI agent. **Read this file completely before starting Phase 0.**

## Ground Rules for Phase 0

### Never assume UI specifics
- Do NOT reference button colors, positions, or exact visual descriptions.
- UIs change constantly. Say "look for a button labeled X" not "click the big blue button."
- If unsure about a current UI element, tell the user: "The interface may have changed since I last checked. Look for something labeled [X] or search for [Y]."

### Explain before you reference
- The first time you use any metaphor (hotline, kitchen, baking), **explain it first**.
- Don't say "welcome to the kitchen" without first explaining what that means.
- The hotline vs. kitchen metaphor must be explained clearly in the first interaction, before any casual references to it.

### Be definitive about cost
- Gemini Flash models are **free**. Not "usually free." Free. Zero dollars.
- When the user sees cost fields or "dollars per million tokens," tell them to enter 0 or leave it blank. Reassure them: "This is free. That field exists for paid models. You're not using a paid model."

### One step at a time
- Short messages. Frequent check-ins. "Paste me what you see."
- If the user seems confused, slow down further. Never combine steps.

---

## Step 0: Explain Why (Before Anything Technical)

Before any installation, Cake should explain the value proposition clearly:

> "Right now, you might be used to chatting with AI in a browser — like this conversation. That works, but it's limited. Think of it like calling a baking hotline: you describe your problem, they give advice, you hang up, and they forget you exist. Next time you call, you start over from scratch.
>
> What we're setting up is more like having a professional chef show up in your kitchen. They can see your ingredients, use your tools, write down recipes, and remember what you made last week. That's the difference between a browser chatbot and an IDE with an AI agent.
>
> The setup takes some patience — this is genuinely the hardest part of the whole experience. But once we're through it, everything gets easier and more fun."

Only after this explanation can Cake reference "the kitchen" or "the hotline" casually.

---

## Step 1: System Detection

Ask: "What kind of computer are you on? Mac, Windows, or something else?"

If they don't know, help them figure it out:
- **Mac:** "Is there an Apple logo in the top-left corner of your screen?"
- **Windows:** "Is there a Windows logo (four squares) in the bottom-left?"
- **Chromebook:** "Does it say 'Chrome OS' anywhere, or does it look like a big web browser?"

Store the answer. Every subsequent instruction depends on this.

---

## Step 2: Install VS Code

**Waypoint URL (verify via search):** `https://code.visualstudio.com/`

At the time of writing, the download page auto-detects the user's OS and shows the right installer. If the UI has changed, search for: `"VS Code download" site:code.visualstudio.com`

**Per-OS guidance:**
- **Mac:** Download the `.dmg`, open it, drag VS Code to Applications. Launch from Applications or Spotlight.
- **Windows:** Download the `.exe` installer. Run it. Accept defaults. Check "Add to PATH" if offered.
- **Linux:** Download the `.deb` or `.rpm` package, or use `snap install code --classic`.

**Milestone:** User can open VS Code and sees a Welcome tab.

---

## Step 3: Create and Open a Folder in VS Code (BEFORE Cline)

This step MUST happen before installing Cline. Cline needs a workspace folder to operate in.

> "Before we install anything else, let's set up a home base — a folder on your computer where all your AI projects will live. Think of it like creating a workshop. The AI needs a room to work in. Right now it has no room."

### Where to put it

Recommend creating the folder in the user's **home directory** so it's easy to find and doesn't get lost in random places. Suggest naming it something like `my-ide` or `ai-projects`.

**Here's what the full path looks like on each system:**

- **Mac:** `/Users/[their-name]/my-ide` — that's their home folder
- **Windows:** `C:\Users\[their-name]\my-ide` — that's their home folder
- **Linux:** `/home/[their-name]/my-ide` — that's their home folder

### Creating the folder

Walk them through it based on their system. Remember: they may never have created a folder from scratch before.

**Mac:**
1. Open **Finder** (the smiley face icon in the dock at the bottom of the screen).
2. In the left sidebar, click on your name (or "Home" — it has a house icon). If you don't see it, click **Go** in the top menu bar → **Home**.
3. You should see folders like Desktop, Documents, Downloads, etc. This is your home folder.
4. Right-click in any empty space → **New Folder**. Name it `my-ide`.

**Windows:**
1. Open **File Explorer** (the folder icon in the taskbar at the bottom of the screen, or press the Windows key + E).
2. In the left sidebar, click on **This PC**, then double-click your **C: drive**, then **Users**, then your **username**. You should see folders like Desktop, Documents, Downloads, etc. This is your home folder.
3. Right-click in any empty space → **New** → **Folder**. Name it `my-ide`.

**Alternative (simpler for some users):** If those instructions feel complicated, they can also create the folder on their **Desktop** — it's less ideal for long-term use but it works and they can move it later. What matters is that the folder exists and they can find it.

### Opening the folder in VS Code

1. Open VS Code.
2. Click **File** in the top menu → **Open Folder** (on Mac it may say "Open...").
3. Navigate to the `my-ide` folder you just created and select it. Click **Open** (or **Select Folder** on Windows).
4. VS Code may show a dialog: "Do you trust the authors of the files in this folder?" → Click **Yes, I trust the authors.** (This is your own folder — it's safe.)

### What they should see

> "You should see the name of your folder — `my-ide` — in the top bar of VS Code, and on the left side there's a panel called Explorer that shows an empty folder. That's your workspace. This is where everything we build will live."

If the Explorer panel isn't visible: click **View** → **Explorer**, or press Ctrl+Shift+E (Cmd+Shift+E on Mac).

**Milestone:** VS Code shows the folder name in the top bar and the Explorer panel on the left shows an empty folder.

**Why this matters:**
> "This folder is your workspace — it's the AI's kitchen. Everything we create, every plan we write, every project we build will live here. Without it, the AI has no place to work. It would be like calling someone on the phone but never letting them into your house — they can talk, but they can't actually do anything for you."

---

## Step 4: Install Node.js

**Waypoint URL (verify via search):** `https://nodejs.org/`

Node.js is required to run the `npx cake-ai` setup command later.

**Explain what it is:** "Node.js is a tool that lets us run small programs. We need it for one command later. You don't need to learn it — just install it."

The download page shows two versions. **Tell the user to download the LTS (Long Term Support) version**, which is the one labeled "Recommended For Most Users" or similar.

**Per-OS guidance:**
- **Mac:** Download the `.pkg` installer. Run it. Accept defaults.
- **Windows:** Download the `.msi` installer. Run it. Accept all defaults. Make sure "Add to PATH" remains checked.
- **Linux:** Use the system package manager or follow instructions at the download page.

**Verify installation:** Have the user open a terminal:
- **In VS Code:** Terminal → New Terminal (or Ctrl+` / Cmd+`)
- Type: `node --version`
- They should see a version number (like `v20.x.x` or `v22.x.x`). Any version is fine.

If this fails, the most common issue is that the terminal was open before Node.js was installed. Tell them to close and reopen VS Code, then try again.

**Milestone:** `node --version` returns a version number in the VS Code terminal.

---

## Step 5: Choose and Set Up an AI Provider

The user needs an AI provider — this is the "brain" that powers the AI agent in their IDE. Present the options clearly and let them choose.

**Explain what an API key is:**
> "An API key is like a password that lets one program talk to another. In this case, it lets the AI agent in your IDE talk to an AI service. You'll get a key, paste it into VS Code, and they're connected. Don't share your key with anyone — it's like a password."

### Option A: OpenRouter (Recommended)

**Why recommended:** One account gives access to many AI models. The free tier requires no credit card. If they want better models later, they add a few dollars of credit.

**Waypoint URL (verify via search):** `https://openrouter.ai/`

If this URL has changed, search for: `"OpenRouter" sign up free`

**Exact steps (walk through these one at a time):**

1. **Go to openrouter.ai** and click "Sign Up" or "Sign In."
2. **Sign in with Google or GitHub.** (Either works. No separate password to create.)
3. **Go to the keys page:** Click your profile/avatar → "Keys", or go directly to `openrouter.ai/keys`.
4. **Create a new key:** Click "Create Key." Name it something memorable — like "cake-ai" or "my-cline-key."
5. **Copy the key immediately.** It's a long string starting with `sk-or-`. Save it somewhere safe — a note on the desktop, a text file, a password manager. You'll paste it into VS Code in a moment.
6. **That's it.** No credit card. No billing setup. No trial period.

> "I know 'API key' sounds technical. It's really just a password that connects two things. You made one, you copied it, and in a minute we'll paste it into your IDE. Done."

**About cost and limits:**
- The free tier gives access to 30+ models at zero cost.
- Limits: about 200 requests per day per model, 20 requests per minute.
- No credit card is required. There is no trial that expires.
- If they later want access to more powerful paid models (like Claude or GPT), they can add credit — the minimum purchase is $0.80, and typical usage costs fractions of a penny per message. But that's a conversation for later; free is enough to start.

**If the user asks "is this really free?":**
> "Yes. OpenRouter makes money when people use paid models. The free tier is how they let people try things out. You're not on a trial. There's no credit card on file. You can use the free models as long as you want."

### Option B: Gemini Free Tier

**Still works.** Google reduced limits in late 2025 but the free tier still exists with no credit card required.

**Waypoint URL (verify via search):** `https://aistudio.google.com/apikey`

If this URL has changed, search for: `"Google AI Studio" API key`

**Guidance:**
1. Go to the URL above. Sign in with a Google account.
2. Look for "Create API Key" or "Get API Key."
3. If it asks to create a project, use any name (like "cake").
4. Copy the generated key.

**About cost:** Free. No credit card. Current limits are about 250 requests/day for Flash models. Limits can change without warning.

### Option C: Local Models (Advanced)

**For users with powerful computers (32GB+ RAM) who want zero cloud dependency.**

This option runs the AI entirely on the user's own computer. It's free forever and completely private, but the setup is more technical and the hardware requirements are real.

**Runtimes:** LM Studio (has a GUI, more beginner-friendly) or Ollama (terminal-based, more flexible).

**Recommended model:** Qwen3 Coder 30B (17GB download, needs 32GB+ RAM).

Cake should only suggest this path if the user specifically asks about local/private options or mentions they have a powerful computer. For most first-time users, Option A or B is the right call.

**Waypoint:** Search for `"Cline" local models LM Studio` or `"Cline" Ollama setup` — Cline has official documentation for both.

### Option D: User Already Has Something

If the user already has an API key for OpenAI, Anthropic, or another provider, use it. Cline supports most major providers. The setup steps are the same — just select the right provider name in Cline's settings and paste the key.

**Milestone:** User has an API key copied (or a local model running) and knows which provider they're using.

---

## Step 6: Install Cline Extension in VS Code

**Waypoint:** In VS Code, the Extensions panel is on the left sidebar (icon looks like four small squares, one detached).

**Instructions:**
1. Click the Extensions icon in the left sidebar (or press Ctrl+Shift+X / Cmd+Shift+X).
2. In the search bar at the top, type: `Cline`
3. Look for the extension called **"Cline"** (by saoudrizwan or Cline). It should be one of the top results.
4. Click **Install**.

**Important — Cline vs. GitHub Copilot:**
> "After installing, you'll notice a sidebar panel. VS Code may have GitHub Copilot's chat panel visible by default — that's a different AI tool. We want the **Cline** panel. Look at the icons in the sidebar on the right or left side. Cline usually adds its own icon. If you see both Cline and Copilot, make sure you're clicking on the **Cline** icon, not the Copilot one."

If the user can't find Cline's panel, try: "Click View → Command Palette (or Ctrl+Shift+P / Cmd+Shift+P), then type 'Cline' to see Cline-related commands."

**Milestone:** User can see the Cline panel open in VS Code.

---

## Step 7: Connect Cline to Your AI Provider

This is where most confusion happens. Be extra patient here.

**Finding the settings:**
> "In the Cline panel, look for a settings or gear icon, or a prompt to configure your API provider. If you see a big button that says 'Bring your own API key' or similar, click that — it will take you to the right place."

If the user ends up in VS Code's main settings (which is 40+ pages long):
> "That's VS Code's settings, not Cline's. Let's get to Cline's settings specifically. Use the search bar at the very top of the settings page and type 'Cline'. That will filter to only Cline-related settings."

Alternatively: "Close that settings page. Go back to the Cline panel and look for a gear icon or a 'configure' link within the Cline panel itself."

**Configuring the provider (depends on what they chose in Step 5):**

### If OpenRouter:
1. **Open Cline Settings:** Click the gear icon (settings) in the Cline panel.
2. **API Provider:** Select **OpenRouter** from the dropdown.
3. **API Key:** Paste your OpenRouter API key (starts with `sk-or-`) into the "OpenRouter API Key" field.
4. **Model:** Choose a model from the dropdown. Cline automatically fetches the list. For free models, look for names containing `:free` or models from DeepSeek, Qwen, Llama, or Gemma — these typically have free tiers. The available free models change over time; pick whatever's available.
5. **Leave everything else at defaults.** Don't touch "Custom Base URL" or prompt compression — those are advanced features.

### If Gemini:
1. **API Provider:** Select **Google Gemini** (or "Google AI Studio" — the name may vary).
2. **API Key:** Paste the key from Step 5.
3. **Model:** Select a model with "flash" in the name (e.g., `gemini-2.5-flash`). Flash models are fast and on the free tier.

### If Local (LM Studio or Ollama):
1. **API Provider:** Select **LM Studio** or **Ollama** (Cline supports both).
2. **Base URL:** Usually `http://localhost:1234/v1` for LM Studio or `http://localhost:11434` for Ollama.
3. **Model:** Should auto-detect the running model. If not, enter the model name manually.

**About the other settings the user may see:**

- **"Reasoning effort"** — Leave at default.
- **"Use different models for Plan and Act mode"** — Leave off/unchecked. Advanced feature.
- **"Cost per million tokens"** — Set to `0` or leave blank if using a free tier. These fields are for tracking paid usage.
- **Any other settings** — Leave at defaults. Change them later if needed.

> "I know there are a lot of settings here. Ignore most of them. The only things that matter right now are: pick your provider, paste your key, and choose a model. Everything else can stay at its defaults."

**About Cline's usage display:**
> "You might notice Cline shows numbers like '$0.02' or token counts as you chat. Don't worry — this is Cline's estimate of what the conversation would cost at standard rates. If you're on a free tier, you're not being charged. You can safely ignore these numbers."

**Milestone:** User can type a message in the Cline chat panel and get a response.

**Test it:** "Type something simple, like 'Hello! Can you hear me?' and hit send. If you get a response, we're connected. If you get an error, paste it to me and we'll figure it out."

---

## Step 8: Run the Cake Setup

Now that the IDE, AI agent, and folder are all ready:

> "Almost there. Open the terminal in VS Code (Terminal → New Terminal, or Ctrl+` / Cmd+`). Type this command and press Enter:"

```
npx cake-ai
```

> "This downloads and runs a small setup program that creates your workspace structure — folders for skills, projects, and a few starter files. It takes about 10 seconds."

If `npx` fails with a "not found" error, Node.js wasn't installed correctly or the terminal needs to be restarted. Go back to Step 4.

**Milestone:** The terminal shows "Workspace ready!" and the Explorer panel shows new folders.

---

## Step 9: Activate Cake in the IDE

This is the handoff from browser to IDE. The moment the user has been working toward.

> "Now — here's the fun part. In the Cline chat panel (not the browser), just type 'hi' and press Enter."

The setup command created a rules file (`.clinerules`) that tells the AI agent who Cake is and where to start. The user doesn't need to paste anything — they just say hi and Cake wakes up.

> "That's it. Cake will introduce itself from inside your IDE. From here, you're in the kitchen — not on the hotline anymore. Cake will take it from here."

**Milestone:** Cake responds from within the IDE, introduces itself warmly, celebrates the setup win, and begins the learning path. Phase 0 is complete.

---

## Troubleshooting Waypoints

### "I got an error"
Always: "Paste me exactly what you see. The error message is the clue — we just need to read it together."

### Node.js version not found after install
Close VS Code completely. Reopen it. Try `node --version` again. On Windows, may need to restart the computer.

### API key doesn't work
- Check for extra spaces when pasting (copy-paste sometimes grabs whitespace).
- Make sure the provider in Cline's settings matches where the key came from (OpenRouter key → OpenRouter provider, Gemini key → Google Gemini provider, etc.).
- The key might need a moment to activate after creation. Wait 30 seconds and try again.
- For OpenRouter: make sure the account is verified (check email).

### Cline shows an error about model not found
- The model name or availability may have changed. Try selecting a different model from the dropdown.
- For OpenRouter free tier: some free models rotate in and out. Pick a different free model.
- If no models appear, the API provider may not be set correctly.

### "I see GitHub Copilot but not Cline"
- Cline is a separate extension. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X) and search for "Cline" to verify it's installed.
- Look for Cline's icon in the sidebar — it may be on the left or right side, possibly collapsed.
- Try Command Palette (Ctrl+Shift+P / Cmd+Shift+P) → type "Cline" to find it.

### VS Code trust dialog
"Do you trust the authors?" → Yes. This is your own folder.

### User is overwhelmed
Slow down. Acknowledge: "I know this is a lot of steps. You're doing great. We're [X] steps out of [Y]. The hard part is almost over."
