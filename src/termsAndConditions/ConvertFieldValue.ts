export function ConvertFieldValue(key: string, value: any): boolean {
    const converter = {
        "termsaccepted": (value: any) => Boolean(value)
    };
    return converter[key](value);
}