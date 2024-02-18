import React from 'react';
import image2 from '../Assets/holder.jpg'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ExploreCard = () => 
{
    return (
        <>
            <div align="center" class="float-left" style={{ margin: '20px 0', fontWeight: 'bold' }} >
                <div style={{margin: '0 40px',  display: "flex" }}>
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src= {image2} />
                    <Card.Body>
                    <h3 >Event Title</h3>
                    <Card.Text>
                        Date : 2024/03/10 <br />
                        Location : Pune <br />
                        Time : 18:30
                    </Card.Text>
                    <Button style={{background:'black'}}>View Details</Button>&nbsp;&nbsp;
                    <Button style={{background:'black'}}>Book Ticket</Button>
                    </Card.Body>
                    </Card>                
                </div>  
            </div>  
        </>
    );
};

export default ExploreCard;