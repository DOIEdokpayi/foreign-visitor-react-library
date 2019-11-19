import { ISponsor, IVisit, IVisitor, ILocation, IContact } from '../types';
import { IResponseFormValues } from '../ResponseForm/IResponseFormValues';
export interface IAdminPageProps {
    emailAddressesService: (visitor: IVisitor) => Promise<string[]>;
    errorLoggingService?: (errorMessage: string, stack?: string) => Promise<void>;
    escortsService: (visit: IVisit) => Promise<IContact[]>;
    IsAdmin: boolean;
    getResponseFormValuesService: (sponsor: ISponsor, visit: IVisit) => Promise<IResponseFormValues>;
    locationsService: (visit: IVisit) => Promise<ILocation[]>;
    saveResponseFormValuesService: (responseFormData: IResponseFormValues) => Promise<void>;
    sponsorsService: () => Promise<ISponsor[]>;
    telephonesService: (visitor: IVisitor) => Promise<string[]>;
    translatorsService: (visit: IVisit) => Promise<IContact[]>;
    visitsService: (sponsor: ISponsor) => Promise<IVisit[]>;
    visitorsService: (visit: IVisit) => Promise<IVisitor[]>;
}
