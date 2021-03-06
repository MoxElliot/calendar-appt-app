import instructorLess from '../../styles/instructorLess.module.scss';
import Link from 'next/link';

export default function LessonViewControls() {

    return (
        <div className={instructorLess.lessonViewControl}>

            <div className={instructorLess.studentLink}>
                    <Link href="/">
                        <p className={instructorLess.studentName}>Student Name</p>
                    </Link>
                        <p>requested a lesson on xx/xx/xxxx at xx:xx</p>
            </div>

            <div className={instructorLess.lessonViewControlBottom}>

                <div className={instructorLess.lessonViewControlLeft}>
                    
                    <div className={instructorLess.topicContainer}>
                        <p className={instructorLess.topicTitle}>Topic:</p>
                        <p>Review from OGS game.</p>
                    </div>
                    <div className={instructorLess.attachmentContainer}>
                        <div className={instructorLess.attachmentTitle}>
                            <p>Attachments:</p>
                        </div>
                        <div>
                            <p>LeagueGame.sgf</p>
                            <p>LeagueGame2.sgf</p>
                        </div>
                    </div>
                    
                </div>
                
                <div className={instructorLess.lessonViewControlRight}>

                    <form className={instructorLess.lessonViewControlForm}>
                        <div className={instructorLess.lessonViewControlRadio}>
                            <label className={instructorLess.lessonViewControlAccept}>
                                <input  
                                    type='radio'
                                    value='Accept'
                                />
                                Accept
                            </label>
        
                            <label>
                                <input  
                                    type='radio'
                                    value='Reject'
                                />
                                Reject
                            </label>
                        </div>
                        <div className={instructorLess.lessonViewControlText}>
                        <textarea 
                            rows="5"
                            cols="30"
                            name="student-message"
                            />
                        </div>

                        <div className={instructorLess.lessonViewControlSubmitContainer}>
                        <button className={instructorLess.lessonViewControlSubmit}>
                            Submit
                        </button>
                        </div>
                    
                    </form>
                    

                </div>

            </div>
        </div>
    )
}