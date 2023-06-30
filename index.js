module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message === 'WIP'],
  helpUrl: 'https://github.com/Guidap/commitlint-config/blob/master/README.md',
  prompt: {
    enableMultipleScopes: true,
    scopeEnumSeparator: ',',
  },
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test', 'infra'],
    ],
  },
};
