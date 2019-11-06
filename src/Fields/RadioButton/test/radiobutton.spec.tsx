import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { RadioButton } from '..';
import { FormGroup } from '../../FormGroup';
import { FormWrapperStatusEnum } from '../../../FormWrapper/FormWrapperStatusEnum';
import { ThreatLevelEnum } from '../../../types';
import sinon from 'sinon';

function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
    console.log("value :" + event.target.value);
    console.log("checked :" + (event.target as HTMLInputElement).checked);
}

test('Radio Button renders', () => {
    const _setfieldVal = (f: string, v: string) => {
        console.log("field :" + f);
        console.log("value: " + v);
    }
    const radioButton = shallow(<RadioButton
        checked
        fieldName="test"
        handleChange={handleChange}
        label="test"
        setFieldValue={_setfieldVal}
        value="test"
        valueConverter={(value: string) => value} />);


    expect(radioButton).not.toBeNull();
    expect(radioButton.length > 0).toBe(true);
});


test('Radio Button renders input of type radio', () => {
    const _setfieldVal = (f: string, v: string) => {
        console.log("field :" + f);
        console.log("value: " + v);
    }
    const radioButton = shallow(<RadioButton
        checked
        fieldName="test"
        handleChange={handleChange}
        label="test"
        setFieldValue={_setfieldVal}
        value="test"
        valueConverter={(value: string) => value} />);

    const inputElement = radioButton.find("input[type='radio']");
    expect(inputElement).not.toBeNull();
    expect(inputElement.length > 0).toBe(true);
});
test('Radio Button checks radio button', () => {
    const _setfieldVal = (f: string, v: string) => {
        console.log("field :" + f);
        console.log("value: " + v);
    }
    const radioButton = shallow(<RadioButton
        checked={true}
        fieldName="test"
        handleChange={handleChange}
        label="test"
        setFieldValue={_setfieldVal}
        value="test"
        valueConverter={(value: string) => value} />);

    const inputElement = radioButton.find('input[checked=true]');
    expect(inputElement).not.toBeNull();
    expect(inputElement.length > 0).toBe(true);
});

test('Radio Button simulated click', () => {
    let field: string = "";
    let value: ThreatLevelEnum = ThreatLevelEnum.NotApplicable;
    let checked: boolean = false;
    let handleChangeValue: string = "";

    const _handleChange = sinon.spy((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        handleChangeValue = event.target.value;
        checked = (event.target as HTMLInputElement).checked;
    });
    const _setfieldVal = sinon.spy((f: string, v: ThreatLevelEnum) => {
        field = f;
        value = v;
    });

    const threatLevelValueConvert = (value: ThreatLevelEnum) => ThreatLevelEnum[value].toString();
    const formElement = mount(<form>
        <FormGroup
            associatedFieldId={"threatlevel"}
            description={"Level of threat assigned by Counter Intelligence"}
            displayName={"Threat Level"}
            status={FormWrapperStatusEnum.initial} >
            <div className="btn-group" data-toggle="buttons">
                <RadioButton
                    checked={false}
                    fieldName={"threatlevel"}
                    handleChange={_handleChange}
                    label={"Urgent"}
                    setFieldValue={_setfieldVal}
                    value={ThreatLevelEnum.Urgent}
                    valueConverter={threatLevelValueConvert}
                />
                <RadioButton
                    checked={false}
                    fieldName={"threatlevel"}
                    handleChange={_handleChange}
                    label={"High"}
                    setFieldValue={_setfieldVal}
                    value={ThreatLevelEnum.High}
                    valueConverter={threatLevelValueConvert}
                />
                <RadioButton
                    checked={false}
                    fieldName={"threatlevel"}
                    handleChange={_handleChange}
                    label={"Medium"}
                    setFieldValue={_setfieldVal}
                    value={ThreatLevelEnum.Medium}
                    valueConverter={threatLevelValueConvert}
                />
            </div>
        </FormGroup>
    </form>);

    const buttons = formElement.find(".btn-primary");
    expect(buttons.length).toBe(3);
    buttons[0].simulate("click");
       
    expect(field.length > 0).toBe(true);
    expect(value).toBe(ThreatLevelEnum.Urgent);
    expect(checked).toBe(false);
    expect(handleChangeValue).toBe("");
});