export const openAModalWindowbyID = (IdModal: string): void => {
    const modal = document.getElementById(
      IdModal
      ) as HTMLDialogElement | null;
      console.log("IdModal",IdModal)
      console.log("modal",modal)
    if (modal) {
      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.open = true;
      }
    }
  };
