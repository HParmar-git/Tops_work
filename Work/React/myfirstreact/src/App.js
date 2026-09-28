import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import Props_main from './Props/Props_main';
import Class_component from './Component/Class_component';
import Func_component from './Component/Func_component';
import Module_css from './Module_css/Module_css';
import Sass_css from './Sass_css/Sass_css';
import React_bootstrap from './React_bootstrap/React_bootstrap';
import Drop_down from './React_bootstrap/Drop_down';
import NavScrollExample from './React_bootstrap/Navbar';
import OrderSummary from './React_bootstrap/FeeEngineForFoodDelivery';

function App() {
  return (
    <div>


      {/*<Class_component /> */}
      {/* <Func_component />*/}

      {/*  <Props_main />*/}

      {/* <Module_css /> */}

      {/*  <Sass_css />  */}
 
        
     {/*   <Container fluid className="mt-4">
        <Row>
          <Col md={10}>
            <React_bootstrap />
          </Col>    
          <Col md={2}>
            <Drop_down />
          </Col>
        </Row>
      </Container>
      */}
       

        < NavScrollExample />
         <hr />
   <OrderSummary />

   

    </div >
  );
}

export default App;
