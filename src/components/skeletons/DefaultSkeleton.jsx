import ContentLoader from 'react-content-loader'

export const DefaultSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={476}
            height={100}
            viewBox="0 0 476 100"
            backgroundColor="#ddddddff"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="15" rx="4" ry="4" width="300" height="15" />
            <rect x="0" y="40" rx="3" ry="3" width="300" height="15" />
            <rect x="0" y="65" rx="3" ry="3" width="300" height="15" />
        </ContentLoader>
    )
};
