import * as React from 'react';

export class TermsAndConditionsHeader extends React.Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Terms and Conditions</h3>
                        <h4>Contact Information</h4>
                        <p>
                            The counterintelligence Unit can be reached via the CIU Hotline at{" "}
                            <b>1-844-565-1929</b>&nbsp;
        <a href="mailto:DOI_Counterintelligence@ios.doi.gov">
                                DOI_Counterintelligence@ios.doi.gov
        </a>
                        </p>
                        <p>
                            field reporting, the CIU can be reached by secure phone at:{" "}
                            <b>534-5284/934-2218</b> or via classified email:
        <a href="mailto:DOI_Counterintelligence@dhs.sgov.gov">
                                DOI_Counterintelligence@dhs.sgov.gov (HSDN/SIPRNet)
        </a>
                            <br />
                            <a href="mailto:counterintelligence@doi.csp.ic.gov">
                                counterintelligence@doi.csp.ic.gov (JWICS/IC Mail)
        </a>
                            .
      </p>
                        <hr />
                        <p>
                            <b>
                                I understand that the OLES Counterintelligence Unit must be notified if any of the
                                following activities occurred during a foreign visit:
      </b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
