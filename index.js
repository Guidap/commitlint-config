module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message === 'WIP'],
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
