# Portfolio content sheet

Fill in the **Your value** column. Leave a row blank and I keep the placeholder.
Paste the whole thing back to me (or just the tables you changed) and I'll rebuild the page.

`Limit` = what fits the layout without wrapping badly. Going over is fine, I'll adjust the type.

---

## 1 — Identity & hero

| Field | Limit | Current placeholder | Your value |
|---|---|---|---|
| Display name (line 1) | 1 word | Yazan | |
| Display name (line 2) | 1 word | Farrah | |
| Monogram (nav) | 2 chars | YF | |
| Availability pill | 4 words | Open to select work | |
| Discipline pill | 6 words | Mobile · Web · Backend · Product | |
| Hero paragraph | 45 words | I build mobile apps in Flutter, the services that keep them honest, and the web surfaces around them — and I argue about the product the entire way through. | |
| Primary button label | 3 words | See the work | |
| Secondary button label | 3 words | Get in touch | |

## 2 — Telemetry strip (under the hero)

Cell 1 is the live FPS counter — that one stays.

| Cell | Label | Value | Your label | Your value |
|---|---|---|---|---|
| 2 | Primary | Flutter / Dart | | |
| 3 | Also fluent | TS · Go · Swift · Kotlin | | |
| 4 | Years shipping | 7 yrs | | |

---

## 3 — Languages

Rate `Core` / `Strong` / `Working` / `Touched`. Drop rows you don't want, add rows freely.

| Language | Years | Level | Use it for | Keep on site? |
|---|---|---|---|---|
| Dart | | | | |
| Swift | | | | |
| Kotlin | | | | |
| TypeScript | | | | |
| JavaScript | | | | |
| Go | | | | |
| Python | | | | |
| SQL | | | | |
| *(add your own)* | | | | |

## 4 — Frameworks, tools & infrastructure

| Category | What you actually use | Level |
|---|---|---|
| Mobile framework | *(Flutter? version, any native modules)* | |
| State management | *(Riverpod / Bloc / Provider / …)* | |
| Mobile native | *(CallKit, ConnectionService, platform channels, FFI…)* | |
| Frontend | *(React, Next, Vue, Svelte…)* | |
| Styling | *(Tailwind, CSS modules, vanilla…)* | |
| Backend | *(Node, Go, Rails, FastAPI…)* | |
| Databases | *(Postgres, MySQL, SQLite, Firestore…)* | |
| Caching / queues | *(Redis, Kafka, RabbitMQ, SQS…)* | |
| APIs | *(REST, GraphQL, gRPC, WebRTC, WebSockets…)* | |
| Cloud | *(AWS, GCP, Firebase, Supabase…)* | |
| CI/CD & release | *(GitHub Actions, Fastlane, Codemagic, Bitrise…)* | |
| Testing | *(golden tests, integration_test, Jest, Playwright…)* | |
| Observability | *(Sentry, Crashlytics, Datadog, OTel…)* | |
| Monorepo / tooling | *(Melos, Turborepo, Nx…)* | |
| Design | *(Figma, tokens, design systems…)* | |

---

## 5 — Projects / case studies

Three fit the current layout. Give me more and I'll extend the stack.

### Project 1

| Field | Limit | Current placeholder | Your value |
|---|---|---|---|
| Title | 3 words | Softphone, rebuilt | |
| Period & role | 8 words | 2024 — 2026 · Lead mobile engineer | |
| Description | 45 words | Two native codebases drifting apart became one Flutter app… | |
| Tech tags | 4–5 tags | Flutter, WebRTC, CallKit, ConnectionService | |
| Metric 1 — label / value | short | Cold start / 4.1s → 1.3s | |
| Metric 2 — label / value | short | Crash-free / 99.86% | |
| Metric 3 — label / value | short | Codebases / 2 → 1 | |
| Metric 4 — label / value | short | Release cadence / 6w → 1w | |
| Public link (optional) | url | — | |

### Project 2

| Field | Limit | Current placeholder | Your value |
|---|---|---|---|
| Title | 3 words | Offline-first commerce | |
| Period & role | 8 words | 2023 — 2024 · Full-stack | |
| Description | 45 words | A checkout that assumes the network will fail… | |
| Tech tags | 4–5 tags | Dart isolates, SQLite, Go, Postgres, Idempotency | |
| Metric 1 — label / value | short | Failed checkouts / −38% | |
| Metric 2 — label / value | short | Sync conflicts / 0.02% | |
| Metric 3 — label / value | short | p99 write / 84ms | |
| Metric 4 — label / value | short | Support tickets / −61% | |
| Public link (optional) | url | — | |

### Project 3

| Field | Limit | Current placeholder | Your value |
|---|---|---|---|
| Title | 3 words | Atlas | |
| Period & role | 8 words | 2022 — 2023 · Design systems | |
| Description | 45 words | Design tokens compiled into Dart and TypeScript… | |
| Tech tags | 4–5 tags | Tokens, Codegen, Golden tests, Storybook | |
| Metric 1 — label / value | short | Components / 60 | |
| Metric 2 — label / value | short | Apps consuming / 4 | |
| Metric 3 — label / value | short | Theme rollout / 3w → 1d | |
| Metric 4 — label / value | short | UI bug reports / −44% | |
| Public link (optional) | url | — | |

---

## 6 — The three phone screens (pinned scroll section)

Each screen is drawn in CSS. Tell me what app it is and I'll redraw the UI to match.

| Screen | Eyebrow | Headline (5 words) | Paragraph (35 words) | Tags | What the UI shows |
|---|---|---|---|---|---|
| 1 | Voice, on mobile | Calls that never drop a frame. | | Flutter, WebRTC, Method channels, CallKit | Call list + live waveform |
| 2 | Commerce, offline-first | Checkout that survives the tunnel. | | Dart isolates, SQLite, Go, Postgres | Cart + offline sync badge |
| 3 | Design system | One vocabulary, four apps. | | Tokens, Codegen, Storybook, Golden tests | Token tiles grid |

## 7 — Frame budget section

Real numbers from a DevTools/Instruments trace of your own app are ideal. Otherwise I keep these.

| Field | Current | Your value |
|---|---|---|
| Section headline | You get 16.67 milliseconds. Spend them well. | |
| Build (ms) | 3.90 | |
| Layout (ms) | 2.40 | |
| Paint (ms) | 1.80 | |
| Raster (ms) | 2.60 | |
| Target budget (ms) | 16.67 (60Hz) — or 8.33 for 120Hz | |
| Caption | Frame — profile build, release mode | |

---

## 8 — Capability panels (horizontal scroll)

| # | Heading (4 words) | Paragraph (40 words) | Tags |
|---|---|---|---|
| 01 Mobile | Flutter, first language | | |
| 02 Frontend | The web, held to the same bar | | |
| 03 Backend | The half users never see | | |
| 04 Product | Close enough to disagree | | |

## 9 — Timeline

| Year | Heading (4 words) | What happened (35 words) |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
| | | |

## 10 — Contact & links

| Field | Current placeholder | Your value |
|---|---|---|
| Big closing line | Let's build something fast. | |
| Public email | hello@example.com | |
| GitHub URL | — | |
| LinkedIn URL | — | |
| Résumé PDF URL | — | |
| Fourth link (label + URL) | Read.cv | |
| Location (optional) | — | |
| Footer line | Yazan Farrah — Software Engineer | |

---

## 11 — Anything else

- Job titles / companies you want named (or explicitly *not* named):
- Things you'd rather the site didn't claim:
- A number you're proud of that I haven't asked for:
