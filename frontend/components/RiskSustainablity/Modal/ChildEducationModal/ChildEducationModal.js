import styles from './ChildEducationModal.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'

function ChildEducationModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`${styles.modalMain}`}
        >
            <div className={`${styles.closeBtnContainer}`}>
                <button className={`${styles.closeBtn}`} onClick={props.onHide}>x</button>
            </div>
            <Modal.Header>
                <div className={`${styles.headerContainer}`}>
                    <Modal.Title>
                        <h2>Childs Education</h2>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body className={`${styles.modalBody}`}>
                <div className={`${styles.formHeader}`}>
                    <div className={`${styles.detailformContainer} row .justify-content-center align-items-center`}>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='childName'>Childs Name</label>
                            <input className={`form-control`} id='childName' placeholder='Enter Childs Name' type='text'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='childAge'>Childs Age</label>
                            <input className={`form-control`} id='childAge' placeholder='Enter childs age' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='yearRequired'>How many years will you need the money for this childs education</label>
                            <input className={`form-control`} id='yearRequired' placeholder='Enter number of years' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='costOfEducation'>What is the Expected cost of education</label>
                            <input className={`form-control`} id='costOfEducation' placeholder='Enter contact number' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='inflationRate'>What is the Expected inflation Rate</label>
                            <input className={`form-control`} id='inflationRate' placeholder='Enter contact number' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='returnExpected'>What is the return you expect on you investment</label>
                            <input className={`form-control`} id='returnExpected' placeholder='Enter the amount' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='saving'>How much money do you have saved</label>
                            <input className={`form-control`} id='saving' placeholder='Enter the amount' type='number'></input>
                        </div>
                        <div className={`${styles.btnContainer}`}>
                            <button type='submit' className={`${styles.btn}`}>
                               Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className={`${styles.footer}`}>
                
            </Modal.Footer>
        </Modal>
    )
}

export default ChildEducationModal