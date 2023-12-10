export const openAModalWindowbyID = (IdModal: string): void => {
    const modal = document.getElementById(
      IdModal
    ) as HTMLDialogElement | null;
    if (modal) {
      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.open = true;
      }
    }
  };
