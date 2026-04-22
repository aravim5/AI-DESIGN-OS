Enterprise AI Beyond Chat

Pattern Library

Master Chapter v1 — Publication-ready working draft

This chapter defines the reusable interaction patterns teams can apply when designing enterprise AI systems. It includes the operating model for the library, the v1 pattern set, tagging guidance, a pattern matrix, and full authored patterns designed for enterprise use and translated into private banking contexts.

|  |  |
| --- | --- |
| **Project** | AI Future OS / Enterprise AI design language |
| **Document type** | Framework chapter / operating manual |
| **Version** | v1 export |
| **Prepared** | 19 April 2026 |

Source spine: IBM Carbon Design System; Carbon for AI; Microsoft HAX Toolkit; Google PAIR Guidebook; Anthropic research on trustworthy and effective agents.

# Contents

1. Chapter opener

2. Core point of view

3. Pattern family structure

4. v1 pattern set

5. Pattern matrix

6. Pattern tagging schema

7. Pattern anatomy standard

8. Authoring standards

9. Authored patterns 1–15

10. Cross-library anti-patterns

11. Failure modes for the chapter

12. Final chapter position

13. References

|  |
| --- |
| **How to use this chapter.** Use the first half of the chapter to understand the operating model for the library. Use the authored patterns as the canonical source for reusable AI interaction structures. Each pattern is written in a consistent manual-style format so teams can compare, adapt, and extend the library without reinventing interaction logic. |

# 1. Chapter opener

### What this chapter is

The Pattern Library defines the reusable interaction patterns teams can use to design enterprise AI systems consistently. In this project, a pattern is not a UI component and not a one-off feature. It is a repeatable interaction model that solves a recurring user problem, with defined structure, state logic, trust controls, and recovery behavior. That framing aligns with mature design-system practice: Carbon describes patterns as best-practice solutions that combine components and templates around common user goals and flows [1].

### Why it matters

Enterprise AI breaks down when every team invents its own interaction model, or when all AI behavior gets forced into one overused shape such as chat. A pattern library solves both problems. It creates a controlled set of reusable interaction forms while still allowing domain-specific variation. This also matches current human-AI design guidance: Microsoft’s HAX Toolkit frames AI UX across the lifecycle of interaction — initial use, ongoing use, failure, and use over time — while Anthropic emphasizes simple, composable patterns plus visible human control for more agentic systems [3][6][7].

### How it relates to the full framework

Within the broader framework, the job model defines what the user is trying to accomplish; the pattern library defines the reusable interaction shape for that job; the modality model defines how input and output are expressed; the surface model defines where the interaction appears; the autonomy model defines how much the system can do; trust and governance defines the safeguards around it; and the context model determines what the pattern can be grounded in.

### What belongs here

This chapter includes pattern family structure, the v1 pattern set, naming rules, the tagging model, pattern anatomy, pattern states, anti-patterns, authoring standards, worked examples, and private banking translations.

### What does not belong here

This chapter does not redefine raw UI components, modality taxonomy, surface taxonomy, autonomy policy itself, the trust framework as a separate layer, or full workflow specifications for every domain. The pattern library should consume those layers, not replace them.

# 2. Core point of view

### Position

Enterprise AI should be built from reusable interaction patterns, not from isolated AI features. This position is supported by three ideas: design systems treat patterns as reusable solutions above the component layer [1]; human-AI systems need interaction logic for success, failure, correction, and long-term use, not just happy-path output rendering [3]; and AI systems need visible trust calibration, explainability, and user control, especially when recommendations or actions shape decisions [2][4][5].

### What a strong pattern library does

A strong enterprise pattern library reduces reinvention, creates interaction consistency, embeds trust into repeatable structures, and makes scaling across products and teams possible.

# 3. Pattern family structure

### Overview

The v1 library is organized into seven families so that patterns can scale without becoming an unstructured list.

| **Family** | **Definition** | **Included patterns** |
| --- | --- | --- |
| Answer | Used when the user needs orientation, retrieval, explanation, or grounded understanding. | Quick Answer; Evidence-Backed Answer |
| Recommendation | Used when the system proposes priorities, options, or next-best actions. | Recommendation List; Inline Suggestion; Comparison Workspace |
| Creation | Used when the system helps produce editable artifacts. | Draft and Edit |
| Workflow assistance | Used when the system helps the user progress through structured work. | Guided Flow; Assisted Form Fill; Contextual Assistant |
| Monitoring and signal | Used when the system watches for change and surfaces relevance proactively. | Proactive Signal; Long-Running Task Tracker |
| Governance and control | Used when human review, approval, or intervention is required. | Approval Checkpoint |
| Recovery and continuity | Used when the system is uncertain, interrupted, or needs to expose memory/history. | Memory Manager; Low-Confidence Recovery; Audit / History View |

# 4. v1 pattern set

### Overview

The recommended v1 pattern set is intentionally compact: 15 patterns covering answer, recommendation, creation, workflow assistance, monitoring, governance, recovery, and continuity. Anthropic’s engineering guidance argues that effective systems are often built from simple, composable patterns rather than unnecessarily complex frameworks, which is the right stance for a v1 public library [6].

**•** 1. Quick Answer

**•** 2. Evidence-Backed Answer

**•** 3. Recommendation List

**•** 4. Inline Suggestion

**•** 5. Draft and Edit

**•** 6. Guided Flow

**•** 7. Assisted Form Fill

**•** 8. Contextual Assistant

**•** 9. Proactive Signal

**•** 10. Comparison Workspace

**•** 11. Memory Manager

**•** 12. Approval Checkpoint

**•** 13. Low-Confidence Recovery

**•** 14. Long-Running Task Tracker

**•** 15. Audit / History View

# 6. Pattern tagging schema

### Purpose

A usable library needs metadata that allows teams to select, compare, govern, and extend patterns intentionally rather than by familiarity.

### Required tags

|  |  |
| --- | --- |
| **1** | Pattern family |
| **2** | Primary job |
| **3** | Secondary jobs |
| **4** | Primary surface |
| **5** | Supported surfaces |
| **6** | Supported modalities |
| **7** | Autonomy range |
| **8** | Risk tier |
| **9** | Trust controls required |
| **10** | Minimum context needed |
| **11** | Typical entities |
| **12** | Workflow fit |
| **13** | Related patterns |
| **14** | Anti-patterns |
| **15** | Domain examples |

### Primary job values

|  |  |
| --- | --- |
| **1** | Ask |
| **2** | Find |
| **3** | Understand |
| **4** | Decide |
| **5** | Create |
| **6** | Execute |
| **7** | Monitor |
| **8** | Recover |
| **9** | Review |

