import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";
import * as React from "react";
import { IInitialValues } from "../types";

export interface IFormWrapperContext{    
    handleChange: React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement| HTMLSelectElement>;
    isSubmitting: boolean;
    isValidating: boolean;
    resetForm: () => void;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    status: IFormWrapperFieldStatus;
    values:IInitialValues;
}