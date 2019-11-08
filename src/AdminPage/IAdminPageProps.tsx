import { ISponsor, IVisit, IVisitor, ILocation, IContact } from '../types';
import { IResponseFormValues } from '../ResponseForm/IResponseFormValues';
export interface IAdminPageProps {
    emailAddressesService: (visitorId: number) => Promise<string[]>;
    errorLoggingService?: (errorMessage: string, stack?: string) => Promise<void>;
    escortsService: (visitId: number) => Promise<IContact[]>;
    IsAdmin: boolean;
    getResponseFormValuesService: (sponsor: ISponsor, visit: IVisit) => Promise<IResponseFormValues>;
    locationsService: (visitId: number) => Promise<ILocation[]>;
    saveResponseFormValuesService: (responseFormData: IResponseFormValues) => Promise<void>;
    sponsorsService: () => Promise<ISponsor[]>;
    telephonesService: (visitorId: number) => Promise<string[]>;
    translatorsService: (visitId: number) => Promise<IContact[]>;
    visitsService: (sponsorId: number) => Promise<IVisit[]>;
    visitorsService: (visitId: number) => Promise<IVisitor[]>;
}
