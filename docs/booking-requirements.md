# Booking form requirements (acceptance criteria)

Paste this list into your AI prompt as the acceptance criteria. Use it again when you review the result.

## Page

- [ ] The page is `book.html`, with its script in `booking.js` and its styles in `styles.css`.
- [ ] It has a language, a unique title, a viewport meta tag, and a description meta tag.
- [ ] It uses the same skip link, header, navigation, and footer as the other pages.
- [ ] It has one `h1` ("Request a stay") and valid HTML.

## Requirement 18: fields

- [ ] Owner name
- [ ] Email
- [ ] Dog name
- [ ] Drop off date
- [ ] Pick up date

## Requirement 19: labels and inputs

- [ ] Every field has a visible `<label>` connected to its input with `for` and `id`.
- [ ] Placeholder text is not the only label.
- [ ] Input types match the data (`email`, `date`, `text`).
- [ ] Required fields use `required` and are also marked as required in text, not only with color.
- [ ] Helpful `autocomplete` values are used where they apply.

## Requirement 20: error prevention and recovery

- [ ] The form prevents obvious mistakes (for example, a drop off date in the past cannot be picked).
- [ ] An error message appears next to the problem field, in plain language, and says how to fix it.
- [ ] Errors are not shown by red color alone. They include text such as "Error:".
- [ ] The invalid field is connected to its message so assistive technology can find it.
- [ ] A pick up date before the drop off date is caught and explained.
- [ ] After a failed submit, keyboard focus goes to the first field with a problem.

## Requirement 21: visibility of system status

- [ ] After a valid submit, a visible message says the request was received and what happens next.
- [ ] The message is in a container that is already in the page and has `role="status"` (or `aria-live="polite"`).
- [ ] Focus does not jump away when the message appears.
- [ ] The success message does not rely on color alone.
- [ ] A code comment marks where the real Node.js request will go later.

## Requirement 22: primary action

- [ ] One clear primary button with a specific label, such as "Send my stay request".
- [ ] The button looks like the primary button on the other pages.

## Other checks

- [ ] Everything works with the keyboard and focus is always visible.
- [ ] Text contrast is at least 4.5:1, and field borders and buttons are at least 3:1.
- [ ] The page works at 320px wide and at 200% zoom.
- [ ] No libraries, frameworks, or downloaded scripts were added.
