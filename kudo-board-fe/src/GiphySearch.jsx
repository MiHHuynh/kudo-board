import { useState } from 'react';

const GiphySearch = ({ handleGifSelection }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGifUrl, setSelectedGifUrl] = useState('');
    const [gifs, setGifs] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = async () => {
        if (!searchQuery) return;

        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=6`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setGifs(data.data);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
    };

    const selectGif = (gifUrl) => {
        setSelectedGifUrl(gifUrl);
        handleGifSelection(gifUrl);
    }

    return (
        <div className="giphy-search">
            <input
                type="text"
                placeholder="Search GIFs..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>Search</button>
            <div className="gifs-container">
                {gifs.map((gif) => (
                    <div key={gif.id} className="gif-item" onClick={() => selectGif(gif.images.fixed_height.url)}>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Copy GIF url"
                value={selectedGifUrl}
            />
        </div>
    );
};

export default GiphySearch;
