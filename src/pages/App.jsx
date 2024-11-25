import './css/index.css'

function App() {
  return (
    <div class="library-container">
      <h1 className='library-header'>React Components Library</h1>
      <div class="components-grid">
        <a href="/profile-card" class="component-card">
          <h1 className='library-nav-h1' href="/profile-card">Profile Card</h1>
          <p className='library-components-desc'>React Component for a Profile Card</p>
        </a>
        <a href="/footer" class="component-card">
          <h1 className='library-nav-h1' href="/footer">Footer</h1>
          <p className="library-components-desc">React Component for a Footer</p>
        </a>
        <a href="/gallery" class="component-card">
          <h1 className='library-nav-h1' href="/gallery">Responsive Gallery</h1>
          <p className="library-components-desc">React Component for a Responsive Gallery</p>
        </a>
        <a href="/" class="component-card">
          <h1 className='library-nav-h1' href="/">TBD</h1>
          <p className="library-components-desc">React Component for who knows what</p>
        </a>
      </div>
    </div>
  );
}

export default App;