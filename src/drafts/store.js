import { profile_reducer } from '../redux/profile-reducer';
import { messages_reducer } from '../redux/messages-reducer';

const store = {
   _state: {
      messagesPage: {
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
      },
      profilePage: {
         message: [
            { text: 'Hello', id: 1 },
            { text: 'Bye', id: 2 },
            { text: 'Watcha you gonna do', id: 3 },
         ],
         post: '',
      },
   },
   _renderTree() {
      console.log('Hello');
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._renderTree = observer;
   },

   dispatch(action) {
      profile_reducer(this._state, action);
      messages_reducer(this._state, action);
      this._renderTree(this._state);
   },
};

export { store };
