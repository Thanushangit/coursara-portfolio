import React from 'react';
import "./App.css"

const App = () => {
  return (
    <div>
      <nav>
        <div className='icons'>
          <p><a href="https://www.gmail.com" target='_blank'><i class="fa-solid fa-envelope"></i></a>  </p>
          <p><a href="https://www.github.com" target='_blank'><i class="fa-brands fa-github"></i></a> </p>
          <p><a href="https://www.linkedin.com" target='_blank'><i class="fa-brands fa-linkedin"></i></a>  </p>
          <p><a href="https://www.facebook.com" target='_blank'><i class="fa-brands fa-facebook"></i></a>  </p>
          <p> <a href="https://www.whatsapp.com" target='_blank'><i class="fa-brands fa-whatsapp"></i></a> </p>
        </div>

        <div className='nav-content'>
          <h4>Project</h4>
          <h4>Contact Me</h4>
        </div>
      </nav>

      <section className='hero'>
        <div className="hero-content">
          <div className="hero-image">
            <img src="https://t3.ftcdn.net/jpg/03/70/29/26/360_F_370292674_QS5nA0bJgyRD6VzYycTQdSWhhSHQJbQZ.jpg" alt="profile image" />
          </div>
          <p>Hi, I am Thanushan...</p>
        </div>

        <div className='hero-text'>
          <h3>
            I am a front end developer special in the React JS.
          </h3>
        </div>
      </section>

      <main>
        <h1>Features Products</h1>

        <div className="project-container">
          <div className="project">
            <div className="image">
              <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/typing-keyboarding-practice-games-and-lessons1604681748818430.jpg" alt="image" />
            </div>
            <div className="project-content">
              <h4>Typing master in React</h4>
              <p>
                This is a React-based Typing Master application designed to improve typing speed and accuracy. It features real-time feedback, error tracking, and performance statistics to help users practice and enhance their typing skills effectively.
              </p>


              <h5>see more <span><i class="fa-solid fa-arrow-right"></i></span></h5>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src="https://www.photo.gallery/content/1.index/x3-photo-gallery-website.jpg" alt="image" />
            </div>
            <div className="project-content">
              <h4>Photo Gallery</h4>
              <p>Welcome to our photo gallery! Here you'll find a collection of memorable moments captured through our lens. Each photo tells a story, showcasing the beauty, joy, and creativity of our journey. Take a moment to explore and relive these special experiences with us.</p>

              <h5>see more <span><i class="fa-solid fa-arrow-right"></i></span></h5>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src="https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg" alt="image" />
            </div>
            <div className="project-content">
              <h4>E-Commerce</h4>
              <p>Discover a seamless shopping experience with our e-commerce platform. From trendy fashion to everyday essentials, we offer high-quality products at unbeatable prices. Shop with confidence, enjoy fast delivery, and let us bring your favorite items right to your doorstep.</p>

              <h5>see more <span><i class="fa-solid fa-arrow-right"></i></span></h5>
            </div>
          </div>
          <div className="project">
            <div className="image">
              <img src="https://shapedplugin.com/wp-content/uploads/2024/01/How-to-Create-Weather-Widgets-for-Websites.webp" alt="image" />
            </div>
            <div className="project-content">
              <h4>Weather predictiion</h4>
              <p>Stay ahead of the weather with our easy-to-use app. Get real-time updates, accurate forecasts, and alerts tailored to your location. Whether you're planning your day or preparing for a trip, our weather app helps you stay informed and ready for anything.</p>

              <h5>see more <span><i class="fa-solid fa-arrow-right"></i></span></h5>
            </div>
          </div>
        </div>
      </main>

      <section className='contact'>
        <h1>Contact Me</h1>

        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">E-mail</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Enter your message </label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </section>

    </div>
  )
}

export default App