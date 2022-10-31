import { createStore } from "redux";

const initialState = {
  count: 1,
  posts: [
    { id: 1, title: "Reduxについて" },
    {
      id: 2,
      title: "ReduxのHooksについて",
    },
  ],
};

const reducer = (state = initialState) => {
  return state;
};

//store作成
//componentを囲むことで、囲まれたコンポーネント内でstoreを使えるようになる
const store = createStore(reducer);
//stateの中を確認できる
// console.log(store.getState());

export default store;
