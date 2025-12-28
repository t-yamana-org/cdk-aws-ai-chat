import { describe, expect, test } from "vitest";

describe("基本的なテスト", () => {
	test("文字列の長さを正しく計算する", () => {
		expect("hello".length).toBe(5);
		expect("".length).toBe(0);
		expect("JavaScript".length).toBe(10);
	});
	test("配列の操作が正しく動作する", () => {
		const numbers = [1, 2, 3];
		expect(numbers.length).toBe(3);
		expect(numbers.includes(2)).toBe(true);
		expect(numbers.includes(5)).toBe(false);
	});
});
