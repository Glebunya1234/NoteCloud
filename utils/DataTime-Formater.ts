import { orange } from "@mui/material/colors";
import { Timestamp } from "firebase/firestore";


export const months: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const color = {
    green: "rgb(81,255,65)",
    orange: "rgb(255,146,44)",
    red: "rgb(255,57,57)",

}

export const DataFormater = (timestamp: Timestamp): string => {
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

export const SetColorIndicator = (timestamp: Timestamp, NowDate: Date): string => {
    const date: Date = timestamp.toDate();
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1; 
    const day: number = date.getDate();
    const timestampHours: number = date.getHours();
    const timestampMinutes: number = date.getMinutes();

    const nowYear: number = NowDate.getFullYear();
    const nowMonth: number = NowDate.getMonth() + 1; 
    const nowDay: number = NowDate.getDate();
    const nowHours: number = NowDate.getHours();
    const nowMinutes: number = NowDate.getMinutes();

    if (year > nowYear) {
        return color.green; 
    } else if (year < nowYear) {
        return color.red;
    }
    else {
        
        if (month > nowMonth) {
            return color.green; 
        } else if (month < nowMonth) {
            return color.red; 
        }
        else {
           
            if (day > nowDay) {
                return color.green; 
            } else if (day < nowDay) {
                return color.red; 
            }
            else
                if (timestampHours < nowHours) {
                    return color.red; 
                } else if (timestampHours > nowHours) {
                    return color.orange; 
                } else {
            
                    if (timestampMinutes < nowMinutes) {
                        return color.red; 
                    } else if (timestampMinutes > nowMinutes) {
                        return color.orange; 
                    } else {
                        return color.orange; 
                    }
                }
        }
    }
}







