import { signOut } from "firebase/auth";
import { authh } from "@services/Firebase-Config/firebaseConfig";
import { useRouter } from "next/navigation";
import AuthPage from "@/app/authorization/page";

const BottonSignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut(authh)
        .then(() => {
          router.replace("../authorization?typeAuth=Log In");
        })
        .catch((error) => {
          console.error("Error during sign out:");
        });
    } catch (error) {
      console.error("Error during sign out:");
    }
  };

  return (
    <button
      className="btn btn-outline btn-sm my-2 btn-error"
      onClick={handleSignOut}
    >
      SignOut
    </button>
  );
};
export default BottonSignOut;
