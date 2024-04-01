// import logo from './logo.svg';
import './App.css';

function LibraryHeader() {
  return (
    <>
      <h1 style={{ color: 'gold' }}>Welcome to the Libarary</h1>
      <p>
        Scroll Down to see Our Collection
      </p>
    </>
  )
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Ernest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
}

function Bookshelf() {
  return (
    <>
      <h2 style={{ color: 'gold' }}>Bookshelf</h2>
      <p>{book.title} ({book.published}) - {book.author}</p>
      {book.image &&
        <img
          className="bookCover"
          src={book.image}
          alt={book.title + ' cover'}
          style={{
            width: book.width,
            height: book.height
          }}
        />
      }
    </>
  )
}

const magazines = [
  {
    id: 1, title: 'Architectural Digest', theme: 'Architecture', isAvailable: true
  },
  {
    id: 2, title: 'Dwell', theme: 'Architecture', isAvailable: true
  },
  {
    id: 3, title: 'Communication Arts', theme: 'Design', isAvailable: false
  },
]

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li key={zine.id} style={{ color: zine.isAvailable ? '' : 'grey' }}>
      {zine.isAvailable ? 'Available: ' : 'Unavailable: '}
      {zine.title} ({zine.theme})
    </li>
  );

  return (
    <>
      <h2 style={{ color: 'gold' }}>Magazine Rack</h2>
      <ul>{listZines}</ul>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LibraryHeader />
        <Bookshelf />
        <ZineRack />
      </header>
    </div>
  );
}

export default App;
