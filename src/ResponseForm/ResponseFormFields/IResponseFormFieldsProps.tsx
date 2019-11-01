import { IFormWrapperFieldStatus } from '../../FormWrapper/IFormWrapperFieldStatus';
import { IResponseFormValues } from '../..';
export interface IResponseFormFieldsProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    status: IFormWrapperFieldStatus;
    values: IResponseFormValues;
}
