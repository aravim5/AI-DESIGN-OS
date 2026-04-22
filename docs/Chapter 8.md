**Chapter 7 - Context Model**

Enterprise AI Beyond Chat - Framework Architecture

|  |  |
| --- | --- |
| **Purpose** | Define what context shapes AI behavior in enterprise environments. |
| **Status** | Draft completed - expanded here into a polished framework chapter. |

|  |
| --- |
| **Core proposition.** Context is the operating frame that determines what the system should know, what it should ignore, and how it should behave in a specific enterprise moment. |

# Executive summary

The context model defines the information an enterprise AI system must receive, maintain, and respect in order to behave appropriately inside real work. In enterprise environments, AI behavior cannot be derived from user prompts alone. It must be shaped by who the user is, what they are allowed to do, where they are in a workflow, which records are in scope, what the wider team or organization is trying to achieve, what the system currently knows about the environment, and what relevant history should be carried forward.

Context is therefore not “extra metadata.” It is the operating frame that determines relevance, safety, timing, and actionability. A model without sufficient context may still produce fluent output, but it will be directionally wrong: it may answer with the wrong customer in mind, recommend a next step that violates process, surface information the user should not see, ignore the current workflow state, or repeat work that already happened.

For enterprise AI design, context should be treated as a first-class architectural layer. It sits beneath surfaces and interaction patterns, but above raw infrastructure. It is the substrate that turns a general model into a domain-capable system. The core design challenge is not only gathering more context; it is selecting the right context, at the right moment, at the right fidelity, for the right decision.

# A. Definition

The context model is the architectural layer that defines which situational signals shape AI behavior in a given enterprise moment. It covers the structured and unstructured inputs that tell the system who is acting, what they are trying to do, what the organization permits, what record or workflow is in scope, what has already happened, and what conditions are changing in the surrounding environment.

In this framework, context includes eight primary categories:

1. User context

2. Role and permission context

3. Workflow context

4. Record and entity context

5. Team and organizational context

6. System state context

7. Environmental context

8. Historical and memory context

The context model is not equivalent to prompt engineering. Prompting influences phrasing and immediate instruction. Context engineering determines what information is assembled, filtered, prioritized, and preserved before the model decides or acts. Modern enterprise systems increasingly rely on retrieval, memory, tools, and orchestration layers to build this context envelope dynamically rather than expecting a user to supply it manually [1][2][3].

Definition: Context is the set of live, relevant constraints and signals that determine what an enterprise AI system should know, what it should ignore, and how it should behave in a specific moment.

# B. Why it matters

Enterprise AI breaks without real context for four reasons.

First, relevance collapses. The same question can mean different things depending on the user, the client, the workflow stage, the jurisdiction, and the current state of the system. “Prepare the follow-up” is not a stable instruction unless the system knows which relationship, which meeting, what happened recently, and what obligations remain open.

Second, safety collapses. Enterprise AI must operate inside permission boundaries, policy rules, and approval structures. Least-privilege design and contextual access controls are not optional when AI systems retrieve data or invoke tools [4][5][6].

Third, continuity collapses. Enterprise work unfolds across sessions, people, handoffs, and time. Without durable memory and historical context, the system cannot support meeting preparation, relationship continuity, issue tracking, or background monitoring in a coherent way [3][7].

Fourth, orchestration collapses. Agentic systems need the right context to choose tools, decide whether to ask, act, escalate, or wait, and coordinate work safely across steps. Industry guidance now increasingly frames this problem as context engineering rather than mere prompt writing [2][3][8].

In other words: context is what makes enterprise AI situationally intelligent instead of generically fluent.

# C. What belongs here

The context layer includes any signal that directly shapes enterprise AI behavior at inference time or across a running workflow. That includes:

