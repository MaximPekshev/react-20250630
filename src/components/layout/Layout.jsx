import './layout.css'
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = ({ children }) => {
    return (
        <>  
            <ProgressBar />
            <header><h1>Restaurants</h1></header>
            <div>{ children }</div>
            <footer></footer>
        </>
    );
}