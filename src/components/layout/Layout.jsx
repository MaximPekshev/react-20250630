import './layout.css'
export const Layout = ({ children }) => {
    return (
        <>
            <header><h1>Restaurants</h1></header>
            <div>{ children }</div>
            <footer></footer>
        </>
    );
}