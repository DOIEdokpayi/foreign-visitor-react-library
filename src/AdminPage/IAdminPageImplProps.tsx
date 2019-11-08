import { IAdminPageProps } from "./IAdminPageProps";
export interface IAdminPageImplProps extends IAdminPageProps {
    handleError: (reason: any) => void;
}
