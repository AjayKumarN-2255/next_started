"use client"
import React, { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

function ContactForm({ action, contact }) {
    const [state, formAction] = useActionState(action, null);
    const router = useRouter();
    useEffect(() => {
        if (state?.success) {
            router.push("/contact");
        }
    }, [state, router])
    return (
        <form className="space-y-4 max-w-sm mx-auto p-6"
            action={formAction}>
            <input type='hidden' name='id' value={contact?.id} />
            {/* name */}
            <div className="grid grid-cols-4 items-center gap-2">
                <label className="font-medium text-gray-700">Name:</label>
                <input
                    type="name"
                    name="name"
                    defaultValue={contact?.name}
                    className={`col-span-3 w-full px-3 py-2 rounded-lg border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your email"
                />
            </div>

            {/* email */}
            <div className="grid grid-cols-4 items-center gap-2">
                <label className="font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    defaultValue={contact?.email}
                    className={`col-span-3 w-full px-3 py-2 rounded-lg border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Enter your password"
                />
            </div>
            {state?.error && (
                <p className="mt-2 text-sm text-red-600 bg-red-100 px-2 py-1 rounded">
                    {state.error}
                </p>
            )}

            {/* Button */}
            <button
                className={`w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition
                cursor-pointer"`}
            >
                Save
            </button>
        </form>
    )
}

export default ContactForm