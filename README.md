[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/pshaddel/ts-express-prisma-rest/commits/master)
![Maintaner](https://img.shields.io/badge/maintainer-Poorshad-blue)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/pshaddel)
[![codecov](https://codecov.io/gh/persian-tools/persian-tools/branch/master/graph/badge.svg)](https://codecov.io/gh/persian-tools/persian-tools)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pshaddel/ts-express-prisma-rest/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/pshaddel/ts-express-prisma-rest/compare)
[![CodeFactor](https://www.codefactor.io/repository/github/pshaddel/ts-express-prisma-rest/badge)](https://www.codefactor.io/repository/github/pshaddel/ts-express-prisma-rest)


# TS Express Prisma
<b>A Boilerplate for Express Apps with Prisma</b>

## Testing
We are using [Jest](https://jestjs.io/) as both test library and test runner. For running ts test files we are using [SWC](https://swc.rs/docs/usage/jest) which is a lot faster than [TS-NODE](https://github.com/TypeStrong/ts-node). 
This issue of detecting open handles on tests is open on jest: https://github.com/prisma/prisma/issues/18146
## Linter and Formatter
For Linting we are using [ESLint](https://eslint.org/) and for Formatting we are using [Prettier](https://prettier.io/).
## Git Commit Message
It is forced to commit [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) to this repository. For commiting in this style you can use this [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) or use this [CLI Tool](https://github.com/pshaddel/homebrew-conventionalcommit) that I implemented.
### How to Disable it? 

Got to `.husky/commit-msg` and comment the line that checks commit message. You can also remove these two packagees if you do not want to have a standard on commit messages: `"@commitlint/cli": "^17.4.4"`, `"@commitlint/config-conventional": "^17.4.4"`


