import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden ">
      <header className="h-22 flex justify-center px-20 py-5 bg-white border-b-4 border-gray-200">
        <div className="flex w-full justify-center items-center"></div>
        <nav className="flex w-full justify-center items-center">
          <Link
            href="/"
            className=" border-5  h-10 w-20 flex justify-center items-center font-medium text-black"
          >
            Home
          </Link>
          <Link
            href="https://github.com/Glebunya1234"
            className=" border-5 h-10 w-20 flex justify-center items-center font-medium text-black"
          >
            GitHub
          </Link>

          <Link
            href="/"
            className=" border-5  h-10 w-20 flex justify-center items-center font-medium text-black" 
          > 
            About
          </Link>
        </nav>
        <nav className=" flex w-full justify-end items-center">
          <Link
            href="/"
            className=" border-5 ml-auto h-10 w-20 flex justify-center items-center font-medium text-black"
          >
            Sing Up
          </Link>

          <Link
            href="/"
            className=" border-5  h-10 w-24 flex justify-center items-center bg-black text-white"
          >
            Sing In
          </Link>
        </nav>
      </header>
      <main className="h-[calc(100vh-84px)]  py-0 flex flex-col ">
        <div className=" w-full h-full flex px-10">
          <article className="px-5 flex w-6/12 items-start justify-center flex-col ">
            <h1 className="text-black text-8xl font-bold">Welcome</h1>
            <p className="text-black py-10 font-bold text-2xl">
              Text in 3 linesText in 3 linesText in 3 linesText in 3 lines
              <br /> Text in 3 linesText in 3 linesText in 3 linesText in 3
              lines
              <br />
              Text in 3 lines
            </p>
            <div className="flex flex-row">
              <Link
                href="/authentication"
                className="border-5 flex justify-center items-center h-20 w-48 bg-black text-white "
              >
                Get Started
              </Link>
              <h1 className="border-5 flex justify-center items-center h-20 w-48 border-black font-medium text-black ">
                &lt;-- Sign In
              </h1> 
            </div>
          </article>
          <aside className="px-5 flex  w-6/12 items-start justify-center flex-col container bg-gray-100 "></aside>
        </div>
        <footer className="h-20 flex justify-center px-20 py-5 bg-white border-t-4 border-gray-200 ">
       
        </footer>
      </main>
    </div>
  );
}
