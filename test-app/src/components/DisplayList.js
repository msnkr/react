export default function DisplayList({ onChecked, idx, arrItem }) {
  return (
    <li
      className="capitalize font-semibold cursor-pointer"
      onClick={() => onChecked(idx)}
    >
      {arrItem}
    </li>
  );
}
