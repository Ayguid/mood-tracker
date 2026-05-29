import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Feed } from './pages/Feed';
import { NewMemory } from './pages/NewMemory';
import { EditMemory } from './pages/EditMemory';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <nav style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/new">New Memory</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/new" element={<NewMemory />} />
          <Route path="/edit/:id" element={<EditMemory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;