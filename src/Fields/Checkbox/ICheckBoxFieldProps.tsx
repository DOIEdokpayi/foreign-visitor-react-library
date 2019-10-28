import { FieldProps } from "formik";
import { IBaseFieldProps } from "../../types";

export interface IBaseCheckBoxFieldProps extends IBaseFieldProps{
    checked?: boolean;
}
export type ICheckBoxFieldProps = FieldProps & IBaseCheckBoxFieldProps;
