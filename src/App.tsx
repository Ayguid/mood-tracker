import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Feed } from './pages/Feed';
import { NewMemory } from './pages/NewMemory';
import { EditMemory } from './pages/EditMemory';
import { Tags } from './pages/Tags';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/new">New Memory</Link>
          <Link to="/tags">Tags</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/new" element={<NewMemory />} />
          <Route path="/edit/:id" element={<EditMemory />} />
          <Route path="/tags" element={<Tags />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;