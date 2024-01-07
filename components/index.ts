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
import ButtonMenuNavigations from "@/components/Pagination-Navigations/Buttons-MenuNav/Button-MenuNav";

import { ActiveTabs } from "@components/Tabs/Active-tab";
import AddNewTaskComnponent from "@components/Task-components/AddnewTask";
import ModalEditProf from "@/components/UI/Dialog/Edit-Dialogs/Modal-Window-EditPhoto";
import ButtonEditProfModal from "@/components/Buttons/Profile-Buttons/BottonOpenEditModal";
import DrawerSide from "./UI/Drawer/Drawer-Side";
import ButtonDrawer from "./Buttons/Profile-Buttons/ButtonDrawer";
import ButtonCloseDrawer from "./Buttons/Profile-Buttons/ButtonCloseDrawer";
import ModalAddBlock from "./UI/Dialog/AddBlockDialog/Modal-Window-AddBlock";
import DropdownEditBlock from "./UI/DropDown/EditDropDownBlockComponent";
import DeleteTaskButton from "./Buttons/Task-Buttons/DeleteTaskButton";

import ButtonDellBlock from "./Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtomDeleteBlock";
import ButtonEditBlock from "./Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonEditBlock";
import EditBlockModal from "./UI/Dialog/Edit-Dialogs/ModalEditBlock";
import ModalRemoveBlock from "./UI/Dialog/RemoveBlockDialog/ModalRemoveBlock";
import AllertCall from "./UI/Allerts/Allert-EditOrRemove/Alert-Call";
import AddBlockModal from "./UI/Dialog/AddBlockDialog/Modal-Window-AddBlock";
import PriorityDropdown from "./UI/DropDown/PriorityDropDown";
import EditTaskDialog from "./UI/Dialog/Edit-Dialogs/Modal-Edit-Task";
import EditTaskButton from "./Buttons/Task-Buttons/EditTaskButton";
import ButtonSetNaw from "./Pagination-Navigations/Buttons-SettingsNav/Button-SetNaw";
import TodosContent from "./Profile/TodosPage/TodoPage";
import SettingsContent from "./Profile/SettingsPage/SettingsPage";
import HomeContent from "./Profile/HomePage/HomePage";



export {
  ButtonSignIn,
  ButtonGoogle,
  RegisterButton,
  
  RegisterInputs,
  LogInInputs,

  TodosContent,
  SettingsContent,
  HomeContent,
  
  ButtonMenuNavigations,
  ButtonSetNaw,

  ActiveTabs,
  AddNewTaskComnponent,
  
  AllertCall,
  AllertToast,
  showMessangeToast,
  showErrorToast,
  showSuccessToast,
  
  ModalEditProf,
  AddBlockModal,
  EditBlockModal,
  ModalRemoveBlock,
  EditTaskDialog,

  BottonSignOut,
  BottonCloseTest,
  SearchInput,
  ButtonEditProfModal,
  DrawerSide,
  ButtonDrawer,
  ButtonCloseDrawer,
  
  DropdownEditBlock,
  PriorityDropdown,

  DeleteTaskButton,
  EditTaskButton,

  ButtonEditBlock,
  ButtonDellBlock,
};
