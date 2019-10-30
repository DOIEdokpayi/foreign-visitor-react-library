import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";

export interface IFormWrapperState {
    isResetting?: boolean;
    isSubmitting?: boolean;
    isValidating?: boolean;
    status?:IFormWrapperFieldStatus;
}