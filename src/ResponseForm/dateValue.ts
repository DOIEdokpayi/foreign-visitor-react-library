import { formatDate } from './formatDate';
export function dateValue(dateValue: string | Date): string {
    return typeof dateValue === "string" ? dateValue : formatDate(dateValue);
}
