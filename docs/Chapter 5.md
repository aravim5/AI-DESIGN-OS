**AI Future OS**

**Chapter 5. Surface Framework**

*Final copy updated with current references through April 18, 2026*

|  |
| --- |
| **Chapter purpose** Define where intelligence appears in the product or system, distinguish surface from pattern and modality, and provide selection logic for placing AI across enterprise workflows. |

# 5.1 Definition

## 5.1.1 What the Surface Framework is

The Surface Framework defines the interface context in which AI becomes visible, interactive, or actionable. A surface is the place or container through which intelligence is presented to a user. It answers a practical design question: where should this intelligence appear?

That appearance may take place directly inside an existing interface, above the current interface in a temporary layer, beside the current interface in a persistent panel, in a dedicated workspace, in a continuous stream of signals, through a notification, through background or ambient behavior, or inside a spatial environment.

## 5.1.2 Core definition

**A surface is the interface layer in which AI is delivered to the user.**

Surface therefore governs visibility, persistence, interruptiveness, room for explanation, room for action, relationship to the current workflow, and transition to deeper or broader forms of interaction.

## 5.1.3 Why surface matters

Enterprise AI often fails not because the model is weak, but because the intelligence is surfaced poorly. The same capability can feel helpful, distracting, overwhelming, or invisible depending on where it appears.

Surface is therefore not a cosmetic choice. It is a structural design decision that shapes attention, cognitive load, trust, continuity, and action readiness.

# 5.2 Why this layer matters

## 5.2.1 Enterprise AI is inherently multi-surface

Traditional assistant products often assume one destination for intelligence: a chat panel, a prompt box, or a copilot window. That model is too narrow for enterprise systems, where work unfolds across records, lists, workflows, monitoring states, alerts, approvals, and coordinated tasks.

Recent research reinforces this point. A 2026 study on browser agents argues that single-surface copilots, especially sidebars alone, mismatch real browsing behavior and increase context-switching; its mixed strategy performed better than either micro-only or workspace-heavy approaches.[4] A 2026 paper on dynamic agentic applications similarly argues that chat is structurally mismatched to structured information, persistent state, and complex tasks.[5]

## 5.2.2 Surface determines cognitive load and timing

A surface is also an attention strategy. Inline cues preserve flow. Sidebars provide depth without full navigation change. Workspaces support orchestration when the job justifies the move. Notifications redirect attention quickly, but at the cost of interruption.

Progressive disclosure remains a useful foundation here: advanced or rarely used features should be deferred to a secondary screen or deeper layer so products remain easier to learn and less error-prone.[1]

## 5.2.3 Surface is central to mixed-initiative design

Recent mixed-initiative and proactive-AI research suggests that design quality is shaped not only by what the system can do, but by how initiative is introduced, how much control the user retains, and how the system escalates or retreats across interaction states.[3][4][6][7]

This makes surface a core part of enterprise AI design language rather than a late visual choice.

# 5.3 Relationship to the full framework

|  |  |
| --- | --- |
| **Framework layer** | **Governing question** |
| **Job** | What is the user trying to accomplish? |
| **Pattern** | What type of AI interaction is taking place? |
| **Modality** | In what form is information expressed or exchanged? |
| **Surface** | Where does the interaction appear? |
| **Context** | What does the system know and carry forward? |
| **Autonomy** | How independently does the system observe, decide, or act? |
| **Trust / Governance** | What constrains, explains, and governs system behavior? |

Surface is therefore the delivery layer of intelligence. It does not define the job, the interaction logic, or the system’s underlying knowledge; it defines where that intelligence becomes experience.

# 5.4 What belongs here

* A shared surface taxonomy for the product or design system
* Surface characteristics: visibility, persistence, interruptiveness, depth, and actionability
* Selection logic for deciding which surface fits which job and moment
* Transition rules between surfaces, such as inline cue → sidebar explanation → workspace action
* Hierarchy rules for primary, secondary, glanceable, persistent, ambient, and immersive surfaces
* Orchestration logic so multiple surfaces work together without duplication or noise

# 5.5 What does not belong here

## 5.5.1 Surface is not pattern

Pattern defines how the interaction works. Explain, find, recommend, draft, execute, compare, monitor, review, and approve are patterns. Surface defines where those patterns appear.

