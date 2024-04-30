import { doc, setDoc } from "firebase/firestore"; 
import { Timestamp } from 'firebase/firestore';


export type TodosData = {
  spaceName: string;
  nameBlock: string;
  titleTodos: string;
  deadLine: Timestamp;
  teg: string;
  userId: string;
};


export type SpaceNamesbyUser = {
  spaceName: string;
};

