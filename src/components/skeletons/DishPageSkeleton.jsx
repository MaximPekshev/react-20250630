import ContentLoader from 'react-content-loader'

export const DishPageSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={476}
            height={250}
            viewBox="0 0 476 250"
            backgroundColor="#ddddddff"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="4" ry="4" width="155" height="232" />
            <rect x="175" y="10" rx="4" ry="4" width="100%" height="30" />
            <rect x="175" y="70" rx="4" ry="4" width="100%" height="25" />
            <rect x="175" y="115" rx="4" ry="4" width="100%" height="100" />
        </ContentLoader>
    )
};