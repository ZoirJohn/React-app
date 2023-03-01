import { connect } from 'react-redux';
import { addPostAction, updatePostAction } from '../redux/profile-reducer';
import Posts from '../ui/Posts';

const mapStateToProps = (state) => {
   return { post: state.profilePage.post, message: state.profilePage.message };
};

const mapDispatchToProps = (dispatch) => {
   return {
      updatePost: (text) => {
         dispatch(updatePostAction(text));
      },
      addPost: () => {
         dispatch(addPostAction());
      },
   };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
