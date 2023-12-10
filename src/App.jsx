import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  return (
    <div className="App">
      
    </div>
  )
}

export default App;
