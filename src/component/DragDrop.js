import React, { useEffect, useState } from 'react'
const arrayData=[
    {key:"1"},
    {key:"2"},
    {key:"3"},
    {key:"4"},
    {key:"5"},
    
]
const DragDrop = () => {
    const [array,setArray]=useState(arrayData)
   const [index,setIndex]=useState("")
    const emptyarray=["","","","",""];
    const handleDrag=(index)=>{
        setIndex(index)

    }
    const onDragLeave=(e,i)=>{
        let arr=[...array];
        arr[i]=arr[index];
        setArray(arr)
    }
    useEffect(()=>{
        console?.log(array,"array") 
    },[])
  return (
    <div className='px-2 '  >
        <div className='col-md-4 '>
        {
            array?.map((v,i)=>{
                return (
                    <div key={i} className=' bg-light  mt-2' >
                       <div className='col-md-12 bg-secondary px-4 py-3' draggable  onDragStartCapture={()=>handleDrag(i)}  onDragLeave={(e)=>onDragLeave(e,i)}>
                       {v?.key}
                       </div>
                    </div>
                )
            })
        }
        </div>
<div className='col-md-4 my-2'>
   <button className='btn border' onClick={()=>setArray(arrayData)}>Reset</button>
    

</div>
    </div>
  )
}

export default DragDrop