import React, { use } from 'react'
import ContactForm from '@/app/_components/ContactForm'
import { getContactbyId } from '@/app/api/contacts';
import { editContactAction } from '@/app/actions/contacts'

function EditContact({ params }) {
  const { id } = use(params);
  const contact = use(getContactbyId(id));

  console.log(contact)
  return (
    <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Create New Contact</h1>
      <ContactForm action={editContactAction} contact={contact} />
    </div>
  )
}

export default EditContact