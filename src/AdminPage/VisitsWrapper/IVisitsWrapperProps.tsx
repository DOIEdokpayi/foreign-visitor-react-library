import { IVisit, IVisitFunc } from "../../types";
export interface IVisitsWrapperProps {
    ClickHandler: IVisitFunc;
    IsAdmin: boolean;
    SelectHandler: IVisitFunc;
    visits?: IVisit[];
}
