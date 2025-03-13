import { useState } from "react";
import styles from "./InteractiveRating.module.css";
import { useNavigate } from "react-router-dom";

function InteractiveRating() {

    const navigate = useNavigate();

    const [selected, setSelected] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (selected === 0) {
            alert('You have to select rate');
            return;
        }
        setSubmitted(true);
    }

    return (
        <div className={styles.main}>
            <span onClick={() => navigate('/')} style={{position: 'fixed', top: '10px', left: '10px', cursor: 'pointer'}}>FourCard</span>

            {
                !submitted
                ? <div className={styles.ratingCard}>
                    <div className={styles.iconStar} />

                    <form action="#" className={styles.ratingForm} onSubmit={onSubmit}>
                        <span className={styles.cardTitle}>
                            How did we do?
                        </span>

                        <span className={styles.cardComment}>
                            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                        </span>

                        <div className={styles.scoreContainer}>
                            {
                                Array.from({ length: 5 }, (_, i) => i + 1).map(item =>
                                    <RatingScore
                                        key={item}
                                        score={item}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                )
                            }
                        </div>

                        <button className={styles.ratingSubmit}>SUBMIT</button>
                    </form>
                </div>
                : <Result selected={selected} />
            }
        </div>
    )
}

function RatingScore({ score, selected, setSelected }) {

    const onClick = () => {
        setSelected(score);
    }

    return (
        <span
            className={`${styles.score} ${score === selected && styles.scoreSelected}`}
            onClick={onClick}
        >
            {score}
        </span>
    )
}

function Result({ selected }) {

    return (
        <div className={`${styles.ratingCard} ${styles.resultCard}`}>
            <img src="images/illustration-thank-you.svg" alt="thank-you" />

            <span className={styles.resultInfo}>
                You Selected {selected} out of 5
            </span>

            <span className={styles.resultTitle}>
                Thank You!
            </span>

            <span className={styles.resultComment}>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </span>
        </div>
    )
}

export default InteractiveRating;