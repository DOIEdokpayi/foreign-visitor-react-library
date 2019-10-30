import * as React from "react";
import { getBootstrapErrorClassName } from "../GetBootstrapErrorClassName";
import { IDropdownFieldProps } from "./IDropdownFieldProps";
import { FormWrapperStatusEnum } from "../../FormWrapper/FormWrapperStatusEnum";

export function DropDownField(props: IDropdownFieldProps): JSX.Element {
    const className = getBootstrapErrorClassName(props.status || FormWrapperStatusEnum.initial);
    return <div className={props.className}>
        <div className="col-sm-offset-2 col-sm-10">
            <div className={className}>
            </div>
        </div>
    </div>;
}