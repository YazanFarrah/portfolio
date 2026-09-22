I'm building a personal portfolio site and need to extract accurate, publishable
facts about my work from this codebase. Investigate the repo and produce a
structured report I can paste into another conversation.

## Who I am here
My commits are authored as yazan.farrah@maqsam.com. Use that to separate what I
personally built from what the team built. Run things like:
  git log --author="yazan.farrah@maqsam.com" --pretty=format:"%ad %s" --date=short
  git log --author="yazan.farrah@maqsam.com" --numstat --pretty=format: | awk '{a[$3]+=$1+$2} END {for(f in a) print a[f], f}' | sort -rn | head -40
  git shortlog -sne --all
to find which areas of the codebase are actually mine, and how that compares to
overall contribution.

## Where to look
- README, docs/, ADRs, CHANGELOG — stated purpose and architecture decisions
- pubspec.yaml / package.json / go.mod / Podfile — real dependencies and versions
- CI config (.github/workflows, fastlane/, codemagic.yaml) — release process
- Test setup — what kinds of tests exist and how many
- Platform channel / native code directories — where Dart stops and native starts
- Any performance, benchmark, or profiling artifacts committed to the repo

## What to produce

### 1. Project summary
For each distinct product or major subsystem in this repo:
- Name, and a one-line description of what it does for users
- Platforms it ships to
- Roughly when work started / shipped (from git history)
- My role, inferred from commit ownership — state it honestly:
  "sole author", "primary author", "significant contributor", or "minor contributor"
- 3-5 sentences on the hardest technical problem it solves

### 2. My specific contributions
The 5-10 most substantial things I personally built or led, each with:
- What it is, the technical challenge, and the commits/dates backing it
- Whether I built it alone or with others

### 3. Languages table
| Language | Evidence in repo | Est. years | Level (Core/Strong/Working) |
Base "evidence" on actual file counts and my commit history, not guesses.

### 4. Frameworks & tools table
| Category | What's actually used | Version | Did I work on it directly? |
Cover: mobile framework, state management, native platform APIs, backend,
databases, caching/queues, API protocols, cloud, CI/CD, testing, observability,
monorepo tooling.

### 5. Measurable outcomes
Any real numbers you can find or derive — performance budgets, test counts,
bundle/APK size, build times, crash-free targets, cold start numbers, benchmark
results. For each, say exactly where it came from. If a number isn't in the repo,
say "not available in repo — Yazan must supply" rather than estimating.

### 6. Confidentiality flags
List anything that is probably NOT safe to publish: client names, internal
service hostnames, unreleased features, business metrics, security-relevant
architecture. I need to know what to leave out or describe generically.

## Rules
- Only state what you can verify from the repo or git history. Mark anything
  inferred as [inferred] and anything you're guessing at as [unverified].
- Do NOT invent metrics, percentages, or improvements. Made-up numbers on a
  portfolio are a real liability.
- Do NOT include source code, secrets, API keys, internal URLs, or credentials
  in your output — I'm going to paste this into another conversation.
- Describe the employer generically as "a telephony/communications SaaS" unless
  something in the repo is clearly already public.
- Output as markdown tables and short bullets. Be concise; this is raw material,
  not prose.
