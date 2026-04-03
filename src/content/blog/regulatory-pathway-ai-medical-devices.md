---
title: "The Regulatory Pathway for AI Medical Devices in the UK and EU"
author: "Marc Goldfinger"
date: 2026-02-09
summary: "A practical walkthrough of MDR, IVDR, FDA 510(k), and the EU AI Act for founders building AI-driven medical devices. What regulators need to see, and how to prepare before formal engagement begins."
tags: ["regulatory", "AI", "medtech", "CE marking", "FDA"]
featured: true
---

Regulatory approval is the point at which many AI medical device companies discover that what they have built and what regulators need to see are two different things. The science is solid. The algorithm performs well on the validation dataset. The clinical need is real. But the regulatory submission tells a different story, and the process of reconciling the two costs months and, in some cases, the fundraising window.

GoldWhite has been through this process from the inside. Our work includes leading the regulatory programme that achieved FDA clearance and CE marking for MRCP+, an AI-powered imaging platform at Perspectum, managing a cross-functional team of twenty through the submission process. It also includes launching eight CE-marked AI-driven biomarkers for oncology at Paige.AI. These were not simple regulatory exercises. They required integrating clinical evidence, software validation, post-market surveillance planning, and commercial strategy into coherent submissions that regulators on two continents would accept. This article sets out what that experience has taught us.

## Why AI medical devices are a special regulatory case

Most regulatory frameworks were designed for hardware. A hip implant, a blood pressure monitor, a surgical instrument. The risk profile is largely fixed at the point of manufacture. AI changes this in ways that regulators are still working through. An AI algorithm can change its behaviour as it is exposed to new data. Its performance can degrade when applied to patient populations that differ from its training set. Its outputs can be difficult to explain, audit, or challenge. These characteristics create regulatory challenges that do not have clean answers in frameworks written before machine learning was clinically relevant.

Both the EU and the UK have updated their approaches to address this, and the FDA has published its own guidance on AI and machine learning-based software as a medical device. Understanding the differences between these frameworks, and where they align, is the starting point for any regulatory strategy for an AI medical device.

## The EU framework: MDR, IVDR, and the AI Act

In the EU, the classification of an AI device determines which framework applies and how demanding the pathway will be. The Medical Device Regulation (MDR) covers devices intended to diagnose, prevent, monitor, predict, treat, or alleviate disease. The In Vitro Diagnostic Regulation (IVDR) covers devices that analyse samples derived from the human body, including AI-driven diagnostic tools that process blood, tissue, or imaging biomarkers.

The IVDR is the more demanding of the two for most AI diagnostic tools, and its implementation has been one of the more disruptive regulatory events of the past decade. Under the previous IVD Directive, around 80% of IVDs were self-certified by manufacturers. Under IVDR, the majority of AI diagnostic tools fall into Class C or Class D, requiring notified body involvement and substantially more clinical evidence. If an AI device analyses patient samples to inform a clinical diagnosis, it is almost certainly subject to IVDR, and planning needs to reflect that.

The EU AI Act adds a further layer. AI systems used in medical devices that fall under MDR or IVDR are classified as high-risk AI systems under the Act, meaning additional obligations around transparency, human oversight, data governance, and technical documentation. The practical implication is that regulatory documentation needs to address both the device regulation and the AI Act requirements. These are not identical, and they are not always consistent.

Classification under MDR and IVDR determines the conformity assessment route. Class I devices can be self-certified. Class IIa, IIb, and III devices under MDR, and Class B, C, and D devices under IVDR, require a notified body. Notified body capacity has been a significant bottleneck since MDR and IVDR came into full effect, and timelines for notified body review are longer than many companies expect. Factoring twelve to eighteen months for notified body engagement into a regulatory timeline is not pessimistic. It is realistic.

## The UK framework: UKCA marking and the divergence question

Post-Brexit, the UK operates its own regulatory framework under the MHRA. CE marking is no longer accepted for new devices placed on the UK market, with some transitional arrangements that have been extended several times. UKCA marking is the UK equivalent, and the pathway broadly mirrors the EU framework in structure, though the MHRA has signalled its intention to develop a more innovation-friendly approach in some areas.

