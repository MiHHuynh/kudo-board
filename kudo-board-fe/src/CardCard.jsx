import './App.css'

function CardCard({ id, title, category, handleDeleteCard }) {

    return (
        <div className='board-card'>
            <img src='https://picsum.photos/200/300?random=41' />
            <h3>{title}</h3>
            <h4>{message}</h4>
            <div className='board-card-buttons'>
                <button>Upvote: {upvotes}</button>
                <button onClick={() => handleDeleteCard(id)}>Delete Card</button>
            </div>
        </div>
    )
}

export default CardCard
