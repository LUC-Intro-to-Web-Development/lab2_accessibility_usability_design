# Lab 3: Audit and Improve the MPLS Dog Boarding Site

Accessibility, Usability, and Great Design

## Directions

You have the MPLS Dog Boarding site from the last lab. It has a grid layout, flexbox cards, a logo, and a background image. It also has a new Services page. It looks finished, but it has real problems for real people. In this lab you act as a designer and reviewer. You find the problems, name them using the language from class, fix them, and prove the fixes worked.

You are free to use AI for the HTML, CSS, and JavaScript. The grade is not about who typed the code. The grade is about whether you can **observe** a problem, **diagnose** it with the right principle, and **improve** it with a change you can explain and verify.

You will work in the same repository. Pull the new starter files first.

## What you will practice

This lab follows the Interface Design slides: https://instructorc.github.io/site/slides/webdev/interface_design.html

| Lens | Ideas from the slides you will apply |
|---|---|
| Access | POUR (Perceivable, Operable, Understandable, Robust), WCAG 2.2 Level A and AA, Section 508, color contrast ratios, semantic HTML before ARIA |
| Usability | Nielsen's 10 heuristics, Observe, Diagnose, Improve, the mini usability review (Task, Evidence, Heuristic) |
| Design | Purpose, hierarchy, consistency, focus, responsive layout, the design checklist (before styling, while designing, before shipping, after shipping) |
| AI in your editor | Giving an AI tool project context, writing a prompt with acceptance criteria, reviewing a diff, and checking the result |

## Files in this repository

| File | Status |
|---|---|
| `home.html`, `styles.css` | Given. You improve them in Parts 2 and 5 |
| `services.html`, `services.css`, `services.js` | Given. You review and improve them in Part 3 |
| `book.html`, `booking.js` | You create these with AI in Part 4 |
| `img/` | Given. Includes the logo, the dog photo, and `paw.svg` |
| `docs/ai-setup.md` | Guide for Part 4 |
| `docs/ai-context-template.md` | Template for Part 4 |
| `docs/booking-requirements.md` | Acceptance criteria for Part 4 |
| `AUDIT.md`, `AI_LOG.md`, `REFLECTION.md` | Templates you fill in |

Keep the file names above so the pages work on GitHub Pages. If the logo or background image does not load when you open `home.html`, check the file names inside `img/` and fix the path in your first commit.

## Business facts to use

Use these facts whenever you need to fill in missing content, so every page in the class is consistent.

| Item | Use this |
|---|---|
| Business name | MPLS Dog Boarding |
| Monday to Friday | 7:00 am to 6:00 pm |
| Saturday | 8:00 am to 4:00 pm |
| Sunday | Closed |
| Weekly boarding | $425 for 7 days (24 hours from drop off time) |
| Daily rate | $75 per day (24 hours from drop off time) |
| Phone | 612 555 0142 |
| Address | 123 Example Street, Minneapolis, MN 55401 |

## Rules for using AI

AI is expected here. These rules keep the learning in the lab.

1. Keep `AI_LOG.md` up to date. Record at least 6 important prompts, a short summary of what the AI returned, and what you did with it (kept, changed, or rejected, and why).
2. Do not keep AI output you cannot explain. Your reflection asks about specific changes.
3. AI often gets accessibility wrong. It may add ARIA that is not needed, pick colors that fail contrast, or hide focus outlines. Check its work with the tools in Part 1 and Part 5.
4. Include at least one example where the AI was wrong or unhelpful, and how you caught it.

## Steps

### Part 0: Set up (git)

1. Pull the latest starter files into your repository using the git workflow you already know.
2. Put your name, course, and term in a comment at the top of `home.html`.
3. Open `home.html` and `services.html` in the browser from your own folder. Confirm both load. Make your first commit.

Commit often. Your remote repository needs **at least 8 commits** that show your progress. Use clear messages such as `Fix heading order` or `Add visible focus styles`.

### Part 1: Observe and diagnose (baseline audit of home.html)

Before you change anything, record how the home page performs today. Save results in `AUDIT.md` under **Baseline**.

4. Run these checks:
   - **Lighthouse** accessibility score (Chrome DevTools, Lighthouse tab). Record the score and the failed audits.
   - **WAVE** (wave.webaim.org or the browser extension). Record the number of errors, contrast errors, and alerts.
   - **HTML validator** at validator.w3.org/nu. Record the number of errors.
   - **Keyboard test.** Put the mouse away. Use Tab, Shift+Tab, Enter, and Space. Can you reach everything? Can you always see where focus is? Does the tab order make sense?
   - **Zoom and resize test.** Zoom the browser to 200% and then narrow the window to about 320px wide. Does text get cut off? Does anything need sideways scrolling?
   - **Contrast test.** Check at least 3 text and background pairs with a contrast checker such as the WebAIM Contrast Checker. Record the ratios.
5. Find at least **8 distinct problems** on `home.html`. For each one, add a row to the table in `AUDIT.md`:

| # | What I saw (evidence) | Tool or test that showed it | POUR principle | WCAG idea | Severity | Planned fix |
|---|---|---|---|---|---|---|

