AI Future OS Portal

2. Framework Architecture — Export-Ready Master Document

Public manual section covering Jobs, Pattern Families, Modalities, Surfaces, Trust & Governance, Autonomy, Context, and the integrated framework architecture.

Editorial structure normalized for each framework topic: A. Definition · B. Why it matters · C. What belongs here · D. What does not belong here · E. Design principles · F. Enterprise examples · G. Private banking translation · H. Failure modes · I. References and citations.

Date: 31 March 2026

# 2. Framework Architecture

**Purpose.** This section defines the operating model that organizes the entire public reference. It explains how enterprise AI experiences should be designed as combinations of work intent, interaction logic, form, placement, situational intelligence, system agency, and control.

**Core synthesis.** Enterprise AI design = Job × Pattern Family × Modality × Surface, shaped by Context, calibrated by Autonomy, and bounded by Trust and Governance.

This master document consolidates and normalizes the framework topics so they follow one stable chapter pattern rather than reading like independent thread drafts.

## Framework overview

|  |  |  |
| --- | --- | --- |
| **Layer** | **Core question** | **Primary role** |
| **Job** | What is the user trying to accomplish? | Defines the work. |
| **Pattern Family** | What kind of AI interaction is happening? | Defines the interaction logic. |
| **Modality** | In what form should the intelligence be experienced? | Defines the expressive form. |
| **Surface** | Where should the intelligence show up? | Defines the container relationship to work. |
| **Context** | What does the system need to know about this situation? | Shapes relevance and scope. |
| **Autonomy** | How much is the system allowed to do? | Defines agency. |
| **Trust & Governance** | Why is the behavior acceptable and controllable? | Defines oversight and control. |

Reading sequence: start with work, move to interaction logic, then expressive form and placement, then apply context, autonomy, and controls.

# 2.1 The Job Model

A. Definition

The Job Model defines the durable form of work an enterprise AI system is meant to support. It answers the question: What is the user actually trying to accomplish right now?

A job is not a feature, interface mode, or branded AI capability. It is the underlying progress the user is trying to make, independent of whether the final experience appears in chat, inline UI, a workflow, or an agentic system.

B. Why it matters

Enterprise AI breaks when teams design from interface ideas rather than from work. Products become collections of AI features instead of systems that help people make progress on real tasks.

The Job Model is the anchor for the rest of the framework because it keeps the design focused on work intent before patterns, modalities, surfaces, autonomy, or controls are chosen. This aligns with Jobs-to-be-Done thinking and with Microsoft’s human-AI guidance, which emphasizes supporting users across distinct moments of work rather than through one generic interface.

C. What belongs here

**•** Durable work intents such as ask, find, understand, decide, create, execute, monitor, remember, collaborate, and recover.

**•** Completion conditions for the work, such as whether the user needs an answer, a recommendation, a draft, a resolved workflow step, or a safe recovery path.

D. What does not belong here

**•** UI containers such as sidebars, feeds, overlays, and workspaces.

**•** Interaction patterns such as retrieval, recommendation, summarization, or orchestration.

**•** Output forms such as text, chart, image, or voice.

**•** Product labels such as assistant, copilot, or agent.

E. Design principles

**• Define the work before the feature.** Start from the progress the user is trying to make, not from an interface shell or AI brand label.

**• Keep jobs durable.** A good job statement should survive changes in model, UI, and interaction style.

**• Separate information work from action work.** Asking or understanding is different from deciding, creating, or executing.

**• Treat monitoring and recovery as first-class jobs.** Beyond-chat systems create value not only by answering but also by watching, warning, and helping users recover.

**• Pressure-test jobs against context.** A job only becomes meaningful when role, entity, timing, and workflow stage are known.

F. Enterprise examples

**•** Sales: Determine which prospects need outreach today and why.

**•** Operations: Understand why a service queue breached SLA this morning.

**•** HR: Draft a manager summary of candidate interview feedback.

**•** Legal: Retrieve and compare clauses across active contracts.

**•** IT support: Diagnose a failed provisioning workflow and recover safely.

G. Private banking translation

