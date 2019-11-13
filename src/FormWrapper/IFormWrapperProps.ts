import { IStringIndexable } from "../types";
import { IFormValidateProps } from "./IFormValidateProps";
import { IFormWrapperContext } from "./IFormWrapperContext";
import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";

export interface IFormWrapperProps{
    convertFieldValue?: (key: string, value: any) => any;
    formClassName?: string;
    onReset?: (initialValues: IStringIndexable) => void;
    onSubmit: (ctx: IFormWrapperContext) => void;
    onValidate?: (props: IFormValidateProps) => IFormWrapperFieldStatus;
    initialValues: IStringIndexable;
    renderFormFields: (ctx: IFormWrapperContext) => JSX.Element;
}