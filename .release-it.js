module.exports = {
  git: {
    commitMessage: 'Bump v${version}',
    tagName: 'v${version}',
    requireCommits: true,
    requireCleanWorkingDir: true,
  },
  github: {
    release: true,
    draft: true,
    releaseName: 'use-animate-presence v${version}',
    commitArgs: ['-S'],
    tagArgs: ['-s'],
    assets: ['tar/*.tgz'],
  },
  npm: {
    publish: true,
  },
  hooks: {
    'before:init': ['npm run build', 'npm run pre-commit'],
  },
};
