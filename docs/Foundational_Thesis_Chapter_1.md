AI Future OS portal

Chapter 1 - Foundational Thesis and Point of View

Reference chapter draft in a manual / textbook style, with integrated exhibits, enterprise examples, citations, and private banking translation.

|  |  |  |
| --- | --- | --- |
| Document type  Reference chapter | Audience  Designers, product managers, engineers, business stakeholders | Project stance  Enterprise-first, private-banking-proven |
| Editorial mode  Manual / textbook | Design posture  Beyond chat; system of intelligence; governed autonomy | Status  Draft for master document packaging |

# 1. Foundational Thesis and Point of View

This chapter establishes the conceptual foundation for the entire framework. Its role is to define what enterprise AI systems are, why they cannot be treated as chatbots with better models, why they need a new design language, and what principles should guide their design. The chapter is deliberately written as a reference chapter: it defines terms, separates concepts that often get blurred together, introduces a strong point of view, and shows how the ideas translate into real enterprise conditions. The aim is not just inspiration. It is to create a durable conceptual base that later chapters on jobs, patterns, modalities, surfaces, trust, autonomy, and context can build on coherently. [1]

## Chapter purpose

This chapter gives the project its conceptual operating system. It explains the thesis behind the overall framework, establishes the vocabulary the rest of the document will depend on, and sets the editorial stance for the work: enterprise-first, future-facing, but grounded in trust, workflow realism, and governed action.

## Why this chapter exists

Recent platform moves across the market point in the same direction: AI is expanding beyond a single prompt-response box into persistent canvases, shareable workspaces, enterprise agent platforms, and dynamically generated interfaces. Microsoft positions Copilot Pages as an editable, shareable canvas that turns AI output into a durable work object. OpenAI's Frontier positions enterprise AI as a platform for building, deploying, and managing AI agents with shared context, onboarding, permissions, and clear boundaries. Google PAIR continues to frame human-centered AI as a practical design problem rather than a prompt-only interaction style. Taken together, these signals suggest that the next design challenge is not merely how to improve chat, but how to design intelligent systems that can reason, assemble work, coordinate action, and operate within enterprise constraints. [2][3][4][5]

That shift matters because enterprise work is not organized as isolated questions. It is organized as sequences of retrieval, interpretation, comparison, drafting, review, coordination, and action across fragmented systems and over time. NIST's AI Risk Management Framework explicitly treats AI systems as socio-technical systems whose risks and benefits depend on context, actors, and deployment conditions. Microsoft's human-AI guidance likewise emphasizes that AI systems must be designed not only for initial interaction, but also for regular use, error states, and behavior over time. In other words, enterprise AI design cannot stop at fluency; it must account for workflow, trust, continuity, and control. [1][2]

## Core thesis

The core thesis of this project is that enterprise AI should be designed as a system of intelligence, not as a better chatbot. A system of intelligence is a layer that can understand context, retrieve relevant information, synthesize meaning, generate or adapt interfaces, coordinate work across tools, and act with bounded autonomy under appropriate permissions and controls. That framing is increasingly consistent with how leading platforms are being described: OpenAI's Frontier emphasizes shared context, onboarding, permissions, and end-to-end workflows; Microsoft's Copilot Pages turns transient responses into persistent collaborative artifacts; and Google PAIR continues to anchor AI design in real tasks, feedback loops, and practical human needs. [2][3][4][5]

This thesis has six parts: beyond chat; enterprise AI as a system of intelligence; a new design language for enterprise AI; a framework plus library dual model; an explicitly future-facing stance spanning multimodal, ambient, spatial, and agentic systems; and a non-negotiable emphasis on trust, workflow realism, and governed action. [1][2][4][6]

|  |
| --- |
| Exhibit 1. From chatbot to system of intelligence  **Model A - Chatbot**  Primary unit is the prompt; primary output is the answer; interaction is usually ephemeral; interface is often one surface; success is measured mainly by fluency and response quality; action often happens outside the AI experience.  **Model B - System of intelligence**  Primary unit is the job or workflow moment; primary output is progress toward a task, decision, or action; interaction may become a durable work object; intelligence can appear across multiple surfaces; success depends on context fit, trust, explainability, and workflow value; action can be staged, reviewed, and executed within the experience.  **Interpretation -** The left-hand model treats AI as a conversational endpoint. The right-hand model treats AI as an operating layer across retrieval, synthesis, recommendation, work assembly, and bounded action. This project is built on the second model.  **Private banking translation -** In a private banking context, a chatbot answers, 'Who should I contact today?' A system of intelligence identifies relevant households, explains why they matter now, shows supporting signals, prepares next steps, and preserves review boundaries before any client-facing action occurs. [7][8][9] |

