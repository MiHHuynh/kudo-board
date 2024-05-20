import './App.css'
import { Link } from 'react-router-dom';

function BoardCard({ id, title, category, openBoardPage, handleDeleteBoard }) {

    return (

        <div className='board-card'>
            <img src='https://picsum.photos/200/300?random=41' />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <div className='board-card-buttons'>
                <Link to={`/boards/${id}`}><button onClick={openBoardPage}>View Board</button></Link>
                <button onClick={() => handleDeleteBoard(id)}>Delete Board</button>
            </div>
        </div>


    )
}

export default BoardCard
