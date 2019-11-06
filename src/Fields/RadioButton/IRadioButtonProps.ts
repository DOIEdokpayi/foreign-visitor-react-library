export interface IRadioButtonProps<T> {
    className?: string;
    checked?: boolean;
    isDefaultOption?: boolean;
    fieldName: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    id?: string;
    label: string;
    setFieldValue: (field: string, value: T) => void;
    value: T;
    valueConverter: (value: T) => string | number;
}