## 1.1 Beyond chat thesis

### Definition

The beyond chat thesis argues that conversational interaction is an important entry point for AI systems, but not an adequate product model for enterprise work.

### Why it matters

Chat is powerful because it is flexible, low-friction, and easy to generalize. But enterprise work rarely ends with a paragraph. Real work requires inspecting evidence, comparing options, editing structured data, collaborating on shared artifacts, resuming tasks later, and taking action inside governed workflows. Microsoft's Copilot Pages makes this visible by converting AI output into editable and shareable content rather than leaving it as ephemeral conversation. [2][5]

### What beyond chat means in this framework

**•** Beyond one interface pattern. AI should not be constrained to a single conversational pane. It may appear as inline guidance, an evidence drawer, a generated workspace, a recommendation rail, a review checkpoint, a notification, or a guided flow.

**•** Beyond one modality. Enterprise AI design should not assume typing is the only meaningful input or prose the only meaningful output. Depending on the task, the right expression may involve structured comparison, visual explanation, voice, document understanding, or spatial arrangement. [6]

**•** Beyond one workflow role. An AI system is no longer only an answer engine. It may observe, prioritize, explain, draft, monitor, orchestrate, and sometimes execute bounded actions. [4]

### Enterprise example

A generic chat-first experience answers the question, 'Who should I contact today?' with a paragraph. A beyond-chat experience returns a ranked list, shows the reasons for prioritization, links to supporting evidence, lets the user compare candidates, and opens a draft outreach workflow if the user chooses to proceed. The language model still matters, but the actual product value comes from how the system structures work around the answer. [2][5]

### Private banking translation

In private banking, beyond chat is not a stylistic preference. It is operationally necessary. An advisor asking, 'What changed in this relationship since my last meeting?' may need communications history, service items, portfolio changes, household context, opportunity signals, and prior commitments. A conversational answer can summarize that, but a usable enterprise experience must also support inspection, prioritization, note creation, collaboration, and review before action. That becomes even more important when customer knowledge, suitability, and best-interest standards are in play. [7][8][9]

|  |
| --- |
| Exhibit 2. 'Beyond chat' is not one shift. It is three shifts.  **Shift 1 - Beyond one interface pattern**  AI should not be constrained to a single conversational pane. It may appear inline, in an adjacent panel, in a generated workspace, in a notification layer, or as a guided multi-step flow.  **Shift 2 - Beyond one modality**  AI should not assume text-only input and text-only output. Depending on the task, the right interaction may involve structured comparison, visual explanation, voice, document understanding, or spatial arrangement.  **Shift 3 - Beyond one workflow role**  AI should not be treated only as an answer engine. It may monitor, explain, prioritize, draft, orchestrate, or prepare work for approval and execution.  **Interpretation -** The phrase 'beyond chat' is often used loosely. In this framework, it has a precise meaning: AI is expanding beyond one pattern, one modality, and one role.  **Private banking translation -** For an advisor, these three expansions are concrete: moving from a chat answer to a meeting-prep workspace or evidence panel; combining notes, relationship signals, documents, and portfolio context; and using AI not only to answer, but also to monitor reviews, draft follow-up, and prepare governed workflows for human action. |

## 1.2 Enterprise AI as a system of intelligence

### Definition

A system of intelligence is an enterprise layer that combines context, retrieval, synthesis, memory, tool use, permissions, and bounded action into a coherent operating model.

### Why this matters

Traditional enterprise software is often a system of record or a system of workflow. AI adds a new layer: a system that can interpret what matters, reduce uncertainty, surface priorities, and coordinate work across tools. NIST's AI RMF is useful here because it frames AI systems as socio-technical systems whose outputs may include predictions, recommendations, or decisions, and whose effectiveness and risk depend on the context in which they are used. That definition is much closer to enterprise reality than the narrower mental model of 'a model that generates text.' [1]

OpenAI's Frontier makes the same shift explicit in operational terms: agents are described as grounded in business context, integrated with systems of record, and able to automate end-to-end workflows. This is a materially different conception from a free-floating chatbot. It implies that design must address memory, onboarding, permissions, role boundaries, workflow handoffs, and safe execution - not just prompt UX. [4]

### Enterprise example

