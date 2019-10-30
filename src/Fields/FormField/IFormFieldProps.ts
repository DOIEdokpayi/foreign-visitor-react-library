import { FormWrapperStatusEnum } from "../../FormWrapper/FormWrapperStatusEnum";

export interface IFormFieldProps{
    children: JSX.Element;
    description?: string;    
    status: FormWrapperStatusEnum;
    ariaDescribedBy: string;
}