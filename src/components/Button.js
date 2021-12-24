function Button({ text, handleClick }) {
  return (
    <button className={`inline-block bg-green-800 text-white border-none px-5 py-3 m-1 rounded-md cursor-pointer text-sm focus:outline-none active:scale-[0.98]`} onClick={handleClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Add",
};
export default Button;
