function CreateTask() {
  return (
    <div>
      <input
        className="w-3/4 h-[60px] bg-very-dark-desaturated-blue rounded-xl pl-4 absolute top-0 mt-[240px] left-1/2 translate -translate-x-1/2 focus:outline-none"
        placeholder="Enter a todo"
      />
    </div>
  );
}

export default CreateTask;