* identity and preferences of the current user
* job role, entitlements, supervision model, and approval rights
* current workflow stage, tasks, deadlines, blockers, and handoff status
* active client, prospect, household, account, case, request, or document scope
* team assignments, organizational objectives, coverage models, and workload distribution
* system conditions such as service availability, model confidence, queue status, or unresolved errors
* environmental signals such as channel, device, location policy, time sensitivity, market events, or business calendar conditions
* historical memory such as prior conversations, prior actions, prior recommendations, prior approvals, and prior outcomes

The layer also includes the rules for:  
- resolving conflicts across competing context signals  
- deciding minimum viable context before the system can answer or act  
- expiring, refreshing, or compacting stale context  
- representing uncertainty when context is incomplete, stale, or contradictory

# D. What does not belong here

The context model should not absorb every concept in the framework.

It does not define the user’s underlying job. That belongs to the job model.  
It does not define the interaction pattern used to express the answer or action. That belongs to the pattern family model.  
It does not define where the experience appears. That belongs to the surface model.  
It does not define how much autonomy the system should have. That belongs to the autonomy model.  
It does not define the governing controls, evidence rules, review requirements, or audit model, although context frequently supplies inputs to those controls. Those belong to the trust and governance layer.

A useful boundary test is this:  
If the information changes what the system should know, retrieve, prioritize, or do in a given moment, it belongs in context.  
If the concept defines the shape of the experience, the degree of control, or the evaluation rule, it belongs elsewhere.

# E. Core concepts

The eight context categories below should be understood as composable layers, not isolated fields. In real enterprise systems, several of them interact at once. A recommendation may be shaped simultaneously by the user’s seniority, the workflow stage, the account in focus, a team coverage rule, a service outage, and what happened in the last client meeting.  
  
Designers should therefore think in terms of context stacks rather than single context attributes.

## 1. User context

User context captures what is specific to the current person using the system. This includes identity, preferences, communication style, saved filters, language, workload habits, assigned portfolio, and personal operating patterns. It helps the AI tailor prioritization, explanation depth, and action suggestions.

**Examples:**

* An experienced advisor prefers terse, ranked opportunity summaries before 9 a.m.
* A service associate prefers checklist-style handoff guidance.
* A product manager frequently asks for side-by-side rationale before approving drafts.

|  |
| --- |
| **Design implication.** User context should adjust presentation and prioritization, but should not override policy, compliance, or permission boundaries. Personalization is useful only after entitlement and workflow fit are satisfied. |

## 2. Role and permission context

Role and permission context defines what the current user is allowed to see, suggest, edit, approve, or execute. This includes role type, supervisory relationship, jurisdictional rules, data entitlements, action limits, and approval rights. In enterprise AI, permission context is foundational because an answer that is correct but unauthorized is still a failure.

**Examples:**

* A junior banker can view a relationship summary but cannot initiate certain account changes.
* A supervisor can see compliance exceptions across a team.
* A service agent can draft a case response but cannot finalize a regulated communication without review.

|  |
| --- |
| **Design implication.** Permission context must shape both retrieval and action. It is not enough to hide forbidden buttons after generation; the system should avoid retrieving, grounding on, or proposing actions the user is not entitled to access. This aligns with least-privilege and context-aware access design guidance [4][5][6]. |

## 3. Workflow context

Workflow context describes where the user is inside a task, process, or journey. It includes the current stage, previous step, next available step, blockers, dependencies, deadlines, approvals, and escalation paths. Workflow context is what stops an AI assistant from behaving like a disconnected Q&A tool.

**Examples:**

* A prospect is in early qualification, so the system should recommend discovery actions rather than onboarding tasks.
* A service request is waiting on client documentation, so the next best action is a reminder, not escalation.
* A trade-related workflow has entered an approval checkpoint, so the system should explain what is pending rather than act.

|  |
| --- |
| **Design implication.** Workflow context should heavily influence timing, suggested actions, and confidence in execution. The same answer may be useful in one stage and harmful in another. |

## 4. Record and entity context

