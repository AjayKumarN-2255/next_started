"use client"
import React, { useActionState } from 'react'

function DeleteBtn({ action, id }) {

    // const [state, formAction] = useActionState(action);
    return (
        <form action={action}>
            <input type='hidden' name='id' value={id} />
            <button
                type="submit"
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"

            >
                Delete
            </button>
        </form>
    )
}

export default DeleteBtn