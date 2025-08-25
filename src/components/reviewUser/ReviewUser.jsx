
export const ReviewUser = ({ user }) => {
    if (!user) {
        return;
    }
    return user.name;
}