Record and entity context identifies which business object is currently in scope and what facts define it. This includes clients, prospects, households, accounts, opportunities, cases, tasks, meetings, documents, products, policies, and linked entities. It may also include relationship graphs, ownership, statuses, balances, dates, and risk markers.

**Examples:**

* “Summarize recent engagement” should change meaning depending on whether the active entity is a prospect, a household, or a service case.
* “What changed?” for a client record should anchor on new transactions, open requests, recent meetings, and portfolio movements.
* “Prepare the meeting” should include attendees, prior notes, objectives, and unresolved follow-ups for the specific relationship in view.

|  |
| --- |
| **Design implication.** Entity context is the anchor that prevents general answers when the task requires grounded answers. In enterprise systems, every substantial answer should be traceable to an explicit record scope or deliberately state that the scope is broader than a single record. |

## 5. Team and organizational context

Team and organizational context captures how work is distributed above the individual user. It includes team ownership, coverage models, account assignments, business goals, manager priorities, supervisory structures, regional operating models, performance targets, and shared queues. This is critical in enterprise settings because work is rarely individual-only.

**Examples:**

* A relationship is jointly covered, so the system should suggest coordinated outreach rather than individual action.
* A team is focused on deposit growth this quarter, so prioritization logic should weight related opportunities more strongly.
* A manager needs a book-level overview of risk signals across an advisor team, not a single-client answer.

|  |
| --- |
| **Design implication.** Organizational context should influence ranking, routing, and collaboration suggestions. It should not collapse into vague “company context.” It must be explicit enough to shape decisions while remaining governable and explainable. |

## 6. System state context

System state context describes what the digital environment itself is currently able to support. This includes model availability, tool readiness, API failures, stale indexes, queue states, sync latency, unresolved exceptions, active sessions, and confidence about freshness. Many bad AI experiences occur because systems speak as if they have full capability when the underlying systems are degraded.

**Examples:**

* A retrieval index is stale by four hours, so the answer should disclose freshness limits.
* A downstream case-management API is unavailable, so the system should offer a draft or save-for-later action rather than false execution.
* A monitoring agent has partial access because one connector failed, so the system should narrow its claims.

|  |
| --- |
| **Design implication.** System state context should shape both behavior and disclosure. It is an important source of graceful degradation, fallback behavior, and truthful user communication. |

## 7. Environmental context

Environmental context includes external conditions that affect timing, risk, or appropriateness. This may include time of day, market conditions, geography, device posture, channel, client travel status, local holidays, regulatory windows, branch hours, or major business events. It is often overlooked because it sits outside the immediate application model, yet it frequently changes what the right action is.

**Examples:**

* A client is traveling internationally, so communication timing and available channels change.
* Markets are unusually volatile, so portfolio commentary should reflect current conditions and avoid stale assumptions.
* The user is on mobile during transit, so the system should compress output and avoid high-risk execution prompts.

|  |
| --- |
| **Design implication.** Environmental context is especially important for proactive intelligence and background monitoring. It gives the system situational awareness beyond the narrow record screen. |

## 8. Historical and memory context

Historical and memory context preserves what has already happened and what should influence the present interaction. This includes prior conversations, prior actions, prior decisions, previous drafts, meeting history, relationship changes, unresolved commitments, and model-maintained summaries or memory objects. Recent enterprise guidance increasingly treats memory as a practical component of context engineering for long-running agents and workflows [3][7][8].

**Examples:**

* The system should not propose outreach that was already completed yesterday.
* A client previously declined a recommendation, so the AI should explain that before suggesting the same path again.
* A relationship manager returning from leave should receive a concise continuity summary built from prior meetings, requests, and pending obligations.

|  |
| --- |
| **Design implication.** Memory should be selective, attributable, and expirable. Not every historical detail deserves persistence. Teams should distinguish between ephemeral session context, durable workflow memory, and governed organizational memory. |

# F. Manual guidance

