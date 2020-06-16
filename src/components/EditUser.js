import React from 'react'
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default function EditUser() {
    return (
        <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to='/' className="btn btn-danger ml-2">Cancel</Link>
        {/* .ml-2 {
            margin-left: ($spacer * .5) !important;
                    }
        */}
      </Form>
    )
}
