import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const AppLayout:React.FC=()=>
{
    return(
        <div className='layout-wrapper'>
            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/public">Public</Link>
            </div> 
            <Outlet/>
       </div>
    )
}
export default AppLayout;