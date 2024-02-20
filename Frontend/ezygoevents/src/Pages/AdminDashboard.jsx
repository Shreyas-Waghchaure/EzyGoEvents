import React from 'react'
import Sidebar from '../Componants/adminDashboard/Sidebar'

const AdminDashboard = () => {
  return (
    <div>
        <Sidebar/>
        <div className='d-flex justify-content-center'>
          <h1 >Welcome Admin !!!</h1>
        </div>
    </div>
  )
}

export default AdminDashboard