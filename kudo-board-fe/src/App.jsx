import { useState, useEffect } from 'react';
import './App.css';
import BoardCard from './BoardCard';
import Modal from './Modal';
import CreateBoardForm from './CreateBoardForm';

function App() {
  const [boards, setBoards] = useState([]);
  const [filter, setFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch boards from the backend
  useEffect(() => {
    fetch('http://localhost:3000/boards')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
      })
      .then(data => {
        setBoards(data); // Store the fetched data in state
      })
      .catch(error => {
        console.error('Error fetching boards:', error);
      });
  }, []);

  const handleFilterButtonClick = (event) => {
    console.log(event.target.innerHTML); // e.g. All, Recent
    let selectedFilter = event.target.innerHTML.toLowerCase();
    if (selectedFilter === "all") {
      setFilter(null);
    } else {
      setFilter(selectedFilter);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCreateNewBoardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle board deletion
  const handleDeleteBoard = async (id) => {
    console.log(id)
    console.log("hello")
    try {
      await fetch(`http://localhost:3000/boards/${id}`, {
        method: 'DELETE'
      });
      // Filter out the deleted board from the state
      const updatedBoards = boards.filter(board => board.id !== id);
      setBoards(updatedBoards);
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  };

  let filteredData = filter ? boards.filter((item) => item.category.toLowerCase() === filter.toLowerCase()) : boards;
  filteredData = searchQuery ? filteredData.filter((item) => item.title.toLowerCase().includes(searchQuery)) : filteredData;

  let boardCards = filteredData.map((item, id) => {
    return (
      <BoardCard key={id} id={item.id} title={item.title} category={item.category} handleDeleteBoard={handleDeleteBoard} />
    );
  });

  return (
    <>
      <h1>Kudoboard</h1>
      <div>
        <input
          type='text'
          placeholder='Search boards...'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className='filter-buttons'>
          <button onClick={handleFilterButtonClick}>All</button>
          <button onClick={handleFilterButtonClick}>Recent</button>
          <button onClick={handleFilterButtonClick}>Celebration</button>
          <button onClick={handleFilterButtonClick}>Thank You</button>
          <button onClick={handleFilterButtonClick}>Inspiration</button>
          <br />
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <CreateBoardForm />
          </Modal>
          <button onClick={handleCreateNewBoardClick}>Create a New Board</button>
        </div>
      </div>
      <div className='board-container'>
        {boardCards}
      </div>
    </>
  );
}

export default App;
