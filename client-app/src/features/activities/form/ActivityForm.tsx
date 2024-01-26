import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";

interface Props{
    activity: Activity | undefined;
    closeForm:() => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit, submitting}: Props) {

    const initialState = selectedActivity || {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Tytuł' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Opis' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Kategoria' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Data' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='Miasto' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Miejsce wydarzenia' value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button loading={submitting}floatet='right' positive type='submit' content='Zatwierdź'/>
                <Button onClick={closeForm} floatet='right' type='button' content='Anuluj'/>
            </Form>
        </Segment>
    )
}