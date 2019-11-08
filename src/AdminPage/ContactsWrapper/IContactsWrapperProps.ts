import { IContact, IContactFunc } from "../../types";
export interface IContactsWrapperProps {
    Heading: string;
    contacts?: IContact[];
    ClickHandler: IContactFunc;
}
