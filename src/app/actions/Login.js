"use server"
import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:5000";

export const Login = async (formData) => {
    let user;

    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&&password=${formData.get("password")}`);
        user = response.data[0];
    } catch (error) {
        console.log("Network or server error:", error);
        return { error: "Server error" };
    }

    if (!user) {
        return { error: "Invalid Credentials" };
    }

    const { password, ...rest } = user;
    await setSession(rest);
    redirect("/contact");
}


export const Logout = async() => {
    await deleteSession();
    redirect("/login");
}