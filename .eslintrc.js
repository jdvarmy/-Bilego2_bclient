module.exports = {
  root: true,
  // Загружает конфиг eslint-config-esconf
  extends: ['esconf'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
