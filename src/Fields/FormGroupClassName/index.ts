import { FormWrapperStatusEnum } from "../../types";

export function formGroupClassName(status?: FormWrapperStatusEnum): string {
    status = status || FormWrapperStatusEnum.initial;
    let formGroupClassName: string = "";
    switch (status) {
        case FormWrapperStatusEnum.error:
            formGroupClassName = "form-group has-error has-feedback";
            break;
        case FormWrapperStatusEnum.dirty:
        case FormWrapperStatusEnum.validated:
            formGroupClassName = "form-group has-success has-feedback";
            break;
        default:
            formGroupClassName = "form-group";
            break;
    }
    return formGroupClassName;
}