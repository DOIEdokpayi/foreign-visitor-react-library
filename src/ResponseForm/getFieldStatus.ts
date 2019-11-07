import { IFormWrapperFieldStatus } from '../FormWrapper/IFormWrapperFieldStatus';
import { IFieldStatus } from '../FormWrapper/IFieldStatus';
import { FormWrapperStatusEnum } from '../types';

export function getFieldStatus(status: IFormWrapperFieldStatus, fieldName: string): IFieldStatus {
    return (status.get(fieldName) || { status: FormWrapperStatusEnum.initial });
}
