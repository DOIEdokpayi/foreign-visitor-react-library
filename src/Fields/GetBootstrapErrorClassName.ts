import { FormWrapperStatusEnum } from "../FormWrapper/FormWrapperStatusEnum";

export function getBootstrapErrorClassName(status: FormWrapperStatusEnum): string{
    let className = "";
        switch (status) {
            case FormWrapperStatusEnum.validated:
                className = "has-success";
                break;
            case FormWrapperStatusEnum.dirty:
                    case FormWrapperStatusEnum.touched:
                className = "has-warning";
                break;

            case FormWrapperStatusEnum.error:
                className = "has-error";
                break;
        }
    return className;
}