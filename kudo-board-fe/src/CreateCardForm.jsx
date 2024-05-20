// import { useState } from 'react';

// const CreateCardForm = () => {
//     const [title, setTitle] = useState('');
//     const [category, setCategory] = useState('');
//     const [author, setAuthor] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const newCard = {
//         };

//     return (
//         <div className="new-card-form">
//             <button className="close-btn">X</button>
//             <h2>Create a New Card</h2>
//             <input type="text" placeholder="Enter card title" required="" value="" />
//             <input type="text" placeholder="Enter card description" value="" />
//             <input type="text" placeholder="Search GIFs..." value="" />
//             <button className="search-button" type="search">Search</button>
//             <input type="text" placeholder="Enter GIF URL" value="" />
//             <button className="copy-button" type="button">Copy GIF URL</button>
//             <input type="text" placeholder="Enter owner (optional)" value="" />
//             <button className="submit">Create Card</button>
//         </div>
//     );
// }

// export default CreateCardForm;

import { useState } from 'react';
import GiphySearch from './GiphySearch';

const CreateCardForm = ({ boardId, onClose }) => {
    const [message, setMessage] = useState('');
    const [description, setDescription] = useState('');
    const [gif, setGif] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCard = {
            message,
            description,
            gif,
            boardId,
        };

        try {
            const response = await fetch('http://localhost:3000/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCard),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('New card created:', result);
            // Handle successful creation, e.g., clear the form, close the modal, etc.
            onClose();
        } catch (error) {
            console.error('Error creating card:', error);
            // Handle error, e.g., show error message
        }
    };

    return (
        <div className="new-card-form">
            <button className="close-btn" onClick={onClose}>X</button>
            <h2>Create a New Card</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter card message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter card description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <GiphySearch handleGifSelection={setGif} />
                <button className="submit" type="submit">Create Card</button>
            </form>
        </div>
    );
};

export default CreateCardForm;
