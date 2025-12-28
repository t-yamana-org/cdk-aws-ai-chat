import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0", // ホストマシンからアクセス可能にする
		// NOTE: 通常の localhost だと不可
		port: 5173,
	},
});
