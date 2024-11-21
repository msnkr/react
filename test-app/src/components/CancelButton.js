import cancelButton from "../images/cancel.svg";

export default function CancelButton() {
  return (
    <button>
      <img src={cancelButton} className="w-6 h-6" />
    </button>
  );
}
