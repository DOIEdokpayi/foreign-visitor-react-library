import { IccRemoveHandlerProps } from "./IccRemoveHandlerProps";

export function ccRemoveHandler(props: IccRemoveHandlerProps): void {
    const { index, setFieldValue, values } = props;
    if (index > -1 && values.cc && values.cc.length > 0 && index < values.cc.length) {
        const cc = values.cc;
        cc.splice(index, 1);
        setFieldValue("cc", cc);
    }
}