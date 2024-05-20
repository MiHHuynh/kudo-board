// BoardPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateCardForm from './CreateCardForm';

const BoardPage = () => {
    const { boardId } = useParams(); // Access the boardId from the URL
    const [board, setBoard] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the board data using the boardId
        const fetchBoard = async () => {
            try {
                const response = await fetch(`http://localhost:3000/boards/${boardId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBoard(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchBoard();
    }, [boardId]); // Dependency array includes boardId to refetch if it changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{board.title}</h1>
            <p>Category: {board.category}</p>
            <CreateCardForm boardId={boardId} />
            <div>
                <h2>Cards</h2>
                {board.cards && board.cards.length > 0 ? (
                    <ul>
                        {board.cards.map(card => (
                            <li key={card.id}>
                                <h3>{card.message}</h3>
                                <img src={card.gif} alt={card.message} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No cards available for this board.</p>
                )}
            </div>
        </div>
    );
};

export default BoardPage;
