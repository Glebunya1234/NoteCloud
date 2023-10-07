import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="h-20 flex justify-center px-20 py-5">
        <Link href="/" className=" border-5  h-10 w-20 flex justify-center items-center">
          Home
        </Link>
        <Link href="https://github.com/Glebunya1234" className=" border-5 h-10 w-20 flex justify-center items-center">
          GitHub
        </Link>

        <Link href="/" className=" border-5  h-10 w-20 flex justify-center items-center">
          About
        </Link>
        
      </header>
      <section className="h-[calc(100vh-80px)] flex p-5 bg-slate-400" >

      <Link
          href="/authentication"
          className="border-5 flex justify-center items-center h-10 w-32 bg-black text-white "
          >
          Get Started
        </Link>
          </section>
    </div>
  );
}
