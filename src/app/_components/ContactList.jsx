import Link from 'next/link'
import React from 'react'
import DeleteBtn from './DeleteBtn'
import { deleteContactAction } from '../actions/contacts'

function ContactList({ contacts }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="p-4 bg-white shadow rounded flex justify-between items-center"
                >
                    <div>
                        <h2 className="text-xl font-semibold">{contact.name}</h2>
                        <p className="text-gray-600">{contact.email}</p>
                    </div>

                    <div className="flex gap-2">
                        {/* Edit form */}
                        <Link href={`/contacts/edit/${contact.id}`}>
                            <button
                                type="submit"
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Edit
                            </button>
                        </Link>

                        {/* Delete form */}
                        <DeleteBtn action={deleteContactAction} id={contact.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactList
