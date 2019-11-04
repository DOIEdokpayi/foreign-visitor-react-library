import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";
import { IInitialValues } from "../types";

export interface IFormValidateProps {
    status: IFormWrapperFieldStatus;
    values: IInitialValues;
}
