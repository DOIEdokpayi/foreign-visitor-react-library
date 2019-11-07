import { FormWrapperStatusEnum } from "../types";

export interface IFieldStatus{
    error?: string;
    status: FormWrapperStatusEnum;
}