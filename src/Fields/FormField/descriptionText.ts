import { FormWrapperStatusEnum } from "../../types";

export function descriptionText(status: FormWrapperStatusEnum, description?: string, errorMessage?: string): string | undefined{
    return (status === FormWrapperStatusEnum.error && errorMessage) ? errorMessage : description;
}