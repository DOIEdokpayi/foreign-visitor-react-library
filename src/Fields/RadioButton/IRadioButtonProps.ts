export interface IRadioButtonProps<T> {
    className?: string;
    checked: boolean;
    fieldName: string;
    id?: string;
    label: string;
    setFieldValue: (field: string, value: T) => void;
    value: T;
    valueConverter: (value: T) => string | number;
}
