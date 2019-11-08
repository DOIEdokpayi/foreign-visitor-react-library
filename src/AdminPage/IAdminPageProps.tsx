import { ISponsor, IVisit, IVisitor } from '../types';
import { IResponseFormValues } from '../ResponseForm/IResponseFormValues';
export interface IAdminPageProps {
    emailAddressesService:(visitorId:number) => Promise<string[]>;
    errorLoggingService?: (errorMessage: string, stack?: string) => Promise<void>;
    IsAdmin: boolean;
    getResponseFormValuesService: (sponsor:ISponsor, visit: IVisit) => Promise<IResponseFormValues>;
    saveResponseFormValuesService: (responseFormData: IResponseFormValues) => Promise<void>;
    sponsorsService: () => Promise<ISponsor[]>;
    telephonesService:(visitorId:number) => Promise<string[]>;
    visitsService: (sponsorId: number) => Promise<IVisit[]>;
    visitorsService: (visitId: number) => Promise<IVisitor[]>;
}
