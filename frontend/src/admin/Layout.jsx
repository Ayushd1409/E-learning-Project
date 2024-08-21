import React from 'react'
import Sidebar from './Sidebar'

function Layout({children}) {
  return (
    <>
    <div className='min-h-screen flex bg-slate-100'>
        <Sidebar/>
        <div>{children}</div>
    </div>
    </>
  )
}

export default Layout