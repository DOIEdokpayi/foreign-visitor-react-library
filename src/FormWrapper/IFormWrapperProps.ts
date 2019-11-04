import { IInitialValues } from "../types";
import { IFormValidateProps } from "./IFormValidateProps";
import { IFormWrapperContext } from "./IFormWrapperContext";
import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";

export interface IFormWrapperProps{
    convertFieldValue?: (key: string, value: any) => any;
    formClassName?: string;
    onReset?: (initialValues: IInitialValues) => void;
    onSubmit: (ctx: IFormWrapperContext) => void;
    onValidate?: (props: IFormValidateProps) => IFormWrapperFieldStatus;
    initialValues: IInitialValues;
    renderFormFields: (ctx: IFormWrapperContext) => JSX.Element;
}