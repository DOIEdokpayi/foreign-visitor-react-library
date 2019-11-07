import { ccUpdateHandler } from "../ResponseFormFields/ccUpdateHandler";
import * as sinon from "sinon";
import { IResponseFormValues } from "../IResponseFormValues";

test("ccUpdateHandler does not call setFieldValue if there is not at least one item in array", () => {
    const setFieldValue = sinon.spy();
    const props = { emailAddress: "", setFieldValue: setFieldValue, values: {}, index: -1 }
    ccUpdateHandler(props);
    expect(setFieldValue.called).toBe(false);
});

test("ccUpdateHandler updates email address", () => {
    const expected = "test@test.com";
    const setFieldValue = sinon.spy((field: string, value: string[]) => values[field] = value);
    const values: IResponseFormValues = { cc: [""] };

    const props = { emailAddress: expected, setFieldValue: setFieldValue, values: values, index: 0 }
    ccUpdateHandler(props);
    expect(setFieldValue.called).toBe(true);
    expect(values.cc).toBeDefined();
    if (values.cc) {
        const actual = values.cc[0];
        expect(actual).toBe(expected);
    }
});