import * as React from "react";
import { ICheckBoxFieldProps } from "./ICheckBoxFieldProps";
import { getBootstrapErrorClassName } from "../GetBootstrapErrorClassName";
import { FormWrapperStatusEnum } from "../../FormWrapper/FormWrapperStatusEnum";

export function CheckBoxField(props:ICheckBoxFieldProps): JSX.Element{
        const className = getBootstrapErrorClassName(props.status || FormWrapperStatusEnum.initial);
        return <div className={props.className}>
            <div className="col-sm-offset-2 col-sm-10">
                <div className={className}>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" checked={props.checked} disabled={props.disabled} id={props.id} name={props.name} onChange={props.onChange} />{" "}
                            {props.displayName}
                        </label>
                        {
                            props.helpText ?
                            <span className="help-block">{props.helpText}</span> : undefined
                        }
                    </div>
                </div>
            </div>
        </div>
    }
