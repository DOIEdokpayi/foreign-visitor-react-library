import * as React from "react";
import { FormGroup } from "../../../Fields/FormGroup";
import { getFieldStatus } from "../../../ResponseForm/getFieldStatus";
import { IBasicFieldProps } from "./IBasicFieldProps";

export default function BasicField(props: IBasicFieldProps): React.ReactElement<IBasicFieldProps> {
    const { displayName, handleBlur, handleChange, id, status, type, value } = props;
    const fieldStatus = getFieldStatus(status, id);
    return <FormGroup associatedFieldId={id} displayName={displayName} status={fieldStatus.status}>
        <input
            aria-describedby={id + "status"}
            className={"form-control"}
            id={id}
            name={id}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            type={type} />
    </FormGroup>
} 