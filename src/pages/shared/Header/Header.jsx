import logo from "../../../../public/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p className="text-lg font-normal">Journalism Without Fear or Favour</p>
      <p> {moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
