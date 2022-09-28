import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({ person }) => {
    return (
        <Row className='justify-content-center '>
            <Col ms='8' className="">
                <div className='rectangle '>
                    {person.length ? (person.map(((item) => {
                        return (
                            <div className='d-flex p-2 py-4 border-bottom mx-3' key={item.id} >
                                <img className="img-avatar" src='p1.jpg' alt='avatar' />
                                <div className='px-3'>
                                    <p className="d-inline fs-5">{item.name}</p>
                                    <p className="my-0 fs-7">{item.date}</p>
                                </div>
                            </div>
                        )
                    }
                    ))) : <h1 className="p-5 text-center ">لا يوجد لديك مواعيد حاليا</h1>}
                </div>
            </Col>
        </Row>
    )
}

export default DatesList
