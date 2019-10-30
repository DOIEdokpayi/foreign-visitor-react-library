import { FormFieldStatusEnum } from "../../types";

export interface IFeedbackProps{
    associatedFieldId: string;
    status: FormFieldStatusEnum;
}