import { connect } from 'react-redux';
import { addContactAction, updateContactAction } from '../redux/messages-reducer';
import Messages from '../components/Messages';
import withAuthRedirect from '../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return { message: state.messagesPage.message, data: state.messagesPage.data, post: state.messagesPage.post, auth: state.auth.isAuthorized };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            dispatch(updateContactAction(text));
        },
        addMessage: () => {
            dispatch(addContactAction());
        },
    };
};

const authRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default MessagesContainer;
