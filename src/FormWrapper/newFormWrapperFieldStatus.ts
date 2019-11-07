import { IFieldStatus } from './IFieldStatus';
import { IFormWrapperFieldStatus } from './IFormWrapperFieldStatus';
export function newFormWrapperFieldStatus(): IFormWrapperFieldStatus {
    return new Map<string, IFieldStatus>();
}
