export function Navbar() {
  return (
    <div>
      <div className="icon">
        <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#00001A" fill-rule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
      </div>
      <div>
        <ul className="navbar-list">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </div>
  );
}
