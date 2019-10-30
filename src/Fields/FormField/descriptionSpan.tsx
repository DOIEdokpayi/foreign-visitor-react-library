import * as React from 'react';
import { IDescriptionSpanProps } from './IDescriptionSpanProps';

export function DescriptionSpan(props: IDescriptionSpanProps): JSX.Element | null {
    const { descriptionText } = props;
    return descriptionText ? <span className="help-block">{descriptionText}</span> : null;
}