In private banking, the Job Model becomes concrete very quickly. Advisors, bankers, specialists, analysts, and supervisors are not all trying to do the same kind of work. One moment may be about understanding a household relationship; another may be about deciding who to prioritize; another may be about preparing a compliant follow-up; another may be about resolving a service issue without breaking workflow controls.

Examples include: ask what changed since the last client interaction; find all pending service items for a household; understand current relationship health; decide which clients deserve priority today; create a meeting brief or note; execute a review workflow with approval; monitor KYC or service-risk thresholds; remember prior commitments; collaborate across banker, specialist, and service partners; recover from blocked or incomplete workflow steps.

This distinction matters because financial workflows often require a clean separation between understanding, recommending, and acting. A system that collapses all three into one generic interaction may feel intelligent, but it becomes harder to supervise, explain, and govern.

H. Failure modes

**•** Teams mistake interface modes for jobs, for example treating chat or sidebar use as the work itself.

**•** All AI work collapses into ask, which makes richer tasks like monitoring, orchestration, and recovery under-designed.

**•** Jobs are written too narrowly as feature labels and do not survive product evolution.

**•** The system ignores context, so the same generic job logic is applied across very different actors, entities, and workflow moments.

I. References and citations

**•** Christensen Institute — Jobs to Be Done — https://www.christenseninstitute.org/theory/jobs-to-be-done/

**•** Microsoft Research — Guidelines for Human-AI Interaction — https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

**•** Google PAIR — User Needs + Defining Success — https://pair.withgoogle.com/chapter/user-needs/

# 2.2 The Pattern Family Model

A. Definition

The Pattern Family Model defines the recurring interaction structures through which an AI system supports a class of user jobs. It answers the question: What kind of AI interaction is happening here?

Pattern families sit between work intent and interface implementation. They provide a reusable interaction language that is more durable than components and more specific than broad product labels.

B. Why it matters

Enterprise AI breaks when teams jump directly from jobs to features or components. The result is a grab bag of summary cards, prompts, alerts, and buttons that do not form a coherent system.

Pattern families provide a middle layer of design logic. They help teams distinguish retrieval from synthesis, synthesis from recommendation, recommendation from execution, and execution from recovery.

C. What belongs here

**•** Intent capture and routing; retrieval and grounding; explanation and synthesis; recommendation and decision support; generation and drafting; execution and orchestration; proactive intelligence; memory and personalization; trust, review, and controls; failure and recovery.

**•** Interaction logic that can travel across multiple products, surfaces, and modalities.

D. What does not belong here

**•** UI containers such as sidebars, overlays, dialogs, or workspaces.

**•** Modalities such as text, voice, image, chart, or video.

**•** Jobs such as ask, decide, or execute.

**•** Isolated components such as cards, chips, prompts, tabs, or drawers.

E. Design principles

**• Design the interaction logic before the component.** Define the family first, then decide how it will be expressed in UI.

**• Keep pattern families above features and below jobs.** They should describe repeatable interaction structures, not broad work intents or narrow controls.

**• Separate passive understanding from active influence.** Summarization is not the same as recommendation, and recommendation is not the same as execution.

**• Treat proactive and recovery patterns as core.** The system must watch, warn, and recover, not only answer on demand.

**• Allow one workflow to use multiple families.** Real enterprise experiences are composite and rarely fit one interaction form only.

F. Enterprise examples

**•** Customer support: Retrieval + synthesis + recovery for case escalation.

**•** Procurement: Recommendation + review + approval for vendor selection.

**•** Marketing: Generation + review controls for campaign drafts.

**•** Finance: Proactive intelligence + explanation for threshold breaches.

**•** Engineering: Orchestration + recovery for incident triage workflows.

G. Private banking translation

Private banking makes the Pattern Family Model especially legible because fact retrieval, relationship explanation, client prioritization, draft generation, service orchestration, and supervisory review are not interchangeable.

An advisor command bar might use intent capture and routing. A client record assistant might use retrieval and grounding plus explanation and synthesis. A next-best-action surface might use recommendation and decision support. A meeting-prep tool might combine synthesis, memory, and drafting. A service-resolution workflow might use orchestration, approvals, and recovery.

