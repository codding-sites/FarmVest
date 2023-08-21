import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
	<>
		<h1
			className="title"
			onClick={click}
		>
			В кімнату заходить React
		</h1>
		<img
			src="@img"
			alt=""
		/>
	</>
);

// Об'єкт для виводу
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
