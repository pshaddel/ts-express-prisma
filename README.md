[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/pshaddel/ts-express-prisma-rest/commits/master)
![Maintaner](https://img.shields.io/badge/maintainer-Poorshad-blue)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/pshaddel)
[![codecov](https://codecov.io/gh/pshaddel/ts-express-prisma/branch/master/graph/badge.svg?token=DLRH7L3EVR)](https://codecov.io/gh/pshaddel/ts-express-prisma)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pshaddel/ts-express-prisma-rest/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/pshaddel/ts-express-prisma-rest/compare)

# Nodejs Typscript Express Prisma Postgres [Sample Backend Template]

<b>A Boilerplate for Express Apps with Prisma</b>

This repo includes some features that are important to me:
- [ ] using Typescript
- [ ] Hot Reload in Development
- [ ] Using Docker for running Database
- [ ] Using a ORM/ODM for the Database(in this case Prisma)
- [ ] Linting
- [ ] Formatter
- [ ] Validator
- [ ] Testing(Both unit and integration)
- [ ] Using Conventional Commit(Forced by commitlint package)
- [ ] Having Git Hooks(using Husky => pre/post)
- [ ] Documentation(use TS Docs, JS Docs and typedoc package to turn them to html pages)
- [ ] Having a proper pipeline(install, build, lint, format, test)

## Prerequisites

Nodejs and NPM: You can install the latest version [here](https://nodejs.org/en/download)

docker: Install docker engine from [here](https://docs.docker.com/get-docker/).

## Quick Start

First install dependencies:

```bash
npm install
```

And then start the project:

```bash
npm run start:dev
```

Now the service is up and is listening on: `http://127.0.0.1:3001`

Be aware that you need `DATABASE_URL` as a env variable on your system for running the project or tests. You can create a `.env` file in Prisma folder to do that.

## Testing

We are using [Jest](https://jestjs.io/) as both test library and test runner. For running ts test files we are using [SWC](https://swc.rs/docs/usage/jest) which is a lot faster than [TS-NODE](https://github.com/TypeStrong/ts-node).
This issue of detecting open handles on tests is open on jest: <https://github.com/prisma/prisma/issues/18146>

Available scripts in `package.json` file:

```bash
npm run test
npm run test:watch
npm run test:ci
```

Be aware that you need `DATABASE_URL` as a env variable on your system for running the project or tests. You can create a `.env` file in Prisma folder to do that.

### Test Coverage Badge

For using your own coverage badge you need to do 3 things:

- Register in [CodeCov](https://app.codecov.io/)
- Copy the Secret `CODECOV_TOKEN` value and add it to your project secrets.
- Copy the Badge address from CodeCov dashboard to README file.

## Linter and Formatter

For Linting and Formatting we are using [Biome](https://biomejs.dev/)

```bash
npm run lint
npm run format
```

## Git Commit Message

It is forced to commit [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) to this repository. For commiting in this style you can use this [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) or use this [CLI Tool](https://github.com/pshaddel/homebrew-conventionalcommit) that I implemented.

### How to Disable it?

Got to `.husky/commit-msg` and comment the line that checks commit message. You can also remove these two packagees if you do not want to have a standard on commit messages: `"@commitlint/cli": "^17.4.4"`, `"@commitlint/config-conventional": "^17.4.4"`

## Documents

Add your documents as TS comments in your project and then run this command for generating `.MD` files in `docs` folder:

```bash
npm run docs
```

## Validation

We are using [Zod](https://zod.dev/) for validation of requests. Check out `src/user.service.ts` to see the example.

## Pipeline

Pipeline has these steps:

- Installing Dependencies
- Lint
- Run Test Containers
- Wait
- Test
