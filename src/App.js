import {Routes ,Route} from 'react-router-dom';
// import the component renderedResponse.js
import RenderedResponse from './components/renderedResponse';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CompletionsResponse from './components/completionsResponse';
import * as _ from 'lodash' ;
import { HashRouter, Switch } from 'react-router-dom'
import LeakOne from './components/LeakOne';

let App = () => {
  // with lodash make a variable called RandomElement that when called, will choose one of the two [<RenderedResponse />, <CompletionsResponse />], and 99% that the same thing will not be selected
  let randomElement = _.sample([<RenderedResponse />, <CompletionsResponse />, <LeakOne/>], 1, false);
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(
    <HashRouter>
      <Routes>
        {/* <Route path="/mood-ring" element={<MoodRing/>}></Route> */}
        <Route path="/lonely-much" element={<CompletionsResponse/>}></Route>
        <Route path="/explain-like-five" element={<CompletionsResponse/>}></Route>
        <Route path="/content-writer" element={<RenderedResponse/>}></Route>
        <Route path="/" element={randomElement}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;