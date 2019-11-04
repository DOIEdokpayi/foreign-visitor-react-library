export function handleTextFieldChange(target: HTMLInputElement, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void): void {
    setFieldValue(target.name, target.value, true);
}