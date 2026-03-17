import '../../HeroSection.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        const normalized = searchTerm.trim();
        if (!normalized) return;
        navigate(`/searchList?term=${encodeURIComponent(normalized)}`);
    };

    return (
    <div className='herosection-container'>
        <div className='herosection-content'>
            <button id='top-intro'>🍴 WORLD CLASSIC RECIPE</button>
            <h1 className='font-[700]'>Discover <span>Recipe</span> From Around The World</h1>
            <p>Search thousands of curated recipes by name, ingredient, category or cuisine area.</p>
            <div className='input-button'>
                <input 
                    type='text' 
                    placeholder='Search recipes...' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    </div>
)}


export default HeroSection