const CreateBoardForm = () => {
    return (
        <div className="new-board-form">
            <h2>Create a New Board</h2>
            <br />
            <label>Title:</label>
            <br />
            <input type="text" required="" />
            <br />
            <label>Category:</label>
            <br />
            <select required="">
                <option value="">Select a category</option>
                <option value="Recent">Recent</option>
                <option value="Celebration">Celebration</option>
                <option value="Thank You">Thank You</option>
                <option value="Inspiration">Inspiration</option>
            </select>
            <br />
            <label>Author:</label>
            <br />
            <input type="text" value="" />
            <br />
            <button className="submit">Create Board</button>
        </div>
    );
}

export default CreateBoardForm;