11. Recipes and Workflow Compositions

Reusable chapter and authoring template for composing enterprise AI patterns into complete workflows

|  |
| --- |
| Purpose  This chapter defines how isolated interaction patterns combine into end-to-end enterprise workflows. It introduces a lightweight, reusable recipe template so teams can describe recurring workflow compositions consistently, compare them, and scale the library without creating heavy documentation overhead. |

Status: Final reusable template for v1

Scope: Authoring model, composition rules, metadata, worked examples, and citation-backed design guidance

# Why recipes matter

A pattern library is necessary but insufficient. Enterprise AI products rarely succeed through isolated patterns alone; they succeed when patterns are sequenced into workflows that connect understanding, evidence, judgment, action, and control. A quick answer pattern may need an evidence drawer. A recommendation list may require an explanation step. A draft may need review, approval, and a send action. Recipes exist to describe those compositions clearly and repeatably.

In this framework, a recipe is a named workflow composition: a reusable arrangement of patterns, context requirements, trust controls, autonomy boundaries, and handoff points designed to accomplish a real enterprise job. Recipes sit one level above pattern pages. They help teams move from 'what interface component do we use?' to 'how does work actually get done from start to finish?'

This is especially important in enterprise settings because value usually emerges across multiple steps rather than from a single model response. Trust, latency, reviewability, permissions, and human accountability all accumulate across the workflow, not inside one isolated screen or one model turn.

|  |
| --- |
| Working definition  Recipe = a repeatable composition of patterns that delivers a complete unit of work, including entry trigger, step sequence, outputs, controls, and human involvement. |

## What belongs in this chapter

• Reusable workflow compositions that appear across domains and products.

• Named sequences of patterns such as ask -> evidence -> action or signal -> explanation -> approval.

• Control points, handoffs, checkpoints, and resumption logic.

• Modality and surface variations for the same workflow recipe.

• Authoring guidance for recipe pages in the public library.

## What does not belong here

• Low-level UI anatomy of individual patterns; that belongs in pattern pages.

• Raw job taxonomy; that belongs in the job model.

• Detailed modality definitions; that belongs in the modality chapter.

• Comprehensive risk framework; that belongs in trust, governance, and autonomy chapters.

• Full product-specific process maps; recipes should stay reusable and cross-domain.

# Core principles for recipe design

**1.** Compose for the job, not for the model. A recipe should correspond to a meaningful unit of work such as resolving a request, preparing a meeting, or approving an action, rather than showcasing model capabilities for their own sake.

**2.** Keep the simplest viable orchestration. Anthropic advises starting with simple workflows and only adding complexity when the task truly needs it; this same principle should govern recipe authoring. Many enterprise workflows need composition, but not every workflow needs a fully autonomous agent.

**3.** Make checkpoints explicit. Human review, approval, correction, or escalation should be modeled as first-class recipe steps rather than implied behaviors. In high-stakes workflows, the checkpoint is part of the design, not an exception path.

**4.** Separate recommendation from commitment. Systems can suggest, draft, rank, and prefill early; committing to an external action such as sending, submitting, approving, or updating records often deserves stronger controls.

**5.** Preserve state across pauses. When a recipe includes review or handoff, the workflow must retain context, rationale, evidence, and partial progress so work can resume without replaying the whole chain.

**6.** Design the handoff, not just the happy path. Enterprise workflows often end with a human continuation step, a routed exception, or a downstream system action. Recipes should specify what gets transferred, to whom, and with what context.

**7.** Allow the same recipe to change surface and modality. A recipe can stay logically stable even when delivered through chat, sidebar, workspace, voice, or multimodal capture. The sequence matters more than the shell.

**8.** Document trust at the workflow level. Trust requirements accumulate across steps. Evidence visibility, permission checks, editability, reversibility, logging, and approval rules should be described for the full recipe, not only pattern by pattern.

