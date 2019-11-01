import { IFormWrapperContext } from "../FormWrapper/IFormWrapperContext";
import { IFormWrapperFieldStatus } from "../FormWrapper/IFormWrapperFieldStatus";
import { FormWrapperStatusEnum } from "../FormWrapper/FormWrapperStatusEnum";

export function ResponseFormValidate(ctx: IFormWrapperContext): IFormWrapperFieldStatus {
    const { status, values } = ctx;
    if (!values.requeststatus || values.requeststatus === -1) {
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
    return status;
}