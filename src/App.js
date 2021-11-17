import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
