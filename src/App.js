//Libraries
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import Home from './components/Home.js';

function App() {

  return (
    <Router className="appBody">
      <Routes>
        <Route exact path ='/portfolio' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