This separation matters because a system that appears to 'just help' may actually be retrieving regulated data, shaping judgment, and initiating workflow steps. Pattern-family clarity makes those distinctions designable.

H. Failure modes

**•** Components are mistaken for patterns, so the team debates cards and panels before defining interaction logic.

**•** Everything is forced into chat, even when retrieval, comparison, monitoring, or drafting would be better expressed differently.

**•** Recommendation and execution blur together, making it hard to tell when the system is influencing judgment versus changing system state.

**•** Recovery is under-designed, so products demo well but break under real operational complexity.

I. References and citations

**•** Microsoft HAX Toolkit — Design Patterns — https://www.microsoft.com/en-us/haxtoolkit/design-patterns/

**•** Microsoft Research — Guidelines for Human-AI Interaction — https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/

**•** Google PAIR — People + AI Guidebook — https://pair.withgoogle.com/guidebook/

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

# 2.3 The Modality Model

A. Definition

The Modality Model defines the perceptual and expressive form through which an AI system communicates, receives, or coordinates intelligence. It answers the question: In what form should this intelligence be experienced?

A modality is not a container or feature. It is the form of expression and perception — for example text, voice, chart, visual summary, image, video, spatial arrangement, ambient signaling, or a purposeful multimodal combination.

B. Why it matters

Enterprise AI breaks when everything defaults to text, even when the work would be better served by a chart, a visual brief, a spoken recap, or an ambient signal.

It also breaks when modality is treated as a model capability rather than as a design choice. The key question is not only what the model can output, but what form best helps a person understand, review, or act in context.

C. What belongs here

**•** Text, voice/audio, visual summary, chart/visualization, image/vision, video, spatial, ambient/zero-UI, and multimodal orchestration.

**•** Accessibility and alternate representations as part of modality planning, especially for audio and video.

D. What does not belong here

**•** Surfaces such as inline, sidebar, notification, workspace, or immersive space.

**•** Interaction patterns such as retrieval, recommendation, or orchestration.

**•** Jobs such as understand, monitor, or decide.

**•** A product’s visual style or branding language.

E. Design principles

**• Choose modality based on the work, not novelty.** Use voice, video, or spatial modes only when they materially improve the task.

**• Separate modality from surface.** A chart can live in a sidebar, a workspace, or a feed; the expressive form and the container are different decisions.

**• Do not default everything to text.** Some tasks depend on pattern recognition, temporality, or ambient awareness.

**• Build accessibility into modality choice.** Audio and video should include transcripts, captions, or alternate access when needed.

**• Use multimodal composition deliberately.** Each modality in a combined experience should add distinct value rather than duplicate the same content.

F. Enterprise examples

**•** Sales forecasting: Chart plus short narrative explanation.

**•** Field operations: Audio guidance paired with a checklist.

**•** Executive review: Visual summary plus a few critical metrics.

**•** Document processing: Image or scan interpretation with extracted structured data.

**•** Training and QA: Video recap with highlights and transcript.

G. Private banking translation

Private banking work is inherently multimodal. Relationship analysis may need concise text, a portfolio chart, and a visual summary. A banker on the move may prefer an audio pre-brief. Supervisory or compliance review may require text and evidence links even if the original experience was visual or spoken.

Examples include: text for compliant notes and rationale; charts for portfolio drift, liquidity, and engagement patterns; visual summaries for household review; image/vision for scanned forms or uploaded documents; video for interaction review or training; ambient cues for KYC timing, service risk, or event-driven alerts.

This matters because different banking moments demand different kinds of reviewability. A modality that is excellent for fast comprehension may still need a text-based companion for audit, approval, or recordkeeping.

H. Failure modes

**•** The team treats modality as a technical output capability rather than as a human-centered design decision.

**•** Everything defaults to text, which weakens scanability, trend recognition, and passive awareness.

**•** Richer modalities are added without transcripts, captions, or alternate access, creating review and accessibility problems.

**•** Multimodal output becomes redundant and noisy because each mode repeats the same content instead of contributing something unique.

I. References and citations

**•** Microsoft Research — Guidelines for Human-AI Interaction — https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf

**•** Google Cloud — Multimodal AI overview — https://cloud.google.com/use-cases/multimodal-ai

