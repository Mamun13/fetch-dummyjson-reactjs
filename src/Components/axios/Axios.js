import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Axios.css';
import Data from './Data'



const Axios = () => {
	const [image, setImage] = useState([]);


  const getdata=async()=>{
    const res = await fetch('https://dummyjson.com/products');
    const Data = await res.json();
    setImage(Data);
  }
 
  useEffect(() => {
    getdata();
  },[])
  
  const filterItem = (brandlist) => {
    const updatedcard = image.products.filter((curElem)=>{
      return curElem.brand === brandlist;
    });
    setImage(updatedcard);
  }

	return (
		<>
      <Container>
        <Row>
          <ul className='mt-5 d-flex justify-content-center list-unstyled'>
            <li>
              <button className="text-capitalize me-2 btn btn-success">all</button>
              <button className="text-capitalize me-2 btn btn-success" onClick={() => filterItem('Apple')}>iphone</button>
              <button className="text-capitalize me-2 btn btn-success" onClick={() => filterItem('OPPO')}>oppo</button>
              <button className="text-capitalize me-2 btn btn-success" onClick={() => filterItem('Huawei')}>Huawei</button>
              <button className="text-capitalize me-2 btn btn-success" onClick={() => filterItem('Samsung')}>samsung</button>
            </li>
          </ul>
          {/* dummyObject?.products?.[0]?.['title'] = 'iPhone 9' */}
            {image?.products?.map((curElm,index)=>{
              return(
                  <Col lg={3} key={index}>
                    <Card className='mt-4 rounded-0'>
                      <Card.Img variant="top" src={curElm.thumbnail} className='card-img'/>
                      <Card.Body>
                        <Card.Title>{curElm.title}</Card.Title>
                        <p className='font-16 font-jost'>{curElm.brand}</p>
                        <Card.Text>
                          {curElm.description.substring(0, 50)} 
                        </Card.Text>
                        <Button variant="primary">Go details</Button>
                      </Card.Body>
                    </Card>
                  </Col>  
              )
            })} 

              {/* {image.map((curElm,index)=>{
              return(
                  <Col lg={3} key={index}>
                    <Card className='mt-4 rounded-0'>
                      <Card.Img variant="top" src={curElm.thumbnail} className='card-img'/>
                      <Card.Body>
                        <Card.Title>{curElm.title}</Card.Title>
                        <p className='font-16 font-jost'>{curElm.brand}</p>
                        <Card.Text>
                          {curElm.description.substring(0, 50)} 
                        </Card.Text>
                        <Button variant="primary">Go details</Button>
                      </Card.Body>
                    </Card>
                  </Col>  
              )
            })}   */}
        </Row>

      </Container>
			
		</>
	);
};

export default Axios;
