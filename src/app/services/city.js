import { baseUrl } from "@/app/utils/Constant";

export const createCity = async (formData) => {
    try {
        const data = await fetch(`${baseUrl}/v1/api/create-city`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}
export const getCity = async () => {
    try {
        const data = await fetch(`${baseUrl}/v1/api/get-city`);
        const res = await data.json();
        return res;
    } catch (error) {
        return error;
    }
}
