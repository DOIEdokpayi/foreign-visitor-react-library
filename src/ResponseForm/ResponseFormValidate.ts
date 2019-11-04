import { IFormWrapperContext } from "../FormWrapper/IFormWrapperContext";
import { IFormWrapperFieldStatus } from "../FormWrapper/IFormWrapperFieldStatus";
import { FormWrapperStatusEnum } from "../FormWrapper/FormWrapperStatusEnum";
import { IResponseFormValues } from "..";
import { IInitialValues } from "../types";

export function ResponseFormValidate(ctx: IFormWrapperContext): IFormWrapperFieldStatus {
    const { status, values } = ctx;
    const formValues: IResponseFormValues = values as IResponseFormValues | IInitialValues;
    validateRequestStatus(formValues, values, status);
    validateSubject(values, status);
    return status;
}

function validateSubject(values: IInitialValues, status: IFormWrapperFieldStatus) {
    if (undefined === values.subject) {
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

function validateRequestStatus(formValues: IResponseFormValues, values: IInitialValues, status: IFormWrapperFieldStatus) {
    if (undefined === formValues.requeststatus || formValues.requeststatus === -1 || values["requeststatus"] === '-1') {
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
