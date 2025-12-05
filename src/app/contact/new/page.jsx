import React from 'react'
import ContactForm from '@/app/_components/ContactForm'
import { createContactAction } from '@/app/actions/contacts'

function NewContact() {
  return (
    <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Create New Contact</h1>
      <ContactForm action={createContactAction}/>
    </div>
  )
}

export default NewContact