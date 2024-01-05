import { signOut } from "firebase/auth";
import {authh} from "@services/Firebase-Config/firebaseConfig";
import { useRouter } from "next/navigation";

const BottonSignOut = () => {
  const router = useRouter();
  const handleSignUp = () => {
    try {
      signOut(authh);
      // router.push(`../profile/Authorization`);
      router.back()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="btn btn-outline btn-sm my-2 btn-error"
      onClick={handleSignUp}
    >
      SignOut
    </button>
  );
};
export default BottonSignOut;
