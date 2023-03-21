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
    post: '',
};

function messages_reducer(state = initialState, action) {
    let stateCopy = { ...state };
    if (action.type === ADD_CONTACT) {
        stateCopy.message.push({ text: action.text, id: stateCopy.message.length + 1 });

    } else if (action.type === UPDATE_CONTACT) {
        stateCopy.post = action.text;
    }
    return stateCopy;
}

const addContactAction = (text) => ({ type: ADD_CONTACT, text });

export { messages_reducer, addContactAction };
