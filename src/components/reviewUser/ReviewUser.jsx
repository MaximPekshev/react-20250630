import { selectUserById } from "../../redux/entities/users/slice";
import { useSelector } from "react-redux";

export const ReviewUser = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, userId));
    if (!user) {
        return;
    }
    return (
        <>
            {user.name}
        </>
    );
}