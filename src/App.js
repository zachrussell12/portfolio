//Libraries
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';

//Components
import Home from './components/Home.js';
import DiscordFocus from './pages/DiscordFocus.js';
import MindfulFocus from './pages/MindfulFocus.js';

function App() {

  const isMobile = useMediaQuery({
    query: '(max-width: 700px)'
  })

  return (
    <Router className="appBody">
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route path="mindful" element={<MindfulFocus mobile={isMobile}/>}/>
        <Route path="discord" element={<DiscordFocus mobile={isMobile}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
