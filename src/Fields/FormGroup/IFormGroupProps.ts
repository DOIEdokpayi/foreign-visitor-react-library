import { FormWrapperStatusEnum } from "../../FormWrapper/FormWrapperStatusEnum";

export interface IFormGroupProps {
    associatedFieldId: string;
    children: JSX.Element;
    description?: string;
    displayName: string;
    required?:boolean;
    status: FormWrapperStatusEnum;
}