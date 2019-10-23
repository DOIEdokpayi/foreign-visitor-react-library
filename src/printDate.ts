export function printDate(date: Date): string {
    return date.getMonth().toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
}