import { IFormWrapperFieldStatus } from '../../FormWrapper/IFormWrapperFieldStatus';
import { IResponseFormValues } from '../..';
export interface IResponseFormFieldsProps {
    handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    status: IFormWrapperFieldStatus;
    values: IResponseFormValues;
}
