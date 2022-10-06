import {Routes ,Route} from 'react-router-dom';
// import the component renderedResponse.js
import RenderedResponse from './components/renderedResponse';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

let App = () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/renderedresponse" element={<RenderedResponse />}></Route>
        <Route path="/" element={<RenderedResponse />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
