import cancelButton from "../images/cancel.svg";

export default function CancelButton({ item, id }) {
  return (
    <button>
      <img onClick={() => item(id)} src={cancelButton} className="w-6 h-6" />
    </button>
  );
}