## 5.5.2 Surface is not modality

Modality defines the form of input or output: text, table, chart, voice, image, timeline, checklist, gesture, or 3D object. A single surface may support several modalities at once.

## 5.5.3 Surface is not context or autonomy

Context describes what the system knows. Autonomy describes how independently it acts. Both influence the right surface choice, but neither is the same thing as surface.

# 5.6 Surface taxonomy

## 5.6.1 Inline

AI appears directly inside the existing interface, embedded within the user’s current screen, content, or workflow.

*Best for lightweight assistance, contextual cues, micro-explanations, suggested values, short next-best actions, and row- or field-level signals.*

Keeps intelligence close to the work and minimizes navigation overhead, but offers limited room for depth.

## 5.6.2 Overlay

AI appears in a temporary layer above the current interface, such as a popover, tray, floating panel, or utility layer.

*Best for focused short interactions, transient comparisons, quick explanations, and progressive disclosure.*

Creates focus without fully moving the user out of context, but can become disruptive if overused.

## 5.6.3 Sidebar

AI appears in a persistent adjacent panel that coexists with the main working area.

*Best for deeper explanation, contextual exploration, draft generation, evidence review, and guided multi-step assistance.*

Balances continuity and depth, but becomes a dumping ground when teams route every AI feature into one panel.

## 5.6.4 Workspace

AI appears in a dedicated environment built for a broader or more complex job.

*Best for orchestration, planning, review preparation, multi-entity comparison, approval flows, and complex decision support.*

Supports sustained work, evidence, and action in one place, but should be used only when the job justifies the move.

## 5.6.5 Feed / Stream

AI appears as a continuously updated stream of signals, opportunities, recommendations, or risks.

*Best for monitoring, triage, prioritization, and daily work discovery.*

Excellent for breadth and ranking, but can quickly decay into noise without strong semantics and prioritization.

## 5.6.6 Notification

AI appears as a discrete event-driven alert outside the user’s main workflow focus.

*Best for urgency, escalation, deadlines, or state changes that require timely attention.*

Powerful for timely intervention, but the fastest path to alert fatigue when used as a default surface. Microsoft’s current guidance explicitly stresses that notifications should be informative, valuable, and not noisy.[2]

## 5.6.7 Background / Ambient layer

AI operates without demanding foreground interaction, monitoring, preparing, correlating, or reasoning in the background until surfacing becomes necessary.

*Best for anomaly detection, precomputation, prioritization, ranking, cross-system synthesis, and proactive readiness.*

Creates value before the user explicitly asks, but requires traceability so later surfacing does not feel arbitrary.

## 5.6.8 Spatial environment

AI appears across a spatial or immersive environment in which multiple windows, volumes, objects, and contextual layers can coexist.

*Best for immersive analysis, collaborative review, future-facing high-context work, and multi-entity comparison.*

Apple’s current visionOS guidance treats windows, volumes, and immersive spaces as distinct scene types rather than a single giant panel, which is a useful reminder that spatial surfaces must be designed as environments.[8]

# 5.7 Surface characteristics

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Surface** | **Visibility** | **Persistence** | **Interruptiveness** | **Depth** | **Best use** |
| **Inline** | immediate | low-med | low | low | contextual assist |
| **Overlay** | focused | low | med | low-med | quick explanation |
| **Sidebar** | adjacent | med-high | low-med | med-high | contextual exploration |
| **Workspace** | dedicated | high | user-entered | high | complex orchestration |
| **Feed / Stream** | ongoing | medium | low | low-med | scanning and prioritization |
| **Notification** | event-driven | low | med-high | low | urgent attention shift |
| **Ambient** | mostly invisible | high | none until surfaced | indirect | background intelligence |
| **Spatial** | immersive | variable | variable | high | environment-level composition |

# 5.8 Design principles

**1. Use the smallest surface that can responsibly support the job.** Do not default to a large AI destination when a lightweight surface is enough. Surface should expand only when users genuinely need more explanation, more action, or more orchestration.

**2. Keep intelligence close to the work whenever possible.** When users are already inside a record, workflow, or list, intelligence should first appear as close to that context as possible before forcing movement to a separate destination.

