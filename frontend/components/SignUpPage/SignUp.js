import Link from 'next/link';
import styles from './SignUp.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignUpPage(props) {
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
                        <h2>Create an Account</h2>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body className={`${styles.modalBody}`}>
                <div className={`${styles.formHeader}`}>
                    <div className={`${styles.detailformContainer} row .justify-content-center align-items-center`}>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='firstName'>First Name</label>
                            <input className={`form-control`} id='firstName' placeholder='Enter First Name' type='text'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='lastName'>Last Name</label>
                            <input className={`form-control`} id='lastName' placeholder='Enter Last name' type='text'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='email'>Email address</label>
                            <input className={`form-control`} id='email' placeholder='Enter email address' type='email'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='contactNumber'>Contact No.</label>
                            <input className={`form-control`} id='contactNumber' placeholder='Enter contact number' type='number'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='password'>Password</label>
                            <input className={`form-control`} id='password' placeholder='Enter password' type='text'></input>
                        </div>
                        <div className={`col-lg-6 col-md-6 col-sm-6 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='confirmPassword'>Confirm Password</label>
                            <input className={`form-control`} id='confirmPassword' placeholder='Confirm Password' type='text'></input>
                        </div>
                        <div className={`${styles.btnContainer}`}>
                            <button type='submit' className={`${styles.btn}`}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.routingText}`}>
                    <p>
                        Already have an Account? 
                        <a href="?signin=1" className={`${styles.link}`}>
                            Sign In
                        </a>
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className={`${styles.footer}`}>
            </Modal.Footer>
        </Modal>
    )
}

export default SignUpPage