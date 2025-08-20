import ContentLoader from 'react-content-loader'

export const H1Skeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={476}
            height={40}
            viewBox="0 0 476 40"
            backgroundColor="#ddddddff"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="15" rx="4" ry="4" width="300" height="30" />
        </ContentLoader>
    )
};