**3. Match interruption level to urgency, importance, and reversibility.** High-interruption surfaces should be reserved for events that are time-sensitive, easy to miss, or costly to defer.

**4. Design surface progressions, not isolated moments.** Strong enterprise AI systems rarely stop at one surface. They guide the user from signal to understanding to action.

**5. Separate glanceability from depth.** Scan-friendly signals should not be forced into heavy containers, and rich investigation should not be forced into tiny ones.

**6. Preserve continuity across surfaces.** When users move from one surface to another, the system should preserve selected entity, filters, evidence, draft state, rationale, and pending next steps.

**7. Let persistent surfaces carry memory.** Sidebars and workspaces are especially valuable because they can retain conversational, evidentiary, and action state across multiple steps.

**8. Use ambient behavior as a substrate, not a gimmick.** A large share of enterprise AI value should be generated before the user explicitly asks. Recent proactive-AI research supports mixed-initiative systems, but also shows that initiative must be legible and well-timed.[3][6][7]

**9. Treat notifications as a scarce resource.** Notifications are powerful precisely because they are costly. They should be reserved for meaningful attention shifts, not general system enthusiasm.

**10. Treat spatial surfaces as environments, not oversized panels.** In spatial computing, the design task is not merely placement of another rectangle; it is composition of an environment with distinct scene behavior and interaction rules.[8]

# 5.9 Enterprise examples

## Explain a flagged client

Inline = short badge plus one-line rationale; Overlay = quick explanation tray; Sidebar = evidence, history, and related recommendations; Workspace = full case review with action paths.

## Recommend a next-best action

Inline = single suggestion near the record; Feed = ranked list across a book; Sidebar = rationale, confidence, and alternatives; Notification = only when timing is critical.

## Draft an outreach message

Inline = sentence suggestion or subject line; Sidebar = editable draft with supporting context; Workspace = full communication preparation flow.

## Monitor service risk

Ambient = continuous background monitoring; Feed = daily triage of at-risk items; Notification = escalation when breach risk becomes immediate; Workspace = remediation planning and follow-through.

# 5.10 Private banking translation

Private banking work spans multiple scopes at once: book, household, client, prospect, account, request, case, meeting, review, and supervisory flow. Because the operating model is layered, AI must also be layered in how it appears.

## 5.10.1 Inline in private banking

* Row-level client and prospect signals
* Account-level flags and compliance cues
* Meeting-agenda suggestions
* Form completion guidance in onboarding or service flows

## 5.10.2 Overlay in private banking

* Short 'why is this client prioritized today?' explanations
* Temporary compare views for products or alternatives
* Quick command entry such as finding households with maturing deposits this week

## 5.10.3 Sidebar in private banking

* Advisor copilots beside client profile, account, or list views
* Prospect strategy assistance without losing the page
* Drafting outreach, reviewing evidence, and understanding recent activity

## 5.10.4 Workspace in private banking

* Periodic review preparation
* Meeting prep across holdings, interactions, opportunities, and service issues
* Prospect conversion planning
* Portfolio review, remediation, and approval flows

## 5.10.5 Feed / Stream in private banking

* Clients to contact today
* Households with excess cash and no recent outreach
* Relationships showing declining momentum
* Prospects with new engagement

## 5.10.6 Notification in private banking

* Review due in 48 hours
* High-priority client replied
* Approval needed before market close
* Service case likely to breach SLA

## 5.10.7 Ambient layer in private banking

* Book-level monitoring and relationship-health detection
* Opportunity ranking and meeting-prep readiness
* Cross-channel synthesis of service, engagement, and portfolio signals

## 5.10.8 Spatial environment in private banking

* Collaborative planning rooms
* Immersive relationship or portfolio review
* Multi-entity scenario exploration for specialists and advisors

A key implication for the broader One Connect / advisor-intelligence vision is that book-level visibility does not need to become the primary visible surface everywhere. Much of that intelligence can operate as an ambient substrate and power the right visible surface later.

# 5.11 Failure modes

* Sidebar inflation: every AI capability gets routed into one assistant panel.
* Inline overload: interfaces become cluttered with too many small cues and suggestions.
* Notification abuse: low-value intelligence is escalated into interruptions.
* Workspace inflation: teams create full destinations for tasks that do not deserve them.
* No progression path: the system surfaces insights but offers no smooth move into explanation or action.
* Surface duplication: the same signal appears inline, in the sidebar, in the feed, and in notifications without clear role separation.
* Ambient opacity: background intelligence influences outcomes, but users cannot understand why.
* Spatial novelty without operational value: teams design for spectacle rather than workflow.

