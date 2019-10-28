import { IField, IInputControlProps } from "doiforms";
import * as React from "react";
import DefaultChangeFunc from "../DefaultChangeFunc";

function TextAreaField(props: IInputControlProps): JSX.Element {
  const field: IField = props.Field;
  const handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void = DefaultChangeFunc<HTMLTextAreaElement>({
    SendMessage: props.SendMessage,
    Field: props.Field
  });
  return (
    <React.Fragment>
      <textarea
        aria-describedby={props.AriaDescribedBy}
        placeholder={field.Placeholder}
        required={field.Required}
        id={field.Id}
        name={field.Name}
        className="form-control"
        value={(props.Value || "" ).toString()}
        onChange={handleChange}
      />
      {props.FeedbackElement}
    </React.Fragment>
  );
}

export { TextAreaField };

