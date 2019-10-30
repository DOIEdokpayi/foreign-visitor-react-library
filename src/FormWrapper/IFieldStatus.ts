import { FormFieldStatusEnum } from "../types";

export interface IFieldStatus{
    error?: string;
    status: FormFieldStatusEnum;
}