### Autonomy range values

|  |  |
| --- | --- |
| **1** | Inform |
| **2** | Suggest |
| **3** | Assist |
| **4** | Draft |
| **5** | Guide |
| **6** | Act with review |
| **7** | Act autonomously |
| **8** | Monitor in background |

### Risk tier values

|  |  |
| --- | --- |
| **1** | Low |
| **2** | Moderate |
| **3** | High |
| **4** | Critical |

### Trust control values

|  |  |
| --- | --- |
| **1** | Evidence |
| **2** | Confidence visibility |
| **3** | Editability |
| **4** | Reversibility |
| **5** | Approval |
| **6** | Audit trail |
| **7** | Escalation |
| **8** | Permission check |
| **9** | Policy check |
| **10** | Human handoff |

### Typical entity values

|  |  |
| --- | --- |
| **1** | Record |
| **2** | Document |
| **3** | Task |
| **4** | Workflow |
| **5** | Portfolio |
| **6** | Household |
| **7** | Case |
| **8** | Opportunity |
| **9** | Alert |
| **10** | Message |

# 7. Pattern anatomy standard

### Purpose

Every pattern in the library should follow the same structure so that teams can compare patterns and author new ones consistently. Microsoft’s HAX guidance explicitly pushes teams to design not only for successful interaction, but also for error, ambiguity, and behavior over time [3].

**•** 1. Pattern name

**•** 2. Pattern family

**•** 3. Definition

**•** 4. Why it matters

**•** 5. When to use

**•** 6. When not to use

**•** 7. Inputs and minimum context

**•** 8. Core interaction anatomy

**•** 9. Pattern states

**•** 10. Trust and governance requirements

**•** 11. Surface and modality variants

**•** 12. Enterprise example

**•** 13. Private banking translation

**•** 14. Anti-patterns

**•** 15. Failure modes

**•** 16. Related patterns

# 8. Authoring standards

### Purpose

These standards keep the library coherent as new patterns are added. They also keep trust, explainability, and recovery inside the pattern itself instead of bolting them on later [2][4].

### Name patterns by user value

Use names such as Evidence-Backed Answer or Approval Checkpoint, not implementation names such as “RAG response card” or “agent review modal.”

### Separate recommendation from execution

A system may recommend, prefill, guide, or act. These are not the same interaction, and patterns should keep them distinct.

### Treat uncertainty as a first-class state

Patterns must define what happens when the system is unsure, incomplete, blocked, or wrong.

### Build trust into the pattern

Trust is not a side panel added later. Explanation, provenance, review, and recovery are part of the pattern itself. IBM Carbon for AI explicitly treats transparency and explainability as built-in responsibilities of AI experience design, and Google’s trust guidance emphasizes calibrated trust rather than blind trust [2][4].

### Make AI presence legible

AI-generated or AI-assisted output should be visibly understandable where it matters. Carbon’s AI label is designed as a consistent path to explainability and should not be used as decoration or as a generic action trigger [2].

### Keep the library deliberately small in v1

A pattern library should be opinionated enough to be used. It is better to have 15 strong patterns than 60 vague ones.

# 5. Pattern matrix

The matrix below gives teams a quick way to compare the v1 patterns by job, autonomy, surface, risk tendency, and primary trust need.

| **Pattern** | **Primary job** | **Typical autonomy** | **Primary surfaces** | **Risk tendency** | **Main trust need** |
| --- | --- | --- | --- | --- | --- |
| Quick Answer | Ask / Understand | Inform | Inline, sidebar, overlay | Low | Scope clarity |
| Evidence-Backed Answer | Understand / Decide | Inform | Sidebar, workspace | Medium–High | Evidence, rationale |
| Recommendation List | Decide | Suggest | Workspace, dashboard, sidebar | Medium | Ranking transparency |
| Inline Suggestion | Create / Execute | Suggest | Inline | Low–Medium | Optionality, editability |
| Draft and Edit | Create | Draft | Editor, sidebar, workspace | Medium | Reviewability |
| Guided Flow | Execute | Guide / Assist | Workspace, sidebar | Medium–High | Progress visibility |
| Assisted Form Fill | Execute | Assist / Draft | Form, inline, sidebar | Medium–High | Provenance per field |
| Contextual Assistant | Ask / Find / Understand | Inform–Assist | Sidebar | Medium | Context visibility |
| Proactive Signal | Monitor | Inform / Suggest | Notification, feed, sidebar | Medium | Relevance, urgency clarity |
| Comparison Workspace | Decide | Suggest | Workspace | Medium | Trade-off visibility |
| Memory Manager | Understand / Personalize | Inform | Sidebar, settings, workspace | Medium–High | Scope, reach, removal |
| Approval Checkpoint | Execute / Govern | Act with review | Modal, step, queue | High | Explicit authorization |
| Low-Confidence Recovery | Recover | Inform / Guide | Inline, sidebar, overlay | Medium–High | Uncertainty signaling |
| Long-Running Task Tracker | Monitor / Execute | Monitor in background | Feed, sidebar, workspace | Medium–High | Status, intervention |
| Audit / History View | Review / Govern | Inform | Workspace, history panel | High | Traceability |

# 9. Authored patterns 1–15

The patterns below are the canonical v1 entries. Each is written in the same structure so teams can compare them directly and reuse them in product design, design reviews, and design-system authoring.

## 1. Quick Answer

**Pattern family.** Answer

**Definition.** Quick Answer is a concise response pattern for bounded questions where the user needs immediate orientation, retrieval, or summary rather than deep analysis, workflow execution, or formal justification.

**Why it matters.** Enterprise users frequently need fast understanding before they need full detail. A strong Quick Answer pattern reduces friction, lowers navigation cost, and helps users stay in flow. It is especially valuable when the user’s goal is to orient, confirm, or recall rather than decide or act [3].

**When to use.**

**•** The question is narrow and well-scoped.

**•** The user needs a short response first.

**•** The risk of acting on the answer is low.

**•** The user is likely to ask a follow-up rather than complete a full workflow immediately.

**When not to use.**

**•** The user needs evidence or auditability.

**•** The answer drives a high-stakes decision.

**•** The system is uncertain or data is incomplete.

**•** The task requires comparison, drafting, or execution.

**Inputs and minimum context.** Minimum inputs are the user question, current record or object, recent data relevant to the question, and role or permission context. Helpful context includes recent activity, workflow state, entity relationships, and prior user actions.

**Core interaction anatomy.**

**•** Trigger: user asks a direct question.

**•** Context used: current page, record, workflow, and recent data.

