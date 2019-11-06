import * as React from 'react';
import { shallow } from 'enzyme';
import { RadioButton } from '..';

function handleChange(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>):void{
    console.log("value :" +event.target.value);
    console.log("checked :" + (event.target as HTMLInputElement).checked)
}

test('Radio Button renders', () => {
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
    
    
    expect(radioButton).not.toBeNull();
    expect(radioButton.length>0).toBe(true);
});


test('Radio Button renders input of type radio', () => {
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

    const inputElement = radioButton.find("input[type='radio']");
    expect(inputElement).not.toBeNull();
    expect(inputElement.length>0).toBe(true);
});
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
                                        
    const inputElement = radioButton.find('input[checked]');
    expect(inputElement).not.toBeNull();
    expect(inputElement.length>0).toBe(true);
});