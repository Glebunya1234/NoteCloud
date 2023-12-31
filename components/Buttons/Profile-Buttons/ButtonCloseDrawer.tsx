const ButtonCloseDrawer = () => {
  return (
    <>
      <button  className="  btn-sm btn-square  btn btn-active btn-ghost"  >

      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      >
        <svg
          className="swap-on fill-current icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label> 
      </button>
    </>
  );
};
export default ButtonCloseDrawer;
