import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './router/Router';
import HerosContext from './context/HerosContext';

function App() {
  return (
      <HerosContext>
        <Router/>
      </HerosContext>
  );
}

export default App;
