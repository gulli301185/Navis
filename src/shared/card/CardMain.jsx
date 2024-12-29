const CardMain = ({ children, className }) => {
  return (
    <div
      className={`flex  flex-col justify-between p-7 rounded-2xl ${className}  `}
    >
      {children}
    </div>
  );
};

export default CardMain;
