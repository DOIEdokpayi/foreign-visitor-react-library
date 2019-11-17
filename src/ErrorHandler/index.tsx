import * as React from "react";
import ErrorComponent from "../ErrorComponent";

export default function ErrorHandler(ErrorMessage?: string): JSX.Element {
  return <ErrorComponent
  errorMessage={ErrorMessage || "Error in Foreign Visitor Form"}
   />;
}
