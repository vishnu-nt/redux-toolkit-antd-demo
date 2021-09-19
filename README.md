This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

\
&nbsp;
\
&nbsp;

# Summary
## Web UI that renders a list of media objects (posts & comments):
- Lists Posts by all users.
- For a specific post when selected, its comments will shown on the right side `Drawer`.
- Actions:
  - Comment - user can add a reply
  - Tag action - users can add one or more custom tags to comments.
  - User will receive tag suggestions while typing in the new tag.
  - Filter posts by username

\
&nbsp;
## Stack used:
- @reduxjs/toolkit
  - Why?\
  Redux strongly recommends [Redux Toolkit](https://redux.js.org/style-guide/style-guide#use-redux-toolkit-for-writing-redux-logic) for writing redux logic

- Typescript
- Styled Components
- Ant design
- {JSON} Placeholder for mock APIs


## Screenshots
![homepage](https://user-images.githubusercontent.com/22218316/133926650-3f0d8002-d332-443b-a341-784ac36f66cf.png)
![reply](https://user-images.githubusercontent.com/22218316/133926659-f67a64be-f8f8-4d08-8538-15b339527d13.png)
![search](https://user-images.githubusercontent.com/22218316/133926660-d68c7f5c-4bb6-464e-97c0-3b657ef14a36.png)
