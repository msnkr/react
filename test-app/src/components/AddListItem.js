import cancelButton from "../images/cancel.svg";

export default function AddListItem({ x, id, onChecked }) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 text-start">
        <li className="text-lg capitalize font-semibold">{x}</li>
      </div>
      <div>
        <img
          src={cancelButton}
          onClick={() => onChecked(id)}
          className="w-6 cursor-pointer"
          alt="x"
        />
      </div>
    </div>
  );
}