The practical challenge for most AI medical device companies is deciding whether to pursue CE marking, UKCA marking, or both simultaneously. The UK market alone is rarely sufficient to justify the full cost of a regulatory programme, so most companies targeting European markets will pursue CE marking as the primary pathway. However, if the UK is a significant market or if NHS adoption is part of the commercial strategy, UKCA marking needs to be in the plan. Running both programmes simultaneously is manageable with the right preparation, but it requires careful coordination to avoid producing divergent technical files that create problems later.

The MHRA has also been developing its own framework for software and AI as a medical device, and its guidance continues to evolve. Companies building AI medical devices targeting the UK market need to stay current with MHRA publications throughout the development and regulatory process.

## The FDA pathway: 510(k), De Novo, and the SaMD framework

In the US, AI medical devices are regulated as Software as a Medical Device (SaMD) under the FDA's existing device framework, with additional guidance specific to AI and machine learning. The FDA has been more proactive than either the EU or the UK in developing AI-specific guidance, publishing its action plan for AI/ML-based SaMD and a series of discussion papers that signal where the framework is heading.

The two most common pathways for AI medical devices are 510(k) clearance and De Novo classification. The 510(k) pathway requires demonstrating substantial equivalence to a legally marketed predicate device. Where a predicate exists, this is typically the faster and less costly route. The De Novo pathway is used when no predicate exists, and it establishes a new device classification. It is more demanding but can be the right strategic choice when an AI device is genuinely novel and the company wishes to establish a classification that competitors will then need to reference, creating a first-mover regulatory advantage.

The FDA's predetermined change control plan (PCCP) is one of the most important recent developments for AI medical devices. It allows manufacturers to specify in advance the types of algorithm modifications they intend to make and the conditions under which those changes can be implemented without a new submission. For AI devices expected to learn and improve over time, a well-constructed PCCP is not a regulatory nicety. It is a fundamental part of the product architecture.

## The clinical evidence question

Across all three frameworks, clinical evidence is where AI medical device submissions most commonly fall short. Regulators require evidence that the device performs as intended in the clinical population it is designed to serve. For AI devices, this means more than strong performance on a held-out test set from the training distribution.

Three distinct categories of evidence are required. Clinical validity: that the device's outputs are meaningfully associated with the clinical condition they are designed to detect or predict. Clinical utility: that using the device changes clinical decisions in ways that benefit patients. And generalisability: that the device performs consistently across the demographic, geographic, and clinical variation present in the intended use population.

The gap between algorithmic performance and clinical evidence is where the most preventable regulatory delays occur. Companies that invest in their clinical evidence strategy early, designing studies that simultaneously satisfy regulatory requirements and generate commercially useful data, move through the regulatory process significantly faster than those that treat clinical evidence as an afterthought.

## What to do before engaging a notified body or the FDA

The most valuable preparatory step before beginning formal regulatory engagement is a thorough gap analysis against the relevant framework. Technical documentation should be mapped against MDR Annex I essential requirements, IVDR equivalents, or FDA guidance as appropriate. Gaps should be identified and a plan built to close them before regulatory engagement begins.

A pre-submission meeting with the FDA, or early engagement with an intended notified body, is worth investing in as early as possible. These conversations are confidential, they are on the record, and they routinely surface issues that would otherwise cost months of misdirected effort. At GoldWhite, we advise clients to use these channels before committing significant resources to their regulatory programme. The feedback consistently leads to better decisions and faster submissions.

The broader principle is this: the regulatory pathway should be treated as a commercial asset, not a compliance obligation. Regulatory strategy directly affects the fundraising narrative, partnership conversations, product roadmap, and timeline to revenue. Companies that integrate regulatory thinking into their strategic planning from the beginning build stronger businesses, not just stronger submissions.

*Marc Goldfinger is Director of Life Sciences and Health-Tech Strategy at GoldWhite. He holds a PhD in Clinical Neuroscience from Imperial College London, has led regulatory programmes achieving FDA clearance and CE marking for AI medical devices, and is a named inventor on a US patent for AI-driven biomarker detection.*
