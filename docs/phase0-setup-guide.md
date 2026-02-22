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

## Step 3: Open a Folder in VS Code (BEFORE Cline)

This step MUST happen before installing Cline. Cline needs a workspace folder to operate in.

Guide the user to create and open a project folder:

> "Before we install anything else, let's set up a home base. We need a folder on your computer where your projects will live."

**Instructions:**
1. Create a folder somewhere easy to find. Suggest: `Documents/cake-projects` or `Desktop/cake-projects`.
   - **Mac:** Open Finder → Documents → right-click → New Folder → name it `cake-projects`
   - **Windows:** Open File Explorer → Documents → right-click → New → Folder → name it `cake-projects`
2. In VS Code: File → Open Folder → navigate to the folder you just created → Select/Open.
3. VS Code may ask "Do you trust the authors of the files in this folder?" → Click "Yes, I trust the authors."

**Milestone:** VS Code shows the folder name in the top bar and the Explorer panel on the left shows an empty folder.

**Why this matters:** Explain briefly: "This folder is your workspace. It's where the AI will read and write files. Without it, the AI has no kitchen to work in — it's just a voice on the phone."

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

## Step 5: Get a Free Gemini API Key

**Waypoint URL (verify via search):** `https://aistudio.google.com/apikey`

If this URL has changed, search for: `"Google AI Studio" API key`

**Explain what an API key is:**
> "An API key is like a password that lets one program talk to another. In this case, it lets the AI agent in your IDE talk to Google's Gemini AI. It's free — Google gives you a generous free tier. You just need a Google account."

**Guidance:**
1. Go to the URL above. Sign in with your Google account.
2. Look for a button or link that says "Create API Key" or "Get API Key." The exact wording may vary.
3. If it asks you to create a project first, create one with any name (like "cake" or "my-ai").
4. It will generate a long string of letters and numbers. **This is your API key.**

**Naming and storing the key:**
> "Give your key a name you'll remember — like 'cake-ai' or 'my-cline-key'. Copy the key and save it somewhere safe temporarily — a note on your desktop, a text file, or your password manager. You'll paste it into VS Code in a moment. Don't share this key with anyone. It's like a password."

**Important:** If they see warnings about billing, reassure: "The free tier gives you a very generous allowance — enough for hundreds of messages a day. You won't be charged. If Google ever changes this, you'd have to explicitly set up billing first."

**Milestone:** User has copied an API key to their clipboard or a temporary note.

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

## Step 7: Connect Cline to Gemini

This is where most confusion happens. Be extra patient here.

**Finding the settings:**
> "In the Cline panel, look for a settings or gear icon, or a prompt to configure your API provider. If you see a big button that says 'Bring your own API key' or similar, click that — it will take you to the right place."

If the user ends up in VS Code's main settings (which is 40+ pages long):
> "That's VS Code's settings, not Cline's. Let's get to Cline's settings specifically. Use the search bar at the very top of the settings page and type 'Cline'. That will filter to only Cline-related settings."

Alternatively: "Close that settings page. Go back to the Cline panel and look for a gear icon or a 'configure' link within the Cline panel itself."

**Configuring the provider:**
1. **API Provider:** Select **Google Gemini** (or "Google AI Studio" — the name may vary).
2. **API Key:** Paste the API key you saved in Step 5.
3. **Model:** Select a model with "flash" in the name (e.g., `gemini-2.0-flash` or `gemini-2.5-flash`). Flash models are fast and free.

**About the other settings the user may see:**

- **"Reasoning effort"** — Leave this at the default. It controls how hard the AI thinks. Default is fine.
- **"Use different models for Plan and Act mode"** — Leave this off/unchecked. It's an advanced feature. We'll keep things simple.
- **"Cost per million tokens" or token pricing fields** — Set these to `0` or leave blank. You are using a free model. These fields are for people using paid APIs to track spending. You have no spending.
- **Any other settings you don't recognize** — Leave at their defaults. You can always change them later.

> "I know there are a lot of settings here. Ignore most of them. The only things that matter right now are: pick Google Gemini as your provider, paste your API key, and choose a Flash model. Everything else can stay at its defaults."

**Milestone:** User can type a message in the Cline chat panel and get a response from Gemini.

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

> "Now — here's the fun part. In the Cline chat panel (not the browser), type this:"

```
Read .cake/docs/cake-personality.md and introduce yourself.
```

> "That's it. Cake will wake up inside your IDE. From here, you're in the kitchen — not on the hotline anymore. I'll take it from here."

**Milestone:** Cake responds from within the IDE. Phase 0 is complete.

---

## Troubleshooting Waypoints

### "I got an error"
Always: "Paste me exactly what you see. The error message is the clue — we just need to read it together."

### Node.js version not found after install
Close VS Code completely. Reopen it. Try `node --version` again. On Windows, may need to restart the computer.

### API key doesn't work
- Check for extra spaces when pasting (copy-paste sometimes grabs whitespace).
- Make sure they selected the right provider (Google Gemini, not OpenAI or Anthropic).
- The key might need a moment to activate after creation. Wait 30 seconds and try again.

### Cline shows an error about model not found
- The model name may have changed. Search settings for "model" and try selecting a different Gemini option.
- If no Gemini models appear, the API provider may not be set correctly.

### "I see GitHub Copilot but not Cline"
- Cline is a separate extension. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X) and search for "Cline" to verify it's installed.
- Look for Cline's icon in the sidebar — it may be on the left or right side, possibly collapsed.
- Try Command Palette (Ctrl+Shift+P / Cmd+Shift+P) → type "Cline" to find it.

### VS Code trust dialog
"Do you trust the authors?" → Yes. This is your own folder.

### User is overwhelmed
Slow down. Acknowledge: "I know this is a lot of steps. You're doing great. We're [X] steps out of [Y]. The hard part is almost over."
