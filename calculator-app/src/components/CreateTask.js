function CreateTask() {
  return (
    <div className="create-task-container flex">
      <div className="check-icon-container"></div>
      <div className="input-container">
        <input
          type="text"
          className="w-4/5 h-[60px] rounded-xl bg-very-dark-desaturated-blue focus:outline-none focus:text-white absolute top-1/4 right-1/2 translate translate-x-1/2 text-center font-semibold tracking-wider"
          placeholder="Create a new todo"
        />
      </div>
    </div>
  );
}

export default CreateTask;
