import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";
import { IFormWrapperContext } from "./IFormWrapperContext";

export interface IFormWrapperProps<formValues> {
    convertFieldValue?: (key: string, value: any) => string;
    formClassName?: string;
    onReset?: (initialValues: formValues) => void;
    onSubmit: (ctx: IFormWrapperContext<formValues>) => void;
    onValidate?: (ctx: IFormWrapperContext<formValues>) => IFormWrapperFieldStatus;
    initialValues: formValues;
    renderFormFields: (ctx: IFormWrapperContext<formValues>) => JSX.Element;
}