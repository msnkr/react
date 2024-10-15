const handleClick = () => {
  let burgerIcon = document.querySelector(".burger-icon");
  let closeIcon = document.querySelector(".close");
  let navList = document.querySelector(".navbar-list");
  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.add("clicked");
    closeIcon.classList.add("clicked");
    navList.classList.add("clicked");
  });
  closeIcon.addEventListener("click", () => {
    burgerIcon.classList.remove("clicked");
    closeIcon.classList.remove("clicked");
    navList.classList.remove("clicked");
  });
};

export function Navbar() {
  return (
    <div>
      <div className="icon">
        <svg
          className="burger-icon"
          width="40"
          height="17"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClick}
        >
          <g fill="#00001A" fill-rule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
        <svg
          className="close"
          width="32"
          height="31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#00001A" fill-rule="evenodd">
            <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
            <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
          </g>
        </svg>
      </div>
      <div>
        <ul className="navbar-list">
          <li className="list-item">Home</li>
          <li className="list-item">New</li>
          <li className="list-item">Popular</li>
          <li className="list-item">Trending</li>
          <li className="list-item">Categories</li>
        </ul>
      </div>
    </div>
  );
}
