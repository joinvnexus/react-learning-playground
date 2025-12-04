# React Learning Playground

Lightweight React practice project built with Vite. This repository contains a collection of small components, pages, hooks, and example tasks used for learning and experimenting with React (and React Router) features.

## Quick Overview

- **Stack:** React 19 + Vite
- **Routing:** `react-router-dom`
- **Linting:** ESLint with React hooks plugin
- **Purpose:** Learning / experimentation — not production-ready

## Getting Started

Prerequisites: Node.js (16+ recommended) and npm (or yarn).

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Project Structure

Most code lives inside the `src/` folder. Key directories and files:

- `src/main.jsx` — app entry and router mounting
- `src/App.jsx` — root app component
- `src/components/` — reusable components (Header, Dashboard, ProtectedRoute, Users, SimpleForm)
- `src/pages/` — route pages (`Home.jsx`, `login.jsx`, `Profile.jsx`, `NotFound.jsx`)
- `src/context/AuthContext.jsx` — authentication context used across the app
- `src/hooks/` — custom hooks (`useFetch.jsx`, `useForm.jsx`)
- `src/task/` — assorted practice tasks and example components (counters, todo, jokes, product cards, etc.)
- `src/assets/` — static images and assets

## Features / What You Can Explore

- Simple protected routes and basic auth flow using `AuthContext` and `ProtectedRoute`.
- Custom hooks demonstrating controlled forms and data fetching patterns.
- Examples of state management using local state, reducers, and custom hooks (`ComplexCounter`, `FormReducer`).
- A variety of small UI components for learning composition (`TodoApp`, `UserList`, `ProductCard`, `JokesApp`).

## Available Scripts

Scripts are defined in `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint over the project

## Notes

- This project is intentionally minimal to keep the focus on React patterns and Vite DX.
- Dependencies in this repo include `react`, `react-dom`, and `react-router-dom`.

## Contributing

This is a learning playground — contributions are welcome if they add clear educational value. For changes:

1. Fork the repo / create a branch.
2. Implement changes and keep them small and focused.
3. Open a pull request with a short explanation of the learning goal.

## License

Feel free to use this code for learning and personal projects. No license file is included in this repository.
