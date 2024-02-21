import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';


const categoryarr = [
  { name: 'CULTURAL' },
  { name: 'SPORTING' },
  { name: 'MUSIC'},
  { name: 'EXHIBITIONS'},
  { name: 'TECHNICAL'},
];

const Categories = () => {

  return (
    <div>
      <h1 className='m-5'>All Categories</h1>
        <Row>
        {categoryarr.map((category) => (
          <Col xs={12} md={6} lg={4} key={category.name}>
            <Card className="card bg-light m-3">
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  {/* Add a short description for each category here */}
                </Card.Text>
                <Button
                  variant="primary"
                  href={`/events/category/${category.name.toLowerCase()}`}
                >
                  View Events
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default Categories