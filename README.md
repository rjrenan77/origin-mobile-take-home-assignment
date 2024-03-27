# Origin Mobile Take Home Assignment

## **Introduction**

Origin assessment created by Renan Soares.

## Video demonstration

iOS
https://drive.google.com/file/d/1PiDQybj4xkhzIUy2snIAqgXzS-vn0CWI/view?usp=drive_link

Android
https://drive.google.com/file/d/1Ufr5gJZXUfROxbojMDCS3CmhhPgPL1hx/view?usp=drive_link

## Technologies utilized

React Native CLI
Context API
Firebase Auth
Google Maps / Apple Maps
Fetch API
React Native Camera

## About the project

Origin Assessment has been designed using the MVVM architecture. 

Long story short: 'Model–view–viewmodel (MVVM) is an architectural pattern in computer software that facilitates the separation of the development of a graphical user interface (GUI; the view)—be it via a markup language or GUI code—from the development of the business logic or back-end logic (the model)'.

More info here:
[Model–view–viewmodel - Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel#:~:text=Model%E2%80%93view%E2%80%93viewmodel%20(MVVM,that%20the%20view%20is%20not)

```

├── src
│ ├── @types # Types declarations
│ ├── assets # Assets folder for images, logo
│ ├── components # Components
│ ├── context # Global state management
│ ├── helpers # Methods to help specific screens
│ ├── routes # Navigation configuration
│ ├── screens # Screens (can have or not a folder with specific components)
│ ├── services # API methods(Not used)
```

Example of files:

Signin.view.tsx
Signin.logic.tsx
Signin.styles.ts

## Setup project

You should have Git, NodeJS and yarn in addition to React Native configuration on your workstation.

## Running the project

1 - Clone the project 

➜  git clone https://github.com/rjrenan77/origin-mobile-take-home-assignment.git

2- Go to main branch

➜  git checkout main

2 - Install the dependencies:

➜  yarn;

➜  yarn pod-install;

3 - build

➜ yarn android;

or

➜ yarn ios or open .xcodeworkspace and run using XCode;

## Possible future improvements

Styled components;

Sort by ammount;

Implement yup for validation;

Implement a real endpoint to manage authentication, Profile, user tracking.
