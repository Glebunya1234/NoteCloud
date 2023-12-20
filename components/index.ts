"use client"
import {
  AllertToast,
  showMessangeToast,
  showErrorToast,
  showSuccessToast,
} from "@components/Toast/toast";
import { ButtonSignIn } from "@/components/Buttons/Auth-Buttons/ButtonLogInEmailPassw";
import ButtonGoogle from "@/components/Buttons/Auth-Buttons/ButtonSignInGoogle";
import { RegisterButton } from "@/components/Buttons/Auth-Buttons/ButtonSignUpEmailPassw";
import BottonSignOut from "@/components/Buttons/Auth-Buttons/ButtonSignOut";
import BottonCloseTest from "@/components/Buttons/Profile-Buttons/ButtonCloseInProf";
import { RegisterInputs } from "@/components/Inputs/Auth-Inputs/Register-input";
import { LogInInputs } from "@/components/Inputs/Auth-Inputs/LogIn-input";
import SearchInput from "@/components/Inputs/Profile-Inputs/Search-Input";
import ButtonMenuNavigations from "@/components/Pagination-Navigations/Button-MenuNav";
import HomeContent from "@components/Profile/HomePage/HomePage";
import TodosContent from "@components/Profile/TodosPage/TodoPage";
import { ActiveTabs } from "@components/Tabs/Active-tab";
import AddNewTaskComnponent from "@components/Task-components/AddnewTask";
import ModalEditProf from "@/components/UI/Dialog/EditProfDialog/Modal-Window-EditProf";
import ButtonEditProfModal from "@/components/Buttons/Profile-Buttons/BottonOpenEditModal";
import DrawerSide from "./UI/Drawer/Drawer-Side";
import ButtonDrawer from "./Buttons/Profile-Buttons/ButtonDrawer";
import ButtonCloseDrawer from "./Buttons/Profile-Buttons/ButtonCloseDrawer";
import ModalAddBlock from "./UI/Dialog/AddBlockDialog/Modal-Window-AddBlock";
import DropdownEditBlock from "./UI/DropDown/EditDropDownBlockComponent";
import DeleteTaskButton from "./Buttons/Task-Buttons/DeleteTaskButton";
import SettingsContent from "./Profile/SettingsPage/SettingsPage";
import ButtonDellBlock from "./Buttons/DropDown-Buttons/ButtomDeleteBlock";
import ButtonEditBlock from "./Buttons/DropDown-Buttons/ButtonEditBlock";
import EditBlockModal from "./UI/Dialog/EditBlockDialog/ModalEditBlock";


export {
  ButtonSignIn,
  ButtonGoogle,
  RegisterButton,
  RegisterInputs,
  LogInInputs,
  ButtonMenuNavigations,

  HomeContent,
  SettingsContent,
  TodosContent,

  ActiveTabs,
  AddNewTaskComnponent,
  AllertToast,
  showMessangeToast,
  showErrorToast,
  showSuccessToast,
  
  ModalEditProf,
  ModalAddBlock,
  EditBlockModal,

  BottonSignOut,
  BottonCloseTest,
  SearchInput,
  ButtonEditProfModal,
  DrawerSide,
  ButtonDrawer,
  ButtonCloseDrawer,
  DropdownEditBlock,
  DeleteTaskButton,
  ButtonEditBlock,
  ButtonDellBlock,
};
