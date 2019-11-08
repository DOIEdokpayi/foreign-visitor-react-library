import { ISponsor, IVisit, IVisitor, IContact, ILocation } from "../types";
import { IResponseFormValues } from "../ResponseForm/IResponseFormValues";

export interface IAdminPageImplState {    
    emailAddresses?: string[];
    escorts?: IContact[];
    locations?: ILocation[];
    locationSearchUrl?: string;
    peopleSearchUrl?: string;
    responseFormData?: IResponseFormValues;
    selectedSponsor?: ISponsor;
    selectedVisit?: IVisit;
    selectedVisitor?: IVisitor;
    showLocation?: boolean;
    showPeopleSearch?: boolean;
    showResponseForm?: boolean;
    showVisitorInfo?: boolean;
    sponsors?: ISponsor[];
    telephoneNumbers?: string[];
    translators?: IContact[];
    visits?: IVisit[];
    visitors?: IVisitor[];
}
