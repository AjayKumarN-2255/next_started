import axios from "axios";

const API_URL = "http://localhost:5000";

export const getContacts = async (userId) => {
    try {
        const res = await axios.get(`${API_URL}/contacts?userId=${userId}`);
        return res.data;
    } catch (error) {
        console.log("error", error.message);
    }
}

export const getContactbyId = async (id) => {
    const res = await axios.get(`${API_URL}/contacts/${id}`);
    return res.data;
}

export const createContact = async (data) => {
    const res = await axios.post(`${API_URL}/contacts`, data);
    return res.data;
}

export const updateContact = async (id, data) => {
    const res = await axios.put(`${API_URL}/contacts/${id}`, data);
    return res.data;
}

export const deleteContact = async (id) => {
    const res = await axios.delete(`${API_URL}/contacts/${id}`);
    return res.data;
}