In a procurement setting, a chat assistant might answer 'What is delayed?' A system of intelligence would do more: detect supplier issues, assemble relevant orders, explain the drivers of delay, estimate impact, recommend next steps, launch a mitigation workflow, and preserve a record of what was reviewed and approved. The value is not one answer. The value is structured intelligence applied to a workflow. [1][4]

### Private banking translation

In private banking, a system of intelligence might monitor relationship signals, retrieve relevant customer facts, explain liquidity or engagement changes, suggest next-best actions, draft outreach, prepare a meeting brief, and coordinate follow-up tasks - all while preserving human accountability for anything that crosses into advice, recommendation, or governed execution. That is exactly why the framework must distinguish understanding, recommending, and acting as different classes of interaction rather than collapsing them into one magical assistant behavior. [1][7][8][9]

## 1.3 Why enterprise AI needs a new design language

### Definition

A new design language is needed because enterprise AI sits between two incomplete paradigms: classic enterprise software and chat-first AI.

### Why the old paradigms are insufficient

Classic enterprise software is strong at records, forms, tables, navigation, and deterministic workflows. Chat-first AI is strong at ambiguity, open-ended interaction, and language flexibility. Enterprise AI products now have to do both. They must help users explore ambiguity and then transition into structured, governed work. They must feel conversational when uncertainty is high and operational when action is required. Microsoft's human-AI guidance and Google's PAIR guidebook both point toward this need for interaction models that go beyond one-off prompts and account for explanation, correction, trust, and evolving use over time. [2][3]

The industry's interface experiments reinforce the same conclusion. Copilot Pages treats AI output as a persistent collaborative canvas. A future-facing enterprise AI design language therefore needs primitives for generated workspaces, inspectable evidence, progressive autonomy, and context-aware surfaces. [2][5][6]

### Enterprise example

A user asks for help preparing for a board review. A chat-only model returns a summary. A new design-language model may instead generate a review workspace containing the draft narrative, supporting charts, relevant sources, unresolved issues, and actions awaiting approval. The core intelligence is not just in text generation. It is in the composition of the work surface and the transition from ambiguity to governed action. [2][5]

### Private banking translation

A private banker preparing for a client review may need a generated briefing surface rather than a conversational answer: relationship summary, portfolio shifts, recent outreach, service friction, liquidity opportunities, planning triggers, and proposed next steps. The point is not to make the advisor prompt better. The point is to make the system organize decision-ready work more intelligently and more safely. That is what a new design language enables. [2][7][9]

## 1.4 Framework + library dual model

### Definition

This project should operate as both a framework and a library.

### Why both are necessary

A framework gives teams conceptual structure: what kinds of AI interaction exist, how jobs differ from patterns, how trust and autonomy should be calibrated, and how context changes the correct product response. A library gives teams reusable patterns, reference models, and implementation-ready examples. If a project has only a framework, it risks becoming abstract. If it has only a library, it risks becoming a disconnected set of UI fragments. The most useful enterprise AI reference must do both. [2][3]

The framework answers: What kind of AI system are we building? The library answers: How should it behave and appear in real workflows? That dual model is one of the strongest differentiators of the initiative. [2][3]

## 1.5 Future-facing stance: multimodal, ambient, spatial, agentic

This project should be explicitly future-facing, but not futurist for its own sake. The goal is to design for the direction enterprise AI is already moving.

**•** Multimodal. AI systems increasingly operate across more than text. Enterprise systems should be ready for voice, image, document, and visual-context interaction where the task benefits from it. [6]

**•** Ambient. Some of the most useful enterprise AI behaviors are persistent rather than episodic: monitoring, alerting, preparing, and surfacing when something changes. [1][2]

**•** Spatial. Apple's visionOS guidance broadens the available surface vocabulary beyond flat pages and encourages thinking in windows, volumes, and immersive spaces. [6]

**•** Agentic. Agent platforms are increasingly positioned as systems that can do real work across enterprise tools with permissions, shared context, and workflow boundaries. [4]

For private banking, this future-facing stance translates into concrete opportunities: voice capture for mobile prep, document understanding for account materials, ambient monitoring for relationship and service signals, generated meeting workspaces, and eventually spatial review environments for complex household or book-of-business analysis. But the domain also imposes a strong discipline: future-facing interaction must still remain inspectable, governed, and role-appropriate. [1][6][9]

## 1.6 Design principles for enterprise AI

The principles below translate the thesis into design guidance. Each principle is written in a reference-manual format so later chapters can build on the same language.

