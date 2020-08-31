# Contents
 1. [Installation](#installation)
 2. [Project Description](#description)
 3. [Functionality And Other Key Files(Explaination)](#func)
 4. [Screenshots](#screenshots)
 5. [Available Scripts](#availablescripts)

---
---
<a name="installation"></a>
# Installation

****Note: Screenshots are present in /Screenshots ** 

### Requirements
 1. [Nodejs](https://nodejs.org/en/) is required.
 2. [Npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/) package manager is required.


### Using npm
```shell script
npm install
npm run start
```

### Using yarn
```shell script
yarn
yarn run start
```

---
---
<a name="description"></a>
# Description

First Page of the project is Login Page in which user can put any credentials to login in ChatAPP,After that a chat app will apper in which one side is friend List and other side is chat Display. I have an add Search function to easily find you friend , plus a delete and add friend functionality but it won't work due to unavaliablity of database ....but you can you friend addded in local storage cited with 'FriendList' array.Through input field you can send msg to custom friend of your choice.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Packages
 1. Material-UI (UI)
 2. Bootstapp    (UI)
 3. React-Router-Dom (Navigation)
 4. React-Icons (Icon)
 5. React-Scroll-to-bottom (Start Scrolling From Bottom)
 

---
---
<a name="func"></a>
# Functionality And Other Key Files(Explaination)

  1.Pages
    a.HomePage      :- Login Page or Intro Page (Login with any Credential)
    b.ChatApp Page  :- ChatApp where are functionalities are running like chatting ,Add friend or delete 
   
   
  2.Files
    a.Search        :- Search Friends through search field ..simple regex to find the suitable friend  (components/Util/Search.js)
    b.ChatDisp      :- Where chats are shown of particular friend and input fiedls to type a msg ans through submit button send a msg.
    c.FriendList    :- List of Friend Available
  
---
---
<a name="screenshots"></a>
# Screenshots

## Home Page 


### Intro
![](https://drive.google.com/uc?id=16X5kj_EGwdh2qSaWGK28sPqZkjlS-88a)



## Chat App


### Intro
![](https://drive.google.com/uc?id=1p4vNRUpWQXvI_9bQGySgUX9Vg69cWfTS)



### Chatting Part
![](https://drive.google.com/uc?id=16siEm9btsARKvsEh-WxdP6iDwbW_-HFW)



### Add Friend
![](https://drive.google.com/uc?id=1DHo0wyr6JCR-umBODSdmUMwHu_pdr2jN)



---
---
<a name="availablescripts"></a>
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
