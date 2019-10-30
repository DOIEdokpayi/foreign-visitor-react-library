import * as React from 'react';
import { IFormFieldProps } from "./IFormFieldProps";
import { DescriptionSpan } from './descriptionSpan';

export function FormField(props: IFormFieldProps): JSX.Element {
    const { children, description } = props;
    return (<div className="col-sm-10">
        {children}
        <DescriptionSpan descriptionText={description} />        
    </div>);
}