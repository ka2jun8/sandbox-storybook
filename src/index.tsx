import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <App title="Hello" descriptions={["sample", "description"]} />,
  rootElement
);
