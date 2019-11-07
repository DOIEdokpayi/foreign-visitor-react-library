import { FormWrapperStatusEnum } from "../types";


export function getBootstrapErrorClassName(status: FormWrapperStatusEnum): string{
    let className = "";
        switch (status) {
            case FormWrapperStatusEnum.validated:
                className = "has-success";
                break;
            case FormWrapperStatusEnum.dirty:
                className = "has-warning";
                break;

            case FormWrapperStatusEnum.error:
                className = "has-error";
                break;
        }
    return className;
}