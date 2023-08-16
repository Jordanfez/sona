import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container fluid className='bg-primary text-white'> 
            <Row>
                <Col className='text-center py-3' style={{ marginLeft:'5%'}}>
                  <p style={{ fontFamily:'Times New Roman', fontSize: '35px',  }}>Sona.</p>
                  <p style={{ marginLeft:'-2%'}}>
                    We inspire and reach millions of travelers<br/>
                    across 90 local websites
                  </p>
                </Col>
                <Col className='text-center py-3' style={{ marginLeft:'2%'}}>
                  <p style={{ fontFamily:'Times New Roman', fontSize: '30px', color:'burlywood'}}>CONTACT US</p>
                  <p >
                    (12) 345 67890<br/>
                    info.colorlib@gmail.com<br/>
                    856 Cordia Extension Apt. 356, Lake, United this.state.
                  </p>
                </Col>
                <Col className='text-center py-3' style={{ marginRight:'22%'}}>
                  <p style={{ fontFamily:'Times New Roman', fontSize: '30px', color:'burlywood'}}>NEW LATEST</p>
                  <p >Get the latest updates and offers.</p>
                  <form action="#"  >
                          <input type="text" placeholder="Email" />
                          <input  id="send" type="submit" name="envoi" class="btn btn-success" value="SEND"/>
                  </form>
                </Col>
            </Row>
            <Row style={{ backgroundColor: 'darkslategray'}}>
                <Col className='text-center py-3' style={{ marginLeft:'-2%'}}>
                  <p style={{ fontFamily:'Times New Roman'}}>NEW LATEST &emsp; &emsp; &emsp;NEW LATEST &emsp; &emsp; &emsp;NEW LATEST</p>
                </Col>
                <Col className='text-center py-3'style={{ marginRight:'12%'}}>
                    Tous pour visiter mon site VITRINE &copy; SONAVITRINE <br/>
                    by <a href="">Colorlib</a>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
