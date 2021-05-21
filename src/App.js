import { useState,useEffect } from "react";
import "./App.css";
import MovieList from "./components/movieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieApp from "./components/movieApp/MovieApp";
import Filter from "./components/filter/Filter";
function App() {
  const [Movie, setMovie] = useState([
    {
      id: 0,
      Title: "Star Wars: Episode IV - A New Hope",
      Description:
        "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon,",
      PosterURL:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Rating: "3.5",
    },
    {
      id: 1,
      Title: "Harry Potter and the Sorcerer's Stone ",
      Description:
        "an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry",
      PosterURL:
        "https://i5.walmartimages.com/asr/01bfbf07-76ad-435c-8add-46cb4937ce76_1.f6dba5b371a97ff2a11251c222304669.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
      Rating: "4.8",
    },
    {
      id: 2,
      Title: "Resident Evil",
      Description:
        "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
      PosterURL:
        "https://i.pinimg.com/originals/08/13/77/0813776c75c31342bbf48ac0732a602c.jpg",
      Rating: "4.2",
    },
    {
    id:3,
    Title: "Breaking bad",
    Description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      PosterURL:"https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      Rating: 4.5,
    
    },
    {
      id:4,
      Title: "SHERLOCK",
      Description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      PosterURL:
      "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
      Rating: 4.6,
    },
    {
      id:5,
      Title: "See",
      PosterURL:
        "https://imgsrc.cineserie.com/2018/09/1334305.jpg?ver=1",
        Rating: 3.9,
      Description:
        "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins is born with sight.",
      trailer: "https://www.youtube.com/embed/7Rg0y7NT1gU",
    },
    {
      id:6,
      Title: "ARROW",
      PosterURL:
        "https://static1.purebreak.com/articles/5/82/28/5/@/369762-arrow-un-exacteur-est-diapo-1.jpg",
        Rating: 4.6,
      Description:
        "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      trailer: "https://www.youtube.com/embed/IrBKwzL3K7s",
    },
    {
      id:7,
      Title: "The Walking deads",
      PosterURL:
        "https://photos.tf1.fr/700/933/the-walking-dead-vignette_portrait-09f433-0@1x.webp",
        Rating: 4.1,
      Description:
        "Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
      trailer: "https://www.youtube.com/embed/sfAc2U20uyg",

    },
    {
      id:8,
      Title: "Cukur",
      PosterURL:
      "https://imgr.cineserie.com/2018/10/1129749.jpg?imgeng=/f_jpg/cmpr_0/w_744/h_1200/m_cropbox&ver=1",
        Rating:  4,
      Description:
      "A dangerous neighborhood, The Pit, ran by a noble mafia family called Koçovars. When the family is in the danger of losing the control of The Pit, their youngest son now must come back to his home, where he could never escape from.",
      trailer: "https://www.youtube.com/embed/Ix43lQOjLGw",
    },
    {
      id:9,
      Title: "Black Sails",
      PosterURL:
      "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        Rating:3.9,
      Description:
      "Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
      trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ",

    },
    {
      id:10,
      Title: "Good Doctor",
      PosterURL:
      "https://fr.web.img6.acsta.net/pictures/19/10/01/16/16/1486150.jpg",
        Rating:4,
      Description:
      "Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
      trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ",

    },
    {
      id:11,
      Title: "Lethal Weapon",
      PosterURL:
      "https://vignette.wikia.nocookie.net/lethalweapon/images/2/2e/Lethal_Weapon_TV_series_poster.jpg/revision/latest/scale-to-width-down/340?cb=20160819024657",
        Rating:3.8,
      Description:
      "A slightly unhinged cop is partnered with a veteran detective trying to maintain a low stress level in his life.",
      trailer: "https://www.youtube.com/embed/wN8h4-oyAbo",
    },
  ]);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
    const ratingChanged = (rate) => {
      setRate(rate);
    };
    const handelAdd = (newMovie) => {
      setMovie([...Movie,newMovie])
      
    }
   
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
      <Filter  handleChange={handleChange} title={title}  ratingChanged={ratingChanged}
        rate={rate}/>
      <MovieList Movie={Movie.filter(el => el.Rating>=rate).filter((el) =>
          el.Title.toUpperCase().includes(title.toUpperCase()))}/>
      </div>
      <MovieApp handleAdd={handelAdd} />
      
    </div>
  );
}
export default App;