Your table must include problems from **at least three** of the four POUR principles.

### Part 2: Fix access on home.html

Now improve the home page. Ask AI for help as much as you like, then check the result yourself with the same tools.

6. **Document basics.** Make sure the page has a correct language, a clear and unique title, a viewport meta tag, a description meta tag, and valid markup. Fix every error the HTML validator reports.
7. **Semantic structure.** Use native elements for what they mean: `header`, `nav`, `main`, `footer`, `section`, headings in a logical order, real lists, and real tables where the data is a table. There should be exactly one `h1`. Do not use a heading just to make text bigger. Keep the page working after you change element names.
8. **Text alternatives.** Give each image the right alt text. Informative images need text that says what a visitor needs to know. Purely decorative images need empty alt text so they are skipped.
9. **Color and contrast.** All normal text must meet at least **4.5:1** contrast. Large text must meet **3:1**. Buttons, form field borders, and focus indicators must meet **3:1** against their neighbors. Text over the dog photo needs special attention. Never use color as the only way to show meaning.
10. **Keyboard and focus.** Everything interactive must work with the keyboard and must show a clear focus indicator. Use real links and buttons for things that act like links and buttons. Remove tab order tricks. Add a **skip to main content** link at the top of the page that becomes visible when focused.
11. **Flexible layout.** Fixed heights and widths hide content. Make sure all text is readable and nothing is cut off at 200% zoom and at 320px width, with no sideways scrolling.
12. **Content that makes sense.** Hours, prices, and contact information must be complete and understandable. Use the business facts above. Say clearly when the business is closed, using text. Make link text meaningful on its own.
13. **ARIA only where needed.** Look for ARIA attributes that already exist in the page. Remove any that are wrong or unnecessary. If you keep or add any ARIA attribute, add a note in `AUDIT.md` explaining why a native HTML element could not do the job. Using zero ARIA is a fine answer.

### Part 3: Usability review of services.html (Task, Evidence, Heuristic)

You do not need another person for this part. You will act as the evaluator and walk through the page yourself, the way a heuristic evaluation works. Do the tasks with the mouse first, then again with only the keyboard.

14. Open `services.html` and complete these three tasks. Write down exactly what happens at each step.
    - **Task A:** Estimate the cost for a large dog for boarding and grooming.
    - **Task B:** Find out if a stay from December 24, 2026 to December 26, 2026 is possible.
    - **Task C:** You added Training by mistake. Remove only Training from your estimate.
15. In `AUDIT.md`, under **Usability review**, record at least **6 findings** that use at least **5 different** Nielsen heuristics. Use the format from the slides:
    - **Task:** the goal and what success looks like
    - **Evidence:** what actually happened
    - **Heuristic:** the principle that explains it
    - **Change:** the smallest change you can test

    Then answer the design checklist for this page in two or three sentences: Who is using this? What is the primary action? What on the page competes with it?
16. Redesign `services.html`, `services.css`, and `services.js`. Fix at least **5** of your findings. Your final page must have one clear primary action, related items grouped together, plain language labels, clear status messages, helpful error messages next to the problem, a way to remove a single item, and protection against wiping out all your choices by mistake. The page must still pass your access checks from Part 1.
17. Repeat Tasks A, B, and C on your improved page. In `AUDIT.md`, record a short **Retest** table with the result before and after for each task.

### Part 4: Build the booking form with AI in your editor

This part teaches you to work with an AI tool that can see your project files. There is no server yet. In the next module you will start a Node.js project and connect the form to it, so build the form to be ready for that.

Read `docs/ai-setup.md` first. It explains each setup step.

**Set up your AI workspace**

- **A. Choose and open your tool.** Use an AI tool inside your editor or terminal that can read your project (for example GitHub Copilot in VS Code, Cursor, or Claude Code). Record the tool in `AI_LOG.md`. Confirm it can see your project by asking it to list the files and what each does. Correct it if it is wrong.
- **B. Give it project context.** Copy `docs/ai-context-template.md`, fill it in for this project, and save it in the file name your tool reads. Record the file name in `AI_LOG.md`.
- **C. Write your first prompt.** Use the Goal, Context, Constraints, Acceptance criteria, Output pattern from the setup guide. Paste requirements 18 to 22 below into your prompt as the acceptance criteria. Ask for two new files, `book.html` and `booking.js`. The form styles belong in `styles.css`.
- **D. Commit the AI draft before you edit it.** Use the message `AI draft: booking form`. This lets you and your instructor see what the AI wrote and what you changed.

**Requirements the form must meet**

18. Add a **Request a Stay** page with a form. Include fields for owner name, email, dog name, drop off date, and pick up date. The page uses the same header, navigation, skip link, and footer as your other pages.
19. Every field needs a visible, connected `<label>`. Do not use placeholder text as the only label. Use the right input types and `required` where it makes sense.
20. **Error prevention and recovery.** Show clear messages next to the problem field in plain language, such as "Enter an email like name@example.com". Do not rely on red color alone. Catch a pick up date before the drop off date, and a drop off date in the past, and explain what to fix.
21. **Visibility of system status.** After a valid submit, show a visible message such as "Request received. We will reply within one business day." The message must be exposed to assistive technology without moving focus away. To check this without a screen reader, open the browser DevTools and confirm the message container has `role="status"` (or `aria-live="polite"`) in the page before the message is added. Simulate success with a small script. Add a code comment where the real Node.js request will go later.
22. The form needs one clear **primary action** button with a specific label (not just "Submit").

