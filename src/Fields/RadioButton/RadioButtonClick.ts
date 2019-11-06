export function radioButtonClick<T>(value: T, fieldName: string, setFieldValue: (field: string, value: T) => void): void {
    setFieldValue(fieldName, value);
}