**1.** Design for minimum viable context first. Before enriching the system with every possible signal, define the minimum context required for a trustworthy answer, recommendation, draft, or action. This prevents overengineering and helps teams identify when the system should ask a clarifying question, narrow scope, or stop.

**2.** Separate required context from helpful context. Required context is necessary for correctness or safety. Helpful context improves quality but is not mandatory. This distinction should influence orchestration, latency budgets, and fallback design.

**3.** Build context assembly, not context dumping. More context is not automatically better. The system should retrieve, filter, rank, summarize, and structure relevant inputs before handing them to the model. Current enterprise guidance increasingly describes this as context engineering rather than prompt engineering [1][2][3].

**4.** Respect entitlement before retrieval. Permission checks should happen before retrieval, grounding, memory recall, and tool selection. Never rely only on post-generation suppression.

**5.** Treat context freshness as a first-class property. Every meaningful context source should carry metadata such as timestamp, source system, confidence, and freshness window.

**6.** Make context scope visible when it matters. When the answer depends on a specific client, household, queue, jurisdiction, or time horizon, the user should be able to see the active scope.

**7.** Distinguish live context from remembered context. A current workflow state, a durable relationship summary, and a model-generated memory object are not the same thing. They should have different lifecycles and trust treatment.

**8.** Handle incomplete context explicitly. When context is missing, stale, or conflicting, the system should say so, narrow the action, request confirmation, or escalate.

**9.** Tie context rules to pattern families. Different pattern families require different minimum context. A simple answer may need less context than execution or monitoring.

**10.** Log context-dependent decisions for review. If context caused the system to rank, suppress, escalate, or refuse something, that decision should be inspectable in enterprise settings.

## Minimum context required by pattern family

|  |  |  |
| --- | --- | --- |
| **Pattern family** | **Minimum context required** | **Why this is the minimum** |
| **Ask** | User, permission, scope anchor, freshness | Even a basic answer can be misleading if the system does not know who is asking, what they may see, what record or scope is implied, and whether the source is current. |
| **Find** | Permission, entity scope, filters, source availability | Search and retrieval must respect entitlements and know what corpus, record type, or team scope the user intends to search. |
| **Understand** | Entity context, workflow stage, recent history | Explanations such as “why flagged” or “what changed” are only credible when tied to a specific object, the current process state, and recent events. |
| **Decide** | Role, policy constraints, entity data, evidence freshness | Decision support needs enough context to weigh trade-offs responsibly and to know which options are actually permissible. |
| **Create** | Audience, purpose, workflow stage, prior materials | Drafts and generated content require clarity about who the output is for, what job it serves, and what prior content already exists. |
| **Execute** | Permission, workflow state, approvals, tool availability | Execution should never proceed without entitlement, readiness of downstream systems, and any required approval checkpoint. |
| **Monitor** | Scope definition, thresholds, time horizon, escalation rules, memory | Background monitoring is impossible to govern without explicit watch scope, trigger logic, review path, and durable memory of prior events. |

# G. Worked examples

## Enterprise example 1 - Sales operations

A revenue manager asks, “Show me deals that need intervention this week.” A weak system returns generic late-stage deals by amount. A context-aware system uses role permissions, current region, team ownership, forecast cycle, SLA thresholds, and recent activity to rank deals that are both at risk and actionable for that specific manager. It explains why each deal is shown and what intervention is appropriate now.

## Enterprise example 2 - IT support

A service agent asks, “What should I do next on this ticket?” Without context, the model proposes broad troubleshooting steps. With workflow context, system state, entitlement data, and case history, it recognizes that the ticket is waiting on customer confirmation, that the identity service is degraded, and that the agent may send a templated follow-up but not close the incident.

## Enterprise example 3 - HR assistant

An HR business partner asks for a summary before a performance conversation. A poor system retrieves the employee profile and generic coaching guidance. A stronger system adds manager relationship, prior review notes, open development goals, region-specific policy, and recent organizational changes, while suppressing information that the partner is not entitled to access.

# H. Private banking translation

