import { useEffect, useState } from 'react';
export const ProgressBar = () => {
    const [scrollSrogress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / windowHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const barStyle = {
        width: `${scrollSrogress}%`,
        height: '7px',
        backgroundColor: '#262626',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
    };

    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={barStyle}></div>
        </div>
    );
}