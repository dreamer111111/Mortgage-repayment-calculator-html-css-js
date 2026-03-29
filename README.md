# Frontend Mentor - Mortgage Repayment Calculator Solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-OT1wa1yq_B). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Enter their mortgage information and see monthly and total repayments.
- Toggle between "Repayment" and "Interest Only" mortgage types.
- See form validation errors if any fields are left empty.
- View an empty state illustration before calculations are made.
- Clear all inputs and return to the empty state.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Links

- Solution URL: [https://github.com/dreamer111111/Mortgage-repayment-calculator-html-css-js]
- Live Site URL: []
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox & CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (DOM Manipulation & Math logic)

### What I learned

During this project, I strengthened my understanding of form validation using the `novalidate` attribute. I learned how to manually trigger error states by toggling classes and handling parent-child relationships using `.closest()`.

I also implemented the Amortization Formula for calculating repayments:

```javascript
const n = term * 12; 
const r = (interest / 100) / 12;
const monthlyPayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

```


### Useful resources
  Intl.NumberFormat documentation: []

  CSS :focus-within documentation: []

Author
Frontend Mentor - [https://www.frontendmentor.io/profile/dreamer111111]

LinkedIn - Rudro Roy