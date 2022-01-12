import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap"
import {useGlobalContext} from "./context"
import {useEffect} from "react"
import Posts from "./components/Posts"
import PaginationNav from "./components/PaginationNav";
import PageControl from './components/PageControl';
import Header from './components/Header';

function App() {
const { getPosts } = useGlobalContext();
useEffect(() => {
  getPosts();
}, [])


  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col>
         <Header></Header>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center text-center ">
        <Col xs={4}>
          <PageControl ></PageControl>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center text-center">
        <Posts></Posts>
      </Row>
      <Row className="mt-5 justify-content-center text-center">
        <Col>
          <PaginationNav></PaginationNav>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