# 5.12 Pattern × surface × modality matrix

The matrix below provides the core structural view for the chapter. The goal is not to freeze every future design into one box, but to make the placement logic explicit.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Pattern** | **Inline** | **Overlay** | **Sidebar** | **Workspace** | **Feed / Stream** | **Notification** | **Ambient** | **Spatial** |
| **Ask / Explain** | short cue or rationale | quick answer | deeper explanation | full investigation | uncommon | prompt to open | prefetch / prep | guided immersive explanation |
| **Find** | suggested match | command entry | contextual search | search-and-act flow | discovery stream | rare | background indexing | spatial exploration |
| **Recommend** | next-best action | rationale tray | recommendation stack | compare-and-decide flow | ranked opportunity feed | urgent recommendation only | silent scoring | immersive comparison |
| **Create / Draft** | sentence or field suggestion | quick helper | editable draft | full authoring flow | uncommon | draft-ready prompt | background preparation | co-creation environment |
| **Execute / Do** | micro-action | short confirm step | guided setup | orchestrated task flow | uncommon | deadline / escalation | automation substrate | immersive control |
| **Monitor** | status signal | detail on demand | live watch panel | control room | primary stream mode | escalation | primary operating mode | immersive monitoring room |

## 5.12.1 Modality across the matrix

Any cell in the matrix may be expressed through one or more modalities: text, cards, tables, charts, voice, image, timeline, checklist, form entry, gesture, or 3D objects.

**The preferred design order is therefore: Job → Pattern → Surface → Modality.**

# 5.13 Chapter synthesis

The Surface Framework defines where intelligence appears. That may sound simple, but it is one of the most consequential decisions in enterprise AI design. Surface shapes attention, interruption, trust, continuity, and action. It determines whether intelligence feels native to the workflow or artificially layered onto it.

A mature enterprise AI system does not rely on one assistant destination. It distributes intelligence across multiple surfaces: light where work is active, deep where interpretation is needed, structured where orchestration is required, ambient where continuous preparation creates value, and immersive where future environments justify broader composition.

Recent work from 2024 to 2026 strengthens this position. Research on proactive assistants, mixed-initiative context, and multi-surface browser agents all point in the same direction: initiative must be legible, escalation must be staged, context must remain structured, and user control must be preserved as surface depth increases.[3][4][6][7]

**In that sense, surface is the architectural bridge between intelligence and experience.**

# References

[1] Nielsen, J. Progressive Disclosure. Nielsen Norman Group, December 3, 2006. Summary: progressive disclosure defers advanced or rarely used features to a secondary screen, making applications easier to learn and less error-prone.

[2] Microsoft Learn. Notifications design basics. Updated July 28, 2025. Guidance: notifications should be informative and valuable, and should not be noisy.

[3] Chen, V., Zhu, A., Zhao, S., Mozannar, H., Sontag, D., & Talwalkar, A. Need Help? Designing Proactive AI Assistants for Programming. CHI 2025 / arXiv:2410.04596, 2024/2025.

[4] Mo, W., Lai, J., & Wang, X. IntentWeave: A Progressive Entry Ladder for Multi-Surface Browser Agents in Cloud Portals. CHI EA ’26 / arXiv:2603.22917, 2026.

[5] Xie, M., & Xie, Y. Software as Content: Dynamic Applications as the Human-Agent Interaction Layer. arXiv:2603.21334, 2026.

[6] Deng, Y., Liao, L., Lei, W., et al. Proactive Conversational AI: A Comprehensive Survey of Advancements and Opportunities. ACM Transactions on Information Systems, 43(3), 2025.

[7] Li, H., Zhang, Q., Wang, P., & Lu, Z. Mixed-Initiative Context: Structuring and Managing Context for Human-AI Collaboration. arXiv:2604.07121, 2026.

[8] Apple Developer Documentation. Designing for visionOS; Presenting windows and spaces; and related visionOS guidance on windows, volumes, and immersive spaces, accessed April 2026.
