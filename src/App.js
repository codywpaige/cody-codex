import {Routes ,Route} from 'react-router-dom';
import { RenderResult } from 'src/components/renderedResponse';

function App() {
  return (
   <div>
     <Routes >
       <Route exact path='/' element={<RenderResult />} />
       <Route exact path='/rendered-result' element={<RenderResult/>} />
     </Routes >
   </div>
  );
}