import { IStringIndexable } from "../types";
import { IFormWrapperFieldStatus } from "./IFormWrapperFieldStatus";

export interface IFormValidateProps {
    status: IFormWrapperFieldStatus;
    values: IStringIndexable;
}
