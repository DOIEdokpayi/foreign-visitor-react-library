import { ISponsor, IVisit, IContact, ILocation, IVisitor } from "../types";
import { IResponseFormValues } from "../ResponseForm/IResponseFormValues";
import { IConfirmationProps } from "../Confirmation/IConfirmationProps";

export interface IAdminPageImplState {    
    confirmation?: IConfirmationProps;
    emailAddresses?: string[];
    escorts?: IContact[];
    locations?: ILocation[];
    locationSearchUrl?: string;
    peopleSearchUrl?: string;
    responseFormData?: IResponseFormValues;
    selectedSponsor?: ISponsor;
    selectedVisit?: IVisit;
    selectedVisitor?: IVisitor;
    showConfirmation?: boolean;
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
