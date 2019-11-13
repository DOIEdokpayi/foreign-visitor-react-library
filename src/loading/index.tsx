/**
 * @function Loading
 */

import * as React from 'react';
export default function Loading(): JSX.Element {
    return (<div className="alert alert-info">
        <h3>Loading...</h3>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
    </div>);
}