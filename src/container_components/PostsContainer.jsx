import { connect } from 'react-redux';
import { addPostAction } from '../redux/profile-reducer';
import Posts from '../ui/Posts';

const mapStateToProps = (state) => {
    return { message: state.profilePage.message };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostAction(text));
        },
    };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
