# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![dark theme in desktop](./screenshots/Screenshot1.png)
![dark theme in mobile](./screenshots/Screenshot21.png)
![customized theme in mobile](./screenshots/Screenshot41.png)
![light theme in desktop](./screenshots/Screenshot3.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/ismailmushraf/calculator-app)
- Live Site URL: [Live Website](https://micoder.me/calculator-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Neovim
- npm live-server
- Firefox

### What I learned

Some of the Things I've Learned from working on this Project, see below:

#### Semantic HTML
```html
<header>Header consist of themeToggler and Heading</header>
<main>Main consist of Keypad</main>
```
Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages and web applications rather than merely to define its presentation or look. 

#### CSS Transition
```css
#themeToggler {
  transition: margin-left .5s;
}
```
- Here, the first parameter `margin-left` is the property we need to add an animation to.
- Second parameter `.5s` is the duration of the animation

#### Grid Display
```css
.keypad {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```
- `fr` stands for "fraction of available space". It divides the space into equal number of parts.
- `1fr` takes 25% of this space. Because there are 4 cols in a row. `100% / 4 = 25%`.

#### Centering Items vertically and horizontally
```css
.num-key {
  align-items: center;
  justify-content: center;
}
```
This helped me to center the keypad numbers vertically and horizontally in the keypad `<div>`.

#### prefers-color-scheme
```js
if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
  applyDarkTheme();
}
```
Used to update the Theme according to the preference of the user.

## Author

- Website - [Micoder.me](https://micoder.me)
- Frontend Mentor - [@ismailmushraf](https://www.frontendmentor.io/profile/ismailmushraf)
- Twitter - [@ismaimushraf](https://www.twitter.com/ismailmushraf)

## Acknowledgments

#### References

- [CSS Tricks](https://css-tricks.com/introduction-fr-css-unit/) 
- [W3Schools](https://www.w3schools.com/css/css_grid.asp)  
- [Kevin Powell](https://youtu.be/xboZx8y2Tgw) 
