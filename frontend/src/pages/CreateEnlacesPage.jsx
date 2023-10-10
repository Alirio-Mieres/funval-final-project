import React from 'react'
import { CreateRolForm } from '../components/CreateRolForm'
import { Navbar } from '../ui/Navbar'
import { CreateEnlanceForm } from '../components/CreateEnlanceForm'

export const CreateEnlacesPage = () => {
  return (
    <div className="flex h-screen">
        <Navbar />
        <CreateEnlanceForm />
    </div>
  )
}
