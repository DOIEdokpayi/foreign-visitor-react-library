import { IStringIndexable } from "../types";
export interface IMasterTableRowProps<T extends IStringIndexable> {
    DeleteAction: (key: string) => void;
    DeleteClick: (key: string) => void;
    DeleteText: string;
    DetailText: string;
    OnDetailClick: (key: string) => void;
    Value: T;
    Key: string;
    Fields: Map<string, string>;
}
