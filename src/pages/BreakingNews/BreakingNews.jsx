import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"

const BreakingNews = () => {
    return (
        <div className="flex space-x-2">
            <button className="btn btn-secondary">Breaking News</button>

            <Marquee pauseOnHover={true} speed={50}>
  <Link to="/" className="m-12">I can be a React component, multiple React components, or just some text.</Link>
  <Link to="/" className="m-12">I can be a React component, multiple React components, or just some text.</Link>
  <Link to="/" className="m-12">I can be a React component, multiple React components, or just some text.</Link>
</Marquee>

        </div>
    );
};

export default BreakingNews;