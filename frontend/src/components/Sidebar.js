import { useDispatch, useSelector } from "react-redux";
import {
  Squares2X2Icon,
  ChartBarIcon,
  Cog8ToothIcon,
  ArrowLeftOnRectangleIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import logo from "../images/ship-wheel.svg";
import LinkButtonSquare from "./common/LinkButtonSquare";
import { logout } from "../actions/userActions";

const Sidebar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-storm px-4 py-2 lg:pt-2 lg:pb-6 flex lg:flex-col justify-between">
      <div className="flex-shrink-0">
        <img
          className="mx-2 my-4 lg:mx-auto h-7 w-auto"
          src={logo}
          alt="Wheel"
        />
      </div>
      <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <LinkButtonSquare to="/" icon={Squares2X2Icon} />
        <LinkButtonSquare to="/" icon={ChartBarIcon} />
        <LinkButtonSquare to="/" icon={BeakerIcon} />
      </nav>
      <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <LinkButtonSquare to="/" icon={Cog8ToothIcon} />

        {userInfo ? (
          <LinkButtonSquare
            onClick={logoutHandler}
            to={"/login"}
            icon={ArrowLeftOnRectangleIcon}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidebar;
