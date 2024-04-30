import { color } from "@/types/ColorScheme/ColorScheme-types";
import { Timestamp } from "firebase/firestore";

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
