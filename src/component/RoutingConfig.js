import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './Card'
import Sidebar from './Sidebar'
import DragDrop from './DragDrop'

const RoutingConfig = () => {
  return (
    <Routes>
        <Route path='/' element={<Card/>}></Route>
        <Route path='/sidebar/*' element={<Sidebar/>}>
       
        <Route path='todo' element={<DragDrop/>}></Route>
       

        </Route>
    </Routes>
  )
}

export default RoutingConfig