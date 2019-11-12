export function printDate(date: Date): string {
    return (date.getMonth()+1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
}