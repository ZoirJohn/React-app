import PostsContainer from '../container_components/PostsContainer';
import Section from '../ui/Section';
import Preloader from '../ui/Loader';

const Profile = (props) => {
    if (!props.profilePage.profile) {
        return <Preloader />;
    }
    return (
        <section className='profile'>
            <Section {...props.profilePage} getStatus={props.getStatus} updateStatus={props.updateStatus} />
            <PostsContainer />
        </section>
    );
};

export default Profile;
