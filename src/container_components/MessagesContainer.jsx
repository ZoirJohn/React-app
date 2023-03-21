import { connect } from 'react-redux';
import { addContactAction, updateContactAction } from '../redux/messages-reducer';
import { compose } from 'redux';
import Messages from '../components/Messages';
import withAuthRedirect from '../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return { message: state.messagesPage.message, data: state.messagesPage.data, post: state.messagesPage.post, auth: state.auth.isAuthorized };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addContactAction(text));
        },
    };
};

const MessagesContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages);

export default MessagesContainer;
