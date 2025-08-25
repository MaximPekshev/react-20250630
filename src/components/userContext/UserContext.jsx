import { useState } from 'react';
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userLogin = () => {
        setUser({ id: "a304959a-76c0-4b34-954a-b38dbf310360" });
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