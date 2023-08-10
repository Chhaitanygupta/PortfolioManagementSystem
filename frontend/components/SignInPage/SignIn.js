import styles from './SignIn.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';

function SignInPage(props) {
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
                        <h2>Welcome Back!</h2>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body className={`${styles.modalBody}`}>
                <div className={`${styles.formHeader}`}>
                    <div className={`${styles.detailformContainer} row .justify-content-center align-items-center`}>
                        <div className={`col-lg-12 col-md-12 col-sm-12 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='firstName'>First Name</label>
                            <input className={`form-control`} id='firstName' placeholder='Enter First Name' type='text'></input>
                        </div>
                        <div className={`col-lg-12 col-md-12 col-sm-12 mt-2 mb-2`}>
                            <label className={`form-label`} htmlFor='password'>Password</label>
                            <input className={`form-control`} id='password' placeholder='Enter password' type='text'></input>
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
                        New to Portfolio Management? 
                        <a href="?signup=1" className={`${styles.link}`}>
                            Sign Up 
                        </a>
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className={`${styles.footer}`}>
            </Modal.Footer>
        </Modal>
    )
}

export default SignInPage