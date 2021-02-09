import {Provider, connect} from 'react-redux';
import './App.css';
import { store } from './config/store';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppRouter/>
        </div>
        </BrowserRouter>  
    </Provider>
  );
}

export default App;
