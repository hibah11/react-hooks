import React, { useState } from 'react';
import movie from '../assets/movie.jpeg'
import outfit from '../assets/outfit.jpeg'
import cake from '../assets/cake.jpeg'
import makeup from '../assets/makeup.jpeg'
import hair from '../assets/hair.jpeg'
import wallpaper from '../assets/heart.jpg'
const initialCards = [
    { id: 1, title: 'The Movie', pic: movie},
    { id: 2, title: 'Wallpapers', pic: wallpaper },
    { id: 3, title: 'cakes',pic:cake },
    { id: 4, title: 'Makeup and more',pic: makeup },
    { id: 5, title: 'Outfits', pic: outfit },
    { id: 6, title: 'Hair styles',pic: hair  }
  ];


function Home (){


    const [cards, setCards] = useState(initialCards);
    const [searchQuery, setSearchQuery] = useState('');
  
    const search = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredCards = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="mt-5 p-8 h-screen flex flex-col content-center gap-16 ">
        <h1 className="text-3xl font-normal text-center text-[#FF00A6]">Welcome to Barbie's World <hr className = 'mt-5'></hr> </h1>
        <input type="text" placeholder="Search here" className="border border-4 border-[#FF00A6] font-black text-[#FF00A6] self-center rounded p-5 w-1/3 bg-blue-200" value={searchQuery} onChange={search}/>
        <h1 className="text-xl font-light text-[#FF00A6]">Catogories :</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredCards.map((card) => (
            <div key={card.id}  className="border bg-[#F9DD9A] text-gray-500 border-gray-300 p-4 rounded-md flex flex-col justify-between  content-center">
                <div>
                <img src = {card.pic}></img>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            </div>
            </div>
              
          ))}
        </div>
      </div>
    );
}
export default Home;