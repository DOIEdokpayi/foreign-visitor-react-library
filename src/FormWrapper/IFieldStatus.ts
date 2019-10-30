import { FormWrapperStatusEnum } from "./FormWrapperStatusEnum";

export interface IFieldStatus{
    error?: string;
    status: FormWrapperStatusEnum;
}