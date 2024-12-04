export default function ShowListItem({ listItem, onChecked, idx }) {
  return (
    <li
      className="cursor-pointer capitalize font-semibold"
      onClick={() => onChecked(idx)}
    >
      {listItem}
    </li>
  );
}
