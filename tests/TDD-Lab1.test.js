const { translate } = require("../src/TDD-Lab1");

describe("translate function", () => {
  test("words that start with vowels", () => {
    let result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test("words that start with vowels", () => {
    let result = translate("alien");
    expect(result).toBe("alienway");
  });
  test("words that start with vowels", () => {
    let result = translate("igloo");
    expect(result).toBe("iglooway");
  });
  test("words that start with vowels", () => {
    let result = translate("opal");
    expect(result).toBe("opalway");
  });
  test("words that start with vowels", () => {
    let result = translate("understand");
    expect(result).toBe("understandway");
  });
  test("words that start with capital vowels", () => {
    let result = translate("Elephant");
    expect(result).toBe("elephantway");
  });
  test("words that start with one consonant", () => {
    let result = translate("boat");
    expect(result).toBe("oatbay");
  });
  test("words that start with one consonant", () => {
    let result = translate("land");
    expect(result).toBe("andlay");
  });
  test("words that start with two consonants", () => {
    let result = translate("shock");
    expect(result).toBe("ockshay");
  });
  test("words that start with more consonants", () => {
    let result = translate("strong");
    expect(result).toBe("ongstray");
  });
});
