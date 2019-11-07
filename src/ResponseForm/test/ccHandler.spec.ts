import { ccHandler } from "../ResponseFormFields/ccHandler";
import * as sinon from "sinon";
import { IccHandlerProps } from "../ResponseFormFields/IccHandlerProps";
import { IResponseFormValues } from "../..";

test("ccHandler calls setFieldValue", () => {
    const setFieldValue = sinon.spy();
    const props = { setFieldValue: setFieldValue, values: {} }
    ccHandler(props);
    expect(setFieldValue.called).toBe(true);
});
test("ccHandler sets cc to string array", () => {
    const values: IResponseFormValues = {};
    const setFieldValue = sinon.spy((field: string, value: string[]) => values[field] = value);
    const props: IccHandlerProps = { setFieldValue: setFieldValue, values: values }
    ccHandler(props);
    expect(props.values.cc).toBeDefined();
    if (props.values.cc) {
        expect(props.values.cc.length > 0).toBe(true);
    }
});

test("ccHandler adds to existing array", () => {
    const expected = "test";
    const values: IResponseFormValues = { cc: [expected] };
    const setFieldValue = sinon.spy((field: string, value: string[]) => values[field] = value);
    const props: IccHandlerProps = { setFieldValue: setFieldValue, values: values }
    ccHandler(props);
    expect(props.values.cc).toBeDefined();
    if (props.values.cc) {
        expect(props.values.cc.length > 1).toBe(true);
        expect(props.values.cc[0]).toBe(expected);
    }
});

test("ccHandler adds empty string to array", () => {
    const expected = "";
    const values: IResponseFormValues = {};
    const setFieldValue = sinon.spy((field: string, value: string[]) => values[field] = value);
    const props: IccHandlerProps = { setFieldValue: setFieldValue, values: values }
    ccHandler(props);
    expect(props.values.cc).toBeDefined();
    if (props.values.cc) {
        expect(props.values.cc.length > 0).toBe(true);
        const actual = props.values.cc[0];
        expect(actual).toBe(expected);
    }
});

test("ccHandler shouldn't validate", () => {
    const values: IResponseFormValues = {};
    const expected = false;
    let actual: boolean = false;
    const setFieldValue = sinon.spy((field: string, value: string[], shouldValidate?: boolean) => {
        values[field] = value;
        actual = shouldValidate || false;
    });
    const props: IccHandlerProps = { setFieldValue: setFieldValue, values: values }
    ccHandler(props);
    expect(actual).toBe(expected);
});