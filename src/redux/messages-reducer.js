const ADD_CONTACT = 'ADD-CONTACT';
const UPDATE_CONTACT = 'UPDATE-CONTACT';

const initialState = {
    data: [
        {
            name: 'Andrew',
            id: 1,
        },
        {
            name: 'Egor',
            id: 2,
        },
        {
            name: 'Sasha',
            id: 3,
        },
        {
            name: 'Dimych',
            id: 4,
        },
    ],
    message: [
        { text: 'Hi there', id: 1 },
        { text: 'Hey', id: 2 },
        { text: 'Hello', id: 3 },
        { text: 'Hi', id: 4 },
    ],
};

function messages_reducer(state = initialState, action) {
    if (action.type === ADD_CONTACT) {
        return { ...state, message: [...state.message, { text: action.text, id: state.message.length + 1 }] };
    }
    return state;
}

const addContactAction = (text) => ({ type: ADD_CONTACT, text });

export { messages_reducer, addContactAction };
