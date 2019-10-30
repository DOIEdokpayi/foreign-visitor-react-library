/**
 * @class TermsAndConditions
 */

import * as React from 'react';
import { TermsAndConditionsHeader } from './TermsAndConditionsHeader';
import { TermsAndConditionsWarningList } from './TermsAndConditionsWarningList';
import { TermsAndConditionsForm } from './TermsAndConditionsForm';
import { ITermsAndConditionsProps } from './ITermsAndConditionsProps';

export default function TermsAndConditions(props: ITermsAndConditionsProps): JSX.Element {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-2">
          <img
            id="fvf-logo"
            src={props.IconUrl}
            alt="Foreign Visitor Form Logo"
            className="img-responsive" />
        </div>
        <div className="col-xs-10">
          <TermsAndConditionsHeader />
          <div className="container">
            <div className="row">
              <div className="col-xs-8">
                <div className="alert alert-warning" role="alert">
                  <TermsAndConditionsWarningList />
                </div>
                <TermsAndConditionsForm
                  SubmitActionFunc={props.SubmitActionFunc}
                  TermsAccepted={props.TermsAccepted} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

