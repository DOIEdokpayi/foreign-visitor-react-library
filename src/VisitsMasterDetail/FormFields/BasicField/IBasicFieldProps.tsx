import { IFormWrapperFieldStatus } from "../../../FormWrapper/IFormWrapperFieldStatus";
export interface IBasicFieldProps {
    displayName: string;
    handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    id: string;
    status: IFormWrapperFieldStatus;
    type: string;
    value: string;
}
