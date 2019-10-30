import * as React from 'react';
import { IFeedbackProps } from "./IFeedbackProps";
import { FormWrapperStatusEnum } from '../../FormWrapper/FormWrapperStatusEnum';

export function Feedback(props: IFeedbackProps): JSX.Element {
  const { feedbackId,
    status } = props;
  let spanElementFeedback: JSX.Element = <span id={feedbackId} className="sr-only" />;
  switch (status) {
    case FormWrapperStatusEnum.error:
      spanElementFeedback = (
        <React.Fragment>
          <span
            className="glyphicon glyphicon-remove form-control-feedback"
            aria-hidden="true"
          />
          <span id={feedbackId} className="sr-only">
            (error)
          </span>
        </React.Fragment>
      );
      break;
    case FormWrapperStatusEnum.validated:
      spanElementFeedback = (
        <React.Fragment>
          <span
            className="glyphicon glyphicon-ok form-control-feedback"
            aria-hidden="true"
          />
          <span id={feedbackId} className="sr-only">
            (success)
          </span>
        </React.Fragment>
      );
      break;
    case FormWrapperStatusEnum.dirty:
    case FormWrapperStatusEnum.dirty:
    case FormWrapperStatusEnum.touched:
      spanElementFeedback = (
        <React.Fragment>
          <span
            className="glyphicon glyphicon-warning-sign form-control-feedback"
            aria-hidden="true"
          />
          <span id={feedbackId} className="sr-only">
            (warning)
          </span>
        </React.Fragment>
      );
      break;
  }
  return spanElementFeedback;
}