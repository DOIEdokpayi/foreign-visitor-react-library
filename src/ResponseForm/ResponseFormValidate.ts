import { IFormValidateProps } from "../FormWrapper/IFormValidateProps";
import { IFormWrapperFieldStatus } from "../FormWrapper/IFormWrapperFieldStatus";
import { FormWrapperStatusEnum, IStringIndexable } from "../types";
import { IResponseFormValues } from "./IResponseFormValues";

export function ResponseFormValidate(props: IFormValidateProps): IFormWrapperFieldStatus {
    const { status, values } = props;
    const formValues: IResponseFormValues = values as IResponseFormValues;
    if (!isInitial(status, "requeststatus")) {
        validateRequestStatus(formValues, values, status);
    }
    validateRequiredField(status, "subject", values, "Subject is Required!");
    validateRequiredField(status, "feedback", values, "Feedback is Required!");
    validateRequiredField(status, "approvalauthoritysignature", values, "Approval Authority Signature is Required!");
    validateRequiredField(status, "authorityemail", values, "Authority Email is Required!");
    validateRequiredField(status, "bureau", values, "Bureau is Required!");
    validateRequiredField(status, "email", values, "Email address is Required!");
    validateRequiredField(status, "firstname", values, "First name is Required!");
    validateRequiredField(status, "lastname", values, "Last name is Required!");
    validateRequiredField(status, "office", values, "Office is Required!");
    validateRequiredField(status, "responsedate", values, "Response Date is Required!");    
    validateRequiredField(status, "threatlevel", values, "Threat Level is Required!");
    return status;
}

export function validateRequiredField(status: IFormWrapperFieldStatus, fieldName: string, values: IStringIndexable, errorMessage: string) {
    if (!isInitial(status, fieldName)) {
        validateRequired(values, status, fieldName, errorMessage);
    }
}

export function validateRequired(values: IResponseFormValues, status: IFormWrapperFieldStatus, field:string, errorMessage: string) {
    if (
        undefined === values.subject) {
        status.set(field, {
            error: errorMessage,
            status: FormWrapperStatusEnum.error
        });
    }
    else {
        status.set("subject", {
            status: FormWrapperStatusEnum.validated
        });
    }
}

export function isInitial(status: IFormWrapperFieldStatus, fieldName: string): boolean {
    return (status.get(fieldName) || { status: FormWrapperStatusEnum.initial }).status === FormWrapperStatusEnum.initial;
}

export function validateRequestStatus(formValues: IResponseFormValues, values: IStringIndexable, status: IFormWrapperFieldStatus) {
    if (
        (undefined === formValues.requeststatus ||
            formValues.requeststatus === -1 ||
            values["requeststatus"] === '-1')) {
        status.set("requeststatus", {
            error: "Request Status is Required!",
            status: FormWrapperStatusEnum.error
        });
    }
    else {
        status.set("requeststatus", {
            status: FormWrapperStatusEnum.validated
        });
    }
}
