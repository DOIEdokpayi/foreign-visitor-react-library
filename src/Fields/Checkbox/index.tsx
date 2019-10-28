import * as React from "react";
import { ICheckBoxFieldProps } from "./ICheckBoxFieldProps";
import { EnumFormGroupStatus } from "../../types";

export class CheckBoxField extends React.Component<ICheckBoxFieldProps>{
    public render(): React.ReactNode {
        let className = "";
        switch (this.props.status) {
            case EnumFormGroupStatus.Success:
                className = "has-success";
                break;
            case EnumFormGroupStatus.Warning:
                className = "has-warning";
                break;

            case EnumFormGroupStatus.Error:
                className = "has-error";
                break;
        }
        return <div className={this.props.ClassName} key={"check-box" + (this.props.Index || 0).toString()}>
            <div className="col-sm-offset-2 col-sm-10">
                <div className={className}>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" checked={this.props.checked} {...this.props.field} disabled={this.props.form.isSubmitting} />{" "}
                            {this.props.DisplayName}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    }
}