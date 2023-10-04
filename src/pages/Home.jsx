import Header from "./shared/Header/Header";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNav from "./shared/RightSideNav/RightSideNav";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar/>
        

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 border">

<div>
<LeftSideNav/>
</div>

<div className="md:col-span-2 border">
<h2>main writing</h2>
</div>

<div>
<RightSideNav/>
</div>

</div>

        </div>
    );
};

export default Home;