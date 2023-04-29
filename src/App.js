import logo from './logo.svg';
import './App.css';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Nav from './components/homePage/Navbar'
import BottomNav from './components/homePage/buttomNav'
import HomePage from './pages/homePage'
import WritingPage from './pages/writingPage'
import Read from './pages/readPage'
import Bookmark from './pages/bookmark'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
        <Route path="/"  element={ <HomePage/> }/>
        <Route path="/write" element={ <WritingPage/> } />
        <Route path="/read/id" element={ <Read/>} />
        <Route path="/bookmarks" element={ <Bookmark/>} />
        </Routes>
        <BottomNav/>
      </div>
    </Router>
  );
}

export default App;