**•** System output: a short answer, usually one to four lines.

**•** Optional support: timestamp, status, or source reference.

**•** User controls: expand, ask follow-up, open source item, compare, or act.

**Pattern states.** Empty; Loading; Success; Low confidence; Blocked; Failure; Resumed/history.

**Trust and governance requirements.** Quick Answer should not imply more certainty than the system has. If the answer is generated from multiple sources, the UI should allow the user to inspect more detail. If the question touches regulated or sensitive content, the pattern should gracefully step up into a more evidence-rich mode [2][3].

**Surface and modality variants.** Inline near the object being discussed; sidebar as a compact contextual response; overlay for ephemeral explanation; voice as a spoken answer with an option to show more.

**Enterprise example.** A support manager asks, “What is blocking this case?” The system returns: “Waiting on customer document upload since Tuesday.”

**Private banking translation.** An advisor asks, “What changed with the Rao household since my last review?” The system answers: “One large cash inflow posted two days ago, no outbound contact since last Thursday, and one service request remains open.”

**Anti-patterns.**

**•** Producing long paragraphs instead of a quick answer.

**•** Sounding definitive when the data is partial.

**•** Forcing the user into chat for a simple fact.

**•** Hiding the underlying scope of the answer.

**Failure modes.**

**•** Users over-trust an answer that lacked sufficient context.

**•** Teams overuse Quick Answer where evidence is required.

**•** The pattern becomes a generic chat response with no grounding.

**Related patterns.** Evidence-Backed Answer; Contextual Assistant; Proactive Signal

## 2. Evidence-Backed Answer

**Pattern family.** Answer

**Definition.** Evidence-Backed Answer pairs a direct answer with the supporting rationale, source references, or traceable records needed for the user to verify or trust it.

**Why it matters.** In enterprise contexts, a useful answer is often not enough. Users need to understand why the answer exists, what data informed it, and whether they can rely on it. Carbon explicitly treats explainability as central to trust, and Google emphasizes explanations, confidence framing, and user understanding when AI output affects judgment [2][4].

**When to use.**

**•** The answer affects a decision.

**•** The user is likely to ask “why?”

**•** The output summarizes multiple signals.

**•** Auditability or accountability matters.

**•** The user must defend or explain the answer to others.

**When not to use.**

**•** The user only needs fast orientation.

**•** The answer is trivial and low consequence.

**•** Source evidence is unavailable and cannot be summarized responsibly.

**Inputs and minimum context.** Minimum inputs include the question, source data or cited records, ranking or reasoning logic, and permission context. Helpful context includes thresholds, business rules, time windows, comparable items, and prior decisions.

**Core interaction anatomy.**

**•** Trigger: user asks for explanation or receives a consequential answer.

**•** System output: answer first, evidence second.

**•** Evidence block: sources, facts, reasoning factors, or policy basis.

**•** Controls: expand evidence, inspect source, compare alternatives, challenge result, or save note.

**Pattern states.** Loading; Success; Low confidence; Blocked; Failure; History.

**Trust and governance requirements.** The pattern should show what sources informed the answer, what reasoning factors mattered, whether anything was inferred, and whether the user is seeing the full evidence set or a role-limited version [2][4][5].

**Surface and modality variants.** Sidebar as the default layered form; workspace for multi-source evidence review; inline for compact why-reveal; voice should summarize first and offer visual evidence follow-up.

**Enterprise example.** A revenue leader asks, “Why is this account classified as churn risk?” The system shows declining usage, unresolved tickets, reduced executive engagement, and a renewal date within 45 days.

**Private banking translation.** An advisor asks, “Why is this client flagged for outreach?” The system shows cash buildup above threshold, no outbound contact in 28 days, a recent maturity event, and elevated product fit for a deposit solution.

**Anti-patterns.**

**•** Burying evidence behind several clicks.

**•** Presenting evidence as decoration instead of support.

**•** Listing sources without showing what matters.

**•** Mixing verified facts and inferred conclusions without distinction.

**Failure modes.**

**•** Users distrust a correct answer because the rationale is invisible.

**•** Users trust an incorrect answer because the interface looks polished.

**•** Teams overproduce evidence and create cognitive overload.

**Related patterns.** Quick Answer; Recommendation List; Approval Checkpoint

## 3. Recommendation List

**Pattern family.** Recommendation

**Definition.** Recommendation List is a ranked or grouped set of suggested options, priorities, or next-best actions produced to help the user decide what to do next.

**Why it matters.** Many enterprise tasks are prioritization problems, not information problems. Users need help deciding where attention should go first. Recommendation patterns create leverage by narrowing a large field into a smaller, more actionable set, but because recommendations shape user behavior they need visible rationale, manageable confidence, and a clear line between suggestion and action [4][7].

**When to use.**

**•** The user faces too many options.

**•** Prioritization is more valuable than exhaustive browsing.

**•** The system can rank or group with defensible logic.

**•** The user remains the decision-maker.

**When not to use.**

**•** The user needs deep comparison, not ranking.

**•** The ranking criteria are not explainable.

**•** The system cannot distinguish urgency from importance.

**•** Action should happen automatically without human choice.

**Inputs and minimum context.** Minimum inputs are the candidate set, ranking criteria, time horizon, role and goals, and business constraints. Helpful context includes workload, current book or team priorities, recent activity, user preferences, and prior response to recommendations.

**Core interaction anatomy.**

**•** Trigger: explicit query or system-generated prioritization need.

**•** System output: ranked or grouped list.

**•** Rationale: top reasons per item.

**•** Controls: re-rank, filter, compare, dismiss, act, or save.

**Pattern states.** Loading; Ranked success state; Low-confidence ranking; Sparse-result state; Blocked data state; Dismissed or snoozed state; Historical recommendation state.

**Trust and governance requirements.** Users should know why items are ranked, what time horizon or business objective the ranking reflects, whether the list is personalized, and whether important data was unavailable [4][7].

**Surface and modality variants.** Workspace or dashboard for scanning; sidebar for contextual priority suggestions; notification or feed for top one to three items; voice for top-three summary.

**Enterprise example.** A manager opens a daily operations panel and sees the top five contracts likely to slip this month, each with a short explanation.

**Private banking translation.** An advisor sees a prioritized list of households for outreach based on liquidity events, inactivity, meeting recency, and upcoming maturities.

**Anti-patterns.**

**•** Opaque ranking logic.

**•** Too many recommendations.

**•** Mixing opportunity, risk, and service items in one undifferentiated list.

**•** Using one score to stand in for all nuance.

**Failure modes.**

**•** Users ignore recommendations because they feel arbitrary.

