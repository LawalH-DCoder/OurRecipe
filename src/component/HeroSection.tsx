import './HeroSection.css'


function HeroSection() {
    return (
    <div className='herosection-container'>
        <div className='herosection-content'>
            <button id='top-intro'>🍴 WORLD CLASSIC RECIPE</button>
            <h1 className='font-[700]'>Discover <span>Recipe</span> From Around The World</h1>
            <p>Search thousands of curated recipes by name, ingredient, category or cuisine area.</p>
            <div className='input-button'>
                <input type='text'/><button>Search </button>
            </div>
        </div>
    </div>
)}


export default HeroSection