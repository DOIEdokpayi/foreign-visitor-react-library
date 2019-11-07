import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as sinon from 'sinon';
import { RadioButton } from '..';
import { FormWrapperStatusEnum, ThreatLevelEnum } from '../../../types';
import { FormGroup } from '../../FormGroup';

test('Radio Button renders', () => {
    const _setfieldVal = (f: string, v: string) => {
        console.log("field :" + f);
        console.log("value: " + v);
    }
    const radioButton = shallow(<RadioButton
        checked
        fieldName="test"
        label="test"
        setFieldValue={_setfieldVal}
        value="test"
        valueConverter={(value: string) => value} />);


    expect(radioButton).not.toBeNull();
    expect(radioButton.length > 0).toBe(true);
});


const basicConverter = sinon.spy((value: string) => value);
test('Radio Button renders input of type radio', () => {
    const _setfieldVal = (f: string, v: string) => {
        console.log("field :" + f);
        console.log("value: " + v);
    }
    const radioButton = shallow(<RadioButton
        checked
        fieldName="test"
        label="test"
        setFieldValue={_setfieldVal}
        value="test"
        valueConverter={basicConverter} />);

    const inputElement = radioButton.find("input[type='radio']");
    expect(inputElement).not.toBeNull();
    expect(inputElement.length > 0).toBe(true);
});

test('Radio Button simulated click', () => {
    let field: string = "";
    let value: ThreatLevelEnum = ThreatLevelEnum.NotApplicable;
    let handleChangeValue: string = "";

    const threatLevelValueConvert = sinon.spy((value: ThreatLevelEnum) => ThreatLevelEnum[value].toString());    
    const _setfieldVal = sinon.spy((f: string, v: ThreatLevelEnum) => {
        field = f;
        value = v;
    });


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
                    label={"Urgent"}
                    setFieldValue={_setfieldVal}
                    value={ThreatLevelEnum.Urgent}
                    valueConverter={threatLevelValueConvert}
                />
                <RadioButton
                    checked={false}
                    fieldName={"threatlevel"}
                    label={"High"}
                    setFieldValue={_setfieldVal}
                    value={ThreatLevelEnum.High}
                    valueConverter={threatLevelValueConvert}
                />
                <RadioButton
                    checked={false}
                    fieldName={"threatlevel"}
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
    buttons.first().simulate("click");
    expect(field.length > 0).toBe(true);
    expect(value).toBe(ThreatLevelEnum.Urgent);
    expect(handleChangeValue).toBe("");
});