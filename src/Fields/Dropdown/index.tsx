import * as React from "react";
import { getBootstrapErrorClassName } from "../GetBootstrapErrorClassName";
import { FormFieldStatusEnum } from "../../types";
import { IDropdownFieldProps } from "./IDropdownFieldProps";

export function DropDownField(props: IDropdownFieldProps): JSX.Element {
    const className = getBootstrapErrorClassName(props.status || FormFieldStatusEnum.Initial);
    return <div className={props.className}>
        <div className="col-sm-offset-2 col-sm-10">
            <div className={className}>
            </div>
        </div>
    </div>;
}