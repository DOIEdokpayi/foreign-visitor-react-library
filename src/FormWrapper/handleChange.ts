import { handleTextFieldChange } from "./handleTextFieldChange";
import { handleCheckBoxChange } from "./handleCheckBoxChange";

export function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setFieldValue:(field: string, value: any, shouldValidate?: boolean)=> void): void{
    switch (event.target.type) {
        case "text":
            handleTextFieldChange(event.target as HTMLInputElement, setFieldValue);
            break;
        case "checkbox":
            handleCheckBoxChange(event.target as HTMLInputElement, setFieldValue);
            break;
        default:
            setFieldValue(event.target.name, event.target.value, true);
            break;
    }
}