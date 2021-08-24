import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllGroup } from "../../State/Selector/AllGroup";
import { addGroup } from "../../State/Action/AddGroup";
import "./Fetching.css";

export const Fetaching = () => {
  const [newData, setNewData] = useState();
  const [newPosi, setNewPosi] = useState();
  const [newTech, setNewTech] = useState();
  // first we need to use selector after that we useState-----Step 1

  const selector = useSelector(getAllGroup);
  //   if we use first state then error will there b'coz first we need selector then state---step 2

  const [data, setData] = useState(selector);
  //   setData state to crate for adding the person or employee in card using the text field(useDispatch)

  useEffect(() => {
    setData(selector);
  }, [selector]);
  // -----------------------
  // -----------------------
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(addGroup(newData, newPosi, newTech));
  };

  return (
    <div>
      <Row>
        <Col md={3}>
          <FormControl
            placeholder="Add Name"
            onChange={(e) => setNewData(e.target.value)}
          ></FormControl>
        </Col>
        <Col md={3}>
          <FormControl
            placeholder="Add Position"
            onChange={(e) => setNewPosi(e.target.value)}
          ></FormControl>
        </Col>
        <Col md={3}>
          <FormControl
            placeholder="Add Technology"
            onChange={(e) => setNewTech(e.target.value)}
          ></FormControl>
        </Col>
        <Col md={2}>
          <Button onClick={handleDispatch}>ADD</Button>
        </Col>
      </Row>
      {data &&
        data.map((item) => {
          return (
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Title>
                  <Card.Title>{item.fname}</Card.Title>
                  <Card.Title>{item.position}</Card.Title>
                  {/* <Card.Title>{item.techno}</Card.Title> */}
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Title>
                <Button variant="success">{item.techno}</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
    // <Card>
    //   <Card.Img>
    //     <Card.Body>
    //       <Card.Title>
    //         <h3>Fname Awez </h3>
    //       </Card.Title>
    //       <Card.Title>
    //         <Card.Title>
    //           <b>position</b>
    //         </Card.Title>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Title>
    //       <Button>Techno</Button>
    //     </Card.Body>
    //   </Card.Img>
    // </Card>
  );
};
