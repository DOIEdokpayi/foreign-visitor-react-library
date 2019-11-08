import * as React from "react";
export interface IAdminPageState {
    hasError?: boolean;
    errorMessage?: string;
    error?: Error;
    errorInfo?: React.ErrorInfo;   
}
