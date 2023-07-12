import { Outlet, useLocation } from "react-router-dom";
import styles from "../styles/Home.module.scss";

function App() {
    return (
        <div className={styles.Home}>
            <h1> Index of the page</h1>
        </div>
    );
}

export default App;