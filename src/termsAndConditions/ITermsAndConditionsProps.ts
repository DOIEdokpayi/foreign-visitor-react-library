import { ITermsAndConditionsFormSubmissionAction } from "../types";
export interface ITermsAndConditionsProps {
  IconUrl: string;
  TermsAccepted: boolean;
  SubmitActionFunc: ITermsAndConditionsFormSubmissionAction;
}
