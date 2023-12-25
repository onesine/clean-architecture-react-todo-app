# Clean Architecture React Todo App

<p align="center">
    <a href="https://todo-app-onesine.vercel.app/" target="_blank">
      <img alt="React Tailwindcss Datepicker" src="https://raw.githubusercontent.com/onesine/clean-architecture-react-todo-app/master/public/screenshot-2023-12-25-at-16.41.56.png?raw=true">
    </a><br><br>
    Welcome to the Task Management application, a project highlighting the practical application of the fundamental principles of <strong>Clean Architecture</strong> and the <strong>MVVM</strong> model in the context of React. This project uses a simple task list as an example to illustrate how these architectural concepts can be integrated into Front-End application development like React.
</p>

## Contents

-   [Features](#features)
-   [Online demo](#online-demo)
-   [Installation](#installation)
-   [Conclusion](#conclusion)

## Features

-   ✅ List, create, update and Remove Task
-   ✅ An application of clean architecture
-   ✅ An application of MVVM model
-   ✅ Using dependency injection
-   ✅ Using the IoC container to resolve class and interface
-   ✅ Using localstorage as a datasource
-   ⬜ Confirm remove
-   ⬜ Toast
-   ⬜ Task filter (complete, incomplete, category)
-   ⬜ Loading (fetching, submission)
-   ⬜ Task category
-   ⬜ Unit test (vitest + react testing library)
-   ⬜ Integration or end 2 end test (cypress)
-   ⬜ Global state usage
-   ⬜ Folder structure documentation
-   ⬜ Localization(i18n)
-   ⬜ Using business logic in another project (Mobile development react-native)
-   ⬜ Add other datasource implementations (firebase, rest API, GraphQL, ...)

## Online Demo

You can find the online demo at [here](https://todo-app-onesine.vercel.app/)

## Installation

1. Clone this repo

```sh
    git clone https://github.com/pay-onesine/clean-architecture-react-todo-app.git
```

2. Go into the project root directory

```sh
    cd clean-architecture-react-todo-app
```

3. Set up the config Create a `.env` file from `.env.example`.

```dotenv
    VITE_APP_NAME=MyApp
    VITE_APP_ENV=dev
```

4. Install JS dependencies

```sh
    yarn install
```

5. Start the dev server

```sh
    yarn dev
```

You can now test the application on the link `http://localhost:5173/`

6. Useful script

```sh
    yarn code-style:fix
```

Allows to fix the problems related to the code style.

```sh
    yarn build
```

Allows to build the project.

```sh
    yarn test
```

Launches all unit tests

## Conclusion

This task management project illustrates my ongoing quest to perfect the organization of my code. Clean Architecture and the MVVM model are the ways I've found today to achieve cleaner, testable code that's resistant to future changes. If you're interested in these aspects, I invite you to contribute. Your ideas are welcome to help this project evolve together.
