


export interface Iuser_collect_datatype {
    userID: string;
    displayName: string;
    password: string;
    email: string;
    photoURL: string;
}
export interface IemailAndPassw {
    email: string;
    password: string;
}
export interface IemailAndPasswAndConfPassw {
    email: string;
    password: string;
    confirm_password: string;
}
export interface IdataTodos {
    nameBlock: string;
    titleTodos: string;
    teg: string;
    userId:string;
    // Добавьте другие поля задачи, если необходимо
  }