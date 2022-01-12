import React from 'react'
import { Card } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
import { useGlobalContext } from '../context';
export default function Posts() {
const { isLoading, getPostsRange } = useGlobalContext();
let  out = (
  <Spinner animation="grow" role="status" variant="primary" size="xl">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);
if(!isLoading){
  const posts = getPostsRange();
  out = posts.map(post => {
           const {id, title} = post;
           return (
             <Card key = {id}>
               <Card.Body>
                 <Card.Title>Post #{id}</Card.Title>
                 <Card.Text>{title}</Card.Text>
               </Card.Body>
             </Card>
           );
        })
}
    return (
        <>
          {out}
            </>
     
    );
}
