import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import SitoImage from "./App";
import { jsx as _jsx } from "react/jsx-runtime";
const container = document.getElementById("root"); // Create a root.

const root = ReactDOMClient.createRoot(container); // Initial render: Render an element to the root.

root.render( /*#__PURE__*/_jsx(StrictMode, {
  children: /*#__PURE__*/_jsx(SitoImage, {
    sx: {
      width: "350px",
      height: "350px"
    },
    src: "https://source.unsplash.com/random/800x600",
    alt: "shimmer-example"
  })
}));