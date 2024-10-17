function CreateTask() {
  return (
    <div>
      <input
        className="w-3/4 h-[60px] bg-very-dark-desaturated-blue rounded-xl pl-8 absolute top-0 mt-[240px] left-1/2 translate -translate-x-1/2 focus:outline-none tracking-wider focus:text-dark-grayish-blue text-dark-grayish-blue"
        placeholder="Enter a todo"
      />
    </div>
  );
}

export default CreateTask;
