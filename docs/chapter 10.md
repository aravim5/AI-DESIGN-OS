**Master Pattern Page Template**

Pattern Library Standard • v1

|  |
| --- |
| This document defines the canonical page used to author every interaction pattern in the library. It translates the pattern template and authoring model into a reusable master page that is precise enough for serious teams, but lightweight enough to scale across a growing pattern library. The structure emphasizes clarity, comparability, trust, accessibility, and implementation realism. |

|  |  |
| --- | --- |
| **Purpose** | Define the standard page that every pattern author will use. |
| **Status** | Ready for adoption. |
| **Primary use** | Authoring, review, library QA, and cross-team reuse. |
| **Required outcome** | Every pattern page reads consistently and can be compared side by side. |
| **Design constraint** | The template must stay light enough to author quickly and maintain at scale. |

# 1. What this master page is

A pattern library becomes useful only when individual patterns are written in a predictable structure. Without a shared page model, readers must relearn how each pattern is described, what details matter, and where to find implementation or trust information. The result is inconsistency for design teams, slower review, and weaker reuse.

This master template solves that problem. It defines one canonical page for each pattern, with a stable order, clear field meanings, and authoring rules that reduce ambiguity. It also ensures that every pattern documents not only the interaction itself, but also the surrounding system conditions that make enterprise AI patterns credible in practice: inputs, states, trust requirements, failure modes, accessibility, technical dependencies, and success measures.

|  |
| --- |
| **Why it matters** A reusable page structure improves scanability, reduces authoring variance, and makes the library easier to govern over time. |

# 2. Design goals for the template

• Make each page easy to scan in under two minutes.

• Keep the required fields small enough that authors can fill them without writing an essay.

• Capture the operational details that enterprise teams usually forget until late in delivery.

• Separate mandatory core fields from optional expansion fields so the library can scale.

• Support comparison across patterns by using the same section order and vocabulary.

The template is intentionally grounded in established guidance. Accessibility expectations align with WCAG 2.2 [1]. Trust and risk considerations align with NIST AI RMF 1.0 and the Generative AI Profile [2][3]. Behavioral guidance for uncertainty, failure, and human control draws from Microsoft's human-AI interaction guidelines [4]. State and system anatomy guidance are consistent with mainstream design-system practice from Material Design and IBM Carbon [5][6]. Operational metrics and instrumentation guidance reflect OpenTelemetry's model of traces, metrics, and logs [7][8].

# 3. Canonical page structure

Every pattern page should follow the same top-to-bottom structure:

• Pattern overview

• Experience design

• Trust and control

• Delivery and operations

• Applied examples

Within that structure, some fields are mandatory on every page, while others are optional and appear only when they materially improve understanding.

## 3.1 Core definition fields

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Field** | **Priority** | **Why it exists** | **Authoring guidance** | **Mini example** |
| **Pattern name** | Required | Provides a stable label for indexing and reuse. | Use a short noun phrase; do not turn it into a slogan. | Evidence-backed answer |
| **Purpose** | Required | Explains the job the pattern performs. | Describe the user outcome, not the visual form. | Help a user understand a result with supporting evidence. |
| **When to use** | Required | Defines the right operating conditions. | List the trigger conditions, not every possible scenario. | Use when users need a grounded explanation before acting. |
| **When not to use** | Required | Prevents misuse and overlap. | Name disqualifying conditions or better alternatives. | Do not use for a one-click confirmation. |
| **Inputs required** | Required | Clarifies the minimum context needed. | List only the inputs the pattern truly depends on. | User query, source retrieval, confidence score. |
| **Outputs** | Required | Makes the pattern's deliverable explicit. | State what the user receives or what the system emits. | Summary, citations, evidence links, next action. |
| **UI anatomy** | Required | Defines the visible structure of the pattern. | Describe the internal regions in reading order. | Answer block, evidence module, controls, follow-up actions. |
| **States** | Required | Documents behavior over time. | Include default, loading, success, low-confidence, error, and unavailable states at minimum. | Loading, partial, resolved, blocked. |

