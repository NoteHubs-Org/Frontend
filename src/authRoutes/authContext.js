import { createContext, useEffect, useState } from "react";
import { api } from "../utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ chidren }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get("/user")
        .then(res => setUser(res.data.user))
        .catch(() => setUser(null));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {chidren}
        </AuthContext.Provider>
    )
}