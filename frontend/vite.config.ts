/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./test/setup.ts",
		include: [
			"src/**/*.{test,spec}.{js,ts,jsx,tsx}",
			"test/**/*.{test,spec}.{js,ts,jsx,tsx}",
		],
	},
	server: {
		host: "0.0.0.0", // ホストマシンからアクセス可能にする
		// NOTE: 通常の localhost だと不可
		port: 5173,
	},
});
