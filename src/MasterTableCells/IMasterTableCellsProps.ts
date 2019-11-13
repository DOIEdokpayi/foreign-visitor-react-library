import { IStringIndexable } from "../types";
export interface IMasterTableCellsProps<T extends IStringIndexable> {
    Value: T;
    Key: string;
    Fields: Map<string, string>;
}
