import { useState } from "react";
import "./App.css";
import MovieList from "./components/movieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieApp from "./components/movieApp/MovieApp";
import Filter from "./components/filter/Filter";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {
  const [Movie, setMovie] = useState([
    {
      id: 0,
      Title:"Star Wars: Episode IV - A New Hope",
      Description:
        "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon,",
      PosterURL:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Rating: 3.5,
      trailer: "https://www.youtube.com/embed/Ix43lQOjLGw",
      Acteur1: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQw2KSXCg6ls0XjNiea2sCXuz55_Zr6GmlNdjAoVBfwMAPZGq7fx08Ajou8Vl61",
      NameActeur1: "Mark Hamill",
      NameActeur2: "Harrison Ford",
      NameActeur3: "Carrie Fisher",
      Acteur2: "https://static1.purebreak.com/people/3/45/3/@/76382-36550-harrison-ford-fullscreen-1-624x0-1.jpg",
      Acteur3: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZTUB7VHv4hf8YViyBrBNC6RL3ZmjrGy9VlEsRw_lvdv4ng_PeQZQrAEGlFe7J",
    },
    {
      id: 1,
      Title: "Harry Potter and the Sorcerer's Stone ",
      Description:
        "an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry",
      PosterURL:
        "https://i5.walmartimages.com/asr/01bfbf07-76ad-435c-8add-46cb4937ce76_1.f6dba5b371a97ff2a11251c222304669.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
      Rating: 4.8,
      trailer: "https://www.youtube.com/embed/Ix43lQOjLGw",
      Acteur1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozZJNQkRiwgyNcBBDOetDOEgjwM90Auazhg&usqp=CAU",
      Acteur2: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSPAKDdVVWw-yM0XVDrMQkwx1icrEX3suaz0oeidIJbtpOsCdDXsAPBJvcKovSX",
      Acteur3: "https://upload.wikimedia.org/wikipedia/commons/d/db/Rupert_Grint_2012.jpg",
      NameActeur1: "Daniel Radcliffe",
      NameActeur2: "Emma Watson",
      NameActeur3: "Rupert Grint",
    },
    {
      
      id: 2,
      Title: "Resident Evil",
      Description:
        "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
      PosterURL:
        "https://i.pinimg.com/originals/08/13/77/0813776c75c31342bbf48ac0732a602c.jpg",
      Rating: 4.2,
      trailer: "https:/youtu.be/embed/Ix43lQOjLGw",
      Acteur1: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Milla_Jovovich_Oct_%28cropped%29.jpg",
      Acteur2: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/la-vie-des-people/news/bisexualite-des-stars-la-fin-d-un-tabou/michelle-rodriguez/57033631-1-fre-FR/Michelle-Rodriguez.jpg",
      Acteur3: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQXZF7iQDIS6q3vEw3l1QlD555c_-rUGwE8UYh5IPxl45XVH5bG5kn93vFOPu4P",
      NameActeur1: "Milla Jovovich",
      NameActeur2: "Michelle Rodriguez",
      NameActeur3: "Eric Mabius",
    },
    {
    id:3,
    Title: "Breaking bad",
    Description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      PosterURL:"https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      Rating: 4.5,
      trailer: "https://www.youtube.com/embed/Ix43lQOjLGw",
      Acteur1: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSLLwrFqODy1gnhLX_3ZLUU-xnAOE6hAbyV_f5ljgbZGB9am_HcV1Oyc0JyY9Vg",
      Acteur2: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSQp5y2CWNz8KA67_kWu7HsOcZDY6RlhpaKmAJxL7NnxRBnxIphCD4fY3gay2Co",
      Acteur3: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSJuZ0LiF2_y0Bm3h_Xa_m6zAjrmihfy6Vet7jC54mv-NfhaylbLIofyllzEWkd",
      NameActeur1: " Bryan Cranston",
      NameActeur2: "Aaron Paul",
      NameActeur3: "Anna Gunn",
    },
    {
      id:4,
      Title: "SHERLOCK",
      Description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      PosterURL:
      "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
      Rating: 4.6,
      trailer: "https://www.youtube.com/embed/Ix43lQOjLGw",
      Acteur1: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT421uH56FmX-ktVwWg5VlWyDZyaDs_KgBH-Fxqxx-1NkjcW-ftHb8c6aPFtzMW",
      Acteur2: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQaCuO8yNV-6Wto1ZWXJb7l1U-h3_ZGcREK87xAjVszJZr1yIAKW4KddWPOMOTS",
      Acteur3: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTC4bNR1U5QAJgaX9RJ6rA5pSVm7dlIRFQhRF3yhNQLMtmyEuc8PCJXjKTpu9HB",
      NameActeur1: "Rachel McAdams",
      NameActeur2: "Karima Adebibe",
      NameActeur3: "Noomi Rapace",
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
      Acteur1: "https://upload.wikimedia.org/wikipedia/commons/5/58/Jason_Momoa_by_Gage_Skidmore_2.jpg",
      Acteur2: "https://fr.web.img6.acsta.net/c_162_216/pictures/18/10/18/11/08/5881516.jpg",
      Acteur3: "https://fr.web.img4.acsta.net/c_162_216/pictures/18/12/17/11/53/2105934.jpg",
      NameActeur1: "Jason Momoa",
      NameActeur2: "Sylvia Hoeks",
      NameActeur3: "Alfre Woodard ",
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
      Acteur1: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQaOZK-s3yjCL7P7tir13H3gI2JgFyRyR2CFdidKXAc5BE35FJCwNiV8L3Mknm4",
      Acteur2: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT5lQn4EgF4s06OIH75vfH84l08EyKEL5GasyzC0CPBY-s1NMIuvX1mynHGKGO1",
      Acteur3: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTvkPuWLHLCt4KJjgBVbz3a9QZB3bsVX1NrZwP-SsBJU5EACttVn8_VODLsmsDo",
      NameActeur1: "Stephen Amell",
      NameActeur2: "Katie Cassidy",
      NameActeur3: "David Ramsey",
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
      Acteur1: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTW_Zd7U1OpmMMCqHKKVm2gnV9HkERsqWyJNIGehEmViwVVyIVIqDW36penTKxF",
      Acteur2: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQg6OEdHgBOb0EuKNLGQItidhegb9V98oYNuLdK9QMVtp26QxEH6KHJfo5iTjZ4",
      Acteur3: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSzptYSpN3u6UXPZldKkRvHNlAzG0qH9dmAW7IPvOWMxfRAr32wmyA9R8RFK7rK",
      NameActeur1: "Norman Reedus",
      NameActeur2: "Andrew Lincoln",
      NameActeur3: "Lauren Cohan",

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
      Acteur1: "https://imgsrc.cineserie.com/2018/12/361867.jpg?ver=1",
      Acteur2: "https://m.media-amazon.com/images/M/MV5BYzg5MGFkNjEtNzg1Ni00ZTkzLWI0NTEtMzNjNzFhNTdlNjM5XkEyXkFqcGdeQXVyOTQ1Mzg0Mzg@._V1_UY1200_CR744,0,630,1200_AL_.jpg",
      Acteur3: "https://im.showtv.com.tr/5/6372/damla-sonmez-500x500.png?v=1488202072",
      NameActeur1: "Aras Bulut İynemli",
      NameActeur2: "Erkan kolçak köstendil",
      NameActeur3: "Damla Sönmez",
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
      Acteur1: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQXhnGnbw_5pyEsKRFnsHVnG-tsKjnJ__WvOSVx4C6uY87pVAeYjfwMJP8LPpLx",
      Acteur2: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpyWagwSFFdOSSBl2VEbugeUu_fG68W0Ki--3aV2wQempw47P8",
      Acteur3: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTB1haztrWyf03p-4Gc74CWvo2GhRr4RN_NGJcVaWQyT7uc-yx6KLrKQVYw_28g",
      NameActeur1: "Toby Stephens",
      NameActeur2: "Zach McGowan",
      NameActeur3: "Jessica Parker Kennedy",

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
      Acteur1: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQK7Cdrd0nuNtLaGh3RaZZpz7Lv2JYBR9t48Ah2NvtHu24m_LP4KP5yAIckV4n1",
      Acteur2: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQI05nr9OHPkQuDtf0PiO-LgtTwHDuwgr_exSsNYylRXro8hjE3mCwe39uoZKZU",
      Acteur3: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTdcxD3X2pLougZtE6AuQmKNDBo9KA5yRTM9smc0TbxRaCMlWdRNizfIY5l0LHi",
      NameActeur1: "Freddie Highmore",
      NameActeur2: "Antonia Thomas",
      NameActeur3: "Richard Schiff",

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
      Acteur1: "https://www.premiere.fr/sites/default/files/styles/scale_crop_560x800/public/2018-04/abaca_499360_016_0.jpg",
      Acteur2: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSJMkuLfIhvXNg1oeRduruBxUw94G8td9P1JFenkGqwRqiWhknkIepgQv5J_evq",
      Acteur3: "https://imgsrc.cineserie.com/2016/11/341767.jpg?ver=1",
      NameActeur1: "Mel Gibson",
      NameActeur2: "Danny Glover",
      NameActeur3: "Traci Wolfe",
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
      <Router>
     <Filter  handleChange={handleChange} title={title}  ratingChanged={ratingChanged}
        rate={rate}/>
      
      <Route path="/" exact render={()=><MovieList Movie={Movie.filter(el => el.Rating>=rate).filter((el) =>
        el.Title.toUpperCase().includes(title.toUpperCase()))}/>}/>
      <Route path="/:id" render={(props) => <MovieDetails {...props} Movie={Movie} /> } />
     
       <MovieApp handleAdd={handelAdd} />
       </Router>
    </div>
    
  );
}
export default App;

