const originalLog = console.log;
console.log = (...args) => {
  originalLog("🔥", ...args);
};

console.log("Hackeado"); // 🔥 Hackeado