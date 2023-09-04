# @guidap/commitlint-config

Shareable `commitlint` config enforcing [conventional commits](https://conventionalcommits.org/).

## How to use in a project

```sh
yarn add -D @guidap/commitlint-config@https://github.com/Guidap/commitlint-config
echo -e "module.exports = {\n\
  extends: ['@guidap/commitlint-config'],\n\
  rules: {\n\
    'scope-enum': [\n\
      2,\n\
      'always',\n\
      // TODO: add your project scopes here\n\
      ['scope1', 'scope2'],\n\
    ],\n\
  },\n\
};" > commitlint.config.js
```

## Update commit types

Update types in the `index.js` file at the root of this repository.

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

| header | The header is mandatory ;
Any line of the commit message cannot be longer than 100 characters. |
| --- | --- |
| type | Part of the header, the commit type is mandatory and its value must respect allowed enumerations. |
| scope | Part of the header, the commit scope is optional ;
A commit can have multiple scopes separated by , |
| subject | Part of the header, the subject contains succinct description of the change:
 - use the imperative, present tense: "change" not "changed" nor "changes"
 - don't capitalize first letter
 - no dot (.) at the end |
| body | The body can just be as the subject ;
Use the imperative, present tense: "change" not "changed" nor "changes" ;
The body should include the motivation for the change and contrast this with previous behavior. |
| footer | The footer should contain the Jira task key that this commit relates to ;
It is also the place to reference any information about Breaking Changes ;
Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this. |

## Types

| feat | Features | A new feature |
| --- | --- | --- |
| fix | Bug Fixes | A bug fix |
| docs | Documentation | Documentation only changes |
| style | Styles | Meaning code style ; Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
Don’t mistake that with CSS or any frontend design work. |
| refactor | Code Refactoring | A code change that neither fixes a bug nor adds a feature |
| perf | Performance Improvements | A code change that improves performance |
| test | Tests | Adding missing tests or correcting existing tests |
| build | Builds | Changes that affect the build system or external dependencies |
| ci | Continuous Integrations | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| infra | Infrastructure | Changes to Dockerfiles or infrastructure scripts or configurations |
| chore | Chores | Other changes that don't modify src or test files (like updating version of package.json, dev tools, etc.) |

## More links

A complete cheatsheet is available here: https://www.notion.so/guidap/Conventional-commit-cheatsheet-f66acbe8900d40a4b8baa57674d8de17.
