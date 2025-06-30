# Bearable Technical Test

Welcome to the Bearable tech test!

## Table of Contents

* [Setup](#setup)
  * [Prerequisites](#prerequisites)
  * [Install dependencies](#install-dependencies)
  * [Run app](#run-app)
  * [Run tests](#run-tests)
* [Instructions](#instructions)
  * [Mood entries](#mood-entries)
  * [Bug fixing (Hard)](#bug-fixing-hard)
* [Assessment Criteria](#assessment-criteria)

## Setup

This project was bootstrapped with [create-expo-app](https://docs.expo.dev/more/create-expo/) so head to the website to get more detailed setup steps.

### Prerequisites

Make sure you have the following available:
- Node.js
- NPM

### Install dependencies

To install the initial dependencies run the following:

```bash
npm install
```

### Run app

To run the app in development mode you can use the following. Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

```bash
npm start
```

If you want to use an iOS or Android simulator follow the [React Native setting up environment guide](https://reactnative.dev/docs/set-up-your-environment) and then you can use either `npm run ios` or `npm run android` instead of `npm start`.

### Run tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests and test files will have the `.test` extension. To run them use:

```bash
npm test
```

## Instructions

Please use your imagination and pretend this app is a cohesive early version of Bearable. Bearable is an app for a) recording data and b) visualising it.

Once you've followed the setup and have the app running you should see a Home screen which should be used for the new feature and an Impacts screen which shows the impacts data for energy and has some bugs to fix.

### Mood entries 

**Aim**: Create the ability to add mood entries and display its corresponding data based on the ACs below and the designs provided.

Technical Requirements:
1. React Native
2. TypeScript
3. Redux (optional) - use what you feel would be the best solution to storing the data
4. Submit in a non-public GitHub repo (share with https://github.com/robcrossland1 and https://github.com/natbearable)

Acceptance Criteria:
1. On the Home screen create a mood data entry section at the top. There is no design provided, it is up to you what ways of entering data it uses. No need to get fancy, something simple and easy is best.
    1. It would be great if it looks reasonably consistent with how the Bearable  app generally looks.
    2. The user should be able to add as many entries as they want.
    3. Each entry includes a mood assessment from 1 to 5, as well as between 1 and 4 feelings chosen (see on the chart).
    4. It should not include features like editing entries or removing them.
    5. When you restart the app, the list of entries should reset, no persistence is required.

2. Create the visualisation under the entry section following the design in [Figma](https://www.figma.com/design/vqCdRs2BwAa5tIUIG1DM3h/Software-Assessment---Bearable-App). You should be able to see on the design, the chart’s elements are:
    1. The number of entries that include that feeling (figure on the right of the bar)
    2. Bars whose lengths are based on the same figure as above. The feeling with the most entries uses the entire width of the chart area, the others use proportionally less.
    3. Bars consist of segments that are coloured based on mood assessments with that feeling. For instance, in the bar for “frustrated” on the left 5/6 of the length is orange and 1/6 is yellow, because the user has entered 5 mood entries assessed as orange and 1 assessed as yellow, all of which had the “frustrated” feeling selected.
    4. The bars are sorted based on the number of entries with each feeling.

### Bug fixing (Hard)

**Aim**: Use the mocked data and failing tests to understand and fix the bugs identified by the tester.

Notes:
 - The data behind this is mock data.
 - Energy ratings are based on a score out of 10
 - Factor entries that are stored means the factor occurred at some point on that day.
 - All tests written in the app should pass.
 - See the [Figma designs](https://www.figma.com/design/vqCdRs2BwAa5tIUIG1DM3h/Software-Assessment---Bearable-App) for the correct impacts view

The testers have raised the following:
- The impacts are showing for factors that the user doesn't have active, only active factors should be shown
- The impacts with/without and percentage are not showing the correct values. Impacts should show a percentage change between the with and without scores and should only display for a factor when there are at least 3 entries with and 3 entries without

## Assessment Criteria

Since Bearable is a large and complex codebase we want to see how you're able to deal with adding a new feature and fixing bugs. For senior candidates we expect more emphasis on the bug fixing.

We ideally want you to spend no longer than 2 hours on this test so don't worry if you don't finish everything, feel free to share any notes or videos of your thinking or what you would do with more time.

We will be looking for the following when assessing the test:
- The code works
- Passes manual testing
- ACs and designs are closely matched (attention to detail)
- Sensible UI decisions
- Good software practices are followed
- UI performance considered
- Ability to solve problems (even if bugs are not fixed showing thought process)
