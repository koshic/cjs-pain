const Module = require("node:module");

const originalRequire = Module.prototype.require;

Module.prototype.require = (moduleId) => {
  if (moduleId === "node:http") {
    return {
      fake: true,
      source: "cjs hook"
    };
  }

  return originalRequire(moduleId);
};
