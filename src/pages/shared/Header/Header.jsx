import logo from "../../../../public/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center space-y-3 p-2">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg font-normal">Journalism Without Fear or Favour</p>
      <p> {moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
