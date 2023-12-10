import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);

  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>GET USERS</button>
      <h1>
        Users:
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div>{user.name}</div>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default App;
