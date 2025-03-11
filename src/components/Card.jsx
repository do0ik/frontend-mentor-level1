import styles from "./Card.module.css";

function Card({title, comment, color}) {
    return (
        <div className={styles.card} style={{borderTopColor: `${color}`}}>
            <div className={styles.cardTitle}>
                {title}
            </div>

            <div className={styles.cardComment}>
                {comment}
            </div>
            
            <div className={styles.cardImg}>
                <img src={`/images/icon-${title.replace(' ', '-')}.svg`} alt={title} />
            </div>
        </div>
    )
}

export default Card;
