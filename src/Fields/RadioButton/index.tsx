/**
 * @function RadioButton
 */

import * as React from 'react';
import { radioButtonClick } from './RadioButtonClick';
import { IRadioButtonProps } from './IRadioButtonProps';

export class RadioButton<T> extends React.Component<IRadioButtonProps<T>>{
    private inputRef: React.RefObject<HTMLInputElement>;
    constructor(props: IRadioButtonProps<T>) {
        super(props);
        this.inputRef = React.createRef<HTMLInputElement>();
    }
    public render(): React.ReactElement<IRadioButtonProps<T>> {
        const { checked, className, fieldName, id, label, setFieldValue, value, valueConverter } = this.props;

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
                ref={this.inputRef}
                type="radio"
                value={valueConverter(value)} /> {label}
        </label>;
    }

    public componentDidUpdate() {
        if (this.props.checked) {
            if (this.inputRef.current) {
                const inputElement = this.inputRef.current;
                inputElement.checked = true;
            }
        }
    }
}
