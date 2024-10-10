import logo from './logo.svg';
import './App.css';

const wording = "Congrats"

function Congrats() {
  return (
    <div>
      <h1 className="text-4xl text-gray-400 font-bold p-8">
        {wording}
      </h1>
    </div>
  )
}

export default function CongratsPage() {
  return (
    <div>
      <Congrats />
    </div>
  )
}