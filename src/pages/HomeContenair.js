import React from 'react'
import img1 from '../img/about/about-1.jpg'
import img2 from '../img/about/about-2.jpg'
import icon from '../pages/icon/fact1.png'
import icon1 from '../pages/icon/fact2.png'
import icon2 from '../pages/icon/service-icon1.png'
import icon3 from '../pages/icon/service-icon4.png'
import icon4 from '../pages/icon/service-icon2.png'
import icon5 from '../pages/icon/fact4.png'
import roomImg from '../img/room/room-b1.jpg'
import roomImg1 from '../img/room/room-b2.jpg'
import roomImg2 from '../img/room/room-b3.jpg'
import roomImg3 from '../img/room/room-b4.jpg'
import logoIcon from '../img/testimonial-logo.png'
import blog1 from '../img/blog/blog-1.jpg'
import blog2 from '../img/blog/blog-2.jpg'
import blog3 from '../img/blog/blog-3.jpg'
import blog4 from '../img/blog/blog-wide.jpg'
//import { Container, Row, Col } from 'react-bootstrap'
import "./HomeContenair.css"

const HomeContenair = () => {
  const style = {
      color:'burlywood'
  };
 const styles = {
  alignItems: 'center',
  marginLeft : '45%',
  marginTop : '5%',
  marginBottom : '3%'
};

  return (
    <>
      <div className='continer'>
        <ul>
          <li className='post2'>
            <p style={style}>ABOUT US</p>
            <h4>
              Intercontinental LA<br/>
              Westlake Hotel <br/>
            </h4>
            <p>
              Sona.com is a leading online accommodation site. We’re passionate<br/>
              about travel. Every day, we inspire and reach millions of travelers<br/>
              across 90 local websites in 41 languages.
              So when it comes to booking the perfect hotel, vacation rental,
              resort, apartment, guest house, or tree house, we’ve got you
              covered.
            </p>
          </li>
          <li className='post'>
            <img src={img1} alt="" />
          </li>
          <li className='post1'  >
            <img src={img2} alt="" />
          </li>
        </ul>
      </div>
      
      <div>
        <p style={{color: 'rgb(216, 167, 103)', marginLeft: '45%', opacity: '180%'}}>WHAT WE DO</p>
        <h2 style={{position: 'center', marginLeft: '35%', fontFamily: 'Times New Roman'}}>Discover Our Services</h2>
      </div>

      <div className='row'>
        <ul className='box'>
          <li className='inner'>
            <img src={icon} alt="" /><br/><br/>
            <h4 style={style}>
             Travel Plan 
            </h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
            sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </li>
          <li className='inner'>
            <img src={icon1} alt="" /><br/><br/>
            <h4 style={style}>
                Catering Service
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
                sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
          </li>
          <li className='inner'>
            <img src={icon2} alt="" /><br/><br/>
            <h4 style={style}>
              Babysitting
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </li>
          <li className='inner'>
            <img src={icon3} alt="" /><br/><br/>
            <h4 style={style}>
              Laundry
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </li>
          <li className='inner'>
            <img src={icon4} alt="" /><br/><br/>
            <h4 style={style}>
             Hire Driver
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </li>
          <li className='inner'>
            <img src={icon5} alt="" /><br/><br/>
            <h4 style={style}>
             Bar & Drink
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </li>
        </ul>
      </div>

      <div className='anime'> 
        <div className='card'> 
            <img src={roomImg} alt="" />
              <div className='intro'>
                <h4 style={style}> Double Room </h4>
                <p>
                  199$/Pernight<br/>
                  Size:	30 ft<br/>
                  Capacity:	Max persion 5<br/>
                  Bed:	King Beds<br/>
                  Services:	Wifi,<br/> Television, Bathroom,...
                </p>
          </div>
        </div>

        <div className='card'> 
          <img src={roomImg1} alt="" />
            <div className='intro'>
              <h4 style={style}>  Premium King Room </h4>
              <p>
                159$/Pernight<br/>
                Size:	30 ft<br/>
                Capacity:	Max persion 5<br/>
                Bed:	King Beds
                Services:	Wifi,...
              </p>
          </div>
        </div>

        <div className='card'> 
          <img src={roomImg2} alt="" />
            <div className='intro'>
              <h4 style={style}> Deluxe Room  </h4>
              <p>
                198$/Pernight<br/>
                Size:	30 ft<br/>
                Capacity:	Max persion 5<br/>
                Bed:	King Beds<br/>
                Services:	Wifi,<br/> Television, Bathroom,...
              </p>
          </div>
        </div>

        <div className='card'> 
          <img src={roomImg3} alt="" />
            <div className='intro'>
              <h4 style={style}> Family Room </h4>
              <p>
                299$/Pernight<br/>
                Size:	30 ft<br/>
                Capacity:	Max persion 5<br/>
                Bed:	King Beds<br/>
                Services:	Wifi,<br/> Television, Bathroom,...
              </p>
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='slider-wrapper'>
         <div className='slider'>
            <p id='slide-1'>After a construction project took longer than expected, my husband, my daughter and I
              needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
              city, neighborhood and the types of housing options available and absolutely love our
              vacation at Sona Hotel <br/>
              <img style={styles} src={logoIcon} alt="" />
            </p>
                
            <p id='slide-2'>After a construction project took longer than expected, my husband, my daughter and I
              needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
              city, neighborhood and the types of housing options available and absolutely love our
              vacation at Sona Hotel <br/>
              <img style={styles} src={logoIcon} alt="" />
            </p>

            <p id='slide-3'>After a construction project took longer than expected, my husband, my daughter and I
              needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
              city, neighborhood and the types of housing options available and absolutely love our
              vacation at Sona Hotel <br/>
              <img style={styles} src={logoIcon} alt="" />
            </p>
         </div>

         <div className='slider-nav'> 
            <a href='#slide-1' />
            <a href='#slide-2' />
            <a href='#slide-3' />
         </div>
        </div>
      </div>
      <br/><br/><br/>
      <div>
        <p style={{color: 'rgb(216, 167, 103)', marginLeft: '45%', opacity: '180%'}}>WHAT WE DO</p>
        <h2 style={{position: 'center', marginLeft: '35%', fontFamily: 'Times New Roman'}}>Discover Our Services</h2>
      </div>
      <div className='select'>
        <ul className='section'>
          <li className='public' style={{ backgroundImage: `url(${blog1})`}}>
            <div style={{ marginTop:'100%', marginLeft:'6%', color:'white'}}>
              <h4 style={{ backgroundColor:'burlywood', width:'45%', textAlign:'center', fontSize:'20px', borderRadius:'3%'}}>
              Travel Plan 
              </h4>
              <p>
               Tremblant In Canada<br/>
               15TH APRIL, 2019
              </p>
            </div>
          </li>
          <li className='inner' style={{ backgroundImage: `url(${blog2})`}}>
           <div style={{ marginTop:'100%', marginLeft:'6%', color:'white'}}>
            <h4 style={{ backgroundColor:'burlywood', width:'45%', textAlign:'center', fontSize:'20px', borderRadius:'3%'}}>
                Catering
              </h4>
              <p>
               Choosing A Static Caravan<br/>
               15TH APRIL, 2019
              </p>
            </div>
          </li>
          <li className='inner' style={{ backgroundImage: `url(${blog3})`}}>
            <div style={{ marginTop:'100%', marginLeft:'6%', color:'white'}}>
              <h4 style={{ backgroundColor:'burlywood', width:'45%', textAlign:'center', fontSize:'20px', borderRadius:'3%'}}>
                Babysitting
              </h4>
              <p>
                Copper Canyon<br/>
               15TH APRIL, 2019
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className='canap'>
        <ul className='monta'>
          <li className='none' style={{ backgroundImage: `url(${blog4})`}}>
            <div style={{ marginTop:'38%', marginLeft:'6%', color:'white'}}>
              <h4 style={{ backgroundColor:'burlywood', width:'20%', textAlign:'center', fontSize:'20px', borderRadius:'3%'}}>
              Travel Plan 
              </h4>
              <p>
               Tremblant In Canada<br/>
               15TH APRIL, 2019
              </p>
            </div>
          </li>
          <li className='inner' style={{ backgroundImage: `url(${blog2})`}}>
           <div style={{ marginTop:'90%', marginLeft:'6%', color:'white'}}>
            <h4 style={{ backgroundColor:'burlywood', width:'45%', textAlign:'center', fontSize:'20px', borderRadius:'3%'}}>
                Catering
              </h4>
              <p>
               Choosing A Static Caravan<br/>
               15TH APRIL, 2019
              </p>
            </div>
          </li>
        </ul>
      </div>


    </>
  )
}

export default HomeContenair
/**<Container>
<Row>
  <h2>Nouvelle Arrivage</h2>
  {Product.map((p) =>
    <Col key={p._id} sm={12} md={6} lg={4}>
    {p.name}
    </Col>
  )}
</Row>
</Container>*/
