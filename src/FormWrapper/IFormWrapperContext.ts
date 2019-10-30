import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";
import * as React from "react";

export interface IFormWrapperContext{    
    formData: FormData;
    handleChange: React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>;
    isSubmitting: boolean;
    isValidating: boolean;
    resetForm: () => void;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    status: IFormWrapperFieldStatus;
}