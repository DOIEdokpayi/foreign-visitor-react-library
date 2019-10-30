import { ITermsAndConditionsFormSubmissionAction } from "../types";
export interface ITermsAndConditionsProps {
  IconUrl: string;
  TermsAccepted: boolean;
  Redirect: string;
  SubmitActionFunc: ITermsAndConditionsFormSubmissionAction;
}
