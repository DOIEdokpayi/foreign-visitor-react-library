import { FormWrapperStatusEnum } from "../../types";

export interface IFormFieldProps{
    children: JSX.Element;
    description?: string;    
    status: FormWrapperStatusEnum;
    ariaDescribedBy: string;
}