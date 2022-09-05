---
id: relative-units
title: Relative Units
sidebar_position: 3
---

In CSS, it is common to distinguish two major types of units:

- absolute units
- relative units

## Absolute Units

The following are all absolute length units — they are not relative to anything else, and are generally considered to always be the same size:

| Unit | Name                | Equivalent to            |
| :--- | :------------------ | :----------------------- |
| cm   | Centimeters         | 1cm = 37.8px = 25.2/64in |
| mm   | Millimeters         | 1mm = 1/10th of 1cm      |
| Q    | Quarter-millimeters | 1Q = 1/40th of 1cm       |
| in   | Inches              | 1in = 2.54cm = 96px      |
| pc   | Picas               | 1pc = 1/6th of 1in       |
| pt   | Points              | 1pt = 1/72nd of 1in      |
| px   | Pixels              | 1px = 1/96th of 1in      |

Most of these units are more useful when used for print, rather than screen output. For example, we don't typically use `cm` on screen. The only value that you will commonly use is `px`.

## Relative Units

**Relative units of measurement** describe property values that directly depend on the values of the same properties for the parent element. There are different relative units:

- `%` sets the measurement as a percentage of the parent element
  - especially convenient when you need to make a page that adjusts to the size of the screen where it is viewed
- `em` is used to indicate the font size relative to the current font of the parent element
  - e.g. if the font size is 4.5em, it means that it is 4.5 times larger than the current font of the parent element
- `rem` resembles `em`, but changes the font size of the element in relation to the font size of the root element `<html>`

:::info
If the font size of the `<html>` element is not set by some CSS it will default to 16px. In such cases, 16px is equal to 100%, 1em, or 1rem.
:::

### Viewport Units

There are also relative units of measurement that depend on the viewport. The word "viewport" refers to the area of the web page that the user can see without having to scroll. Such units always start with the letter 'v'. They are used to ensure that the web page is correctly displayed on devices with different screen sizes.

The most important units here are:

| Unit | Relative to                            |
| :--- | :------------------------------------- |
| vw   | 1% of the viewport's width             |
| vh   | 1% of the viewport's height            |
| vmin | 1% of the viewport's smaller dimension |
| vmax | 1% of the viewport's larger dimension  |

:::info
`100vw` and `100vh` are the values of the whole window together with the scroll bar. When you try to set this value, the elements will see a horizontal/vertical scroll bar.
:::

#### vmin

`vmin` uses the size of the smaller side. For example, if the height of the browser window is less than the width, `1vmin` will be equal to `1vh`. If the browser's width is less than its height, `1vmin` equals `1vw`.

![vmin](/img/docs/Web/CSS/vmin.svg)

#### vmax

`vmax` is the direct opposite of `vmin` and uses the larger side. For example, if the width of the browser is greater than its height, `1vmax` is `1vw`. If the height of the browser is greater than its width, `1vmax` equals `1vh`.

![vmax](/img/docs/Web/CSS/vmax.svg)

:::info
`vmin` and `vmax` will be different when you resize your browser window or change your smartphone orientation.
:::

## Rarely used units

There are more units in CSS which are not used as often:

- `ex` allows you to set the font size relative to the x-height of the current font of the parent element
  - The term "x-height" implies the height of lower case letters
- `ch` is used to set the font size relative to the width of the character "0" in the current font of the parent element
  - This unit of measurement is especially good for printing
