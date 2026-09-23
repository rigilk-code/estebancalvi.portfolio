import { describe, expect, it } from "vitest";
import { getRouterBaseName } from "@/lib/router";

describe("getRouterBaseName", () => {
  it("uses an empty basename on localhost", () => {
    const url = "http://localhost:8080/en/about";

    expect(getRouterBaseName(url)).toBe("");
  });

  it("uses the GitHub Pages repo path in production", () => {
    const url = "https://rigilk-code.github.io/estebancalvi.portfolio/en/about";

    expect(getRouterBaseName(url)).toBe("/estebancalvi.portfolio");
  });
});
