import React, {useState} from 'react'
import {Form , Button} from 'react-bootstrap';
import { useGlobalContext } from '../context';
export default function PageControl() {
    const {setPostsPerPage, setMaxPages,allPosts} = useGlobalContext();
    const [input,setInput] = useState();
    const [isValid, setIsValid] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form.checkValidity())
        if(!isNaN(input) && input > 0 && input){
        setIsValid(true);
        setPostsPerPage(input);
        setMaxPages(Math.ceil(allPosts.length / input));
        }
        else{
            setIsValid(false);
            setInput("");
        }
    }
    return (
      <Form noValidate validated={isValid} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Posts/Page"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            min = "0"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a number.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className ="mt-2" type="submit">Submit form</Button>
      </Form>
    );
}