## 3.2 Control and governance fields

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Field** | **Priority** | **Why it exists** | **Authoring guidance** | **Mini example** |
| **Trust requirements** | Required | Captures the controls needed for safe use. | Specify evidence, permissions, review, disclosure, or approval expectations. | Show sources and label uncertain claims. |
| **Failure modes** | Required | Shows how the pattern can go wrong. | Name the likely breakdowns and the recovery behavior. | Outdated source, wrong entity match, overconfident summary. |
| **Accessibility notes** | Required | Ensures inclusive interaction design. | Call out keyboard, screen reader, focus, contrast, timing, and motion needs. | All evidence controls reachable by keyboard. |

## 3.3 Delivery and application fields

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Field** | **Priority** | **Why it exists** | **Authoring guidance** | **Mini example** |
| **Technical dependencies** | Required | Connects the pattern to delivery reality. | List services, models, APIs, events, permissions, or instrumentation dependencies. | Retrieval service, citation renderer, policy service. |
| **Metrics** | Required | Defines how success will be measured. | Mix quality, behavior, and operational measures. | Task completion, correction rate, latency. |
| **Example scenarios** | Required | Shows the pattern in context. | Include two to three scenarios with distinct contexts. | Advisor meeting prep; compliance review. |
| **Variants** | Optional but preferred | Records meaningful form changes. | Only include variants that change behavior, scope, or constraints. | Inline variant, sidebar variant. |

# 4. Authoring rules by field

## Pattern name

Use the interaction pattern as the noun, not the product feature, project, or team name. Prefer names that would still make sense if the pattern moved to another surface or product.

## Purpose

Write one to three sentences. Explain the user problem the pattern solves and the result it should produce. Avoid visual description here.

## When to use

State the conditions that justify the pattern. Good guidance usually combines user intent, context, and system readiness.

## When not to use

Be explicit. This section is critical for keeping patterns distinct and avoiding library bloat.

## Inputs required

List only the information without which the pattern cannot work. Separate hard requirements from nice-to-have enrichment.

## Outputs

Describe both the user-visible output and any system-side output if that matters to downstream flows.

## UI anatomy

Describe the internal structure in reading order. Name regions, controls, evidence modules, actions, and boundaries.

## States

Document the lifecycle, not just the happy path. Users need clarity when the system is loading, wrong, blocked, or uncertain [4].

## Trust requirements

Be specific about evidence, permissions, disclaimers, review, reversibility, or audit requirements. This is where governance becomes actionable [2][3].

## Failure modes

Name the likely breakdowns and the designed recovery. Do not stop at saying the pattern can be wrong.

## Accessibility notes

Treat accessibility as part of the pattern, not as a QA afterthought. Cover keyboard use, focus order, semantics, motion, and understandable feedback [1].

## Technical dependencies

Record the minimum services and system conditions needed to make the pattern real. This reduces handoff ambiguity.

## Metrics

Use a balanced set: user outcome, trust signal, and system performance. Avoid vanity metrics that say little about pattern quality.

## Example scenarios

Use concrete, distinct contexts. Scenarios should reveal why the pattern exists, not just restate the definition.

## Variants

Only record variants that materially change the behavior, scope, or trust model of the pattern.

# 5. Master pattern page template

Teams can copy the structure below directly into the library and fill it pattern by pattern. Replace the bracketed prompts with final content.

|  |
| --- |
| **Pattern name:** [Short noun phrase that names the interaction pattern]  **Purpose:** [One concise paragraph: what user need this pattern serves and what outcome it should create]  **When to use:** [Three to five bullets describing the conditions that make this pattern appropriate]  **When not to use:** [Three to five bullets describing where another pattern is better or where this pattern should be avoided]  **Inputs required:** [List the minimum context, signals, permissions, records, model outputs, or user inputs required]  **Outputs:** [Describe the user-visible output and any relevant system-side output]  **UI anatomy:** [Name the internal regions of the pattern in reading order. Example: summary, evidence area, controls, follow-up actions]  **States:** [Document default, loading, success, low-confidence, partial-result, error, permission-blocked, and empty states as applicable]  **Trust requirements:** [Specify evidence display, disclosure, permissions, editability, reviewability, approval, reversibility, or audit expectations]  **Failure modes:** [List the most likely ways the pattern can fail, the user harm they create, and the recovery behavior]  **Accessibility notes:** [Document keyboard behavior, focus order, screen-reader labeling, motion expectations, contrast, timing, and understandable messaging]  **Technical dependencies:** [List services, APIs, model calls, retrieval layers, policy engines, event streams, and instrumentation dependencies]  **Metrics:** [List user outcome metrics, trust metrics, operational metrics, and guardrail metrics]  **Example scenarios:** [Provide two to three realistic scenarios that show how the pattern behaves in different contexts]  **Variants:** [Record only variants that materially alter scope, behavior, or constraints. Mark 'None' if no meaningful variants exist] |

