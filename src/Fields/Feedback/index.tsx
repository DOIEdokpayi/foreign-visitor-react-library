import * as React from 'react';
import { IFeedbackProps } from "./IFeedbackProps";
import { FormFieldStatusEnum } from '../../types';

export function Feedback(props: IFeedbackProps): JSX.Element{
    const { associatedFieldId,
        status} = props;
    const feedbackID: string = associatedFieldId + "status";    
  let spanElementFeedback: JSX.Element = <span id={feedbackID} className="sr-only" />;
  switch (status) {
    case FormFieldStatusEnum.Error:
      spanElementFeedback = (
        <React.Fragment>
          <span
            className="glyphicon glyphicon-remove form-control-feedback"
            aria-hidden="true"
          />
          <span id={feedbackID} className="sr-only">
            (error)
          </span>
        </React.Fragment>
      );
      break;
    case FormFieldStatusEnum.Success:
      spanElementFeedback = (
        <React.Fragment>
          <span
            className="glyphicon glyphicon-ok form-control-feedback"
            aria-hidden="true"
          />
          <span id={feedbackID} className="sr-only">
            (success)
          </span>
        </React.Fragment>
      );
      break;
    case FormFieldStatusEnum.Warning:
      spanElementFeedback = (
        <React.Fragment>
          <span
            className="glyphicon glyphicon-warning-sign form-control-feedback"
            aria-hidden="true"
          />
          <span id={feedbackID} className="sr-only">
            (warning)
          </span>
        </React.Fragment>
      );
      break;
  }
  return spanElementFeedback;
}