**•** Users follow recommendations blindly without reviewing context.

**•** Teams treat ranking as sufficient when comparison is actually needed.

**Related patterns.** Comparison Workspace; Proactive Signal; Evidence-Backed Answer

## 4. Inline Suggestion

**Pattern family.** Recommendation

**Definition.** Inline Suggestion is a contextual recommendation pattern embedded directly inside the user’s current workflow, object, or content surface.

**Why it matters.** Not every AI interaction should pull users into a separate assistant, panel, or chat. Many of the highest-value AI moments are small, local, and embedded in the work itself. Inline Suggestion supports augmentation over interruption and integrates support into the flow of work [2][3].

**When to use.**

**•** The user is already engaged in a task.

**•** The suggestion is local to the current object.

**•** Immediate adoption or rejection is possible.

**•** A full assistant experience would be excessive.

**When not to use.**

**•** The recommendation affects multiple entities.

**•** The user needs rationale across several data sources.

**•** The outcome has high compliance or financial risk.

**•** The user must review alternatives side by side.

**Inputs and minimum context.** The pattern needs the current artifact or field, local intent, surrounding content, domain rule context, and user permissions.

**Core interaction anatomy.**

**•** Trigger: cursor focus, field interaction, selection, draft state, or a system-detected opportunity.

**•** Output: one suggestion or a small set of alternatives.

**•** Controls: accept, edit, reject, ask why, show more, or never suggest again.

**Pattern states.** Idle; Suggestion available; Applied; Dismissed; Low-confidence or no suggestion; Hidden due to policy or permissions.

**Trust and governance requirements.** Inline Suggestion must remain obviously optional. For AI-generated content, the system should mark AI presence where appropriate and preserve editability [2][4].

**Surface and modality variants.** Inline text is the canonical form; form-field suggestion beneath or within the field; spreadsheet or grid suggestion in a cell; voice prompt offering a rewrite.

**Enterprise example.** While drafting a customer response, the system suggests a more concise opening sentence and a missing reference to the case number.

**Private banking translation.** While preparing outreach, the advisor gets an inline suggestion to mention a recent liquidity event and remove a generic phrase that weakens personalization.

**Anti-patterns.**

**•** Too many suggestions at once.

**•** Suggestions that block the user’s own writing.

**•** No easy reject path.

**•** Suggestions with no relationship to user intent.

**Failure modes.**

**•** Users treat suggestions as boilerplate and stop reviewing them.

**•** Local suggestions create inconsistency with broader workflow policy.

**•** The pattern becomes noisy and gets disabled mentally.

**Related patterns.** Draft and Edit; Assisted Form Fill; Contextual Assistant

## 5. Draft and Edit

**Pattern family.** Creation

**Definition.** Draft and Edit is a creation pattern in which the system produces an initial artifact that the user is expected to review, revise, and finalize.

**Why it matters.** This is one of the most valuable enterprise AI patterns because it compresses first-draft effort without removing human judgment. It is fundamentally different from auto-execution: the output is provisional, editable, and intended to accelerate thinking or production [2][3].

**When to use.**

**•** The output is narrative, structured text, or composite content.

**•** Speed matters but correctness still needs human review.

**•** The user benefits from overcoming blank-page cost.

**•** The artifact may need style, tone, or domain adjustment.

**When not to use.**

**•** The output should be submitted automatically.

**•** The task is purely structured and better handled by Assisted Form Fill.

**•** The user needs side-by-side evaluation of options before creating content.

**•** Compliance rules require pre-approved language only.

**Inputs and minimum context.** The pattern needs prompt or intent, source context, tone or format constraints, user role, policy boundaries, and required facts or references.

**Core interaction anatomy.**

**•** Trigger: explicit request to generate or rewrite.

**•** Output: editable draft.

**•** Controls: edit, regenerate, shorten, personalize, cite evidence, compare versions, or approve for next step.

**•** Support: show source inputs or notes used to draft.

**Pattern states.** Blank; Generating; Draft generated; Edited; Version compared; Blocked by missing source data; Failed generation; Approved or handed off.

**Trust and governance requirements.** The draft must be visually and behaviorally understood as AI-generated where appropriate. Users should be able to inspect or re-open the source material behind it when needed. High-risk content should require review before sending or committing [2][3][7].

**Surface and modality variants.** Editor workspace for full drafting; sidebar draft panel for contextual generation; inline rewrite for small-scale revisions; voice for dictation plus generated summary.

**Enterprise example.** A seller asks for a customer follow-up email after a product demo. The system drafts the message, highlights the recommended subject line, and lets the seller revise before sending.

**Private banking translation.** After a client review, the advisor generates a recap email summarizing portfolio topics, next steps, and agreed follow-ups, then edits tone and detail before sending.

**Anti-patterns.**

**•** Making the draft look final.

**•** Hiding the fact that it was AI-generated.

**•** Removing editability.

**•** Regenerating unpredictably and losing user changes.

**Failure modes.**

**•** Inaccurate details get carried into final output.

**•** Users over-trust stylistically strong drafts.

**•** Teams use Draft and Edit where Evidence-Backed Answer was actually needed first.

**Related patterns.** Inline Suggestion; Assisted Form Fill; Approval Checkpoint

## 6. Guided Flow

**Pattern family.** Workflow assistance

**Definition.** Guided Flow is a stepwise assistance pattern that helps the user complete a multi-stage task, especially when the process is conditional, complex, or policy-sensitive.

**Why it matters.** Enterprise work often involves progression, not just answers. Guided Flow turns AI from a responder into a structured helper that keeps work moving without hiding the underlying process. More autonomous or multi-step behavior needs clear human control and intervention points [3][7].

**When to use.**

**•** The task spans multiple steps.

**•** The user benefits from progression and checklists.

**•** There are conditional branches.

**•** The system can pre-compute helpful next steps.

**•** The work is too important for a single-shot answer.

**When not to use.**

**•** The user only needs a one-step answer.

**•** The task is open-ended exploration.

**•** The work is better served by a comparison or drafting surface.

**•** The process is so rigid that a normal form is enough.

**Inputs and minimum context.** The pattern needs workflow stage, process policy or business rules, required documents or records, role permissions, unresolved dependencies, and prior user progress.

**Core interaction anatomy.**

**•** Trigger: user starts or resumes a multi-step task.

**•** Output: visible sequence of steps, current status, and recommended next action.

**•** Controls: continue, skip, review, ask for explanation, assign, pause, or escalate.

**Pattern states.** Not started; In progress; Blocked; Awaiting input; Requires review; Completed; Resumed after interruption; Failed due to missing dependency.

