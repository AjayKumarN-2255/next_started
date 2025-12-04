"use server";

import { cookies } from "next/headers"

export const setSession = async (user) => {
    const cookieStore = await cookies()
    console.log("working")
    cookieStore.set("session", JSON.stringify(user), {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
    });
};


export const getSession = async () => {
    const cookieStore = await cookies()
    const session = cookieStore.get("session");
    return session ? JSON.parse(session.value) : null;
};

export const deleteSession = async() => {
    const cookieStore = await cookies()
    cookieStore.delete("session");
}