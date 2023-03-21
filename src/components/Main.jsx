import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';

import ProfileContainer from '../container_components/ProfileContainer';
import MessagesContainer from '../container_components/MessagesContainer';
import News from './News';
import Music from './Music';
import Settings from './Settings';
import UsersContainer from '../container_components/UsersContainer';
import Login from './Login';

import styles from '../css/Main.module.css';

const Main = (props) => {
    return (
        <main>
            <div className={styles.container}>
                <Sidebar />
                <Routes>
                    <Route path='/' />
                    <Route path='/profile/:userId' element={<ProfileContainer />} />
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/messages/*' element={<MessagesContainer />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </main>
    );
};

export default Main;
