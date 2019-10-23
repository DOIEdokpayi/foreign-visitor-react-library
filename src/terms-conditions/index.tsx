/**
 * @class TermsAndConditions
 */

import * as React from 'react';
import { TermsAndConditionsHeader } from './TermsAndConditionsHeader';
import { TermsAndConditionsWarningList } from './TermsAndConditionsWarningList';
import { TermsAndConditionsForm } from './TermsAndConditionsForm';
import { ITermsAndConditionsProps } from './ITermsAndConditionsProps';

export default class TermsAndConditions extends React.Component<ITermsAndConditionsProps> {
  
  render() {    
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <img
              id="fvf-logo"
              src={this.props.IconUrl}
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
                    ErrorHandler={this.props.ErrorHandler}
                    SubmitAction={this.props.SubmitAction}
                    SubmitPageFunc={this.props.SubmitPageFunc} 
                    TermsAccepted={this.props.TermsAccepted}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
