import logo from './logo.svg';
import './App.css';


function Profile() {
  return (
    <img className=" rounded-full w-[100px]"
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

export default function Gallery() {
  return (
    <div>
      <h1 className="text-4xl text-gray-400">Amazing Scientist</h1>
      <div className="flex space-x-8 p-8">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  )
}
