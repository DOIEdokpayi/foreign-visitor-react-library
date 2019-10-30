import { FormFieldStatusEnum } from "../types";

export function getBootstrapErrorClassName(status: FormFieldStatusEnum): string{
    let className = "";
        switch (status) {
            case FormFieldStatusEnum.Success:
                className = "has-success";
                break;
            case FormFieldStatusEnum.Warning:
                className = "has-warning";
                break;

            case FormFieldStatusEnum.Error:
                className = "has-error";
                break;
        }
    return className;
}