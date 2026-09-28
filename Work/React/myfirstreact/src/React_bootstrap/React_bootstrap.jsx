import React from 'react'
import { Alert, Spinner, Card, Button, Container, Row, Col } from 'react-bootstrap' 


function React_bootstrap() { 

    
  return (
    <div>
   {/* <Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button> */}

      <hr/>

      {/* We use a Container to hold the row structure nicely */}
      <Container style={{ maxWidth: '44rem', margin: '0' }} className="px-0 mx-auto">
        <Row className="g-3">
          {/* First Independent Card Component */}
          <Col>
            <Card border="secondary">
              <Card.Img variant="top" src="https://www.bing.com/th/id/OIP.9AA9ELQUr6WsoCJ2WcVcEwHaEK?w=185&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=ImgAns&rm=2" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Independent Card Component */}
          <Col>
            <Card border="secondary">
              <Card.Img variant="top" src="https://www.bing.com/th/id/OIP.f6ved8wranJjaO8g0qDStgHaEK?w=185&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=ImgAns&rm=2" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

             <Col>
            <Card border="secondary">
              <Card.Img variant="top" src="https://www.bing.com/th/id/OIP.f6ved8wranJjaO8g0qDStgHaEK?w=185&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=ImgAns&rm=2" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <hr /> 
      
      <div> <Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button> 
</div>
    </div>
  )
}

export default React_bootstrap
