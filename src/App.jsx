import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);

  return (
    <div className="App">
      <h1>
        Users: {users.map(user => (
          <div>{user.name}</div>
        ))}
      </h1>
    </div>
  )
}

export default App;
