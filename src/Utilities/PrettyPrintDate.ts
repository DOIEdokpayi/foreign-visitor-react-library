import ConvertMonthToText from "./Months";

function PrettyPrintDate(date: Date): string {
    return date.getDate().toString() + " " +
        ConvertMonthToText(date.getMonth()) + " " +
        date.getFullYear().toString();
}

export default PrettyPrintDate;