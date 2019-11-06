/**
 * @function RadioButton
 */

import * as React from 'react';
import { radioButtonClick } from './RadioButtonClick';
import { IRadioButtonProps } from './IRadioButtonProps';

export function RadioButton<T>(props: IRadioButtonProps<T>): JSX.Element {
    const { checked, className, isDefaultOption, fieldName, handleChange, id, label, setFieldValue, value, valueConverter } = props;
    const inputChecked = (undefined !== checked ? checked : isDefaultOption) || false;
    const activeClassName = " active";
    const checkedActiveClassName = (checked ? activeClassName : "");
    const labelClassName = (className || "btn btn-primary") + ((isDefaultOption && (undefined === checked)) ? activeClassName : checkedActiveClassName);
    return <label
        className={labelClassName}
        onClick={() => radioButtonClick(value, fieldName, setFieldValue)}>
        <input
            checked={inputChecked}
            id={id}
            name={fieldName}
            onChange={handleChange}
            type="radio"
            value={valueConverter(value) } /> {label}
    </label>;
}
