import { ccRemoveHandler } from "../ResponseFormFields/ccRemoveHandler";
import * as sinon from "sinon";
import { IResponseFormValues } from "../..";

test("ccRemoveHandler does not call setFieldValue if there is not at least one item in array", () => {
    const setFieldValue = sinon.spy();
    const props = { setFieldValue: setFieldValue, values: {}, index: -1 }
    ccRemoveHandler(props);
    expect(setFieldValue.called).toBe(false);
});

test("ccRemoveHandler calls setFieldValue if there is at least one item in array", () => {
    const setFieldValue = sinon.spy();
    const props = { setFieldValue: setFieldValue, values: { cc: [""] }, index: 0 }
    ccRemoveHandler(props);
    expect(setFieldValue.called).toBe(true);
});

test("ccRemoveHandler removes item from array", () => {
    const setFieldValue = sinon.spy((field: string, value: string[]) => values[field] = value);
    const values: IResponseFormValues = { cc: [""] };
    const props = { setFieldValue: setFieldValue, values: values, index: 0 }
    ccRemoveHandler(props);
    expect(setFieldValue.called).toBe(true);
});