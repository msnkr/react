import "./style.css";
import { Heading } from "./components/header";
import { Footer } from "./components/footer";
import { Notes } from "./components/note";
import { dataArr } from "./components/data";

export default function App() {
  return (
    <div>
      <Heading />
      {dataArr.map((data) => (
        <div key={data.id}>
          <Notes title={data.title} content={data.content} />
        </div>
      ))}
      <Footer />
    </div>
  );
}
