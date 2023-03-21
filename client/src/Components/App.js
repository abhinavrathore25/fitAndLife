import Navbar from "./Navbar";
import Animation from "./Reusable/AnimatedDiv/Animation";
import model from '../Resources/model.png';
import GymDescription from "./GymDescription";
import HeartRate from "./Reusable/HeartRate/HeartRate";
import Card from "./Reusable/GlassCards/Card";
import list from '../Resources/data';
import { useHorizontalScroll } from "./SideScroll";
import map from '../Resources/map.png';

function App() {

  const MAP_ADDRESS = `https://www.google.com/maps/dir//Fit+%26+Life+Gym,+behind+of+annapurna+garden,
  +Friends+Colony,+Indira+Nagar,+Jhansi,+Uttar+Pradesh+284003/@25.472306,78.5476425,15z/data=!4m9!4m8!1m0!1m5!1m1!
  1s0x397771353ba62c6f:0x7cd247e034d0156e!2m2!1d78.565152!2d25.472306!3e0`;

  function getRandomNumber() {
    return (Math.floor(Math.random() * 10));
  }

  const scrollRef = useHorizontalScroll();

  return (
    <>
      <div id='header'>
        <Navbar />
      </div>
      <div id='home' className='home'>

        <div className='grid-container' id='home'>
          <div className='animation'>
            <Animation />
          </div>

          <div className='invite-container'>
            <span>Join the cult and gain access to your ideal body
              and a key to healthier life.</span>
          </div>

          <div className='description-container'>
            <GymDescription />
          </div>

          <div className='fitness-animation'>
            <img src={model} className='image' alt='model-img' />
            <div className='heart-rate'>
              <HeartRate />
            </div>
          </div>
        </div>
      </div>

      <div className='plans' id='plans'>
        <p className='section-heading'><span>EXPLORE</span> OUR PLANS</p>
        <div className='card-container'>
          {
            list.map(({ type, price, validity, perks }, index) => {
              return <Card key={index} type={type} price={price} validity={validity} perks={perks} />
            })
          }
        </div>
      </div>

      <div className='gallery' id='gallery'>
        <p className='section-heading'>GALLERY</p>
        <div className='image-container' ref={scrollRef}>
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
          <img src={`https://source.unsplash.com/random/200x200/?fitness&sig=${getRandomNumber()}`} alt='fitness' draggable='false' />
        </div>
      </div>

      <div id='footer' className='footer'>
        <p className='section-heading'>Contact Us</p>
        <div className='contact-info'>
          <p>ANAND KUSHWAH: <a href="tel:+91-93058-69074" style={{ textDecoration: 'none', color: '#8A8D94' }}>+91 93058 69074</a></p>
          <p>BEHIND OF ANNAPURNA GARDEN, FRIENDS COLONY <br /> INDIRA NAGAR, JHANSI, UTTAR PRADESH 284003</p>
          <br/>
          <p>VISITING HOURS: <br/>  
          5:30 A.M. - 11 A.M. <br/>
          5:30 P.M. - 10 P.M.</p>
        </div>
        <a href={MAP_ADDRESS} target='_blank' rel='noreferrer'><img src={map} className='map' alt='map' /></a>
        <p>
          <a href='https://wa.me/+919305869074?text=Hi, I am interested in joining FitAndLife. Can we get in touch?'
            target='_blank' rel='noreferrer' style={{ color: '#00E676' }}>
            <i className="fa-brands fa-whatsapp"></i></a>
          <a href='/' style={{ color: '#941B89' }}><i className="fa-brands fa-instagram"></i></a>
          <a href='/' style={{ color: '#007aee' }}><i className="fa-brands fa-square-facebook"></i></a>
          <a href='https://www.youtube.com/@jhansi_fitness'
            target='_blank' rel='noreferrer' style={{ color: '#FF0000' }}>
            <i className="fa-brands fa-youtube"></i></a>
        </p>
      </div>
    </>
  );
}

export default App;
