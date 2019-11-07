import { ISponsor, IVisit } from '../types';
export interface IAdminPageProps {
    errorLoggingService?: (errorMessage: string, stack?: string) => Promise<void>;
    sponsorsService: () => Promise<ISponsor[]>;
    visitsService: (sponsorId: number) => Promise<IVisit[]>;
}