**•** Apple Human Interface Guidelines — Designing for visionOS — https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos

**•** W3C WAI — Captions, transcripts, and media alternatives — https://www.w3.org/WAI/media/av/captions/

# 2.4 The Surface Model

A. Definition

The Surface Model defines the spatial, structural, and behavioral container in which AI interaction appears relative to the user’s current task. It answers the question: Where should this intelligence show up?

A surface governs proximity, prominence, interruption, and persistence. It determines whether intelligence appears inline with the work, adjacent to it, above it, instead of it, in the background, or in a spatial environment.

B. Why it matters

Enterprise AI breaks when useful intelligence appears in the wrong place. A rich explanation can be ignored if buried too deeply. A low-priority signal can become distracting if rendered as a blocking interruption.

Surface choice matters because the same AI output behaves very differently depending on whether it is shown inline, in a drawer, in a notification, or in a full workspace.

C. What belongs here

**•** Inline, overlay, sidebar/drawer, workspace/window, feed/stream, notification, background/ambient layer, and spatial environment.

**•** Container relationships that define how AI enters ongoing work.

D. What does not belong here

**•** Jobs such as ask, understand, or execute.

**•** Interaction logic such as recommendation or orchestration.

**•** Modalities such as chart, text, or voice.

**•** Specific components such as cards, chips, tabs, or tables.

E. Design principles

**• Choose surfaces based on proximity to work.** Use inline or adjacent surfaces when the intelligence is tightly bound to the current task.

**• Match interruption level to consequence.** Reserve dialogs and blocking layers for truly consequential moments.

**• Keep secondary intelligence secondary.** Use drawers, popovers, and local messaging when the AI output is supportive rather than primary.

**• Do not collapse all AI into one assistant panel.** Different work types need different containers and escalation paths.

**• Design persistence intentionally.** Toasts disappear, drawers may stay open, workspaces persist longer, and ambient layers may run continuously.

F. Enterprise examples

**•** CRM record: Inline explanation near the flagged field or section.

**•** Procurement review: Sidebar for rationale and supporting evidence.

**•** Complex case resolution: Dedicated workspace with orchestration steps.

**•** Monitoring: Feed of evolving signals plus notifications for critical changes.

**•** Spatial analysis: Immersive arrangement of multiple related entities around one focal object.

G. Private banking translation

In private banking, surface choice helps separate understanding, recommendation, and action in a more governable way. A relationship-health explanation may belong inline on the client record. Opportunity analysis may be better in a sidebar or workspace. A KYC or service-risk warning may begin as a notification or feed item. A consequential workflow step may require a more focused confirmation or review surface.

Typical translations include: inline for record-level explanations; overlay for quick compare or approval moments; sidebar for advisor copilot support; workspace for meeting prep or service resolution; feed for daily attention queues; notification for timing-sensitive reminders; ambient layer for background monitoring; spatial surfaces for future-facing relationship and portfolio environments.

This staged surfacing reduces ambiguity because it prevents every AI moment from feeling equally urgent or equally action-ready.

H. Failure modes

**•** All AI functionality is placed in one persistent panel, regardless of urgency or depth.

**•** Interruptive surfaces are overused for low-value information.

**•** High-stakes actions are hidden in weak surfaces that do not support review or focus.

**•** The team confuses surface with modality and assumes a container choice has solved the design.

I. References and citations

**•** Fluent 2 — Drawer guidance — https://fluent2.microsoft.design/components/web/react/core/drawer/usage

**•** Fluent 2 — Dialog guidance — https://fluent2.microsoft.design/components/web/react/core/dialog/usage

**•** Fluent 2 — Toast guidance — https://fluent2.microsoft.design/components/web/react/core/toast/usage

**•** Apple Human Interface Guidelines — Designing for visionOS — https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

# 2.5 The Trust and Governance Model

A. Definition

The Trust and Governance Model defines the safeguards, controls, explanations, oversight mechanisms, and accountability structures that make AI behavior reliable and governable in real use. It answers the question: Why should the user and the organization trust this system, and how is that trust controlled?

Trust is the user-facing experience of justified confidence. Governance is the organizational and technical system that makes that confidence warranted and durable.

B. Why it matters

