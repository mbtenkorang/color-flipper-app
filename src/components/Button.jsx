const Button = (props) => {
  const { name, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 text-xl border border-slate-300 hover:bg-white hover:text-black hover:transition-all hover:duration-300"
    >
      {name}
    </button>
  );
};

export { Button };
