import { useState } from 'react';
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userLogin = () => {
        setUser({ user: "Some user" });
    };

    const userLogout = () => {
        setUser(null);
    };

    return (
        <UserContext value={{ user, userLogin, userLogout }}>
            {children}
        </UserContext>
    );
};