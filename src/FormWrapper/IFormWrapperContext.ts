import * as React from "react";
import { IStringIndexable } from "../types";
import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";

export interface IFormWrapperContext {
    handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>; // use for field OnChange
    isSubmitting: boolean;
    isValidating: boolean;
    resetForm: () => void;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void; // use to respond to radio button clicks
    setSubmitting: (isSubmitting: boolean) => void;
    status: IFormWrapperFieldStatus;
    values: IStringIndexable;
}