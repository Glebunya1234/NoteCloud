
import { months } from "@/types/ColorScheme/ColorScheme-types";
import { Timestamp } from "firebase/firestore";
import dayjs, { Dayjs } from "dayjs";



export const DataFormaterToString = (timestamp: Timestamp): string => {
    const date: Date = timestamp.toDate();


    const month: string = months[date.getMonth()];

    const day: number = date.getDate();
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();

    // Дополним минуты нулем, если они меньше 10 (например, 05 вместо 5)
    const formattedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();

    // Определим формат времени в 24-часовом формате
    const timeFormat: string = `${hours}:${formattedMinutes}`;

    // Возвращаем отформатированную дату и время
    return `${month} - ${day} - ${date.getFullYear()} - ${timeFormat}`;
};


export const DataFormaterToDayjs = (timestamp: Timestamp): Dayjs => {
    const date: Date = timestamp.toDate();
  
    const month: string = dayjs(date).format('MMM'); // Форматируем месяц в сокращенном формате (например, 'Jan')
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
  
    // Форматируем минуты с ведущим нулем, если нужно
    const formattedMinutes: string = (minutes < 10 ? '0' : '') + minutes.toString();
  
    // Форматируем дату и время в строку в формате 'MMM DD YYYY HH:mm'
    const formattedDate: string = `${month} ${day} ${year} ${hours}:${formattedMinutes}`;
  
    // Возвращаем объект Dayjs, созданный из отформатированной строки
    return dayjs(formattedDate);
  };








