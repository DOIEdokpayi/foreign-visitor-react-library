import { FormWrapperStatusEnum } from '../FormWrapper/FormWrapperStatusEnum';
import { IFormWrapperFieldStatus } from '../FormWrapper/IFormWrapperFieldStatus';
import { IFieldStatus } from '../FormWrapper/IFieldStatus';
export function getFieldStatus(status: IFormWrapperFieldStatus, fieldName: string): IFieldStatus {
    return (status.get(fieldName) || { status: FormWrapperStatusEnum.initial });
}
