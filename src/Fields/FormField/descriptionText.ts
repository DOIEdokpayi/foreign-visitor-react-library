import { FormWrapperStatusEnum } from "../../FormWrapper/FormWrapperStatusEnum";

export function descriptionText(status: FormWrapperStatusEnum, description?: string, errorMessage?: string): string | undefined{
    return (status === FormWrapperStatusEnum.error && errorMessage) ? errorMessage : description;
}