function CurrentTasks({ prop }) {
  return (
    <div className="relative">
      <div>
        <p className="text-dark-grayish-blue capitalize text-sm task">
          {prop}
          <span className="close-icon absolute top-0 right-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fill-rule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </span>
        </p>
        <div className="w-full h-[1px] bg-dark-grayish-blue mx-auto mt-2"></div>
      </div>
    </div>
  );
}
export default CurrentTasks;
