export function formatDate(date: Date): string {
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dash = "-";
    return year + dash + month + dash + day;
}
