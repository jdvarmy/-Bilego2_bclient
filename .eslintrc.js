module.exports = {
  root: true,
  // Загружает конфиг eslint-config-eslint-bilego-config
  extends: ["eslint-bilego-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
