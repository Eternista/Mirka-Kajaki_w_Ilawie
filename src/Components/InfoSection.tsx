
import Map from "./Map"

const InfoSection = () => {

  return (
    <section className="infosection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 map">
            <Map />
          </div>
          <div className="col-12 col-md-6">
            <div className='context'>
              <h1>Mirka - Kajaki w Iławie</h1>
              <p>
                Zapraszam do pływania razem ze mnà, wynajmu kajaków SUP-ów,do rozmów o regionie, do przygód! Udzielam też porad odnośnie techniki pływania,zachowania  na wodzie. Asekuruję i pływam razem jeśli potrzeba!
              </p>
              <p>Telefon: <a href='tel:+48660796846'>+48 660 796 846</a></p>
              <p>Email: <a href='mailto:miroslawasekowska@vp.pl'>miroslawasekowska@vp.pl</a></p>
              <ul className="socials d-flex" aria-label="Social media links">
                <li
                  className="socials_single socials_single--tik-tok"
                  aria-label="Tik Tok"
                  >
                    <a href="https://vm.tiktok.com/ZGecxn6jG/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill='#000' viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                    </a>
                </li>
                <li
                  className="socials_single socials_single--facebook"
                  aria-label="Facebook"
                  >
                    <a href="https://www.facebook.com/profile.php?id=100083264722815">
                      <svg xmlns="http://www.w3.org/2000/svg" fill='royalblue' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                    </a>
                </li>
                <li
                  className="socials_single socials_single--youtube"
                  aria-label="Youtube"
                  >
                    <a href="https://www.youtube.com/@mirosawasekowska-zzyciawyj4794">
                      <svg xmlns="http://www.w3.org/2000/svg" fill='red' viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>    
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
