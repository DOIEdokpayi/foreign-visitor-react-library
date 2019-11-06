import * as React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from '..';

function handleChange(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void{
    console.log("value :" +event.target.value);
    console.log("checked :" + (event.target as HTMLInputElement).checked)
}

test('Radio Button checks radio button', () => {
    const _setfieldVal= (f:string,v:string)=>{ 
        console.log("field :"+f);
        console.log("value: " + v);
    }
    const radioButton =   shallow(    <RadioButton 
                                        checked
                                        fieldName="test"
                                        handleChange={handleChange}
                                        label="test"
                                        setFieldValue={_setfieldVal}
                                        value="test"
                                        valueConverter={(value:string)=>value} />);

    // Interaction demo
    const inputElement = radioButton.find('input');
    expect(inputElement.getElement().props().toHaveProperty("checked", true));

});