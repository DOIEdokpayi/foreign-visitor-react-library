import { IVisit, IVisitFunc } from '../types';
export interface IVisitsProps {
    IsAdmin: boolean;
    Visits: IVisit[];
    ClickHandler: IVisitFunc;
    SelectHandler: IVisitFunc;
}
