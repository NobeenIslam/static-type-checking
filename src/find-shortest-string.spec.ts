import findShortestString from "./find-shortest-string";

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "isss", "app", "nice", "day"])).toBe("it");
  expect(findShortestString(["whyyyy", "hello", "tooooo", "youuuuu"])).toBe(
    "hello",
  );
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["holeeeee", "vroles", "troles"])).toBe("vroles");
  expect(findShortestString(["ok", "sok", "wok", "ek"])).toBe("ok");
});
