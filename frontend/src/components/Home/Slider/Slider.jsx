import { useState } from "react";
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
import './Slider.css'
import image from "../../../assets/images/bicicletaboceto.jpg"

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="custom-carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Row className="d-flex justify-content-center align-content-center">
          <Col md={3}>
            <Card onClick={() => alert("Card 1 clicked!")}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card onClick={() => alert("Card 2 clicked!")}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card onClick={() => alert("Card 3 clicked!")}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="d-flex justify-content-center align-content-center">
          <Col md={3}>
            <Card onClick={() => alert("Card 1 clicked!")}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card onClick={() => alert("Card 2 clicked!")}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card onClick={() => alert("Card 3 clicked!")}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
