export const openModal = (): void => {
    const modal = document.getElementById(
      "ModalEditProf"
    ) as HTMLDialogElement | null;
    if (modal) {
      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.open = true;
      }
    }
  };
