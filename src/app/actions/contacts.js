"use server";

import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contacts";
import { getSession } from "../_lib/session";

export const deleteContactAction = async (formData) => {
    const id = formData.get("id");
    try {
        await deleteContact(id);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("error while deleting contact", error);
        return { error: "error while delete contact" };
    }
}


export const createContactAction = async (prevState, formData) => {

    const name = formData.get("name");
    const email = formData.get("email");
    if (!name) {
        return { error: 'please provide all details' }
    }
    if (!email) {
        return { error: 'please provide all details' }
    }
    const user = await getSession();
    const data = {
        name, email, userId: user?.id
    }
    try {
        await createContact(data);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("error while deleting contact", error);
        return { error: "error while create contact" };
    }
}

export const editContactAction = async (prevState, formData) => {

    const name = formData.get("name");
    const email = formData.get("email");
    if (!name) {
        return { error: 'please provide all details' }
    }
    if (!email) {
        return { error: 'please provide all details' }
    }
    const id = formData.get("id");
    const user = await getSession();
    const data = {
        name, email, userId: user?.id
    }
    try {
        await updateContact(id, data);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("error while deleting contact", error);
        return { error: "error while create contact" };
    }
}