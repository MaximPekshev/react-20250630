import { useState } from 'react';
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext value={{ user, setUser }}>
            {children}
        </UserContext>
    );
};