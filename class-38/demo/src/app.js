import { Provider } from 'react-redux';
import store from './store';
import Todo from './todoComponent';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
