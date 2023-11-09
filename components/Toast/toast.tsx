"use client";
import toast, { Toaster } from "react-hot-toast";
export function AllertToast() {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            padding: "16px",
            backgroundColor: "rgba(25, 25, 25, 0.7)",
            color: "White",
          },
        }}
      />
    </div>
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
