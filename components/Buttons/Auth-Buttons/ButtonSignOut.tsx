import { signOut } from "firebase/auth";
import {authh} from "@services/Firebase-Config/firebaseConfig";
import { useRouter } from "next/navigation";

const BottonSignOut = () => {
  const router = useRouter();
  const handleSignUp = () => {
    try {
      signOut(authh);
      router.push("../");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="btn btn-ghost bg-bg-myyellow  rounded-2xl text-black ml-auto"
      onClick={handleSignUp}
    >
      SignOut
    </button>
  );
};
export default BottonSignOut;
