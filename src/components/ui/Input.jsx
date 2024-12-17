const Input = ({children,placeholder,className,type, value}) => {
  return (
    <>
    <label htmlFor="" className={` ${className}`}></label>
      <input
      type={`${type}`}
        className={`w-full rounded-md bg-white  hover:text-black  p-3 ${className}`}
        placeholder={` ${placeholder}`}
        value={`${value}`}
      />
    </>
  );
};

export default Input;
