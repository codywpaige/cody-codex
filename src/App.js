import {Routes ,Route} from 'react-router-dom';
// import the component renderedResponse.js
import RenderedResponse from './components/renderedResponse';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CompletionsResponse from './components/completionsResponse';
import * as _ from 'lodash' ;

let App = () => {
  let randomElement = _.sample([<RenderedResponse />, <CompletionsResponse />]);
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/explain-like-five" element={<CompletionsResponse />}></Route>
        <Route path="/content-writer" element={<RenderedResponse />}></Route>
        <Route path="/" element={randomElement}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// npm install globally yarn

// yarn install