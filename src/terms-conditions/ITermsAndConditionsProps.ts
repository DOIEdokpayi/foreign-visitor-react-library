import { SubmitActionFunc } from "doiforms";
export interface ITermsAndConditionsProps {
  ErrorHandler: (ErrorMessage?: string, Stack?: string) => JSX.Element;
  IconUrl: string;
  TermsAccepted: boolean;
  Redirect: string;
  SubmitPageFunc: () => JSX.Element;
  SubmitAction: SubmitActionFunc;
}
