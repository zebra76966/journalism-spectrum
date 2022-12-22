# Newslaundry Journalism Spectrum

## Tooling

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/guide)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Prettier](https://prettier.io/)

## Frameworks and Libraries

- [React 18](https://reactjs.org/)
- [Material UI](https://mui.com/)
- TODO: Possibly `visx` for charting

## CI/CD

This project uses GitHub Actions workflows for CI/CD, and currently deploys to GitHub Pages.

The `ci` workflow runs on every commit to a pull request branch, and does:

- a code style check with `prettier`
- `build` to make sure that no new errors have been introduced.

The `cd` workflow runs on commits to the `main` branch. It runs all the same checks as the `ci` workflow, and additionally deploys the built app to GitHub Pages.

The deployed version of the app can be accessed at https://krishna-acondy.io/journalism-spectrum/

## Local Development

- Clone the repository.
- Run `yarn` to install dependencies.
- Run `yarn dev` to start the local dev server.

The app will be available on http://localhost:5173/

Please use a PR to make any changes to the app - there are branch protection rules preventing direct pushes to `main`.

[Conventional Commit messages](https://www.conventionalcommits.org/en/v1.0.0/) are recommended for better readability.
