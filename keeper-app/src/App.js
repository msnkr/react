import "./style.css";
import { Heading } from "./components/header";
import { Footer } from "./components/footer";
import { Notes } from "./components/note";

export default function App() {
  return (
    <div>
      <Heading />
      <Notes />
      <Footer />
    </div>
  );
}
