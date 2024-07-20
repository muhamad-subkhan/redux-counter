import { Provider } from 'react-redux';
import './App.css';
import store from './Store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
    </div>
    </Provider>
  );
}

export default App;
