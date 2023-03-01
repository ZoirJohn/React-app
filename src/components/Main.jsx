import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";

import ProfileContainer from "../container_components/ProfileContainer";
import MessagesContainer from "../container_components/MessagesContainer";
import News from "./News";
import Music from "./Music";
import Settings from "./Settings";
import UsersContainer from "../container_components/UsersContainer";

import styles from "../css/Main.module.css";

const Main = () => {
    return (
        <main>
            <div className={styles.container}>
                <Sidebar />
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />} />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/messages/*" element={<MessagesContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<UsersContainer />} />
                </Routes>
            </div>
        </main>
    );
};

export default Main;
