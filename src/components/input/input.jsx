import React from 'react';
import { Input, FormText } from 'reactstrap';

export default class FormInput extends React.Component {
    render() {
        let type = this.props.type;
        let name = this.props.name;
        let id = this.props.id;
        let value = this.props.value;
        let placeholder = this.props.placeholder;
        let className = this.props.class;

        if (type === "select") {
            return (
                <Input type="select" name={name} id={id} className={className}>
                    {
                        Object.keys(value).map((key, i) => {
                            return (
                                <option value={key} key={key}>{value[key]}</option>
                            );
                        })
                    }
                </Input>
            );
        } else if (type === "checkbox") {
            return (
                <Label check>
                    <Input className={className} type="checkbox" defaultValue={value}/>{' ' + placeholder}
                </Label>
            );
        } else {
            return (
                <Input type={type} name={name} id={id} placeholder={placeholder} defaultValue={value} className={className}/>
            );
        }
    }
}
