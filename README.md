# Frontend Mentor - Multi-step form solution

This is a solution to
the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
    - A field has been missed
    - The email address is not formatted correctly
    - A step is submitted, but no selection has been made

### Screenshot

**Actions with Redux state:**
![action](/public/screenshots/form-chal-mobile-actions.gif)

**Info page:**
![info desktop](/public/screenshots/info-desktop.png)

**Finish page:**
![finish desktop](/public/screenshots/finish-desktop.png)

**Plans (Mobile) page:**
![plans mobile](/public/screenshots/plans-mobile.png)

### Links

- Solution URL: [Github Repository](https://github.com/datproto/datproto-chal_todo-app.git)
- Live Site URL: [Vercel Live Site](https://datproto-chal-multistep-form.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Redux](https://redux.js.org/) - For managing state and fetching data
- [TailwindCSS](https://tailwindcss.com/) - For static style
- [Framer Motion](https://www.framer.com/motion/) - For animation

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

The best thing I have learned from this challenge is how to use Javascript ES6 filter function to get the value from
Redux state.
And the other thing is how to use `formId` to trigger form submit in child Form components.

```typescript jsx
price: formInputs.filter(
  (input) => input.content.name === plan.name,
).map((input) => input.content.price[type === 'mo' ? 'mo' : 'yr'])[0],
```

```typescript jsx
<Button text="next step" type="submit"
        formId={location.pathname === '/' ? 'info' : location.pathname.substring(1)}
        customClass="hover:bg-[#164A8A] active:bg-[#164A8A] transition-all"/>
```

### Continued development

In the future, I would like to continue to improve my skills in the following areas:

- **Animation**: When I get more experiences with Framer Motion, I will comeback to add exit animation for the
  components of this Challenge.
- **Database**: Currently, I'm using Redux to create Fullstack-feeling for this project. But in the future, I will add a
  real Database for this (such as: sanity, firebase, etc.)

## Author

- Website - [Dat Proto](https://www.datproto.com)
- Frontend Mentor - [@datproto](https://www.frontendmentor.io/profile/datproto)
- Twitter - [@DatProtocol](https://twitter.com/DatProtocol)
