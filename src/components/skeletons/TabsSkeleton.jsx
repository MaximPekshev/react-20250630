import ContentLoader from 'react-content-loader'

export const TabsSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={476}
            height={50}
            viewBox="0 0 476 50"
            backgroundColor="#ddddddff"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="15" rx="4" ry="4" width="80" height="30" />
            <rect x="90" y="15" rx="4" ry="4" width="80" height="30" />
            <rect x="180" y="15" rx="4" ry="4" width="80" height="30" />
            <rect x="270" y="15" rx="4" ry="4" width="80" height="30" />
        </ContentLoader>
    )
};