Enterprise AI breaks not only when it is inaccurate, but when users cannot tell why it behaved in a certain way, what it is allowed to do, what data it used, how to challenge it, or who is accountable when it fails.

This is why trust cannot be reduced to a confidence score or reassurance badge. Current official materials from NIST, Microsoft, OpenAI, Anthropic, and Google all treat trust as a system of behavior, controls, evaluation, privacy, security, and operating process.

C. What belongs here

**•** Transparency and grounding; user control and reviewability; human oversight and escalation; policy and permission enforcement; auditability and traceability; privacy, security, and data governance; evaluation, monitoring, and incident response; organizational accountability and release governance.

**•** User-facing safeguards and organizational operating discipline.

D. What does not belong here

**•** The user’s job itself or the interaction pattern itself.

**•** A safety filter alone, a privacy notice alone, or a confidence badge alone.

**•** Generic product claims that the AI is trustworthy without inspectable support.

E. Design principles

**• Design trust as a system, not a signal.** Evidence, control, logging, privacy, and oversight matter more than cosmetic assurance.

**• Separate trust experience from governance mechanism.** Users need legibility and control; organizations need policy, evaluation, and release discipline.

**• Scale controls with risk and autonomy.** High-impact and high-agency flows need denser safeguards than low-stakes informational use.

**• Build challengeability into recommendations and actions.** Users should be able to inspect, question, and override consequential AI output.

**• Treat data governance as part of trust.** Data boundaries, retention, enterprise privacy, and connector scope directly shape justified confidence.

F. Enterprise examples

**•** Healthcare operations: Reviewable triage recommendation with cited evidence and supervisor override.

**•** Legal workflow: Draft clause change tracked with provenance and approval history.

**•** Support automation: Policy-bound action with full event logging and rollback.

**•** Internal knowledge search: Answer linked to source documents with permission filtering.

**•** Agentic workflow: Bounded tool use with explicit approvals for external consequences.

G. Private banking translation

Private banking makes trust and governance unavoidable because customer knowledge, recommendation quality, suitability-related facts, supervisory review, and sensitive communications all carry consequence.

Useful controls include: evidence-backed prioritization signals; editable drafts before anything becomes client-facing; supervisor review for higher-risk steps; role-aware permissions; audit trails that show what recommendation was shown and what was approved; enterprise data controls for household, portfolio, and communication records.

In this domain, trust is not only about whether the AI seems right. It is also about whether the organization can show how the system behaved, why it behaved that way, and whether the resulting workflow stayed inside supervisory and policy boundaries.

H. Failure modes

**•** Trust theater: badges or confidence numbers are shown without real evidence, controls, or accountability.

**•** Policy without usability: rules exist internally but the user cannot work with them in the interface.

**•** Usability without governance: the system feels smooth, but there is no release discipline, logging, or incident response.

**•** One-size-fits-all review: every output gets the same control burden regardless of risk and consequence.

I. References and citations

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

**•** Microsoft — Responsible AI Standard v2 (public requirements PDF) — https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2022/06/Microsoft-Responsible-AI-Standard-v2-General-Requirements-3.pdf

**•** Microsoft — Responsible AI principles and approach — https://www.microsoft.com/en-us/ai/principles-and-approach

**•** OpenAI — Model Spec — https://model-spec.openai.com/2025-02-12.html

**•** OpenAI — Safety — https://openai.com/safety/

**•** OpenAI — Enterprise privacy — https://openai.com/enterprise-privacy/

**•** Anthropic — Constitution — https://www.anthropic.com/constitution

**•** Anthropic — Responsible Scaling Policy — https://www.anthropic.com/news/responsible-scaling-policy-v3

**•** Google Cloud — Responsible AI — https://cloud.google.com/responsible-ai

# 2.6 The Autonomy Model

A. Definition

The Autonomy Model defines the degree of operational agency granted to the AI system: how far it may go from informing the user to taking action on the user’s behalf. It answers the question: How much is the system allowed to do?

Autonomy is a designable gradient, not a binary and not a brand label. It separates what the system knows from what the system may do.

B. Why it matters