### Principle 1 - Start with work, not prompts

Meaning - Design from the user's job, decision, or workflow outcome - not from the existence of a prompt box. [2][3]

Enterprise example - Instead of opening on an empty assistant, a support system starts from 'resolve this escalated case' and assembles context, likely causes, evidence, and next actions.

Private banking example - Instead of asking an advisor to type the right question, the system starts from 'prepare for client review' and assembles relationship changes, recent outreach, service items, planning triggers, and a draft brief. [7][9]

### Principle 2 - Treat chat as one surface, not the system

Meaning - Chat is a useful surface, but not the whole product model. Persistent canvases, generated workspaces, side panels, and guided flows are often better containers for actual enterprise work. [2][5]

Enterprise example - A user asks for a quarterly summary; the system responds briefly, then turns the result into an editable page with evidence, charts, and collaboration.

Private banking example - A banker asks who needs attention this week; the system answers briefly, then opens a ranked attention view with evidence, contact options, and review notes. [5][7]

### Principle 3 - Separate signal, recommendation, and action

Meaning - AI should distinguish what it noticed, what it suggests, and what it is prepared to do. This separation becomes crucial when recommendations or actions carry regulatory or operational consequences. [1]

Enterprise example - Signal: renewal risk increased. Recommendation: escalate account outreach. Action: draft a save plan and prepare the approval packet.

Private banking example - Signal: client engagement dropped and idle cash increased. Recommendation: prioritize outreach this week. Action: prepare meeting brief, draft follow-up email, and prefill CRM task. [8][9]

|  |
| --- |
| Exhibit 3. Signal -> recommendation -> action  **Signal**  A meaningful change, anomaly, threshold breach, opportunity, or pattern detected by the system.  **Recommendation**  A proposed interpretation or suggested next step based on the signal and its surrounding context.  **Action**  A concrete task the system can prepare, route, or execute within a workflow.  Worked example: client engagement has dropped and idle cash has increased; recommendation: prioritize outreach this week; action: prepare meeting brief, draft follow-up email, and prefill CRM task.  **Interpretation -** A weak AI product collapses these three layers into one response. A strong AI product keeps them separate so the user can inspect evidence, understand the logic, and decide whether to proceed.  **Private banking translation -** In regulated environments, this distinction protects against sliding from explanation into recommendation, or from recommendation into execution, without clear review boundaries. [1][8][9] |

### Principle 4 - Make evidence visible

Meaning - Enterprise trust depends on inspectability. Users should be able to verify what changed, why the system is making a claim, and which sources support it. [1][3]

Enterprise example - A recommendation panel links each recommendation to the records, rules, or events that produced it.

Private banking example - If a relationship is flagged as at risk, the banker should be able to inspect missed touchpoints, unresolved service items, recent asset movement, or declining responsiveness. [7]

### Principle 5 - Make autonomy progressive

Meaning - Move from suggest, to prepare, to confirm, to execute. Higher autonomy should come with clearer permissions, stronger review states, and safer fallbacks. [1][4]

Enterprise example - The system drafts an approval note, waits for confirmation, then files it into the workflow.

Private banking example - The system may suggest outreach, prepare a draft, and prefill CRM notes - but sending client-facing communication or initiating recommendation-like actions remains reviewable and role-appropriate. [9]

### Principle 6 - Keep humans accountable for high-stakes decisions

Meaning - AI can support judgment, but responsibility must remain legible when stakes are high. [1][2]

Enterprise example - AI compares options and explains tradeoffs, but the final operational or financial decision remains human-approved.

Private banking example - AI may summarize client context and surface portfolio or planning signals, but it should not silently cross into accountable advice or recommendation behavior without appropriate oversight. [8][9]

### Principle 7 - Design memory with boundaries

Meaning - Memory should improve continuity without creating hidden assumptions. Users should know what is remembered, how it affects behavior, and how it can be reviewed or cleared. [2]

Enterprise example - A system remembers document preferences and prior workflow context, but exposes those settings and lets the user edit them.

Private banking example - An advisor memory layer may preserve prior commitments, meeting context, and preferred briefing formats, but must make visible which memories are active and where they are being used. [1][7]

### Principle 8 - Build for composability

Meaning - Do not force all AI behavior into one monolithic assistant. Enterprise AI works better as a set of composable patterns that can appear inline, adjacent, or in dedicated workspaces depending on context. [2]

Enterprise example - The same evidence pattern appears in a recommendation panel, a generated report, and a review flow.

