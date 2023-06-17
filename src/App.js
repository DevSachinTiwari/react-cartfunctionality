import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ProductPage from "./pages/ProductPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProductPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
