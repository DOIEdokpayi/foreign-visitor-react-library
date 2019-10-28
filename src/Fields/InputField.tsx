import * as React from "react";
import {
  IInputControlProps,
  IField,
  EnumFieldType
} from "doiforms";
import DefaultChangeFunc from "../DefaultChangeFunc";

function InputField(props: IInputControlProps): JSX.Element {
  const field: IField = props.Field;
  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = DefaultChangeFunc<HTMLInputElement>({
    SendMessage: props.SendMessage,
    Field: props.Field
  });
  return (
    <React.Fragment>
      <input
        aria-describedby={props.AriaDescribedBy}
        type={EnumFieldType[field.Type]}
        placeholder={field.Placeholder}
        required={field.Required}
        id={field.Id}
        name={field.Name}
        className="form-control"
        value={props.Value ? props.Value.toString() : ""}
        onChange={handleChange}
      />
      {props.FeedbackElement}
    </React.Fragment>
  );
}

export { InputField };
