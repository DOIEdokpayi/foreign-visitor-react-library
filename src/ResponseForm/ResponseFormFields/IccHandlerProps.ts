import { IResponseFormValues } from "../IResponseFormValues";
export interface IccHandlerProps {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    values: IResponseFormValues;
}
