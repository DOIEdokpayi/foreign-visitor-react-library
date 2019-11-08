import { ISponsor, IVisit, IVisitor } from "../types";
import { IResponseFormValues } from "../ResponseForm/IResponseFormValues";

export interface IAdminPageImplState {
    emailAddresses?: string[];
    responseFormData?: IResponseFormValues;
    selectedSponsor?: ISponsor;
    selectedVisit?: IVisit;
    selectedVisitor?: IVisitor;
    showResponseForm?: boolean;
    showVisitorInfo?: boolean;
    sponsors?: ISponsor[];
    telephoneNumbers?: string[];
    visits?: IVisit[];
    visitors?: IVisitor[];
}
