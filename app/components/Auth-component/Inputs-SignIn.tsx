


export function InputSignInLogin() {
  return (
    <input
      type="text"
      placeholder="Login"
      className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
    />
  );
}

export function InputSignInPassword() {
  return (
    <input
      type="text"
      placeholder="Password"
      className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
      
    />
  );
}


export function ButtonSignIn() {
  return <button className="btn glass w-w90% max-w-xs m-1 " onClick={() => {console.log("hello log in")}}>Log In</button>;
}
