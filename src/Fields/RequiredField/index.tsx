import * as React from "react";
import { IRequiredFieldProps } from "./IRequiredFieldProps";

export function RequiredField(props: IRequiredFieldProps): JSX.Element | null{
    return props.required ? <span className="required-field">*</span>: null;
}