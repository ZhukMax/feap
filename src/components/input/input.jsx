import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

export default class FormInput extends React.Component {
    render() {
        let type = this.props.item.type;
        let label = this.props.item.name;
        let value = this.props.item.value;
        let id = this.props.id;
        let name = this.props.name;
        let placeholder = this.props.placeholder;
        let className = this.props.class;

        // Types we can accept
        let types = [
            'text',
            'email',
            'textarea',
            'password',
            'select',
            'checkbox',
            'number',
            'url',
            'datetime',
            'date',
            'time',
            'color',
            'search',
            'file'
        ];

        // If we can't accept type
        // then return text input type
        if (types.indexOf(type) === -1) {
            type = 'text';
        }

        if (type === "select") {
            return (
                <FormGroup row>
                    <Label for={id} sm={2} className={className + "label"}>
                        {label}
                    </Label>
                    <Col sm={10}>
                        <Input type="select" name={name} id={id} className={className + "input"}>
                            {
                                Object.keys(value).map((key, i) => {
                                    return (
                                        <option value={key} key={key}>{value[key]}</option>
                                    );
                                })
                            }
                        </Input>
                    </Col>
                </FormGroup>
            );
        } else if (type === "checkbox" || type === "radio") {
            return (
                <FormGroup check>
                    <Label check>
                        <Input className={className + "input"} type={type} defaultValue={value}/>{' ' + label}
                    </Label>
                </FormGroup>
            );
        } else if (type === 'file') {
            return (
                <FormGroup row>
                    <Label for={id} className={className + "label"}>{label}</Label>
                    <Input type={type} name={name} id={id} className={className + "input"}/>
                </FormGroup>
            );
        } else {
            return (
                <FormGroup row>
                    <Label for={id} sm={2} className={className + "label"}>
                        {label}
                    </Label>
                    <Col sm={10}>
                        <Input type={type} name={name} id={id} placeholder={placeholder} defaultValue={value} className={className + "input"}/>
                    </Col>
                </FormGroup>
            );
        }
    }
}
