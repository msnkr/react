export default function AddLi({ text, onChecked, id }) {
  return (
    <li
      onClick={() => {
        onChecked(id);
      }}
      className={`cursor-pointer`}
    >
      {text}
    </li>
  );
}
