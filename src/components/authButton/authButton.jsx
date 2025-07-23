import { useContext } from 'react';
import { UserContext } from '../userContext';
import { Button } from '../button/Button';
export const AuthButton = () => {
    const { user, userLogin, userLogout } = useContext(UserContext);

    return user ? (
        <Button
            children={`Logout`}
            onClick={userLogout}
            sizeViewVariant='xs'
        />
    ) : (
        <Button
            children={`Login`}
            onClick={userLogin}
            sizeViewVariant='xs'
        />
    );
};