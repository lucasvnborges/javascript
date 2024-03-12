import { describe, expect, test } from "@jest/globals";

describe("Função soma", () => {
  test("deve somar 1 e 2 para resultar em 3", () => {
    const resultado = soma(1, 2);
    expect(resultado).toBe(3);
  });

  test("deve somar -1 e 2 para resultar em 1", () => {
    const resultado = soma(-1, 2);
    expect(resultado).toBe(1);
  });
});
