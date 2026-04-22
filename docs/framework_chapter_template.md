**Enterprise AI Framework  
Standard Chapter Template**

*Manual / textbook chapter structure for Jobs, Pattern Families, Modalities, Surfaces, Trust, Autonomy, and Context*

|  |
| --- |
| Use this document as the canonical template for every framework chapter. It is designed to make each layer teachable, consistent, workshop-ready, and grounded in real enterprise product design. |

# How to use this template

* Keep the chapter order consistent across all framework topics so the book reads as one system rather than a collection of essays.
* Write each chapter as a manual: define the layer, set its boundary, show how it connects to the rest of the framework, teach how to apply it, and pressure-test it with examples and failure modes.
* Use private banking as a translation layer, not as the only framing. The chapter should remain general enough for enterprise AI while becoming sharper through domain-specific examples.

# Optional front-matter block for project management

|  |  |
| --- | --- |
| **Chapter** | [Fill in for this chapter] |
| **Purpose** | [Fill in for this chapter] |
| **Status** | [Fill in for this chapter] |
| **Primary audience** | [Fill in for this chapter] |
| **What is already decided** | [Fill in for this chapter] |
| **What still needs sharpening** | [Fill in for this chapter] |
| **Exhibits needed** | [Fill in for this chapter] |
| **References needed** | [Fill in for this chapter] |

# Recommended chapter order

1. Chapter purpose
2. Why this layer matters
3. Core definition
4. What belongs here / what does not
5. Relation to the other layers
6. Internal structure of the layer
7. Design principles
8. How to apply it in practice
9. Private banking translation
10. Good / better / best examples
11. Failure modes and anti-patterns
12. Evaluation checklist
13. Visuals / exhibits
14. References and citations
15. Chapter summary

# 1. Chapter title

Use a direct, durable title that names the framework layer clearly.

## Examples

* The Job Model
* The Pattern Family Model
* The Modality Model
* The Surface Model
* The Trust Model
* The Autonomy Model
* The Context Model

# 2. Chapter purpose

State what the chapter is for in one concise paragraph.

## Template

This chapter defines the [layer name] in the enterprise AI framework: what it is, why it matters, what belongs within it, how it relates to the other framework layers, and how to apply it in real product design.

# 3. Why this layer matters

Open with the big idea. This section should explain why enterprise AI systems break when this layer is vague, missing, or confused with adjacent concepts; why it matters especially beyond chat; and why designers, product managers, and engineers should care.

## Template

Enterprise AI systems fail when [layer] is vague, missing, or confused with adjacent concepts. In traditional software, teams can sometimes work around this ambiguity through fixed workflows and rigid UI. In AI systems, that ambiguity multiplies. The system becomes harder to shape, harder to trust, and harder to scale across contexts, surfaces, and levels of autonomy.

# 4. Core definition

This is the anchor of the chapter. It should include one precise definition, one simpler plain-English explanation, and one sentence on what the layer is not.

## Template

Definition: The [layer] is the part of the framework that defines [core function].  
In plain language: It answers the question, “[plain English question]”  
What it is not: It is not [adjacent concept], even though the two are often confused.

# 5. Boundary of the layer

This is where the writing becomes crisp and non-vague.

## Subsections

* 5.1 What belongs here — list the concepts that genuinely sit inside this layer.
* 5.2 What does not belong here — list the concepts that are commonly misfiled into this layer.

## Example

For Surfaces: belongs here — inline, overlay, sidebar, workspace, feed, notification. Does not belong here — chart, text, voice, summary card, assistant tone.

# 6. Relation to the other framework layers

Show how the layer connects to the rest of the system so the chapter does not read like an isolated essay.

## Required lines

* How this layer relates to Jobs
* How this layer relates to Pattern families
* How this layer relates to Modalities
* How this layer relates to Surfaces
* How this layer relates to Trust
* How this layer relates to Autonomy
* How this layer relates to Context

## Note

For the chapter that is itself about one of these topics, replace the self-reference with: “How this layer interacts with the rest of the framework.”

# 7. Internal structure of the layer

Define the actual model for the layer. Example: Jobs → job set and definitions; Pattern families → families and sub-families; Modalities → modality categories and usage logic; Trust → trust dimensions; Context → context dimensions; Autonomy → autonomy scale.

