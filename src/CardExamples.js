const imgSrc = 'https://instagram.fyyz1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/118745704_2689015474648912_8353060761748294209_n.jpg?_nc_ht=instagram.fyyz1-2.fna.fbcdn.net&_nc_ohc=-alP294QwvIAX9dj6eC&tp=1&oh=0015c37f0d5273a9cc2570d80c307a6a&oe=60319B02'

function MultiItems() {
  return (
    <div className="body">
      <article>
        <header>
          Featured items
        </header>
        <div>
          <h3>Card Title</h3>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </div>
        <div>
          Cras justo odio
        </div>
        <div>
          Dapibus ac facilisis in
        </div>
        <div>
          Vestibulum at eros
        </div>
        <div>
          <a href="#">Card Link</a>
          <a href="#">Another Link</a>
        </div>
      </article>
    </div>
  );
}

function Button() {
  return (
    <div className="body">
      <article>
        <header>
          <h3>Featured</h3>
        </header>
        <div>
          <h3>Special title treatment</h3>
          <p>
            With supporting text below as a natural lead-in to additional content.
          </p>
          <button>
            Go Somewhere
          </button>
        </div>
      </article>
    </div>
  );
}

function CenterAndMuted() {
  return (
    <div className="body">
      <article className="center">
        <header>Featured</header>
        <div>
          <h3>Special title treatment</h3>  
          <p>
            With supporting text below as a natural lead-in to additional content.
          </p>
          <button>
            Go Somewhere
          </button>
        </div>
        <footer className="muted">
          2 days ago
        </footer>
      </article>
    </div>
  );
}

export default App;
