import { IFormWrapperFieldStatus } from '../../FormWrapper/IFormWrapperFieldStatus';
import { IResponseFormValues } from '../..';
export interface IResponseFormFieldsProps {
    handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    status: IFormWrapperFieldStatus;
    values: IResponseFormValues;
}
