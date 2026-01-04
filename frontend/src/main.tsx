import { Amplify } from "aws-amplify";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import outputs from "../amplify_outputs.json";
import "./index.css";
import App from "./App.tsx";

Amplify.configure(outputs);

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
