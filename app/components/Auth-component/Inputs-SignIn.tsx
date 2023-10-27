export function InputSignInLogin() {
  return (
    <input
      type="text"
      placeholder="Login"
      className="input input-bordered w-w90% max-w-xs  m-1 mt-5"
    />
  );
}

export function InputSignInPassword() {
  return (
    <input
      type="text"
      placeholder="Password"
      className="input input-bordered w-w90% max-w-xs m-1"
    />
  );
}

export function ButtonSignIn() {
  return <button className="btn glass w-w90% max-w-xs m-1">Log In</button>;
}
