const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = {
    server: {
        POST: async (path: string, payload: Record<string, any>, token: string) => {
            return fetch(`${BASE_URL}${path}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
        },
        PUT: async (path: string, payload: Record<string, any>, token: string) => {
            return fetch(`${BASE_URL}${path}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
        },
        GET: async (path: string, token: string) => {
            return fetch(`${BASE_URL}${path}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
        },
        DELETE: async (path: string, token: string) => {
            return fetch(`${BASE_URL}${path}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
        },
    },
};

export default api;