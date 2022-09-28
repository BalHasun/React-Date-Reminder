import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateAction = ({deleteData, viewData}) => {
  return (
    <Row className='justify-content-center my-3'>
          <Col ms='8' className="d-flex justify-content-between">
            <button onClick={deleteData}  className='btn-style p-2'> امسح البيانات</button>
            <button onClick={viewData} className='btn-style p-2'>عرض البيانات</button>
          </Col>
        </Row>
  )
}

export default DateAction
