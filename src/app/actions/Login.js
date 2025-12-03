"use server"
import axios from "axios";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:5000";

export const Login = async (formData) => {

    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&&password=${formData.get("password")}`);
        const user = response.data[0];
        if (!user) {
            throw new Error('Invalid Credentials');
        }
        console.log(user);
    } catch (error) {
        console.log(error);
    }
    redirect("/contact");
}