import { Timestamp } from "firebase/firestore";

export const DataFormater = (timestamp: Timestamp): string => {
    const date: Date = timestamp.toDate(); // Преобразуем Timestamp в объект Date

    const months: string[] = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month: string = months[date.getMonth()]; // Получаем название месяца

    const day: number = date.getDate(); // Получаем день месяца

    let hours: number = date.getHours(); // Получаем часы
    let minutes: number = date.getMinutes(); // Получаем минуты

    // Дополним минуты нулем, если они меньше 10 (например, 05 вместо 5)
    const formattedMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();

    // Определим формат времени в 24-часовом формате
    const timeFormat: string = `${hours}:${formattedMinutes}`;

    // Возвращаем отформатированную дату и время
    return `${month} - ${day} - ${date.getFullYear()} - ${timeFormat}`;
};

