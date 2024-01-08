"use client";
import toast, { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
export function AllertToast() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const toasterPosition = isMobile ? "top-center" : "bottom-right";
  return (
    <>
      <div className="">
        <Toaster
          position={toasterPosition}
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 1200,

            style: {
              padding: "16px",
              backgroundColor: "rgba(25, 25, 25, 0.7)",
              color: "White",
            },
          }}
        />
      </div>
    </>
  );
}

export function showSuccessToast(message: string) {
  toast.success(message);
}

export function showErrorToast(message: string) {
  toast.error(message);
}

export function showMessangeToast(message: string, delay: number) {
  setTimeout(() => {
    toast(`${message}`);
  }, delay);
}
