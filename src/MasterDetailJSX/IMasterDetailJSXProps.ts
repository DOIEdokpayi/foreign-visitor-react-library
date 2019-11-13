import { ICommonFields, IMasterDetailProps } from "../types";

export default interface IMasterDetailJSXProps<T extends ICommonFields> extends IMasterDetailProps {
    Data: Map<string, T>;
    DeleteAction: (key: string) => Map<string, T>;
    OnDetailClick: (key: string) => void;
    OnNewClick: () => void;
}