|  |
| --- |
| Research grounding  NIST frames trustworthy AI as requiring governance, transparency, accountability, and risk management across the system lifecycle. Microsoft's human-AI interaction work argues that AI behavior must be designed across initial use, regular use, error states, and long-term interaction. Google Cloud and Azure architecture guidance both treat human-in-the-loop checkpoints as explicit workflow design patterns rather than ad hoc fixes. |

# Recipe page template v1

The template below is intentionally lightweight. It is strong enough to make recipes comparable across a public library, but small enough that teams can author pages quickly and consistently.

|  |  |  |
| --- | --- | --- |
| **Section** | **What to capture** | **Keep it lightweight by** |
| Recipe name | Clear noun phrase that describes the unit of work. | Use action-oriented names with stable wording. |
| Purpose | One paragraph defining the business outcome and user job. | Avoid product-specific jargon. |
| When to use | Typical triggering conditions or entry points. | List 3-5 conditions, not full process maps. |
| When not to use | Boundary conditions where another recipe is more appropriate. | Call out risk, complexity, or fit limits. |
| Workflow shape | The canonical sequence in compact notation. | Use a one-line chain such as Signal -> Explain -> Approve. |
| Primary patterns | The patterns combined inside the recipe. | Reference existing pattern names rather than re-describing them. |
| Inputs required | Minimum context, data, permissions, and tools. | Specify only what is essential for execution. |
| Outputs | Expected outputs, artifacts, or committed actions. | Keep outputs observable and testable. |
| Trust controls | Evidence, approvals, editability, audit, reversibility, escalation. | Capture workflow-level controls in 5-7 bullets. |
| Surfaces and modalities | How the same recipe can appear in different shells. | Describe variants briefly rather than exhaustively. |
| Failure modes | What typically goes wrong and how the workflow should recover. | List the highest-value 4-6 failure modes. |
| Example scenarios | Cross-domain and enterprise examples. | Use 2-3 compact scenarios. |
| Related recipes | Upstream, downstream, or alternative compositions. | Cross-link, do not duplicate. |

## Recommended recipe header format

• Name

• Purpose

• Workflow shape

• Primary patterns

• Trust level and autonomy level

• Inputs required

• Outputs

• Example scenario

• Failure modes

• Related recipes

## Canonical notation

To make recipes skimmable, every recipe page should open with a single-line composition string. This is the minimum reusable artifact.

|  |
| --- |
| Notation examples  Ask -> Evidence -> Action Signal -> Explanation -> Approval Find -> Shortlist -> Compare Draft -> Review -> Send Plan -> Checkpoint -> Execute Capture -> Interpret -> Confirm -> Route |

# Authoring standards for scale

A recipe system grows quickly. Without tight authoring rules, it turns into an inconsistent collection of pseudo-process maps. The standards below keep the library scalable.

• One recipe page should describe one reusable composition, not every possible branch.

• Branching logic should be summarized at the level of decision points, not documented as BPMN-level complexity unless the library later introduces a deeper workflow layer.

• Reuse pattern names exactly. Do not rename patterns inside recipes.

• Reuse trust and autonomy vocabulary exactly. Recipes should inherit those taxonomies rather than invent new ones.

• Prefer canonical sequence + notable variants. Do not multiply pages for minor shell differences.

• Capture only the minimum viable inputs and outputs needed to reason about the workflow.

• Keep domain examples short. Recipes should be portable across enterprise domains even when illustrated through banking, service, healthcare, HR, or operations.

• Record where the human enters, what they see, what they can change, and what happens next.

• Always specify the final commitment step: approve, submit, send, trigger, update, or hand off.

• Add at least one failure-recovery note whenever the recipe contains drafting, tool use, or execution.

## Recipe metadata model

