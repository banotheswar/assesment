import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Componet1 from './Componet1';
import Componet2 from './Componet2';

const Card = () => {
    const [show,setShow]=useState(false);
    const [data,setData]=useState({});
    const handleChange=(name)=>(event)=>{
        setData({
            ...data,
            [name]:event?.target.value
        })
    }
    const open=(value)=>{
        setShow(value)
    }
    const modal=()=>{
        return (
            <>
            <Modal show ={show}>
            <Modal.Header>
                <Modal.Title>Header</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           <p>
           Download ready-to-use compiled code for Bootstrap v5.0.2 to easily drop into your project, which includes: Compiled and minified CSS bundles (see CSS files comparison) Compiled and minified JavaScript plugins (see JS files comparison) 
           This doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.
           </p>
            </Modal.Body>
            <Modal.Footer>
                <div >
<button className='btn border' onClick={()=>open(false)}>Cancel</button>
                </div>
            </Modal.Footer>
            </Modal>
                
           
            </>
        )
    }
const dropdow=()=>{
    return (
        <>
        <select className='form-select ' onChange={handleChange("componet")}>
            <option value={""}>select</option>
            <option>v1</option>
            <option>v2</option>
        </select>
        </>
    )
}
  return (
    <>
    <div className='px-4 py-4'>
    <div className='col-md-4 border  rounded'>
        <div className='card-header'>
<h1>Header</h1>
        </div>
        <div className='card-body'>
<p>
Download ready-to-use compiled code for Bootstrap v5.0.2 to easily drop into your project, which includes:

Compiled and minified CSS bundles (see CSS files comparison)
Compiled and minified JavaScript plugins (see JS files comparison)
This doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.
</p>
        </div>
        <div className='card-footer'>
<h5>Compiled and minified CSS bundles (see CSS files comparison)</h5>
        </div>

    </div>
    <div className='py-2'>
        <button className='btn bg-secondary ' onClick={()=>open(true)}>Click Me</button>
    </div>
    {modal()}
    <div className='col-md-4'>
    {dropdow()}
    </div>
    {data?.componet=="v1"?<Componet1/>:data?.componet=="v2"?<Componet2/>:""}
    </div>
    </>
  )
}

export default Card