/**
 * @function RadioButton
 */

import * as React from 'react';
import { radioButtonClick } from './RadioButtonClick';
import { IRadioButtonProps } from './IRadioButtonProps';

export function RadioButton<T>(props: IRadioButtonProps<T>): JSX.Element {
    const { checked, className, fieldName, id, label, setFieldValue, value, valueConverter } = props;

    const activeClassName = " active";
    const checkedActiveClassName = (checked ? activeClassName : "");
    const labelClassName = (className || "btn btn-primary") + checkedActiveClassName;
    return <label
        className={labelClassName}
        htmlFor={id}
        onClick={() => radioButtonClick(value, fieldName, setFieldValue)}>
        <input
            id={id}
            name={fieldName}
            type="radio"
            value={valueConverter(value)} /> {label}
    </label>;
}
