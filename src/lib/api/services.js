export const getServices = async (id) => {
    try {
        const res = await fetch("http://localhost:3000/api/services");
        const data = await res.json();
        return data.result || [];
    } catch (error) {
        throw new Error(error.message);
    }
};