# @guidap/commitlint-config

Shareable `commitlint` config enforcing [conventional commits](https://conventionalcommits.org/).

## Getting started

```sh
yarn add -D https://github.com/Guidap/commitlint-config.git
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

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples][commits_samples])

```
docs(changelog): update change log to beta.5
fix(core): need to depend on latest rxjs and zone.js
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
- **chore**: Updating tasks etc; no production code change
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) 
- **infra**: Changes to Dockerfiles or infrastructure scripts or configurations
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

TODO: Explain in this section how to determine the right scopes for a project

Multiple scopes separated by a comma (`,`) are allowed.

Example: `docs(admin,api): update documentation of X feature`.

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference Jira task that this commit relates to.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].
