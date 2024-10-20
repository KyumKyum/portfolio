import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootRouter from "./router/RootRouter";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RootRouter />
	</StrictMode>,
);
