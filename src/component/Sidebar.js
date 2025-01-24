import React from 'react'
import { FaDyalog } from 'react-icons/fa'
import { IoMdCheckbox, IoMdMenu } from 'react-icons/io'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => {
   
    const array=[
        {name:"Text",link:"/sidebar/text",icon:<IoDocumentTextOutline />},
        {name:"Box",link:"/sidebar/box",icon:<IoMdCheckbox />},
        {name:"Image",link:"/sidebar/image",icon:<IoDocumentTextOutline />},
        {name:"Form",link:"/sidebar/form",icon:<IoDocumentTextOutline />},
        {name:"Drag To Do",link:"/sidebar/todo",icon:<IoDocumentTextOutline />},
        {name:"Log Out",link:"/",icon:<FaDyalog />}

    ]
  return (
    <div className='d-flex'>
        <div className='sidebar'>
        {
            array?.map(({link,name,icon})=>{
                return (
                    <>
                   <div className=''>
                    
                    
                    <NavLink  to={link} className={({isActive})=>isActive?" link py-1 px-2 bg-white rounded mt-2 d-flex gap-2 align-items-center":"align-items-center mt-2 link py-2 px-2 d-flex gap-2"}>
                    <div className='border bg-white p-1'style={{borderRadius:"10px"}}>{icon}</div>
                        <div>{name}</div>
                        </NavLink>
                   </div>
                    </>
                )
            })
        }
    </div>
<div className='left '>
<Outlet/>
</div>
    </div>
    
  )
}

export default Sidebar