// eslint-disable-next-line react/prop-types
const UserIcon = ({ paths, ...props }) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18.375 19C18.375 16.7909 15.6887 15 12.375 15C9.06129 15 6.375 16.7909 6.375 19M12.375 12C10.1659 12 8.375 10.2091 8.375 8C8.375 5.79086 10.1659 4 12.375 4C14.5841 4 16.375 5.79086 16.375 8C16.375 10.2091 14.5841 12 12.375 12Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...paths}
        />
      </svg>
    </>
  );
};

export default UserIcon;
