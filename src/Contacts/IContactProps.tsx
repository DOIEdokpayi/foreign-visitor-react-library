import { IContact, IContactFunc } from '../types';
export interface IContactProps {
    Contacts: IContact[];
    ClickHandler: IContactFunc;
}