|  |  |  |
| --- | --- | --- |
| **Field** | **Allowed style** | **Example** |
| Primary job | Use job taxonomy label | Understand, Decide, Create, Execute |
| Autonomy range | Use chapter vocabulary | Suggest -> Act with review |
| Risk tier | Low / Medium / High / Critical | High |
| Primary surface | Use surface chapter terms | Sidebar, Workspace, Inline |
| Modalities | List 1-3 | Text, Voice, Image |
| Needs approval | Yes / No / Conditional | Conditional |
| Creates artifact | Yes / No | Yes |
| External action | Yes / No | Yes |
| Persistent memory used | Yes / No / Optional | Optional |

# Flagship recipe examples for v1

The examples below are written in compact textbook format. They demonstrate how the same authoring model can support the full set of subtopics you identified.

## 1. Ask + Evidence + Action

Workflow shape: Ask -> Evidence-backed answer -> Suggested action -> Commit or dismiss

Use when a user needs an answer that may immediately lead to a lightweight next step. The system should not stop at explanation when an obvious action is available, but it should keep the action clearly separable from the answer.

**Typical enterprise examples**

• Meeting prep assistant explains why a client is priority today, cites recent engagement signals, then offers actions such as draft outreach or create task.

• Service desk assistant answers a policy question, shows source evidence, then opens the correct request workflow.

**Common failure modes**

• Answer is ungrounded or evidence is stale.

• Action is offered without permission context.

• User cannot inspect why the action is being recommended.

## 2. Signal + Explanation + Approval

Workflow shape: Signal -> Triage summary -> Explanation -> Approval checkpoint -> Execute or route

Use when the system detects an issue, risk, or opportunity and a human must explicitly authorize the next step. This is especially useful for compliance-sensitive, financially material, or customer-impacting workflows.

**Typical enterprise examples**

• Fraud or exception alert proposes a hold, explains the triggering signals, and pauses for analyst approval.

• KYC review signal identifies a profile needing attention, summarizes the evidence, and queues the case for supervisor sign-off.

**Common failure modes**

• Signal is noisy or confidence is misread as certainty.

• Approval step lacks enough evidence for informed judgment.

• Workflow resumes without durable state after rejection or edit.

## 3. Find + Shortlist + Compare

Workflow shape: Find -> Filter -> Shortlist -> Compare workspace -> Select next step

Use when the user is exploring options rather than asking for one definitive answer. The recipe should progressively narrow a large set into a manageable comparison surface.

**Typical enterprise examples**

• Prospecting workflow finds households matching criteria, creates a shortlist, and compares relationship potential across a workspace.

• Procurement assistant finds vendors, narrows to candidates, and generates a side-by-side comparison before selection.

**Common failure modes**

• Shortlist criteria are opaque.

• Comparison normalizes unlike entities in misleading ways.

• The user cannot reopen the search logic that produced the list.

## 4. Draft + Review + Send

Workflow shape: Draft -> Human edit -> Policy or style check -> Send / publish / save

Use when the system can accelerate content creation but the final artifact still belongs to the human or organization. The review step should preserve editability and accountability.

**Typical enterprise examples**

• Relationship manager drafts a follow-up email after a client call, revises tone and details, then sends.

• HR assistant drafts an internal announcement, routes it through style and policy checks, then publishes.

**Common failure modes**

• Draft appears authoritative even when low confidence.

• Review is too shallow for sensitive outbound communication.

• Edits are overwritten by re-generation without clear diffing.

## 5. Agent Plan + Checkpoint + Execute

Workflow shape: Plan -> Tool selection -> Human checkpoint -> Execute -> Log and follow-up

Use when a multi-step workflow can be automated but the cost of an incorrect action is too high for silent execution. The checkpoint validates both the plan and the execution boundary.

**Typical enterprise examples**

• Operations agent proposes the steps to remediate an incident, requests engineer approval, then executes the approved sequence and writes a log.

• Advisor workflow agent plans account maintenance actions, requests confirmation, then updates records and produces an audit trail.

**Common failure modes**

• Plan is hidden and therefore hard to approve responsibly.

• Checkpoint is too broad; low-risk steps and high-risk steps are treated the same.

• Execution log does not preserve what was approved versus what actually ran.

