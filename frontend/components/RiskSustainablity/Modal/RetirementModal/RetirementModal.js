import styles from './RetirementModal.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'

function RetirementModal(props) {
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
                        <h2>Retirement Target</h2>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body className={`${styles.modalBody}`}>
                <div className={`${styles.formHeader}`}>
                    <div className={`${styles.detailformContainer} row .justify-content-center align-items-center`}>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='retireAge'>Age You wish to retire at</label>
                            <input className={`form-control`} id='retireAge' placeholder='Enter the age you wish to retire at' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='lifeExpectancy'>What is your life expectancy</label>
                            <input className={`form-control`} id='lifeExpectancy' placeholder='Enter Life Expectancy' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='earnAfterRetirement'>How Much do you wish to earn after retirement</label>
                            <input className={`form-control`} id='earnAfterRetirement' placeholder='Enter the amount' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='inflationRate'>what is the inflation ratie you expect</label>
                            <input className={`form-control`} id='inflationRate' placeholder='Like 6%' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='returnBeforeRetirement'>What is the amount you expect before Retirement</label>
                            <input className={`form-control`} id='return Before retirement' placeholder='' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='returnAfterRetirement'>What is the annual return you expect after retirement</label>
                            <input className={`form-control`} id='returnAfterRetirement' placeholder='' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='savings'>How much money You have saved</label>
                            <input className={`form-control`} id='savings' placeholder='' type='number'></input>
                        </div>
                        <div className={`${styles.btnContainer}`}>
                            <button type='submit' className={`${styles.btn}`}>
                                submit
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

export default RetirementModal