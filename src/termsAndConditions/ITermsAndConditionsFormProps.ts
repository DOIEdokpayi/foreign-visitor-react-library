import { ITermsAndConditionsFormSubmissionAction } from "../types";

export interface ITermsAndConditionsFormProps {
    SubmitActionFunc: ITermsAndConditionsFormSubmissionAction;
    TermsAccepted: boolean;
}