## 6. Multimodal capture + interpretation + human handoff

Workflow shape: Capture (voice/image/file) -> Interpret -> Confirm -> Route -> Human continuation

Use when work begins from messy real-world input rather than typed commands. The system should convert raw multimodal input into structured workflow-ready context while keeping confirmation and escalation explicit.

**Typical enterprise examples**

• A field technician photographs equipment damage, the system interprets the issue, confirms extracted details, and routes the case to a specialist.

• An advisor clips a screen, dictates a note, and hands the combined context to a service team queue.

**Common failure modes**

• Interpretation loses nuance from the original input.

• Confirmation is skipped and incorrect structure is propagated downstream.

• Handoff omits the original asset, forcing the human to reconstruct context.

# Human handoff sequences

Human handoff is not merely 'send to person.' In recipe design, handoff should be specified as a structured transfer of state. The receiving human should inherit the user request, machine interpretation, evidence bundle, confidence or uncertainty signal, completed steps, pending step, and recommended next action.

|  |  |
| --- | --- |
| **Handoff component** | **Why it matters** |
| Original request or capture | Lets the receiver inspect the source, not only the interpretation. |
| Structured summary | Reduces time to orientation and helps triage quickly. |
| Evidence bundle | Supports reviewability and challenge. |
| What the system already did | Prevents duplicate effort and unsafe re-execution. |
| Pending decision or next step | Clarifies what the human is being asked to do. |
| Confidence / risk note | Signals how much scrutiny is warranted. |
| Audit trail link | Preserves accountability and future review. |

# Private banking translation

Recipes are especially valuable in private banking because advisor work is rarely a single-turn experience. It spans signals, interpretation, outreach, service, review, approvals, and continuity across people and systems.

• Ask + evidence + action fits meeting preparation, prospect research, account inquiry support, and next-best-action framing.

• Signal + explanation + approval fits KYC triggers, risk flags, pricing exceptions, document exceptions, and supervisory controls.

• Find + shortlist + compare fits prospecting, opportunity prioritization, product option comparison, and relationship coverage decisions.

• Draft + review + send fits client follow-up, internal notes, referral summaries, and event outreach.

• Plan + checkpoint + execute fits cross-system maintenance, service fulfillment, and orchestrated advisor support where records or workflows are updated.

• Multimodal capture + interpretation + handoff fits screenshot-based requests, dictated notes, meeting photos, or document intake routed to specialist teams.

# Recipe evaluation checklist

• Is the recipe tied to a real user job and business outcome?

• Is the canonical workflow sequence clear in one line?

• Are the primary patterns named using the library vocabulary?

• Is the final commitment step explicit?

• Are required human checkpoints clearly identified?

• Can the workflow pause and resume with preserved state?

• Are evidence, permissions, and audit needs captured at workflow level?

• Does the recipe specify what changes across surfaces or modalities?

• Are major failure modes documented with recovery behavior?

• Can the page be authored in under one hour by a library contributor?

# References

[1] National Institute of Standards and Technology. Artificial Intelligence Risk Management Framework (AI RMF 1.0), 2023.

[2] Autio, Schwartz, Dunietz, Jain, Stanley, Tabassi, Hall, and Roberts. Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1, 2024.

[3] Amershi et al. Guidelines for Human-AI Interaction. Proceedings of CHI 2019. Microsoft Research publication.

[4] Google PAIR. People + AI Guidebook. Ongoing guidebook and patterns library for human-centered AI product design.

[5] Anthropic. Building Effective AI Agents, 2024. Guidance on choosing simple workflows before complex agents and on common orchestration building blocks.

[6] Microsoft Azure Architecture Center. AI Agent Orchestration Patterns, 2026.

[7] Google Cloud Architecture Center. Choose a design pattern for your agentic AI system, 2025.

[8] Microsoft Dynamics 365. Transparency note for real-time voice agents, 2026.

[9] Microsoft. How to Build Agents with Microsoft, white paper, February 2026.