Private banking example - A next-best-action module, evidence drawer, meeting brief workspace, and service-recovery flow can all reuse the same underlying intelligence patterns without pretending they belong in one side chat. [7][9]

### Principle 9 - Preserve continuity across time

Meaning - Enterprise work unfolds across sessions, people, and systems. AI outputs should be convertible from temporary responses into durable artifacts. [2][5]

Enterprise example - A draft analysis becomes a shared page, is updated later, and becomes part of a decision trail.

Private banking example - A meeting-prep brief can become a saved artifact, then a post-meeting note, then a follow-up task set. [5]

### Principle 10 - Match modality to the work

Meaning - Do not force every task into the same input or output style. Some tasks need comparison tables, some need narrative, some benefit from voice, and some benefit from generated interfaces or spatial arrangement. [6]

Enterprise example - A variance review is better expressed as a structured comparison with narrative explanation than as a chat paragraph.

Private banking example - A complex household review may need visual relationships, portfolio summaries, recent interactions, and planning cues together, not only conversational prose. [6]

### Principle 11 - Embed trust into the interaction model

Meaning - Trust is not a footer. It shows up in explanation, approvals, editability, reversibility, visibility of uncertainty, and recovery from error. [1][2]

Enterprise example - Before execution, the system shows what will happen, where it will happen, and what can still be changed.

Private banking example - If AI prepares outreach, updates a record, or initiates a workflow, the banker should see what data was used, what action will be taken, and what remains under human review. [9]

### Principle 12 - Design for the frontier without abandoning the present

Meaning - Products should be practical in today's enterprise conditions while being structurally ready for multimodal, ambient, spatial, and agentic futures. [4][6]

Enterprise example - A desktop product supports current workflows but is architected so voice, document understanding, persistent canvases, and higher-autonomy agents can plug in coherently.

Private banking example - A CRM-centered intelligence layer may begin with sidebar, feed, and workspace patterns today, but should already be structured to support ambient monitoring, richer multimodal prep, and future spatial review experiences without rethinking the foundation from scratch. [6]

## 1.7 What this chapter is arguing against

**•** AI as a better chatbot. This model overstates the importance of conversation and understates workflow, persistence, evidence, and governed action. [2][5]

**•** AI as a single assistant surface. This collapses many kinds of work into one side panel or one command space, even when different jobs require inline support, durable workspaces, or ambient monitoring. [2]

**•** AI as a capability drop-in. This treats summarization, drafting, or recommendation as isolated features rather than as parts of a larger interaction and trust system. [3]

**•** AI as model performance alone. This ignores the reality that product usefulness depends on workflow fit, inspectability, control, role boundaries, and error handling - not just model fluency. [1]

## 1.8 Private banking translation

Private banking is a strong proving ground for this thesis because the work is high-context, relationship-based, time-distributed, and sensitive to recommendation boundaries. Firms must know and retain essential facts about customers, and recommendation-related conduct is governed by suitability and best-interest standards. That makes it especially important not to blur information retrieval, explanation, recommendation, and execution into one undifferentiated AI behavior. [7][8][9]

In practice, the thesis translates like this: beyond chat means the advisor does not work from an empty prompt box alone; system of intelligence means the product can retrieve, synthesize, prioritize, draft, and coordinate follow-up around the relationship; a new design language means generated briefings, contextual evidence, signals, next-best-action patterns, and governed execution surfaces matter as much as conversational fluency; and a future-facing stance means designing now for ambient monitoring, multimodal prep, and progressively more agentic workflows without losing human accountability. [2][4][7][9]

|  |
| --- |
| Exhibit 4. Private banking translation map  **Foundational idea - Beyond chat**  Advisor work should not begin from an empty prompt box alone; the system can also surface contextual summaries, evidence panels, watchlist signals, meeting-prep workspaces, and governed execution flows.  **Foundational idea - System of intelligence**  The system retrieves customer facts, recent activities, service issues, portfolio changes, and engagement history, then synthesizes what matters and prepares next steps.  **Foundational idea - New design language**  The product needs patterns for relationship recap, opportunity signals, next-best action, evidence review, draft creation, workflow orchestration, and review checkpoints.  **Foundational idea - Trust and governance matter**  AI can summarize and prepare, but recommendation-like or client-facing actions require stronger review, visibility into sources, and role-appropriate control.  **Foundational idea - Future-facing stance**  The system should be ready for multimodal prep, ambient monitoring, and progressively more agentic workflows without giving up human accountability.  **Interpretation -** Private banking is not just an example domain here. It is a stress test for whether the thesis is robust enough for enterprise reality. |

