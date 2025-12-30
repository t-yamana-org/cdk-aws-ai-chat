import { describe, expect, it } from "vitest";
import { greet } from "../src/utils";

describe("greet関数", () => {
	it("正常系", () => {
		expect(greet("Alice")).toBe("Hello, Alice!");
	});

	it("異常系", () => {
		expect(greet("")).toBe("Hello, Guest!");
		expect(greet("   ")).toBe("Hello, Guest!");
	});
});
