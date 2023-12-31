# 🤸‍♂️⛹️‍♀️🤺 Project Friidrett 🥇🥈🥉<!-- omit in toc -->

A student project for the course Frontend Development at Gokstad Akademiet. The project is a web application for a fictitious athletics club. The application is built with React and Node.js, and uses a MySQL database.

Team members:

- Sandra: https://github.com/shuseklepp 💁🏼‍♀️
- Yardenna: https://github.com/yardokun 👩🏻‍💼
- Yoann: https://github.com/Gynko 🧔🏻‍♂️

# 📒 Table of content <!-- omit in toc -->

- [1. 🪜 Installation](#1--installation)
- [2. 🖼 Design](#2--design)
- [3. 🏛 App architecture](#3--app-architecture)
  - [3.1. Top level Components](#31-top-level-components)
  - [3.2. Atomic design](#32-atomic-design)
  - [3.3. The App component](#33-the-app-component)
  - [3.4. The Routing component](#34-the-routing-component)
    - [3.4.1. Layout](#341-layout)
    - [3.4.2. Protected routes](#342-protected-routes)
  - [3.5. Global CSS](#35-global-css)
    - [3.5.1. CSS rem units](#351-css-rem-units)

# 1. 🪜 Installation

1. Clone this repo

```bash
git clone https://github.com/Gynko/friidrett.git
```

2. Download Docker and install: https://www.docker.com/get-started
3. Build Docker file:

```bash
docker build -t ga-db-image .
```

6. Run Docker file:

```bash
docker run --name ga-mysql-8.0.33 -p 3306:3306 -v ga-vol:/var/lib/mysql -d ga-db-image
```

7. Download and install workbench for mac: https://dev.mysql.com/downloads/workbench/
8. Open Workbench and create new connection
   Connection name: GokstadDb
   Port: 3306
   Password: gokstad
9. Open the sql script that we downloaded - File Open SQL Script - Encoding latin1
10. Run the script - the lightning icon
11. Installing the server and the database:

```bash
git clone https://github.com/yngvemag/ga-friidrett
```

And then start it

```bash
docker-compose up -d
```

12. Installing the client - Navigate to client folder and

```bash
npm install
```

13. Start the client

```bash
npm start
```

# 2. 🖼 Design

We started by making a design of the whole app in Figma, to be able to see how we wanted it to look like, as well as being able to plan the different features and React components.

https://www.figma.com/file/VNoAB3Z4FPMkI3Q3ocIkKD/Untitled?type=design&node-id=0-1&mode=design&t=1g9OlKXLNOVihzdS-0

We used Midjourney and DALL-E to create the graphical assets: the logo and the icons.

![Design](https://github.com/Gynko/friidrett/blob/main/Github%20Images/design.png?raw=true)

# 3. 🏛 App architecture

## 3.1. Top level Components

1. At the top level we have `index.js`, the entry point of the app. Its purpose would be for example to handle the tooling of the app such as the state management with `redux`. But for our case, it only renders the `App` component.
2. The `App` component renders the `Routing` component, which renders the different `page components` of the app, which are all using various `components`. More on the app component in the 3.3 section.

![app-architecture](https://github.com/Gynko/friidrett/blob/main/Github%20Images/architecture.png?raw=true)

## 3.2. Atomic design

So for example the `Home` page component will be using the `Header` component, the `Footer` component, the `Hero` component, etc.

This follows the logic of the `Atomic Design methodology`, where we have:

1. the `atoms` (the smallest components, like a link)
2. the `molecules` (things made of atoms - like a header, which would contain links)
3. the `pages` (things made of molecules - every page having a header, itself made of links).

For the sake of simplicity, we will only differentiate between `pages` and `components` in our app.

This is materialised like such:

1. In the folder structure of the app: we have a folder for `pages` and a folder for `components`.
2. the page components are named for example `Homepage.page.jsx` and the "components components" are named for example `Header.component.jsx`. This has an added benefit when we want to find a component in VsCode with SHIFT COMMAND P, we can just type `component` or `page` and we will find all the components or all the pages.

## 3.3. The App component

We decided on having the App component to be responsible for:

1. Injecting the 2 global css stylesheets of the app: the `remedy.css` and the `globalVariables.css`.
2. rendering the routing component.
3. handling the pieces of state that are reused everywhere, like the `currentUser` state, which would be used to know if the user is logged in or not, which would be used by the `Header` component to know if it should display the `login` or the `logout` button, and also by the `Routing` component to know if it should display the `Admin` page or not.

## 3.4. The Routing component

### 3.4.1. Layout

Since we wanted to have the header on all components, we used a technique allowing to inject everywhere.

First we create a basic layout as a function returning the components we need. Outlet is a special component that needs to be imported from react-router-dom. It will be replaced by the component that is rendered by the router, for example the home page or the members page.

```js
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
```

### 3.4.2. Protected routes

Since we don't want to expose our routes to all users, only admin, we created a special component:

```js
function ProtectedRoute({ children, ...rest }) {
  const { user } = useContext(UserContext);

  if (user === "admin") {
    return children;
  }
  return <Navigate to="/" replace />;
}
```

This component wraps all the routes that should be protected, and checks if the user is admin. If not, it redirects to the home page.

```js
        {
          path: "/races",
          element: (
            <ProtectedRoute>
              <RaceManagement />
            </ProtectedRoute>
          ),
        },
```

## 3.5. Global CSS

We have 2 files that are injected in the `App.jsx` file:

1. The `remedy.css` file resets the built in browser css like margins and paddings, the ugly list-style-type, and also sets the `box-sizing` to `border-box` for all the elements of the app.

2. The `globalVariables.css` file contains the global `CSS variables` of the app that will be used by all the components of the app, like the colors, the fonts, and the main sizing values like `--header-mobile-height`.

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

Example:

```css
:root {
  --color-primary: #ffc107;
  --color-secondary: #ff9800;
  --color-tertiary: #ff5722;

  --font-h1: "Roboto", sans-serif;
  --font-links: "Roboto Slab", serif;

  --header-mobile-height: 3rem;
  --header-desktop-height: 4rem;
}
```

Having this, we can then use them in our components like this:

```css
.my-button {
  background-color: var(--color-primary);
}
```

This way, if we want to change the color of the primary button or the primary font, we only have to change it in our globalVariables file, and it will be reflected everywhere in the app. This makes our app `maintainable` and `scalable`.

Additionaly, a value like the `header-height` is for example used in the header component to define its `height` , but also by the component that renders the pages, to define the `margin-top` of the page, so that the page content is not hidden by the header.

In the header component we would have:

```css
.header {
  height: var(--header-mobile-height);
}
```

In the page content component we would have for example:

```css
.section {
  margin-top: var(--header-mobile-height);
}
```

### 3.5.1. CSS rem units

We use `rem` for 99% of all sizing values, because it is a relative unit to the `font-size` of the `root` element, which is the `html` element, and usually is 16px in all browsers.

Give or take, one of the only place where we use `px` is for the `border-radius` property, because it is not relative to the font-size.

Using rem has the extremely great advantage that when the user changes the font-size of the browser (with COMMAND + or COMMAND -), the whole app will scale accordingly and add responsivity and good user experience.