**Trust and governance requirements.** Guided Flow should always preserve user orientation: where they are, what is done, what remains, and what the system is doing on their behalf. If the system pre-completes steps, that should be explicit. If the flow enters a higher-risk action, it should introduce review or approval checkpoints [3][7].

**Surface and modality variants.** Workspace for full guided progression; sidebar for contextual lighter flows; overlay for short flows; voice only when paired with visible progress representation.

**Enterprise example.** A service operations user is guided through issue triage: identify category, inspect signals, choose resolution path, and assign owner.

**Private banking translation.** A banker launches a periodic review flow. The system gathers account activity, highlights missing documents, proposes meeting prep points, and walks the banker through review completion.

**Anti-patterns.**

**•** Hiding the number of steps.

**•** Jumping the user between unrelated surfaces.

**•** No resume path.

**•** Over-automating a flow without clear control boundaries.

**Failure modes.**

**•** Users lose trust because they cannot tell what the system already did.

**•** Teams reduce a complex workflow to a shallow wizard.

**•** Exceptions and edge cases are not modeled, so the flow breaks under real use.

**Related patterns.** Assisted Form Fill; Approval Checkpoint; Long-Running Task Tracker

## 7. Assisted Form Fill

**Pattern family.** Workflow assistance

**Definition.** Assisted Form Fill is a structured-input pattern in which the system proposes or pre-populates form values using available context, while preserving human review and correction.

**Why it matters.** Forms are a major source of friction in enterprise systems. AI can reduce repetitive input work, but only if the output remains inspectable, editable, and clearly attributable [2][3].

**When to use.**

**•** The task requires structured input.

**•** Source data already exists elsewhere.

**•** The user still needs final control.

**•** Repetitive entry is a real burden.

**When not to use.**

**•** The output is primarily narrative.

**•** Fields require user judgment not inferable from context.

**•** The data source is unreliable.

**•** The form carries hidden compliance sensitivity that prefill would obscure.

**Inputs and minimum context.** The pattern needs the current record, source systems or fields, business rules, user role, editable schema, and confidence per suggested field.

**Core interaction anatomy.**

**•** Trigger: open form or create new structured record.

**•** Output: field-by-field prefill or suggested completion.

**•** Controls: accept all, accept field, reject field, edit field, inspect source, or clear suggestion.

**Pattern states.** Empty form; Form with suggestions; Accepted suggestions; Partially edited; Blocked due to insufficient data; Conflicting source data; Submission-ready; Submitted/history.

**Trust and governance requirements.** The pattern should distinguish known values pulled from records, inferred values suggested by the model, and user-entered final values. That distinction matters for accountability and error recovery [2][4].

**Surface and modality variants.** Form page as the canonical form; sidebar assistant for progressive suggestions; inline cell suggestion in grids; voice for guided completion with confirmation.

**Enterprise example.** An employee opens an internal request form and sees department, manager, system access needs, and prior project references pre-filled from existing records.

**Private banking translation.** A banker opens an onboarding package and finds household details, account basics, contact preferences, and known documentation fields already suggested from approved internal records.

**Anti-patterns.**

**•** Accepting inferred values silently.

**•** No provenance for important fields.

**•** Pre-filling every field regardless of confidence.

**•** Making correction harder than manual entry.

**Failure modes.**

**•** Incorrect data propagates across systems.

**•** Users trust form suggestions too quickly.

**•** Teams treat assisted fill as auto-submit.

**Related patterns.** Guided Flow; Draft and Edit; Approval Checkpoint

## 8. Contextual Assistant

**Pattern family.** Workflow assistance

**Definition.** Contextual Assistant is an assistant pattern tied to the user’s current page, record, object, or workflow so that help is grounded in the immediate work context rather than generic conversation.

**Why it matters.** One of the biggest failures in enterprise AI is generic assistance that ignores where the user is, what they are viewing, and what they are trying to do. Contextual Assistant makes context first-class and reduces prompt burden while improving relevance [3][4].

**When to use.**

**•** The user is already in a record or workflow.

**•** Context materially improves answer quality.

**•** The assistant should help without requiring repeated restatement.

**•** The user may move from asking to acting.

**When not to use.**

**•** The task is standalone and not tied to current context.

**•** The user needs a broad search across many contexts first.

**•** Context is weak, missing, or misleading.

**Inputs and minimum context.** The pattern needs the current page or object, entity metadata, recent actions, workflow state, permissions, and related records or linked entities.

**Core interaction anatomy.**

**•** Trigger: user opens assistant or asks from within context.

**•** Output: answers, suggestions, actions, summaries, or explanations grounded in current context.

**•** Controls: ask, refine, inspect evidence, launch workflow, or open related item.

**Pattern states.** Closed; Open with suggested prompts; Active response; Waiting for input; Low-confidence context; Blocked by permissions; Context switched; History retained.

**Trust and governance requirements.** The assistant should show what context it is using. It should not imply universal knowledge if it is scoped to one record or page. If the user shifts context, the assistant should either update clearly or preserve the earlier conversation as scoped history [2][4].

**Surface and modality variants.** Sidebar is the canonical form; inline panel for compact help; workspace assistant for deeper multi-step tasks; voice only when paired with visible context scope.

**Enterprise example.** In a CRM account view, the assistant answers questions about recent pipeline changes, relevant contacts, and next actions without the user needing to restate the account name.

**Private banking translation.** On a client profile, the assistant can summarize recent interactions, explain why a household is flagged, surface open service tasks, and propose follow-up actions grounded in that relationship.

**Anti-patterns.**

**•** Generic prompts unrelated to context.

**•** Unclear scope.

**•** Assistant resets every time the page changes.

**•** Using the assistant as a dumping ground for every AI feature.

**Failure modes.**

**•** Users stop trusting responses because they cannot tell what context was used.

**•** The assistant becomes noisy and too broad.

**•** Context errors cascade into wrong answers and wrong suggestions.

**Related patterns.** Quick Answer; Evidence-Backed Answer; Guided Flow

## 9. Proactive Signal

**Pattern family.** Monitoring and signal

**Definition.** Proactive Signal is a system-initiated pattern that surfaces an opportunity, anomaly, deadline, risk, or recommended attention item before the user explicitly asks.

**Why it matters.** Enterprise AI should not only answer questions; it should help users notice what matters. Proactive systems can create value by reducing missed issues, but they can also create overload, false urgency, and distrust if they are noisy or unexplained [3][4][7].

**When to use.**

**•** The system detects something the user is unlikely to notice in time.

**•** Surfacing the signal creates clear user value.

