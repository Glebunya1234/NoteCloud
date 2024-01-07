import { BottonSignOut, ModalEditProf } from "@/components";

import ChangeNameComponent from "@/components/Inputs/Profile-Inputs/ChangeNameComponent";
import ResetPassword from "@/components/ResetPassword/ResetPassword";
import EditPictureProfile from "@/components/UI/Edit-Picture-Profile/EditPictureProfile";


export default function AccountContent() {
  return (
    <main className="w-full h-full flex flex-col p-3">
      <ul>
        <li className="border-b-[1px] border-bg-mydurkgrey mb-5">
          <h3 className="font-bold text-lg my-2">Account</h3>
        </li>

        <li className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col">
            <h3 className="font-bold text-sm ">Change username</h3>
            <ChangeNameComponent />
          </div>
          <div className="flex flex-col lg:mx-20">
            <h3 className="font-bold text-sm ">Profile picture</h3>
            <EditPictureProfile />
          </div>
        </li>
      </ul>
      <ul>
        <li className="border-b-[1px] border-bg-mydurkgrey mt-8 mb-5">
          <h3 className="font-bold text-lg my-2">Email and password</h3>
        </li>

        <li className="flex flex-col">
          <ResetPassword />
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
      <ModalEditProf />
    </main>
  );
}
