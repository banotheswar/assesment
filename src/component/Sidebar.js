import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    //Text Box, Button, Image, Form.
    const array=[
        {name:"Text",link:"/text"},
        {name:"Box",link:"/box"},
        {name:"Image",link:"/image"},
        {name:"Form",link:"/form"}

    ]
  return (
    <div className='sidebar'>
        {
            array?.map(({link,name})=>{
                return (
                    <>
                   <div>
                    
                    <IoMdMenu size={20}/>
                    <NavLink className={"link py-2 px-2"} to={link}>{name}</NavLink>
                   </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Sidebar