**•** The signal has a sensible threshold.

**•** There is a realistic next action.

**When not to use.**

**•** The signal has weak business relevance.

**•** There is no clear next step.

**•** The system cannot explain the signal.

**•** Proactive surfacing would create more interruption than value.

**Inputs and minimum context.** The pattern needs the monitored entity or workflow, signal logic or threshold, timing, user role, relevance filters, and delivery preferences.

**Core interaction anatomy.**

**•** Trigger: system-detected change or threshold.

**•** Output: compact signal statement.

**•** Rationale: why this matters now.

**•** Controls: inspect, snooze, dismiss, assign, act, or tune preferences.

**Pattern states.** Newly surfaced; Acknowledged; Snoozed; Dismissed; Escalated; Stale or unresolved; Resolved; Historical signal log.

**Trust and governance requirements.** Users should know why the signal appeared, how urgent it is, whether it is informational or action-oriented, and whether they can tune or suppress similar signals [4][5].

**Surface and modality variants.** Notification for urgency; feed or stream for awareness; sidebar for contextual exploration; dashboard tile for periodic review; ambient layer when interruption should stay low.

**Enterprise example.** A service manager receives a signal that several high-priority tickets are likely to breach SLA within 24 hours.

**Private banking translation.** An advisor gets a signal that a high-value household has had no meaningful outreach for 35 days despite a recent cash event and upcoming maturity.

**Anti-patterns.**

**•** Too many signals.

**•** No rationale.

**•** Mixing weak and strong signals visually.

**•** Using AI urgency styling without real urgency.

**Failure modes.**

**•** Notification fatigue.

**•** Users dismiss important signals because too many weak ones were shown.

**•** The system becomes performatively proactive instead of useful.

**Related patterns.** Recommendation List; Long-Running Task Tracker; Evidence-Backed Answer

## 10. Comparison Workspace

**Pattern family.** Recommendation / analysis

**Definition.** Comparison Workspace is a multi-entity analysis pattern that helps users examine options, scenarios, candidates, or records side by side before making a decision.

**Why it matters.** Many enterprise decisions are comparative. Users do not just need one answer; they need structured judgment support. A comparison surface reduces memory burden, exposes trade-offs, and helps users make decisions with more confidence [2][3][4].

**When to use.**

**•** The user must choose among multiple options.

**•** Trade-offs matter.

**•** A list alone is insufficient.

**•** The user needs side-by-side evidence.

**When not to use.**

**•** One best answer is enough.

**•** The dataset is too small for a workspace.

**•** The user is doing a simple lookup.

**•** The decision is procedural rather than comparative.

**Inputs and minimum context.** The pattern needs the candidate set, dimensions of comparison, user objective, ranking logic if available, evidence or source data, and selection state.

**Core interaction anatomy.**

**•** Trigger: user chooses compare, or arrives from Recommendation List.

**•** Output: side-by-side view of selected options.

**•** Structure: shared dimensions, differences, risks, fit, and trade-offs.

**•** Controls: add or remove option, change dimensions, weigh criteria, save comparison, or act.

**Pattern states.** No items selected; Items loaded; Dimensions applied; Evidence expanded; Insufficient comparable data; Comparison saved; Decision made.

**Trust and governance requirements.** The workspace should make trade-offs visible, not flatten them into one opaque score. If AI highlights a best option, users should still be able to inspect why [2][4].

**Surface and modality variants.** Workspace is canonical; sidebar mini-compare for two or three items; tablet with collapsible sections; voice should summarize rather than replace the visual workspace.

**Enterprise example.** A procurement lead compares three vendor options across cost, implementation time, security posture, and support model before choosing one.

**Private banking translation.** An advisor compares several households for outreach based on opportunity size, engagement recency, liquidity events, and relationship risk, then selects the most timely targets for the week.

**Anti-patterns.**

**•** Showing too many dimensions without hierarchy.

**•** Collapsing everything into one composite score.

**•** Comparing items that are not truly comparable.

**•** Letting the workspace become a dense table with no interpretation.

**Failure modes.**

**•** Users revert to guesswork because the workspace is too complex.

**•** Teams mistake scoring for comparison.

**•** The pattern overwhelms users instead of helping judgment.

**Related patterns.** Recommendation List; Evidence-Backed Answer; Approval Checkpoint

## 11. Memory Manager

**Pattern family.** Recovery and continuity

**Definition.** Memory Manager is the pattern that exposes, scopes, and lets users inspect or influence the historical context, preferences, retained facts, and interaction memory the system uses to personalize or ground future behavior.

**Why it matters.** Enterprise AI becomes more useful as it remembers relevant context across time. It also becomes riskier if that memory is invisible, overreaching, or difficult to correct. Google’s trust guidance specifically calls out scope, reach, and removal as key explanation concepts for data use [4].

**When to use.**

**•** The system retains user- or workflow-level memory across sessions.

**•** Recommendations or drafting are influenced by prior interactions.

**•** Personalization, saved preferences, or retained facts affect outcomes.

**•** Users need to review, edit, reset, or constrain what is remembered.

**When not to use.**

**•** No persistent memory is involved.

**•** The context is only temporary session state.

**•** The pattern is being used as a hidden implementation detail with no user-facing consequence.

**Inputs and minimum context.** The pattern needs stored memory items or inferred preferences, source of memory, scope of storage, reach of use, retention rules, and permission boundaries.

**Core interaction anatomy.**

**•** Trigger: user opens memory settings, explanation view, or contextual memory panel.

**•** Output: list or grouped view of what the system remembers and why it matters.

**•** Controls: inspect, edit, remove, mute, reset, or limit scope.

**Pattern states.** No retained memory; Active memory list; Memory item expanded; Memory item removed; Memory reset in progress; Policy-limited memory; Historical changes to memory state.

**Trust and governance requirements.** The pattern must make clear what is remembered, what is inferred versus explicitly saved, whether the memory is personal, team-level, or global, and whether it can be deleted or reset [4][7].

**Surface and modality variants.** Sidebar for contextual memory view; workspace or settings for full memory management; inline explanation for small disclosures; voice should summarize and hand off to visual controls.

**Enterprise example.** A work assistant explains that it prioritizes project updates from three teams because the user repeatedly follows those programs, and lets the user remove one team from future prioritization.

**Private banking translation.** An advisor can inspect that the system remembers household preferences, recurring meeting structure, preferred outreach tone, recent commitments, and saved watchlist criteria — and can remove or limit any of them.

**Anti-patterns.**

**•** Invisible memory shaping behavior silently.

**•** No distinction between saved fact and inferred preference.

**•** No deletion or reset path.

