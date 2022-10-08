import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import RenderedResponse from "./components/renderedResponse";
import CompletionsResponse from "./components/completionsResponse";
import * as _ from "lodash";

let App = () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  let randomElement = _.sample([<RenderedResponse />, <CompletionsResponse />]);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/explain-like-five" element={<CompletionsResponse/>}></Route>
        <Route path="/content-writer" element={<RenderedResponse/>}></Route>
        <Route path="/" element={randomElement}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;