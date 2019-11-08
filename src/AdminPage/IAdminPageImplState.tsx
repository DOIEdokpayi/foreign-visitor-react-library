import { ISponsor, IVisit, IVisitor } from "../types";
import { IResponseFormValues } from "../ResponseForm/IResponseFormValues";

export interface IAdminPageImplState {
    responseFormData?: IResponseFormValues;
    selectedSponsor?: ISponsor;
    selectedVisit?: IVisit; 
    showResponseForm?: boolean;
    sponsors?: ISponsor[];
    visits?: IVisit[];
    visitors?: IVisitor[];
}
