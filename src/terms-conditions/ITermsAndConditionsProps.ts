import { SubmitActionFunc } from "doiforms";
import { IErrorHandlerFunc } from "../types";
export interface ITermsAndConditionsProps {
  ErrorHandler: IErrorHandlerFunc;
  IconUrl: string;
  TermsAccepted: boolean;
  Redirect: string;
  SubmitPageFunc: () => JSX.Element;
  SubmitAction: SubmitActionFunc;
}
