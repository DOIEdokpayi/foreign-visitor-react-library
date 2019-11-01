import { IFormWrapperContext } from "../FormWrapper/IFormWrapperContext";
import { IResponseFormValues } from "..";
export interface IResponseFormSubmitProps {
    ctx: IFormWrapperContext;
    fileInput: HTMLInputElement;
    submitPageFunc: (values: IResponseFormValues) => void;
}
