import toast, { Toaster } from "react-hot-toast";
export function AllertToast() {
  
  return (
    <div>
      
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
            style: {                
                padding: '16px',
                backgroundColor: 'rgba(25, 25, 25, 0.7)',
                color: 'White',
              },
          }}
      />
    </div>
  );
}

export type ToastFunction = (message: string) => void;

export function showSuccessToast(message: string) {
  toast.success(message);
}

export function showErrorToast(message: string) {
    toast.error(message);
  }