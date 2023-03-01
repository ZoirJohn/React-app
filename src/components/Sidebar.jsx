import { NavLink } from "react-router-dom";

import { AiOutlineSetting, AiOutlineMessage, AiOutlineProfile, AiOutlineUserSwitch, AiOutlineLogin } from "react-icons/ai";
import { BsNewspaper, BsFileMusic } from "react-icons/bs";

import styles from "../css/Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li>
                    <AiOutlineProfile />
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <AiOutlineMessage />
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                <li>
                    <BsNewspaper />
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <BsFileMusic />
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li>
                    <AiOutlineSetting />
                    <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                    <AiOutlineUserSwitch />
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <AiOutlineLogin />
                    <NavLink to="/login">Log in</NavLink>
                </li>
            </ul>
        </aside>
    );
};
export default Sidebar;
