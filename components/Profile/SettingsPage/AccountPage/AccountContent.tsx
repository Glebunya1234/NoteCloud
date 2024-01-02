import { BottonSignOut } from "@/components";
import { NavButSet } from "@/components/Context";
import { useContext } from "react";

export default function AccountContent() {
  return (
    <main className="w-full h-full flex flex-col p-3">
      <ul>
        <li className="border-b-[1px] border-bg-mydurkgrey mb-5">
          <h3 className="font-bold text-lg my-2">Account</h3>
        </li>

        <li className="flex flex-col">
          <h3 className="font-bold text-sm ">Change username</h3>
          <input
            type="text"
            className="input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
          />

          <span className="text-xs">
            Your name may appear on NoteCloud, you can change it at any time, it
            is only visible to you
          </span>
          <button
            className="btn btn-outline btn-sm w-[180px] mt-2"
            
          >
            Update username
          </button>
        </li>
      </ul>
      <ul>
        <li className="border-b-[1px] border-bg-mydurkgrey mt-8 mb-5">
          <h3 className="font-bold text-lg my-2">Email and password</h3>
        </li>

        <li className="flex flex-col">
          <h3 className="font-bold text-sm mb-2">Change passord</h3>
          <span className="text-xs">Old password</span>
          <input
            type="text"
            className="input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
          />
          <span className="text-xs">New password</span>
          <input
            type="text"
            className="input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
          />
          <span className="text-xs">Confirm new password</span>
          <input
            type="text"
            className="input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
          />
          <span className="text-xs">
            Make sure it is at least 6 characters AND you have confirmed the new
            password correctly.
          </span>
          <button
            className="btn btn-outline btn-sm w-[180px] mt-2"
            
          >
            Update passord
          </button>
        </li>
      </ul>
      <ul>
        <li className="border-b-[1px] border-bg-mydurkgrey mt-8 mb-5">
          <h3 className="font-bold text-lg my-2">Sign out of your account</h3>
        </li>

        <li>
          <p className="text-sm">
            Once you log out of your account, you can log back in at any time by
            logging back in.
          </p>
          <BottonSignOut />
        </li>
      </ul>
    </main>
  );
}
