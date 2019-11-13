import { ISponsor, IVisit, IVisitor, ILocation, IContact } from '../types';
import { IResponseFormValues } from '../ResponseForm/IResponseFormValues';
export interface IAdminPageProps {
    emailAddressesService: (visitorId: string) => Promise<string[]>;
    errorLoggingService?: (errorMessage: string, stack?: string) => Promise<void>;
    escortsService: (visitId: string) => Promise<IContact[]>;
    IsAdmin: boolean;
    getResponseFormValuesService: (sponsor: ISponsor, visit: IVisit) => Promise<IResponseFormValues>;
    locationsService: (visitId: string) => Promise<ILocation[]>;
    saveResponseFormValuesService: (responseFormData: IResponseFormValues) => Promise<void>;
    sponsorsService: () => Promise<ISponsor[]>;
    telephonesService: (visitorId: string) => Promise<string[]>;
    translatorsService: (visitId: string) => Promise<IContact[]>;
    visitsService: (sponsorId: string) => Promise<IVisit[]>;
    visitorsService: (visitId: string) => Promise<IVisitor[]>;
}