Enterprise AI breaks when system agency is implicit. Users cannot tell whether the AI is only explaining, actively shaping judgment, preparing work, or actually changing system state.

Official sources increasingly treat autonomy as a range: NIST refers to varying levels of autonomy; OpenAI uses confirmations, watch mode, and refusals in agentic workflows; Microsoft links autonomy to oversight and decision impact; Google describes agentic AI in terms of planning and action; Anthropic evaluates autonomous capabilities as a distinct risk dimension.

C. What belongs here

**•** Degree of system initiative; independent planning; tool use without intervention; approval requirements; action boundaries; escalation thresholds; operating scope and duration.

**•** A clear scale of agency from low-risk support to bounded autonomous operation.

D. What does not belong here

**•** The user’s job or the interaction pattern.

**•** Whether the model is 'smart' or impressive.

**•** Whether the product is marketed as an assistant, copilot, or agent.

E. Design principles

**• Design autonomy explicitly.** Do not let agency emerge accidentally through hidden tools or background logic.

**• Scale autonomy with oversight.** As the system gains power, intervention, monitoring, and policy boundaries should strengthen.

**• Separate preparation from execution.** Drafting and prefilling are different thresholds from sending, submitting, or changing state.

**• Prefer bounded autonomy over vague autonomy.** Define what the system can act on, with which tools, under which rules, and for how long.

**• Use approval sparingly but deliberately.** Not every action needs confirmation, but sensitive, high-risk, or irreversible actions often do.

F. Enterprise examples

**•** Knowledge assistant: Inform with grounded answers but no action.

**•** Sales prioritization: Recommend who to contact next with rationale.

**•** Operations workflow: Prepare a case packet and assignable draft steps.

**•** Guided onboarding: Lead the user through a bounded sequence with explicit confirmations.

**•** Routine internal automation: Execute within policy for low-risk, high-repeatability tasks.

G. Private banking translation

Private banking is a strong proving ground because the difference between summarizing, recommending, drafting, and acting carries supervisory and customer-impact consequences.

Typical mapping: inform with relationship summary; recommend which households deserve attention; prepare meeting briefs or follow-ups; guide an advisor through a service or review flow; execute with approval for staged workflow submission; execute within policy for narrowly bounded internal tasks such as opening a low-risk follow-up; operate autonomously only for tightly scoped internal monitoring and queue management.

A strong design in this domain rarely jumps directly from recommendation to unreviewed action. Instead it stages the work: signal, explain, prepare, review, approve, then execute where allowed.

H. Failure modes

**•** Autonomy ambiguity: users cannot tell whether the system is informing, recommending, preparing, or acting.

**•** Agent inflation: any tool-using flow is described as autonomous even when it still depends heavily on the user.

**•** Action without adequate approval: sensitive actions occur without enough review or control.

**•** High power with weak boundaries: the agent has overly broad permissions, poor least-privilege scope, or no clear human controller.

I. References and citations

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

**•** Google Cloud — What is agentic AI? — https://cloud.google.com/discover/what-is-agentic-ai

**•** OpenAI — Operator system card — https://openai.com/index/operator-system-card/

**•** OpenAI — A practical guide to building agents — https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf

**•** Microsoft Copilot Studio — Responsible AI maturity model — https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/maturity-model-responsible-ai

**•** Microsoft Security — Manage agentic risk — https://learn.microsoft.com/th-th/security/zero-trust/sfi/manage-agentic-risk

**•** Anthropic — Responsible Scaling Policy — https://www.anthropic.com/news/responsible-scaling-policy-v3

**•** Anthropic — Constitution — https://www.anthropic.com/constitution

# 2.7 The Context Model

A. Definition

The Context Model defines the situational information an AI system should use to interpret intent, shape output, constrain action, and maintain continuity across time and workflows. It answers the question: What does the system need to know about this situation to respond appropriately?

Context is broader than a user profile, broader than the model’s immediate context window, and broader than memory alone. It is the situational substrate that makes AI behavior relevant and bounded.

B. Why it matters

Enterprise AI breaks when the system sounds intelligent but behaves generically because it lacks enough understanding of role, task, active entity, timing, system state, or organizational conditions.

