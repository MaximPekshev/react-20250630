import styles from "./restaurant.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { Outlet } from "react-router";
import { TabLink } from "../tabLink/TabLink";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useContext } from 'react';
import { UserContext } from "../userContext";
import { H1Skeleton } from "../skeletons/H1Skeletom";
import { useGetRestaurantByIdQuery } from "../../redux/services/api";
import { useAddReviewMutation } from "../../redux/services/api";

export const Restaurant = ({ id }) => {
    const { data: restaurant, isLoading, isFetching } = useGetRestaurantByIdQuery(id);
    const { user } = useContext(UserContext);

    const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

    const handleAddReview = (form) => {
        addReview({
            restaurantId: id,
            review: {
                rating: form.rating,
                text: form.review,
                userId: user.id,
            },
        });
    };


    if ( isLoading || isFetching ) {
        return (
            <>
                <ThemeWrapper>
                    <h2 className={styles.h2}>
                        <H1Skeleton />
                    </h2>
                    <>
                        <TabLink to={`/restaurants/${id}/menu`} children={"Menu"} />
                        <TabLink to={`/restaurants/${id}/reviews`} children={"Reviews"} />
                    </>
                </ThemeWrapper>
                <Outlet />
                { user && <ReviewForm userId={user.id} onSubmit={handleAddReview} isLoading={isAddReviewLoading} /> }
            </>
        )
    }

    return (
        <>
            <ThemeWrapper>
                <h2 className={styles.h2}>
                    { restaurant.name }
                </h2>
                <>
                    <TabLink to={`/restaurants/${id}/menu`} children={"Menu"} />
                    <TabLink to={`/restaurants/${id}/reviews`} children={"Reviews"} />
                </>
            </ThemeWrapper>
            <Outlet />
            { user && <ReviewForm userId={user.id} onSubmit={handleAddReview} isLoading={isAddReviewLoading} /> }
        </>
    );
}