**•** Showing memory as magic instead of governed context.

**Failure modes.**

**•** Users feel surveilled.

**•** Stale memories distort recommendations.

**•** Personalization becomes hard to correct.

**•** Compliance teams reject memory-enabled features due to weak controls.

**Related patterns.** Contextual Assistant; Recommendation List; Audit / History View

## 12. Approval Checkpoint

**Pattern family.** Governance and control

**Definition.** Approval Checkpoint is the pattern where a consequential system recommendation, draft, or action is held for explicit human review and authorization before it proceeds.

**Why it matters.** Enterprise AI should not blur the line between suggestion and action. Some outcomes need explicit sign-off because of financial, legal, compliance, reputational, or workflow consequences. Anthropic’s trustworthy-agents guidance centers human control and transparency, while Google emphasizes calibrated trust rather than blind trust [4][7].

**When to use.**

**•** The system is about to perform a consequential action.

**•** Content may be sent externally.

**•** A recommendation changes status, money, risk, or compliance posture.

**•** Business process requires authorization.

**•** Human accountability must remain explicit.

**When not to use.**

**•** The outcome is low-risk and reversible.

**•** The step is purely informational.

**•** The review adds no real control and only creates friction theater.

**Inputs and minimum context.** The pattern needs the proposed action or decision, rationale and evidence, affected entities, policy constraints, reviewer identity and permission, and reversibility status.

**Core interaction anatomy.**

**•** Trigger: system reaches action threshold or user initiates review.

**•** Output: concise summary of what will happen.

**•** Support: show why, what data informed it, and what changes will occur.

**•** Controls: approve, reject, edit, request changes, or escalate.

**Pattern states.** Pending review; Approved; Rejected; Revised and re-submitted; Escalated; Expired approval; Approval history available.

**Trust and governance requirements.** Approval Checkpoint must expose exact action scope, who is authorizing, what evidence supports the action, whether the action is reversible, and where the action is logged [4][7].

**Surface and modality variants.** Modal or dialog for short approvals; workflow step for multi-step flows; queue or review center for batched approvals; sidebar for contextual approvals tied to current record.

**Enterprise example.** A support AI proposes closing a high-priority case with an automated response. The system pauses at a checkpoint, shows the proposed message, the evidence behind closure, and asks the manager to approve or edit.

**Private banking translation.** Before sending a client-facing follow-up drafted by AI, the advisor or supervisory reviewer sees the message, cited account facts, suitability warnings, and approval controls.

**Anti-patterns.**

**•** Approval without evidence.

**•** Approval after the action already happened.

**•** One-click approval for complex decisions.

**•** Checkpoint spam on trivial actions.

**Failure modes.**

**•** Reviewers approve without understanding.

**•** Teams overuse approval and slow the workflow.

**•** Teams underuse approval and create control gaps.

**Related patterns.** Draft and Edit; Guided Flow; Audit / History View

## 13. Low-Confidence Recovery

**Pattern family.** Recovery and continuity

**Definition.** Low-Confidence Recovery is the pattern used when the system cannot safely produce a high-confidence answer, recommendation, match, or action and must instead guide the user toward clarification, narrowing, or escalation.

**Why it matters.** A polished but wrong answer is more dangerous than an honest partial answer. Google’s trust guidance says users should calibrate trust rather than trust the system completely, and Microsoft’s HAX guidance explicitly includes designing for moments when the AI system is wrong [3][4].

**When to use.**

**•** Confidence is materially low.

**•** Multiple interpretations are plausible.

**•** Source data conflicts.

**•** Matching or inference is incomplete.

**•** Policy or permission gaps prevent a safe output.

**When not to use.**

**•** The uncertainty is minor and the system can still provide a clearly qualified answer.

**•** The issue is purely technical downtime, which needs a conventional failure pattern instead.

**Inputs and minimum context.** The pattern needs the failed or low-confidence output, uncertainty source, candidate interpretations, missing inputs, policy restrictions, and alternate next steps.

**Core interaction anatomy.**

**•** Trigger: confidence below threshold or ambiguity detected.

**•** Output: transparent explanation of what is uncertain.

**•** Controls: clarify, choose option, inspect evidence, retry, hand off, or narrow scope.

**Pattern states.** Uncertainty detected; Clarification requested; Options presented; Partial recovery; Escalation; Abandoned; Logged for future improvement.

**Trust and governance requirements.** The pattern should state what is unclear, what would improve confidence, whether the issue is ambiguity, missing data, or permission, and whether proceeding would be unsafe [2][4].

**Surface and modality variants.** Inline for lightweight clarification; sidebar for structured recovery; overlay when recovery blocks progression; voice should ask for clarification rather than guess.

**Enterprise example.** A procurement assistant cannot confidently determine whether two vendor records are duplicates and asks the user to choose between three likely matches, showing the overlapping fields that caused ambiguity.

**Private banking translation.** The system cannot confidently match a household request to the correct family structure because two related entities share similar names and overlapping accounts. It shows both candidates, explains the ambiguity, and asks the banker to confirm.

**Anti-patterns.**

**•** Fake confidence.

**•** Vague “something went wrong” messaging.

**•** No guidance on how to recover.

**•** Forcing the user to start over completely.

**Failure modes.**

**•** Users stop trusting the system because it sounds confident until it fails.

**•** Users make preventable mistakes because ambiguity was not surfaced.

**•** Teams treat low confidence as a backend concern instead of a design concern.

**Related patterns.** Evidence-Backed Answer; Guided Flow; Contextual Assistant

## 14. Long-Running Task Tracker

**Pattern family.** Monitoring and signal

**Definition.** Long-Running Task Tracker is the pattern that monitors work that unfolds across time, multiple steps, or multiple actors, and keeps the user informed about progress, blocking issues, and intervention points.

**Why it matters.** Not all AI-supported work completes in one interaction. Some tasks continue in the background: gathering documents, monitoring cases, waiting for approvals, orchestrating steps, or checking for changes. Microsoft’s HAX guidelines explicitly include designing for AI interaction over time, while Anthropic emphasizes transparency and keeping humans in control as systems take on more persistent work [3][7].

**When to use.**

**•** The task continues beyond a single screen or session.

**•** Status changes matter.

**•** The user may need to intervene later.

**•** Multiple dependencies or actors are involved.

**•** Background monitoring is part of the value.

**When not to use.**

**•** The task is immediate and synchronous.

**•** A standard notification is enough.

**•** The work has no meaningful intermediate states.

**Inputs and minimum context.** The pattern needs task identity, current status, dependencies, next milestone, blockers, responsible actor, and timeout or SLA window.