## 1.9 Good, better, best

Weak implementation - A CRM adds a chat panel and asks the advisor to type everything. The product is technically AI-enabled, but the burden of interpretation, workflow assembly, and judgment remains almost entirely on the user. [2]

Better implementation - The product adds summaries, suggestions, and some proactive signals, but the experience is still fragmented. Retrieval, explanation, drafting, and workflow action are loosely connected and inconsistently governed. [3]

Strong implementation - The product behaves like a system of intelligence: it understands context, retrieves evidence, synthesizes what matters, presents the right surface for the task, supports durable work objects, and stages action through appropriate review and controls. [1][2][4]

## 1.10 Failure modes and anti-patterns

**•** Mistaking chat for the product. Conversation becomes the default answer to every problem, even when the work requires structure or persistence. [2][5]

**•** Collapsing recommendation and execution. The system quietly slides from explanation into influence or action without enough evidence, review, or boundary clarity. In regulated settings, that is particularly risky. [8][9]

**•** Treating trust as messaging rather than interaction design. A disclaimer is added, but evidence, controls, and fallback behavior remain weak. [1]

**•** Designing for magic instead of inspection. The experience feels impressive in demo mode but becomes hard to verify, correct, or govern in real work. [2]

**•** Using futuristic modalities as spectacle. Spatial or multimodal features are added as novelty rather than as meaningful improvements to the work. [6]

## 1.11 Evaluation checklist

**•** Can we explain why enterprise AI is more than chat?

**•** Can we define AI as a system of intelligence rather than a feature bundle?

**•** Can we distinguish jobs, patterns, modalities, surfaces, trust, autonomy, and context clearly?

**•** Can we explain why a new design language is necessary?

**•** Can we justify why persistence, evidence, and governed action matter?

**•** Can we translate the thesis into a domain like private banking without collapsing into domain-only language?

**•** Can we explain how this foundation supports both today's enterprise software and future multimodal, ambient, spatial, and agentic systems? [1]

|  |
| --- |
| Exhibit 5. Chapter 1 in one sentence  Enterprise AI design is no longer the design of a conversational assistant alone; it is the design of a context-aware, trust-bounded, workflow-capable system of intelligence that can inform, shape, and sometimes execute work across multiple surfaces and modalities. [1][2][4][6] |

## 1.12 Chapter summary

The foundational thesis of this project is that enterprise AI must be designed as a system of intelligence rather than as a better chatbot. Chat remains useful, but it is only one surface within a larger product model that includes retrieval, synthesis, evidence, persistent work objects, guided action, memory, and governed autonomy. Recent platform signals - from persistent AI canvases to enterprise agent platforms - reinforce that the design problem is expanding beyond conversation alone. In enterprise environments, and especially in domains like private banking, that expansion must be matched by stronger trust design, clearer role boundaries, and better separation between understanding, recommendation, and execution. That is why this project requires both a framework for thinking and a library for building. [1][2][4][5]

## Selected references

**[1]** NIST. Artificial Intelligence Risk Management Framework (AI RMF 1.0). https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf

**[2]** Microsoft Research. Guidelines for Human-AI Interaction. https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/

**[3]** Google PAIR. People + AI Guidebook. https://pair.withgoogle.com/guidebook/

**[4]** OpenAI. Introducing OpenAI Frontier / OpenAI Frontier. https://openai.com/index/introducing-openai-frontier/ and https://openai.com/business/frontier/

**[5]** Microsoft Support. How Microsoft 365 Copilot Pages works / Get started with Microsoft 365 Copilot Pages. https://support.microsoft.com/en-us/topic/how-microsoft-365-copilot-pages-works-d155bd99-c3cc-4ef8-8da4-c0a92bfce29b and https://support.microsoft.com/en-us/topic/get-started-with-microsoft-365-copilot-pages-6674bd51-9ff5-42c4-9256-44d9428a726f

**[6]** Apple Developer. Designing for visionOS. https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos

**[7]** FINRA Rule 2090. Know Your Customer. https://www.finra.org/rules-guidance/rulebooks/finra-rules/2090

**[8]** FINRA Rule 2111. Suitability. https://www.finra.org/rules-guidance/rulebooks/finra-rules/2111

**[9]** FINRA. Regulation Best Interest (Reg BI) Overview. https://www.finra.org/article/regulation-best-interest-%28reg-bi%29-overview
