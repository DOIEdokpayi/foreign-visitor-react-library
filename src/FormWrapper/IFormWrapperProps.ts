import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";
import { IFormWrapperContext } from "./IFormWrapperContext";
import { IInitialValues } from "../types";

export interface IFormWrapperProps{
    convertFieldValue?: (key: string, value: any) => string;
    formClassName?: string;
    onReset?: (initialValues: IInitialValues) => void;
    onSubmit: (ctx: IFormWrapperContext) => void;
    onValidate?: (ctx: IFormWrapperContext) => IFormWrapperFieldStatus;
    initialValues: IInitialValues;
    renderFormFields: (ctx: IFormWrapperContext) => JSX.Element;
}