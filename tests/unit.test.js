const { cleanColorInput } = require("../public/js/code.js");

test("formats color input correctly", () => {
  expect(cleanColorInput("   RED   ")).toBe("red");
});