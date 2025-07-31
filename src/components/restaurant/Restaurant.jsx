import styles from "./restaurant.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Outlet } from "react-router";
import { TabLink } from "../tabLink/TabLink";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useContext } from 'react';
import { UserContext } from "../userContext";

export const Restaurant = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const { name } = restaurant || {};
    const { user } = useContext(UserContext);
    
    return (
        <>
            <ThemeWrapper>
                <h2 className={styles.h2}>{ name }</h2>
                <TabLink to={`/restaurants/${id}/menu`} children={"Menu"} />
                <TabLink to={`/restaurants/${id}/reviews`} children={"Reviews"} />
            </ThemeWrapper>
            <Outlet />
            { user && <ReviewForm /> }
        </>
    );
}