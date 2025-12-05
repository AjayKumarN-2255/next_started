import React from 'react'
import { getSession } from '../_lib/session'
import { deleteContact, getContacts } from '../api/contacts';
import Link from 'next/link';
import ContactList from '../_components/ContactList';


async function ContactPage() {

  const user = await getSession();
  if (!user) {
    return <div>Please <a href='/login'>Login</a> </div>
  }

  const contacts = await getContacts(user?.id);
  if (!contacts || contacts.length == 0) {
    return <div>No contacts</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Contacts</h1>
        <Link href='/contact/new' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Add Contact
        </Link>
      </div>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default ContactPage