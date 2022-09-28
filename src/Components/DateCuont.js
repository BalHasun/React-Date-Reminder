import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateCuont = ({ person }) => {
    return (
        <Row className='justify-content-center'>
            <Col ms='8' className="">
                {person.length ? (`لديك ${person.length}مواعيد`) : (`لا يوجد مواعيد حاليا`)}
            </Col>
        </Row>
    )
}

export default DateCuont
