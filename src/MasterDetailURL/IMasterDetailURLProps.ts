import { ICommonFields, IMasterDetailProps, StateContainer } from "../types";
import History from "history";

export interface IMasterDetailURLProps<T extends ICommonFields> extends IMasterDetailProps {
    BackUrl: string;
    Data: StateContainer<T>;
    DeleteAction: (id: string) => void;
    DetailUrl: (id: string) => History.LocationDescriptor<any>;
    NewUrl: () => History.LocationDescriptor<any>;
    NextUrl: string;
}