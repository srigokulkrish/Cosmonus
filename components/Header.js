export default function Header() {
  return (
    <header className="py-3 bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="h5 mb-0">Cosmonus</h2>
        <nav>
          <a href="#" className="me-3 text-decoration-none text-muted">Home</a>
          <a href="#" className="text-decoration-none text-muted">Services</a>
        </nav>
      </div>
    </header>
  )
}
