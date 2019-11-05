/**
 * @function RadioButton
 */

import * as React from 'react';
import { radioButtonClick } from './RadioButtonClick';
import { IRadioButtonProps } from './IRadioButtonProps';

export function RadioButton(props: IRadioButtonProps): JSX.Element {
    const { checked, className, isDefaultOption, fieldName, handleChange, id, label, threatLevel, setFieldValue } = props;
    const inputChecked = (undefined !== checked ? checked : isDefaultOption) || false;
    const activeClassName = " active";
    const checkedActiveClassName = (checked ? activeClassName : "");
    const labelClassName = (className || "btn btn-primary") + ((isDefaultOption && (undefined === checked)) ? activeClassName : checkedActiveClassName);
    return <label
        className={labelClassName}
        onClick={() => radioButtonClick(threatLevel, fieldName, setFieldValue)}>
        <input
            checked={inputChecked}
            id={id}
            name={fieldName}
            onChange={handleChange}
            type="radio"
            value={threatLevel} /> {label}
    </label>;
}
