import { IResponseFormValues } from "./IResponseFormValues";

export interface IResponseFormProps extends IResponseFormValues {
    SubmitPageFunc: (values: IResponseFormValues) => void;
}