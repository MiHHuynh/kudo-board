import { useState } from 'react';

const CreateBoardForm = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBoard = {
            title,
            category,
            author,
        };

        try {
            const response = await fetch('http://localhost:3000/boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBoard),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Board created successfully:', data);
                // Optionally reset form or provide feedback to the user
                setTitle('');
                setCategory('');
                setAuthor('');
            } else {
                console.error('Failed to create board');
            }
        } catch (error) {
            console.error('Error creating board:', error);
        }
    };

    return (
        <div className="new-board-form">
            <h2>Create a New Board</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br />
                <label>Category:</label>
                <br />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Recent">Recent</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Thank You">Thank You</option>
                    <option value="Inspiration">Inspiration</option>
                </select>
                <br />
                <label>Author:</label>
                <br />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <br />
                <button type="submit" className="submit">Create Board</button>
            </form>
        </div>
    );
}

export default CreateBoardForm;
