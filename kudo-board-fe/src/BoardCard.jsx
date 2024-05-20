import './App.css'

function BoardCard({ id, title, category, handleDeleteBoard }) {

    return (
        <div className='board-card'>
            <img src='https://picsum.photos/200/300?random=41' />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <div className='board-card-buttons'>
                <button>View Board</button>
                <button onClick={() => handleDeleteBoard(id)}>Delete Board</button>
            </div>
        </div>
    )
}

export default BoardCard
