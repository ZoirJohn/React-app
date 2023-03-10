import { connect } from 'react-redux';
import { addContactAction, updateContactAction } from '../redux/messages-reducer';
import Messages from '../components/Messages';

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
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
