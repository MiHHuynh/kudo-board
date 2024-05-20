import { useState } from 'react'
import './App.css'
import BoardCard from './BoardCard'
import Modal from './Modal'
import CreateBoardForm from './CreateBoardForm'

function App() {
  const data = [
    { title: "You Deserve the Best!", category: "celebration" },
    { title: "Thanks a Bunch", category: "thank you" },
    { title: "Nice work!", category: "inspiration" },
    { title: "Anniversary", category: "celebration" },
    { title: "Congrats", category: "celebration" },
    { title: "ladida", category: "celebration" },
    { title: "Thanks even more", category: "thank you" },
    { title: "Nice job hunting!", category: "inspiration" },
    { title: "You're a star", category: "celebration" },
    { title: "Happy birthday", category: "inspiration" },
  ]

  const [filter, setFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterButtonClick = (event) => {
    console.log(event.target.innerHTML); // e.g. All, Recent
    let selectedFilter = event.target.innerHTML.toLowerCase();
    if (selectedFilter === "all") {
      setFilter(null);
    } else {
      setFilter(selectedFilter);
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  }

  const handleCreateNewBoardClick = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let filteredData = filter ? data.filter((item) => item.category === filter) : data;
  filteredData = searchQuery ? filteredData.filter((item) => item.title.toLowerCase().includes(searchQuery)) : filteredData;

  let boardCards = filteredData.map((item, id) => {
    return (<BoardCard key={id} title={item.title} category={item.category} />)
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
  )
}

export default App
