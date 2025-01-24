import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Sidebar from './component/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="text-danger d-flex flex-wrap">
      <div className='col-md-2'>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Sidebar/>}></Route>
       </Routes>
       </BrowserRouter> 
      </div>
    <div className='col-md-10'>
    <Card/>
    </div>
    </div>
  );
}

export default App;
