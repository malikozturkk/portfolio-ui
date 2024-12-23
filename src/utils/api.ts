import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const getRequest = async <T>(url: string): Promise<T | any> => {
    try {
        const response = await axios.get<T>(`${BASE_URL}${url}`);
        return response.data;
    } catch (error) {
        throw new Error("Request didn't success")
    }
}