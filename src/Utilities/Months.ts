const English_Months: string[] = 
[   "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

export default function ConvertMonthToText(month:number): string{
    if(month < English_Months.length){
        return English_Months[month];
    }
    else throw new Error("Month out of range");
}