## Repeated sub-structure

* Definition
* What it is used for
* When it is strong
* What can go wrong
* Example

# 8. Design principles for this layer

Include five to eight principles. Each principle should be written as an actionable rule rather than a vague aspiration.

## Template principles

* Design [layer] before designing UI expression.
* Keep [layer] distinct from adjacent layers.
* Match [layer] to user risk, workflow complexity, and time sensitivity.
* Make [layer] visible enough to shape behavior, but not so heavy that it clutters flow.
* Design for failure, ambiguity, and recovery.

## For each principle include

* What it means
* Why it matters
* One example

# 9. How to apply this layer in practice

This is the tutorial/manual section. Teach readers how to use the concept, not just understand it.

## Recommended steps

* Step 1 — Diagnose the problem
* Step 2 — Choose the right model
* Step 3 — Map to experience design
* Step 4 — Pressure-test with trust and autonomy
* Step 5 — Validate in workflow context

# 10. Private banking translation

Use this as a domain translation layer in every chapter. It should sharpen the framework through private banking examples without turning the chapter into a domain-only artifact.

## Structure

* Why this layer matters in private banking
* Private banking examples
* Example prompt set

## Example prompt set

* How does [layer] show up in a CRM advisor dashboard?
* How does [layer] show up in an intent bar?
* How does [layer] show up in a sidebar copilot?
* How does [layer] show up in a meeting prep workspace?
* How does [layer] show up in a proactive alert feed?
* How does [layer] show up in a guided service flow?

# 11. Good, better, best examples

Include three levels of implementation quality so the work feels instructional rather than theoretical.

## Structure

* Weak example — a shallow or confused implementation.
* Better example — a functional but limited implementation.
* Strong example — a mature, AI-native implementation.

# 12. Failure modes and anti-patterns

Include four to six anti-patterns that make the chapter feel serious and honest.

## Template anti-patterns

* Mistaking [X] for [Y]
* Over-designing for ideal flows only
* Hiding critical control logic
* Treating AI output as neutral when it is context-shaped
* Applying one model across all workflows without calibration

# 13. Evaluation checklist

End the chapter with a reusable checklist readers can use in workshops and design reviews.

## Checklist questions

* Is the layer clearly defined?
* Is it distinct from adjacent layers?
* Is it mapped to actual user work?
* Is it appropriate to the workflow and risk level?
* Is it usable across surfaces and modalities?
* Is it shaped by context?
* Is it bounded by trust and governance?
* Is it calibrated to the right autonomy level?

# 14. Visuals / exhibits

Add two to four exhibit ideas to every chapter.

## Recommended exhibit types

* Framework diagram
* Comparison table
* Maturity ladder
* Good / bad example breakdown
* Workflow mapping
* Private banking application map
* Cross-layer interaction map

## Example

For Context: Exhibit 1 — Context dimensions map. Exhibit 2 — Context failure modes. Exhibit 3 — Context flow across CRM, copilot, and workflow.

# 15. References and citations

End each chapter with a references section so the framework remains intellectually grounded.

## Categories

* Foundational references — books, papers, HCI guidance, standards
* Related industry guidance — platform guidelines, enterprise design examples, governance models
* Applied references — banking workflows, regulated enterprise systems, internal domain translation

# 16. Chapter summary

Close with a short recap that reinforces the layer’s role, its importance, and the main design takeaway.

## Template

The [layer] defines [core role] in enterprise AI systems. It matters because [why]. It should be designed as [main takeaway], not treated as [common mistake]. In practice, strong [layer] design creates more usable, more trustworthy, and more contextually effective AI experiences across enterprise workflows.

# Writing balance for every chapter

## Target mix

* 30% conceptual clarity
* 30% manual/tutorial guidance
* 20% concrete enterprise examples
* 20% private banking translation

# Recommended next chapter

## Recommendation

Draft Chapter 2.1 — The Job Model first, because it anchors the rest of the framework.

# Document note

This file is intended to serve as the reusable master template for all framework-layer chapters in the AI Future OS portal project. It can be duplicated chapter by chapter and then filled with layer-specific content, exhibits, references, and domain translations.
