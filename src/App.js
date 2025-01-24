import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import RoutingConfig from './component/RoutingConfig';

function App() {
  return (
    <BrowserRouter>
    <RoutingConfig/>
    </BrowserRouter>
    // <div className="text-danger d-flex flex-wrap">
    //   <div className='col-md-2'>
    //    <BrowserRouter>
    //    <Routes>
    //     <Route path='/*' element={<Sidebar/>}>
    //     <Route path='todo' element={<DragDrop/>}></Route>
    //     </Route>
    //    </Routes>
    //    </BrowserRouter> 
    //   </div>
    // <div className='col-md-10'>
      
    // <Card/>
    // </div>
    // </div>
  );
}

export default App;
