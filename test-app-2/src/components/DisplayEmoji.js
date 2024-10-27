import { emojipedia } from "./emojipedia";

export function DisplayEmoji() {
  return (
    <div
      className="md:grid grid-cols-3 gap-4 p-8 rounded-xl 
    space-y-4 text-center md:space-y-0 
    flex flex-col"
    >
      {emojipedia.map((emoji, index) => (
        <div key={index} className="p-2 space-y-4 border">
          <p className="text-4xl">{emoji.emoji}</p>
          <p className="text-2xl text-green-400 p-2 font-semibold">
            {emoji.name}
          </p>
          <p>{emoji.meaning}</p>
        </div>
      ))}
    </div>
  );
}
