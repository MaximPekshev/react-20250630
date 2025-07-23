import { useContext } from 'react';
import { UserContext } from '../userContext';
import { Button } from '../button/Button';
export const AuthButton = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({ user: 'Some user' });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return user ? (
        <Button
            children={`Logout`}
            onClick={handleLogout}
            sizeViewVariant='xs'
        />
    ) : (
        <Button
            children={`Login`}
            onClick={handleLogin}
            sizeViewVariant='xs'
        />
    );
};