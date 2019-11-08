import { IVisit, IVisitFunc } from '../types';
export interface IVisitsProps {    
    ClickHandler: IVisitFunc;
    IsAdmin: boolean;
    SelectHandler: IVisitFunc;
    Visits: IVisit[];
}
