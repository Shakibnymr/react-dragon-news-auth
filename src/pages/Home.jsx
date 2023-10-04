import Header from "./shared/Header/Header";
import Navbar from "./shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar/>
            <h2 className="text-3xl">this is home</h2>
        </div>
    );
};

export default Home;