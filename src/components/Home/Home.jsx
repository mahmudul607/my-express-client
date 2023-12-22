import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css'

const Home = () => {
    return (
        <div className="text-center">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;