**Review and verify the AI work**

- **E. Review the diff.** Use the review checklist in the setup guide. Find and fix at least **3** problems, either by hand or with a follow up prompt. Write each one in `AI_LOG.md`.
- **F. Verify.** Run the HTML validator, Lighthouse, and the keyboard test on `book.html`. Record results in `AUDIT.md`.
- **G. Commit the reviewed version.** Use the message `Review and fix booking form`.

### Part 5: Design and verify

23. **Hierarchy and focus.** The home page should tell a visitor what this business is and what to do next within a few seconds. Make the primary action (request a stay) the most noticeable thing after the logo and heading. Use spacing, size, and weight to show what matters most. Remove anything that competes for attention without helping.
24. **Consistency.** Cards, buttons, headings, and spacing look and behave the same on all three pages. Define colors, spacing, and font sizes once in CSS custom properties at the top of `styles.css` and use them throughout. Your header, navigation, and footer match on every page.
25. **Responsive.** Test all three pages at about 320px, 768px, and 1280px wide. Keep the character of the site (logo, dog photo, friendly tone).
26. **Re run your checks.** Repeat the Part 1 checks on `home.html` and add an **After** table to `AUDIT.md`:

| Check | Before | After |
|---|---|---|
| Lighthouse accessibility score | | |
| WAVE errors | | |
| WAVE contrast errors | | |
| HTML validator errors | | |
| Keyboard test | | |
| 200% zoom and 320px test | | |

27. **Before shipping checklist.** In `AUDIT.md`, copy and check off this list from the slides for all three pages, with one sentence of proof for each item:
    - Keyboard access works everywhere
    - Focus is always visible
    - Contrast passes
    - Layout works on small screens
    - Feedback is meaningful (errors and success)

Tools can miss things. A perfect Lighthouse score does not prove a page is usable. Explain in `AUDIT.md` at least one thing you had to check by hand that the tools did not catch.

### Part 6: Reflect

28. Fill in `REFLECTION.md`, about 400 to 500 words, answering:
    - Which problem was hardest to notice, and why?
    - Pick one change from your final work and explain, in your own words, which POUR principle or heuristic it supports and why the old version failed.
    - Describe one moment where the AI gave you something wrong, risky, or unhelpful. How did you catch it?
    - How did your project context file and your prompt pattern change what the AI gave you?
    - Section 508 and WCAG are standards. Why is testing with real people and different tools still needed?
    - What is one question you now ask before you style any page?

### Part 7: Publish and submit

29. Publish your site with GitHub Pages and visit the live link. Your home page is `home.html`, so the address ends with `/home.html`. Check all three pages on the live site, including with your browser's device mode.
30. Make sure your final work is pushed, with at least 8 commits showing your progress.
31. In Sakai, submit the link to your repository and the link to your live site by the due date. Make sure you receive confirmation that it was submitted. Submission video instructions are here: https://instructorc.github.io/site/slides/presentation/video/github_upload.mp4

## Grading (15 points)

| Area | Points | What earns full credit |
|---|---|---|
| Baseline audit and after results (Parts 1 and 5) | 3 | At least 8 clear problems with real evidence, correct POUR and WCAG labels, honest before and after numbers, a before shipping checklist with proof, and one thing checked by hand |
| Access fixes on home.html (Part 2) | 4 | Valid semantic HTML, alt text, contrast, keyboard and focus, skip link, flexible layout, complete content, ARIA only where justified |
| Usability review and redesign of services.html (Part 3) | 3 | At least 6 findings across 5 heuristics, 5 fixes applied, one primary action, clear status and error messages, retest table |
| Booking form built with AI (Part 4) | 3 | Requirements 18 to 22 met, AI draft and reviewed versions both committed, at least 3 problems found and fixed, verification results recorded |
| AI log and reflection | 1 | Honest log with at least 6 prompts and a real AI mistake, reflection shows understanding and not copied output |
| Git and publishing | 1 | At least 8 meaningful commits, live GitHub Pages site, submission confirmed |

## Resources

- Interface Design slides: https://instructorc.github.io/site/slides/webdev/interface_design.html
- W3C Web Content Accessibility Guidelines (WCAG): https://www.w3.org/WAI/standards-guidelines/wcag/
- Section508.gov Laws and Policies: https://www.section508.gov/manage/laws-and-policies/
- Nielsen Norman Group, 10 Usability Heuristics: https://www.nngroup.com/articles/ten-usability-heuristics/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- WAVE accessibility tool: https://wave.webaim.org/
- W3C Markup Validator: https://validator.w3.org/nu/
- Your earlier layout resources on Flexbox and CSS Grid are still useful if you want to change the layout.