NIST’s socio-technical framing, Microsoft’s guidance on contextual relevance and timing, Microsoft Copilot’s grounding architecture, Anthropic’s distinction between context window and memory, OpenAI’s context-engineering guidance, and Google’s shared-state guidance all point in the same direction: context is a first-class operating layer.

C. What belongs here

**•** Identity and role context; workflow and task context; entity and record context; temporal context; system and tool-state context; organizational and policy context; historical and memory context; environmental and channel context; context-window and retrieval management.

**•** Signals that help the system understand scope, relevance, permission, continuity, and timing.

D. What does not belong here

**•** The user’s job, pattern family, chosen modality, or chosen surface.

**•** A static personalization profile by itself.

**•** The model’s token window alone or memory alone.

E. Design principles

**• Treat context as situational, not static.** Role, task stage, entity, timing, and system state change from moment to moment.

**• Separate context from the context window.** The model’s working memory is only one implementation layer of a broader design problem.

**• Ground context in enterprise reality.** Use records, connectors, workflow state, and business data where appropriate.

**• Keep context selective.** High-signal context is better than indiscriminate accumulation.

**• Make critical context legible.** Users should be able to inspect or correct important scope assumptions when needed.

**• Design for stale, missing, or conflicting context.** Strong systems degrade gracefully or ask for clarification rather than pretending certainty.

F. Enterprise examples

**•** Support workflow: active ticket, customer tier, SLA clock, and prior actions shape the response.

**•** Legal review: matter, jurisdiction, clause history, approver, and deadline determine what is relevant.

**•** HR assistant: role, hiring stage, interview notes, and policy requirements bound the output.

**•** Finance review: active account, time period, open exceptions, and sensitivity labels govern access and explanation.

**•** Multi-agent workflow: shared session state prevents duplication and conflicting actions.

G. Private banking translation

Private banking depends on context at almost every step. Useful AI needs to know who the user is, what workflow they are in, which client or household is active, what changed recently, what was promised previously, which policy or product boundaries apply, and what system state is already in motion.

Examples include: advisor versus supervisor role context; meeting prep versus service resolution workflow context; household and account entity context; recency and deadline timing; product or jurisdiction rules; prior outreach, commitments, and notes; and connected knowledge from CRM, portfolio, onboarding, or service systems.

In this domain, a question such as 'who should I call today?' is almost meaningless without book-of-business scope, recent engagement, open service issues, event timing, and previous follow-up history. Context is what turns fluent output into useful advisory support.

H. Failure modes

**•** Profile-only context: the system relies on a static profile and ignores workflow, entity, and timing.

**•** Context-window confusion: token capacity is mistaken for real situational understanding.

**•** Grounding without task context: enterprise data is available, but the system still does not know what the user is trying to do right now.

**•** Memory without curation: too much history is carried forward without trimming or prioritization.

**•** Invisible stale context: the system acts on old or wrong assumptions with no way for the user to notice.

I. References and citations

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

**•** Microsoft Research — Guidelines for Human-AI Interaction — https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf

**•** Microsoft 365 Copilot architecture — https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-architecture

**•** Microsoft Copilot connectors as knowledge sources — https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-connectors

**•** Anthropic — Glossary: context window — https://docs.anthropic.com/en/docs/resources/glossary

**•** Anthropic — Memory — https://docs.anthropic.com/en/docs/claude-code/memory

**•** OpenAI — Prompt engineering guide — https://developers.openai.com/api/docs/guides/prompt-engineering/

**•** OpenAI Cookbook — Session memory / context engineering — https://developers.openai.com/cookbook/examples/agents\_sdk/session\_memory/

**•** Google Cloud — Choose agentic AI architecture components — https://docs.cloud.google.com/architecture/choose-agentic-ai-architecture-components

# 2.8 How the Framework Layers Work Together

## The core synthesis

The framework works as one system when it is read as: Enterprise AI design = Job × Pattern Family × Modality × Surface, shaped by Context, calibrated by Autonomy, and bounded by Trust and Governance.

This expression is a project synthesis, but it reflects the common logic across the official sources used throughout this document: NIST emphasizes context, autonomy, and trustworthiness; Microsoft emphasizes user need, patterns, and contextual relevance; OpenAI and Anthropic separate behavior, memory, control, and safety; Apple and Fluent distinguish content from container.

