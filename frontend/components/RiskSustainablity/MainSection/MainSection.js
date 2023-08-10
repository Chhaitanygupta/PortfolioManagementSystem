import styles from './MainSection.module.css'
import React , {useState} from 'react'
import ChildEducationModal from '../Modal/ChildEducationModal/ChildEducationModal'
import RetirementModal from '../Modal/RetirementModal/RetirementModal';
function MainSection() {
    const [childEducationModalShow, setChildEducationModalShow] = useState(false);
    const [retirementModalShow, setRetirementModalShow] = useState(false);
    return (
        <div className={`${styles.containerMain}`}>
            <div className={`${styles.realContainerMain}`}>
                <div className={`${styles.upperContent}`}>
                    <div className={`${styles.upperContentHeading}`}>
                        Risk Suitability not selected yet.
                    </div>
                    <div className={`${styles.upperContentText}`}>
                        Since all investments carry a certain degree of risks, suitability selection is very important for helping you find the right product(s) for your needs.
                    </div>
                </div>
                <div className={`${styles.lowerContent}`}>
                    <div className={`${styles.lowerContentHeading}`}>
                        Create A Target First.
                    </div>
                    <div className={`${styles.lowerContentText}`}>
                        Start creating your investment targets.<br/>
                        Choose A target First.
                    </div>
                    <div className={`${styles.lowerContentLinkContainer}`}>
                        <button 
                        className={`${styles.modalbtn}`}
                        onClick={() => setChildEducationModalShow(true)}
                        >
                             Childs Education
                             </button>
                        <button 
                        className={`${styles.modalbtn}`}
                        onClick={() => setRetirementModalShow(true)}
                        > 
                        Retirement
                        </button>
                    </div>
                    <ChildEducationModal 
                    show={childEducationModalShow}
                    onHide={() => setChildEducationModalShow(false)}
                    />
                    <RetirementModal 
                    show={retirementModalShow}
                    onHide={() => setRetirementModalShow(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainSection