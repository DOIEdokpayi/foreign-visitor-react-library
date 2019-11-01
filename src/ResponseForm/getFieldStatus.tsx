import { FormWrapperStatusEnum } from '../FormWrapper/FormWrapperStatusEnum';
import { IFormWrapperFieldStatus } from '../FormWrapper/IFormWrapperFieldStatus';
export function getFieldStatus(status: IFormWrapperFieldStatus, fieldName: string) {
    return (status.get(fieldName) || { status: FormWrapperStatusEnum.initial }).status;
}
