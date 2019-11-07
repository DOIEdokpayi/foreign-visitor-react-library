import { FormWrapperStatusEnum } from "../../types";

export interface IFormGroupProps {
    associatedFieldId: string;
    children: JSX.Element;
    description?: string;
    displayName: string;
    required?:boolean;
    status: FormWrapperStatusEnum;
}