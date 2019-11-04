import { FormWrapperStatusEnum } from "../FormWrapper/FormWrapperStatusEnum";
import { IFormValidateProps } from "../FormWrapper/IFormValidateProps";
import { IFormWrapperFieldStatus } from "../FormWrapper/IFormWrapperFieldStatus";
import { IInitialValues } from "../types";
import { IResponseFormValues } from "./IResponseFormValues";

export function ResponseFormValidate(props: IFormValidateProps): IFormWrapperFieldStatus {
    const { status, values } = props;
    const formValues: IResponseFormValues = values as IResponseFormValues;
    if (!isInitial(status, "requeststatus")) {
        validateRequestStatus(formValues, values, status);
    }
    if (!isInitial(status, "subject")) {
        validateSubject(values, status);
    }
    return status;
}

function validateSubject(values: IResponseFormValues, status: IFormWrapperFieldStatus) {
    if (
        undefined === values.subject) {
        status.set("subject", {
            error: "Subject is Required!",
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

function validateRequestStatus(formValues: IResponseFormValues, values: IInitialValues, status: IFormWrapperFieldStatus) {
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