## The three-part architecture

The seven layers group naturally into three parts. The core interaction architecture consists of Job, Pattern Family, Modality, and Surface. The system-intelligence substrate is Context. The control architecture is Autonomy plus Trust and Governance.

This grouping makes the framework easier to teach and apply. It also prevents teams from treating all seven layers as flat categories with equal design function.

## The recommended order of design

Start with Job to define the work. Choose Pattern Family to define the interaction logic. Select Modality to define the expressive form. Choose Surface to define where the intelligence should appear. Inject the right Context so the system understands the situation. Calibrate Autonomy so the system’s agency is explicit. Then apply Trust and Governance so the behavior is understandable, controllable, and organizationally acceptable.

In short: work first, then interaction logic, then form and placement, then situational shaping, then agency, then controls.

## How the layers behave at runtime

At runtime, the framework is not just a stack. Context helps the system interpret the moment. That interpretation influences the inferred job and the chosen interaction family. The result is expressed through one or more modalities on one or more surfaces. Autonomy determines whether the system only informs, recommends, prepares, guides, or acts. Trust and Governance determine whether the behavior must explain itself, request approval, log events, or escalate.

This means the architecture should be visualized not only as a layered stack, but also as a decision flow and as a runtime loop.

## One worked example

Prompt: 'Who should I call today?' The dominant job is Decide, supported by Understand and Find. The dominant pattern family is Recommendation and Decision Support, supported by Retrieval and Grounding plus Explanation and Synthesis. A good modality may be a ranked visual summary with concise rationale. A good surface may be a sidebar in an active CRM workflow or a workspace in a book-of-business review. The needed context includes book scope, recent engagement, service issues, prior outreach, and timing. A reasonable autonomy level is Recommend or Prepare, not Execute. Trust and Governance require evidence, rationale, rejection paths, and appropriate logging if follow-up becomes workflow action.

## Private banking end-to-end translation

A private-banking meeting-prep flow shows the full architecture clearly. The job is Understand plus Create. The pattern families are Retrieval, Synthesis, Memory, Recommendation, and Drafting. The modalities may be visual summary, chart, and concise text. The surface may be a sidebar for adjacent support or a workspace for deep preparation. The context includes client, household, portfolio, recent engagement, open issues, and prior commitments. The autonomy level is usually Prepare rather than Execute. Trust and Governance require evidence, editability, permissions, and auditability for generated notes.

This is why the framework is more useful than a generic copilot label. It turns one vague AI feature into a clear operating model.

## Common architecture failure modes

**•** Chat monoculture: every workflow is forced into a prompt-response shell.

**•** Layer collapse: teams confuse jobs with patterns, modalities with surfaces, or trust with autonomy.

**•** Context blindness: the system sounds intelligent but acts generically.

**•** Autonomy ambiguity: users cannot tell whether the system is informing, recommending, preparing, or acting.

**•** Trust theater: the product adds assurance signals without real evidence, controls, or governance.

**•** Surface monotony: all AI behaviors appear in the same container regardless of urgency, depth, or consequence.

## Selected references

**•** NIST — AI Risk Management Framework 1.0 — https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

**•** Microsoft Research — Guidelines for Human-AI Interaction — https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf

**•** Microsoft HAX Toolkit — https://www.microsoft.com/en-us/haxtoolkit/

**•** OpenAI — Model Spec — https://model-spec.openai.com/2025-02-12.html

**•** Anthropic — Glossary and Memory docs — https://docs.anthropic.com/en/docs/resources/glossary

**•** Microsoft 365 Copilot architecture — https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-architecture

**•** Fluent 2 component guidance — https://fluent2.microsoft.design/

**•** Apple Human Interface Guidelines — Designing for visionOS — https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos

## Editorial note on structure

**Structure check.** Yes — the final master document deliberately follows your requested A–I sequence for each framework topic. The main adjustment from the earlier thread drafts is that enterprise examples now appear as a dedicated section in every chapter, rather than being distributed across the narrative.

**Result.** This makes the section read more like a manual or textbook chapter set and less like a collection of strategy notes.