## 5.1 Recommended page order

• Overview: Pattern name, purpose, when to use, when not to use.

• Core mechanics: Inputs required, outputs, UI anatomy, states.

• Control layer: Trust requirements, failure modes, accessibility notes.

• Delivery layer: Technical dependencies, metrics.

• Application layer: Example scenarios, variants.

## 5.2 Required versus optional fields

Everything except variants is required by default. Variants remain optional because not every pattern has a meaningful alternate form. If a team wants an even lighter authoring pass during early exploration, it can use a two-level model:

|  |  |  |
| --- | --- | --- |
| **Level** | **Includes** | **Use when** |
| **Level 1 - Core page** | All required fields except detailed variants. | Exploration, alignment, and first-pass documentation. |
| **Level 2 - Full page** | Core page plus variants and richer scenario detail. | Patterns that are approved for the main library. |

# 6. Lightweight authoring model for scale

A pattern library fails when every entry becomes a mini white paper. The template should be comprehensive, but authors should not feel forced to write long prose for every field. The correct bias is concise and specific. A strong pattern page is short enough to scan, but complete enough to support design, review, and implementation.

• Use one paragraph for purpose.

• Use bullets for use conditions, non-use conditions, and failure modes.

• Keep input and output lists crisp; do not smuggle scenario detail into them.

• Document only the states that change user expectations, risk, or system control.

• Write metrics as a shortlist, not a dashboard.

|  |
| --- |
| **Practical rule** If a field takes more than a few minutes to write, the pattern may be underspecified, overloaded, or described at the wrong level of abstraction. |

# 7. Review checklist

|  |  |
| --- | --- |
| **Check** | **Pass condition** |
| **Naming clarity** | The pattern name is reusable outside one product or feature. |
| **Scope clarity** | When to use and when not to use do not overlap or contradict. |
| **Context sufficiency** | Inputs required are concrete enough to make the pattern executable. |
| **State completeness** | The page covers normal, uncertain, and failure conditions. |
| **Trust realism** | Trust requirements reflect the autonomy and risk of the pattern [2][3]. |
| **Accessibility coverage** | Keyboard, focus, semantics, feedback, and motion have been considered [1]. |
| **Delivery realism** | Technical dependencies are real system dependencies, not generic wishes. |
| **Measurement quality** | Metrics include at least one outcome metric and one guardrail or trust metric [7][8]. |

# 8. Conclusion

This master page is designed to become the default shape of the pattern library. It gives every pattern the same backbone, making the library easier to scan, easier to review, and easier to extend. It also protects the quality of the library by forcing teams to document the elements that enterprise AI products often ignore until too late: trust, failure, accessibility, dependency reality, and measurable outcomes.

Once adopted, this template should remain stable. Teams can refine the wording or examples over time, but the page structure itself should change rarely so that the library stays coherent as it grows.

# References

[1] W3C. Web Content Accessibility Guidelines (WCAG) 2.2.

[2] NIST. AI Risk Management Framework (AI RMF 1.0).

[3] NIST. Artificial Intelligence Risk Management Framework: Generative AI Profile (NIST AI 600-1).

[4] Microsoft Research. Guidelines for Human-AI Interaction.

[5] Google Material Design 3. Interaction states and design tokens guidance.

[6] IBM Carbon Design System. Form and text-input usage guidance, including states and read-only behavior.

[7] OpenTelemetry. Traces documentation.

[8] OpenTelemetry. Metrics and logs specifications.
