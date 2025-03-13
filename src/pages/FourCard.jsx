import styles from "./FourCard.module.css";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function FourCard() {

    const navigate = useNavigate();

    const leftCards = [
        {
            title: 'Supervisor'
            , comment: 'Monitors activity to identify project roadblocks'
            , color: 'hsl(180, 62%, 55%)'
        }
    ];

    const centerCards = [
        {
            title: 'Team Builder'
            , comment: 'Scans our talent network to create the optimal team for your project'
            , color: 'hsl(0, 78%, 62%)'
        }
        , {
            title: 'Karma'
            , comment: 'Regularly evaluates our talent to ensure quality'
            , color: 'hsl(34, 97%, 64%)'
        }
    ];

    const rightCards = [
        {
            title: 'Calculator'
            , comment: 'Uses data from past projects to provide better delivery estimates'
            , color: 'hsl(212, 86%, 64%)'
        }
    ]

    return (
        <div className={styles.main}>
            <span onClick={() => navigate('/ir')} style={{position: 'fixed', top: '10px', left: '10px', cursor: 'pointer'}}>InteractiveRating</span>

            <div className={styles.topCard}>
                <h1 className={styles.topTitle}>
                    Reliable, efficient delivery<br />
                    <b>Powered by Technology</b>
                </h1>

                <div className={styles.topComment}>
                    Our Artificial Intelligence powered tools use millions of project data points
                    to ensure that your project is successful
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.sideCards}>
                    {
                        leftCards.map(card =>
                            <Card
                                key={card.title}
                                title={card.title}
                                comment={card.comment}
                                color={card.color}
                            />
                        )
                    }
                </div>
                <div className={styles.centerCards}>
                    {
                        centerCards.map(card =>
                            <Card
                                key={card.title}
                                title={card.title}
                                comment={card.comment}
                                color={card.color}
                            />
                        )
                    }
                </div>
                <div className={styles.sideCards}>
                    {
                        rightCards.map(card =>
                            <Card
                                key={card.title}
                                title={card.title}
                                comment={card.comment}
                                color={card.color}
                            />
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default FourCard;