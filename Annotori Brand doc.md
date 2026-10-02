# ANNOTORI LABS BRAND DOCUMENT

## 1\. Overview & Identity

* **Name:** Annotori Labs  
* **Short Name:** Annotori  
* **Tagline:** Managed data annotation for AI teams  
* **Category:** Managed data annotation agency  
* **Founded:** 2026  
* **LinkedIn:** [https\://www\.linkedin.com/company/annotorilabs](https://www.linkedin.com/company/annotorilabs)

**One sentence description:** Annotori Labs is a managed data annotation agency where a small, dedicated, calibrated team labels images and text for AI teams, and clients deal with one accountable person who owns quality.

* **What we are:** A managed service. A team plus a process, delivered through tools like CVAT, Label Studio and Labelbox or inside the client's approved platform.  
* **What we are not:** A software platform, a crowd marketplace, a dataset seller, or a creative studio. Never imply we have built an annotation tool.

---

## 2\. Audience

Primary buyers: ML engineers, data leads, research teams and AI startups, mostly outside Nigeria, who need labeled data but do not want to hire, train and supervise annotators.

What they worry about, in order:

1. Will the labels be accurate and consistent?  
2. Will someone be accountable when something goes wrong?  
3. Is my data safe?  
4. Will it arrive in the format my pipeline needs?  
5. Can I try you with low risk?

Every section of the site should answer one of these.

---

## 3\. Brand Personality & Voice

* **Three words:** Precise. Accountable. Transparent.  
* **Tone:** Calm, direct, specific. Write like a sharp operations lead, not a marketer. Short sentences. Concrete details over adjectives. State limits honestly.

### Voice Rules

* Lead with what the client gets, then how.  
* Prefer specific nouns (taxonomy, edge cases, export format, calibration) over abstractions.  
* No hype words. Never use: revolutionary, cutting edge, AI powered, seamless, world class, best in class, leverage, synergy, unlock, game changing, next generation.  
* Do not use hyphens or dashes as punctuation in site copy. Use commas, full stops or rewrite the sentence.  
* Do not use exclamation marks.  
* Write "labeled" (American spelling) and "annotation team".  
* Use "we" for the company and "you" for the client.

### Before and After Examples

* **Weak:** We deliver world class AI data solutions \-\> **Strong:** A dedicated team labels your images and text, and one person is accountable for quality.  
* **Weak:** Unmatched accuracy \-\> **Strong:** Every annotator must pass a calibration test before touching your data.  
* **Weak:** Seamless integration \-\> **Strong:** We deliver in COCO JSON, YOLO, Pascal VOC or standard JSON.

---

## 4\. Claims Policy

### Approved Proof Points (Backed by SOP)

* Every annotator must reach a minimum 95% match on a gold standard calibration set before working on client data.  
* Every batch goes through annotator self review, a lead sampled review and a full review of flagged items.  
* Annotators flag unclear items instead of guessing, and clients receive consolidated questions daily.  
* Batches that miss the quality bar are sent back to the original annotator for full correction.  
* One point of contact: the Technical QA Lead.  
* All team members work under NDA, inside client approved platforms.  
* Deliverables are validated before handoff (label mapping checks, format validation).  
* New clients can start with a paid pilot batch.

### Banned Until Proven (Do Not Put on the Site)

* Any accuracy percentage guarantee (for example 98%). Only add after the rejection threshold in the SOP matches the promise and a pilot gives a measured result.  
* Any team size number. Say "a dedicated team".  
* Client names, client logos, testimonials, case studies, certifications (ISO and similar), awards.  
* Volume claims (items labeled, projects delivered), turnaround time promises, and prices.  
* Language implying we own a proprietary platform.

*Note: When real proof exists (a demo project, a measured accuracy figure, a testimonial), add it in the reserved proof slot described in section 10\.*

---

## 5\. Logo

* **Mark:** A bold angular frame (an arch or bracket shape in two tones, extruded) with a small solid orange square beneath its right foot. Story: a frame with one marked point, like a keypoint on an annotated item. Do not describe it as the letter A.  
* **Wordmark:** ANNOTORI in League Spartan Bold, uppercase, followed by "Labs" in a lighter weight in Mist Gray. Tagline line beneath in Poppins Regular.  
* **Files to Use:**  
  * `assets/logo_reversed.svg` for dark backgrounds (white and light gray mark, orange square)  
  * `assets/logo_light.svg` for light backgrounds (Ink Navy and Mid Slate mark, orange square)  
  * `assets/icon_reversed.svg` and `assets/icon_light.svg` for the mark alone  
  * `assets/favicon.png`

### Rules

* The orange square is the same in every version. It never changes color.  
* Clear space around the logo: at least the width of the orange square on every side.  
* Minimum size: 28px tall for the full lockup in the nav, 24px for the icon alone.  
* Never stretch, rotate, outline, add shadows or gradients, or recolor the mark.  
* Never place the light logo on a dark background or the reversed logo on a light background.  
* Use the real SVG files. Do not redraw the logo in code.

---

## 6\. Color Palette

| Color Name | Hex Code | Role |
| :---- | :---- | :---- |
| **Ink Navy** | `#082032` | Main dark background, text on light |
| **Deep Slate** | `#2C394B` | Cards and alternate dark sections, body text on light |
| **Mid Slate** | `#334756` | Borders and dividers on dark, secondary text on light |
| **Mist Gray** | `#D2D2D2` | Body text on dark, borders on light |
| **Signal Orange** | `#FF4C29` | The single accent: primary buttons, small highlights |
| **Orange Hover** | `#E5401F` | Hover state for orange buttons only |
| **Paper** | `#F6F7F9` | Light section background |
| **White** | `#FFFFFF` | Headlines on dark, cards on light |

### Usage Rules

* Orange covers roughly 5 percent of any screen. One highlight word per section at most.  
* Text on orange buttons is Ink Navy, never white.  
* Orange on Paper or White fails contrast for small text. On light backgrounds, use orange for buttons, shapes and thin rules only, never for body text.  
* Flat colors only. No gradients, shadows, glows or blurs.  
* Dark sections: headlines White, body Mist Gray, borders Mid Slate.  
* Light sections: headlines Ink Navy, body Deep Slate, secondary text Mid Slate, borders Mist Gray.

:root {

  \--ink\_navy: \#082032;

  \--deep\_slate: \#2C394B;

  \--mid\_slate: \#334756;

  \--mist\_gray: \#D2D2D2;

  \--signal\_orange: \#FF4C29;

  \--orange\_hover: \#E5401F;

  \--paper: \#F6F7F9;

  \--white: \#FFFFFF;

}

---

## 7\. Typography

* **Fonts:** Google Fonts, display swap. League Spartan (Bold 700\) for headlines and the wordmark. Poppins (Regular 400, Medium 500\) for everything else. No third font. Fallbacks: Arial, sans-serif.

### Style Guide

| Element | Font | Desktop Size / Line Height | Mobile Size / Line Height |
| :---- | :---- | :---- | :---- |
| **H1** | League Spartan Bold | 60 / 64 | 38 / 42 |
| **H2** | League Spartan Bold | 40 / 46 | 30 / 36 |
| **H3** | League Spartan Bold | 24 / 30 | 20 / 26 |
| **Body** | Poppins Regular | 17 / 28 | 16 / 26 |
| **Small** | Poppins Regular | 14 / 22 | 14 / 22 |
| **Eyebrow label** | Poppins Medium, uppercase, 0.08em tracking | 14 / 20 | 14 / 20 |
| **Button** | Poppins Medium | 16 | 16 |

### Rules

* Nothing below 14px anywhere. Body copy never below 16px.  
* Headlines in sentence case, not title case.  
* Max line length about 70 characters for body text. Do not use a monospace font.

---

## 8\. Layout and Components

### Grid and Spacing

* Container: max width 1120px, centered, 24px side padding on mobile, 40px on desktop. One shared left edge for every section, including nav and footer.  
* Spacing scale in multiples of 8px. Section padding: 96px vertical on desktop, 64px on mobile.  
* Mobile first. Stack columns below 768px.  
* Section rhythm (top to bottom): navy, paper, white, paper, navy, navy, paper, navy (see section 10).

### Buttons

* **Primary:** Signal Orange background, Ink Navy text, Poppins Medium 16, height 52px, radius 4px, hover Orange Hover.  
* **Secondary:** Transparent, 1.5px border (White on dark, Ink Navy on light), same size, hover fills subtly with Deep Slate (dark) or Paper (light).  
* One primary button per view where possible.

### Cards

* **On light:** White background, 1px Mist Gray border, radius 6px, 32px padding.  
* **On dark:** Deep Slate background, 1px Mid Slate border, radius 6px, 32px padding.  
* No shadows. Hover: border color change only.  
* **Motion:** Subtle only. Fade or slight upward reveal on scroll, button hover states. Respect prefers-reduced-motion.

### Accessibility and Performance

* Contrast at least 4.5 to 1 for text. Visible keyboard focus on every interactive element.  
* Semantic HTML, one H1, headings in order, alt text on images, labels on form fields.  
* Total page weight under 300KB excluding fonts. No video, no large images.

---

## 9\. Voice Applied: Core Copy Library

* **Meta title:** Annotori Labs | Managed data annotation for AI teams  
* **Meta description:** A dedicated, calibrated annotation team for computer vision and language data. One accountable contact and a documented QA process behind every batch.  
* **Navigation:** Services, Process, Quality, Pilot. Button: Start a pilot.

### Hero

* **Eyebrow:** MANAGED DATA ANNOTATION FOR AI TEAMS  
* **H1:** Good AI starts with better labels.  
* **Subhead:** A dedicated, calibrated annotation team for computer vision and language data. One accountable contact and a documented quality process behind every batch.  
* **Primary button:** Start a paid pilot  
* **Secondary button:** See how we work

### Proof Strip (Three items, all verified by SOP)

* **95%** | Minimum calibration score before an annotator touches your data  
* **100%** | Of flagged items reviewed by our Technical QA Lead  
* **1** | Accountable point of contact for your project

### Services

* **H2:** Built around your data.  
* **Intro:** From the exact shape of an object to the meaning inside a sentence, every project starts with your taxonomy and output requirements.  
* **Computer vision:** 2D bounding boxes, polygon segmentation, keypoint annotation, image classification, video object tracking.  
* **Language data:** Text classification, sentiment analysis, named entity recognition, RLHF preference ranking, data extraction and structuring.  
* **Line below:** We work in CVAT, Label Studio and Labelbox, or inside your approved platform, and deliver in COCO JSON, YOLO, Pascal VOC or standard JSON.

### Problem and Answer

* **H2:** Labeled data without the management overhead.  
* **You have:** Raw data and no labeling team. Annotators who need constant supervision. Quality that changes from batch to batch.  
* **We provide:** A dedicated team calibrated to your guidelines. One person accountable for quality. A documented review process on every batch.

### How it Works

* **H2:** A workflow with fewer loose ends.  
* **01 Intake:** We capture your data source, taxonomy, output format and known edge cases in writing before any work starts.  
* **02 Calibration:** Every annotator is tested against a gold standard set and must pass a strict threshold before touching your data.  
* **03 Annotation and review:** Work is split into assigned chunks. Each batch goes through self review, sampled review and a full check of flagged items.  
* **04 Delivery:** You receive your export in your required format, validated before handoff, with a short report and a summary of edge cases.

### Quality

* **H2:** Consistency you can build on.  
* **Intro:** Accuracy comes from a process, not a promise. Every dataset is guided by your taxonomy, reviewed in passes and checked by a Technical QA Lead before delivery.  
* **Calibrated to your rules:** Project guidelines and a shared gold standard keep decisions consistent across the team.  
* **Reviewed in multiple passes:** Annotator self review is followed by lead review and sampled quality checks.  
* **Flagged, never guessed:** Ambiguous items are escalated for clarification instead of being labeled on assumptions.  
* **Security line:** Every team member works under NDA, inside client approved platforms.

### Pilot

* **H2:** Start with a paid pilot.  
* **Text:** Send a sample of your data and your labeling guidelines. We scope a fixed size pilot batch, quote it within 24 hours, and deliver it with a quality report. You see exactly how we work before committing to more volume.  
* **Points:** Fixed scope and price agreed in writing before we start. Delivered in your export format. Includes a quality report and edge case notes.  
* **Button:** Request a pilot quote

### Contact

* **H2:** Tell us about your data.  
* **Fields:** Name, Work email, Annotation type (dropdown: Computer vision, Language data, Both, Not sure), Approximate data volume (optional), Project notes.  
* **Button:** Send to Annotori Labs  
* **Under button:** We reply within 24 hours.  
* **Person block:** photo, Abdulhameed Shuaibu, Technical QA Lead. "You will deal with me directly, from first message to delivery."  
* **Footer:** Reversed logo, tagline, LinkedIn link, contact email placeholder, "© 2026 Annotori Labs".

---

## 10\. Site Structure and Page Plan

**Launch:** One page, in this order:

1. Nav (Ink Navy)  
2. Hero (Ink Navy)  
3. Proof strip (Deep Slate band)  
4. Services (Paper)  
5. Problem and answer (White)  
6. How it works (Paper)  
7. Quality (Ink Navy)  
8. Reserved proof slot (Hidden until a demo project exists) (Paper)  
9. Pilot (Deep Slate)  
10. Contact (Paper)  
11. Footer (Ink Navy)  
* **Reserved proof slot format:** One case card showing project type, number of items, duration, format delivered and measured accuracy from the real demo batch. Do not build it until the data exists.  
* **Later pages (only when real content exists):** Process (detailed), Security and confidentiality, Sample work, About. Skip blog, pricing, careers and any other pages.

---

## 11\. Hard Rules Summary

* Colors, fonts and copy come only from this document.  
* Orange is the only accent and stays under about 5 percent of any screen.  
* No invented numbers, claims, names, logos, testimonials or prices.  
* No hyphens or dashes as punctuation in copy.  
* Real logo files only.  
* The contact form must deliver submissions to an inbox. A visible email and the LinkedIn link must appear in the footer.  
* Mobile first, readable text sizes, accessible contrast.

---

## 12\. Open Items (Fill Before Launch)

* Form endpoint (Formspree or similar) and the brand email address  
* Photo and name for the contact block  
* Final SVG files placed in `/assets`  
* Hosting address (free hosting address now, custom domain later) and canonical URL  
* Demo project and measured quality figure (unlocks the proof slot and any accuracy claim)  
* Pilot size and pricing approach (kept off the site until decided)  
* SOP fix: lower the batch rejection threshold so it matches any accuracy promise made publicly