**Core interaction anatomy.**

**•** Trigger: user starts a multi-step task or the system initiates ongoing work.

**•** Output: status summary, progress stage, blocker visibility, and expected next step.

**•** Controls: inspect, pause, cancel, reassign, remind, or escalate.

**Pattern states.** Queued; In progress; Waiting on dependency; Blocked; Needs user input; Completed; Failed; Historical archive.

**Trust and governance requirements.** The tracker must make it clear what the system is doing, what it is waiting on, what the user can still control, and whether the system is continuing autonomously in the background [3][7].

**Surface and modality variants.** Feed or stream for awareness; sidebar for contextual tracking; workspace for detailed orchestration; notification only for key milestones.

**Enterprise example.** An operations AI tracks a vendor onboarding process across document collection, security review, finance checks, and approval routing, surfacing blockers and next deadlines.

**Private banking translation.** A banker starts a document-completion process for a review package. The tracker shows which forms are collected, which approvals are pending, what client inputs are still missing, and whether the package is ready for the next meeting.

**Anti-patterns.**

**•** Showing only “in progress.”

**•** No blocker explanation.

**•** No intervention path.

**•** Task disappears after the user leaves the screen.

**Failure modes.**

**•** Users lose confidence because the task feels invisible.

**•** Background work continues beyond what users expected.

**•** The pattern becomes a passive log instead of an active management surface.

**Related patterns.** Proactive Signal; Guided Flow; Audit / History View

## 15. Audit / History View

**Pattern family.** Recovery and continuity

**Definition.** Audit / History View is the pattern that exposes what the system did, what the user did, what changed, why it changed, and how the interaction or action history can be reviewed later.

**Why it matters.** Enterprise AI systems need memory not only for personalization, but also for accountability. In regulated or high-consequence environments, teams need to inspect actions, approvals, revisions, and model-influenced changes over time [2][7].

**When to use.**

**•** AI output influences action or state change.

**•** A user may need to review prior decisions.

**•** Supervisors or auditors need traceability.

**•** Recovery from error requires knowing what happened.

**When not to use.**

**•** The interaction is ephemeral and non-consequential.

**•** No meaningful state change, action, or review occurred.

**Inputs and minimum context.** The pattern needs event history, actor identity, timestamp, before and after state, rationale or evidence, approval record, and policy annotations where applicable.

**Core interaction anatomy.**

**•** Trigger: user opens history, audit, or prior activity view.

**•** Output: chronological or grouped event stream.

**•** Support: filters by actor, action type, workflow, date, or entity.

**•** Controls: inspect details, compare versions, export, escalate, or restore where allowed.

**Pattern states.** No history; Activity list; Event detail expanded; Filtered history; Version comparison; Archived history.

**Trust and governance requirements.** The view should clearly separate model suggestion, user action, automated action, approved action, and final state change. Users must be able to understand not only what happened, but also how much of it was AI-influenced [2][7].

**Surface and modality variants.** Workspace or history page as canonical; sidebar timeline for contextual history; inline change log for small-scope review; exportable log where governance requires durable records.

**Enterprise example.** A compliance reviewer opens a history view showing the original recommendation, the manager edits, the approval step, and the final workflow outcome with timestamps.

**Private banking translation.** A supervisory user reviews the full history of an AI-assisted client communication: draft generation, edits by the advisor, cited account facts, approval by reviewer, and final send event.

**Anti-patterns.**

**•** Mixing human and AI actions without distinction.

**•** Logging only final outcome.

**•** No rationale tied to actions.

**•** History that cannot be filtered or understood.

**Failure modes.**

**•** Teams cannot reconstruct what happened after an error.

**•** Users cannot challenge decisions because the trail is incomplete.

**•** Compliance review becomes manual and costly.

**Related patterns.** Approval Checkpoint; Memory Manager; Long-Running Task Tracker

# 10. Cross-library anti-patterns

**•** Chat as a default container for everything. This hides differences between answering, comparing, drafting, approving, tracking, and recovering.

**•** Opaque confidence. The system sounds polished but gives the user no way to judge whether it is well grounded.

**•** Recommendation-action collapse. A recommendation pattern silently becomes an execution pattern.

**•** Invisible AI influence. Users cannot tell what was AI-generated, AI-ranked, or AI-prefilled.

**•** No recovery path. The interface handles success but not uncertainty or ambiguity.

**•** No continuity model. Tasks, drafts, memory, and approvals disappear between sessions.

**•** Governance as an afterthought. Evidence, approval, and audit are bolted on after the interaction is already designed.

# 11. Failure modes for the chapter

When teams ignore the pattern-library layer, the likely outcomes are predictable.

**•** Every product invents different AI behaviors for the same job.

**•** Evidence and review controls become inconsistent across experiences.

**•** Users cannot predict where AI appears or how to validate it.

**•** Chat and sidebar assistants become dumping grounds for all AI functionality.

**•** Compliance review becomes expensive because behavior is bespoke.

**•** Cross-product scaling slows because teams lack a shared interaction language.

# 12. Final chapter position

This chapter should be treated as the operational heart of the framework.

**•** The framework architecture explains the system.

**•** The pattern library makes that system buildable.

**•** The pattern library is where theory becomes product behavior.

**•** A strong enterprise AI reference needs this chapter because patterns are the layer most teams actually ship.

# 13. References

These references form the source spine for the chapter and anchor the design guidance used throughout.

**[1]** IBM Carbon Design System, Patterns Overview. Defines patterns as reusable best-practice solutions above individual components. https://carbondesignsystem.com/patterns/overview/

**[2]** IBM Carbon for AI and AI Label guidance. Covers transparent AI presence, explainability, and legible AI-assisted interaction. https://carbondesignsystem.com/guidelines/carbon-for-ai/

**[3]** Microsoft HAX Toolkit, Human-AI Interaction Guidelines. Establishes lifecycle-oriented guidance for initial use, ongoing use, failure, and use over time. https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/

**[4]** Google PAIR Guidebook. Covers mental models, trust, explanations, feedback, controls, and human-centered AI design patterns. https://pair.withgoogle.com/guidebook/

**[5]** Google PAIR Guidebook, Trust and explanation concepts including scope, reach, and removal. https://pair.withgoogle.com/guidebook/chapters/explainability-trust/

**[6]** Anthropic, Building Effective Agents. Argues for simple, composable patterns and practical agent design. https://www.anthropic.com/research/building-effective-agents

**[7]** Anthropic, Trustworthy Agents. Covers transparency, human control, privacy, and intervention in agentic systems. https://www.anthropic.com/research/trustworthy-agents
