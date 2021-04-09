import './TopRatedFilms.css';
import React from 'react';
import {Card, Button, Row, Col, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import topRated from './Dummy(topRatedFilms).json';
import { FaInfoCircle } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import VerticalModal from './VerticalModal';


// function MyVerticallyCenteredModal(props) {
//     const {id} = useParams
//     console.log(id);
//     return (
//         <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         className="modalSize"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter modalColor">
//             Modal heading
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4 className="sideDist">{props.content.title}</h4>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n2hpzE1hNzc4V7nHj_GT2CWSqtjCld0PhQ&usqp=CAU" className="float-left sideDist dim"/>
//           <p className="container-75 modalText">
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//           <div className="container-75 modalText pt-5"><b>Genre:</b>
//          <Row className="">{props.content.genres.map((key,i) => (
                
//                 <Col className="pt-1 offset-lg-2 mr-2 col-lg-2 modalText2 padding-0"><button className="">{key}</button></Col>
                
//           ))}
//           </Row>
//           </div>
//           <h6 className="container-75 modalText mt-3"><b>Year: </b>{props.content.year}</h6>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }


function TopRatedFilms() {
    const [modalShow, setModalShow] = React.useState(0);
    const renderCard = (card, index) => {
    return (
           <>
            <Card style={{ width: '18rem'}} className="box2">
                    <Card.Img variant="top"  style={{height: '12rem' }} src={card.image} />
                    <Card.Body className="color"  style={{height: '11rem'}}>
                        <Card.Title className="text-color">{card.title}</Card.Title>
                        <Row>
                            <Col>
                                <Card.Text className="text-color">{card.year}</Card.Text>
                            </Col>
                            <Col>
                                <FaInfoCircle color="white" style={{ marginLeft: '35px'}} onClick={() => setModalShow(card.id)}/>
                            </Col>
                        </Row>
                        {/* <Popup trigger={<button> Trigger</button>} position="right center">
                            <div>Popup content here !!</div>
                        </Popup> */}
                        <Button variant="primary" className="mt-2" >Go somewhere</Button>
                        <VerticalModal content={card}
                          show={modalShow===card.id}
                          onHide={() => setModalShow(0)}
                          />
                    </Card.Body>
            </Card>

               
                </>
//             <div class="container-75 px-5 py-5">
//                 <div class="row align-items-center">
//                 <div class="col-lg-2 col-md-12">
//                 <div class="card w-100">
//                     <img
//                     src={card.image}
//                     class="card-img-top"
//                     alt="..."
//                     />
//                     <div class="card-body">
//                     <h5 class="card-title">{card.title}</h5>
                    
//                     <a href="#!" class="btn btn-primary">Button</a>
//                     </div>
//                 </div>
//                 </div>
//                 </div>

// </div>
           
    )}

    return (
        <div className="my-5">
    <h3 className="heading text-color">All Films</h3>
    <p className="heading text-color">Five Top Rated films by the users of Film Ghar </p>

    <div className="grid2 conatainer-fluid justify-content-center mx-5">{topRated.map(renderCard)}</div>
        </div>
    )};
export default  TopRatedFilms;