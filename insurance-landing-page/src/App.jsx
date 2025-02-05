import "./App.css"
import navIcon from "./assets/icon-hamburger.svg"

function App() {
  return (
    <div>
      <div className="navbar-container flex justify-between p-12">
        <div>
          <p>INSURE</p>
        </div>
        <div>
          <img src={navIcon} alt="hamburger-icon" />
        </div>
      </div>
    </div>
  )
}
export default App
