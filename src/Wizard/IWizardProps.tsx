import { IWizardPage } from "./IWizardPage";

interface IWizardProps {
  Pages: IWizardPage[];
  userEmailService: () => Promise<string>;
}

export default IWizardProps;
