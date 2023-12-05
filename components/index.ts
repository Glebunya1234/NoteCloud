"use client"
import { ButtonSignIn } from "@/components/Buttons/Auth-Buttons/ButtonLogInEmailPassw";
import ButtonGoogle from "@/components/Buttons/Auth-Buttons/ButtonSignInGoogle";
import { RegisterButton } from "@/components/Buttons/Auth-Buttons/ButtonSignUpEmailPassw";
import BottonSignOut from "@/components/Buttons/Auth-Buttons/ButtonSignOut";
import BottonCloseTest from "@/components/Buttons/Profile-Buttons/ButtonCloseInProf";
import { RegisterInputs } from "@/components/Inputs/Auth-Inputs/Register-input";
import { LogInInputs } from "@/components/Inputs/Auth-Inputs/LogIn-input";
import SearchInput  from "@/components/Inputs/Profile-Inputs/Search-Input";
import ButtonMenuNavigations from "@components/Navigations/Button-MenuNav";
import HomeContent from "@components/Profile/HomePage/HomePage";
import TodosContent from "@components/Profile/TodosPage/TodoPage";
import { ActiveTabs } from "@components/Tabs/Active-tab";
import AddNewTaskComnponent from "@components/Task-components/AddnewTask";
import ModalEditProf from "@components/UI/Dialog/Modal-Window-EditProf";
import ButtonEditProfModal from "@/components/Buttons/Profile-Buttons/BottonOpenEditModal";

import {
  AllertToast,
  showMessangeToast,
  showErrorToast,
  showSuccessToast,
} from "@components/Toast/toast";

export {
  ButtonSignIn,
  ButtonGoogle,
  RegisterButton,
  RegisterInputs,
  LogInInputs,
  ButtonMenuNavigations,
  HomeContent,
  TodosContent,
  ActiveTabs,
  AddNewTaskComnponent,
  AllertToast,
  showMessangeToast,
  showErrorToast,
  showSuccessToast,
  ModalEditProf,
  BottonSignOut,
  BottonCloseTest,
  SearchInput,
  ButtonEditProfModal,
};
