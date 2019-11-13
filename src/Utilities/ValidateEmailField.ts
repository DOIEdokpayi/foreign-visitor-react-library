import Isemail from "isemail";
import { IValidationResult } from "../types";

function ValidateEmailField(emailAddress: string): IValidationResult {
  const isValid: boolean =
    undefined !== emailAddress &&
    null !== emailAddress &&
    Isemail.validate(emailAddress as string);
  if (!isValid) {
    return {
      IsError: true,
      Message:
        "Please enter a valid email address in the format: username@domain.gov"
    };
  } else {
    return { IsError: false };
  }
}

export default ValidateEmailField;