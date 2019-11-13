import { IWizardPage } from "./IWizardPage";

interface IWizardState {
  currentPage: IWizardPage;
  isMounted: boolean;
  userEmail: string;
}

export default IWizardState;
