import * as React from 'react';
import { IFormGroupProps } from "./IFormGroupProps";
import { formGroupClassName } from '../FormGroupClassName';
import { RequiredField } from '../RequiredField';
import { FormField } from '../FormField';
import { Feedback } from '../Feedback';

export function FormGroup(props: IFormGroupProps): JSX.Element {
  const { associatedFieldId, children, description, displayName, required, status } = props;
  const feedbackId = associatedFieldId + "status";
  return (<div className={formGroupClassName(status)}>
    <label
      htmlFor={associatedFieldId}
      className="control-label col-sm-2"
    >
      {displayName}
      <RequiredField required={required || false} />
    </label>
    <FormField ariaDescribedBy={feedbackId} description={description} status={status}>
      <React.Fragment>
        {children}
        <Feedback feedbackId={feedbackId} status={status} />
      </React.Fragment>
    </FormField>

  </div>);
}