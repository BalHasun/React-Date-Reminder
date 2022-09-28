import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateAction = ({person}) => {
  return (
    <Row className='justify-content-center my-3'>
          <Col ms='8' className="d-flex justify-content-between">
            <button className='btn-style p-2'> امسح البيانات</button>
            <button className='btn-style p-2'>عرض البيانات</button>
          </Col>
        </Row>
  )
}

export default DateAction