In private banking, context is especially consequential because almost every interaction is shaped by client sensitivity, relationship continuity, permission structures, and time-dependent judgment.

**Advisor context:** The system should know the advisor’s book, coverage responsibilities, growth focus, communication style, and active priorities. This shapes who surfaces in the morning brief, how opportunities are ranked, and which follow-ups appear urgent.

**Banker and specialist context:** Different roles need different depth and action rights. A banker, investment specialist, service associate, and supervisor should not receive the same answer, even when looking at the same household.

**Prospecting:** Prospecting context must distinguish firm-owned leads, self-sourced prospects, referral status, engagement history, and stage in conversion. “Who should I contact?” depends on recency, relationship warmth, team ownership, and open actions.

**Relationship management:** Client context should combine household structure, balances, portfolio shifts, open needs, recent conversations, travel, important dates, and service history. This is what makes summaries and next-best actions actually usable.

**Service:** Service workflows depend on request type, current owner, pending documentation, SLA timing, and escalation history. Without this context, AI may recommend the wrong next step or fail to identify operational risk.

**Review and meeting preparation:** Good meeting prep requires continuity context: prior agendas, promises made, unresolved follow-ups, portfolio changes, and recent life or business events. This is where historical memory becomes highly valuable.

**Onboarding:** Onboarding context includes jurisdiction, product set, documentation status, source-of-funds requirements, risk classification, and approval checkpoints. These factors determine what the system may draft versus what it may only explain.

**Compliance and supervision:** Context must incorporate who is allowed to see what, which interactions require review, and how recommendations should be qualified. Supervisory views often require book-level or team-level aggregation, while frontline views require client-specific precision.

A private-banking AI system without context may still sound polished. But it will miss the nuance that makes advisor work effective, safe, and trusted.

# I. Failure modes

* Context blindness: the system responds fluently but to the wrong client, record, or workflow.
* Permission leakage: retrieved evidence or proposed actions exceed the user’s entitlement.
* Workflow drift: the AI recommends steps that are premature, redundant, or blocked.
* Stale reasoning: answers are grounded in outdated records, indexes, or market assumptions.
* Memory confusion: the system treats weak summaries, raw history, and durable facts as equivalent.
* Over-personalization: user preferences are allowed to override policy or governance rules.
* Context overload: too much unfiltered context reduces relevance, increases latency, and degrades model performance.
* Silent degradation: failed tools or stale connectors are not reflected in user-facing behavior.

# Conclusion

The context model is the layer that turns enterprise AI from generic language generation into situated system behavior. It determines which signals should govern relevance, entitlement, continuity, and timing. Teams that treat context as an afterthought usually compensate with more prompts, more interfaces, and more manual review. Teams that design context deliberately are better positioned to build AI systems that are useful, governable, and trusted.

# References

[1] Google Cloud, “What Is AI context engineering?”, April 13, 2026.

[2] Anthropic, “Effective context engineering for AI agents”, September 29, 2025.

[3] Anthropic, “Context engineering: memory, compaction, and tool clearing”, March 20, 2026.

[4] NIST, AI Risk Management Framework (AI RMF 1.0), 2023.

[5] Google Cloud, “Secure enterprise foundation controls for generative AI use cases”, accessed April 18, 2026.

[6] Google Cloud, “Access control | Generative AI on Vertex AI”, accessed April 18, 2026.

[7] Anthropic, “Building Effective AI Agents”, December 19, 2024.

[8] OpenAI, “A practical guide to building AI agents”, accessed April 18, 2026.

[9] Microsoft Learn, “Retrieval-augmented generation (RAG) in Azure AI Search”, January 15, 2026.

[10] OWASP, Top 10 for LLM Applications 2025, November 18, 2024.

[11] Microsoft Learn, “AI Agent Orchestration Patterns - Azure Architecture Center”, February 12, 2026.

[12] Microsoft Learn, “Human-in-the-Loop with AG-UI”, accessed April 18, 2026.
