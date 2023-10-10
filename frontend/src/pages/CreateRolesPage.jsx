import React from 'react'
import { CreateRolForm } from '../components/CreateRolForm'
import { Navbar } from '../ui/Navbar'

export const CreateRolesPage = () => {
  return (
    <div className="flex h-screen">
        <Navbar />
        <CreateRolForm />
    </div>
  )
}
