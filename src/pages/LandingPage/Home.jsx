import React from "react";
import AOS from "aos";
import Slider from "react-slick";
import APISummaryCardHome from "../../components/Home/elements/APISummaryCardHome";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../redux/actions/services/getServices";
import { getServicesSelector } from "../../redux/reducers/services/getServices";
import { HomeLayout } from "../../layout";
import { createContactUs } from "../../redux/actions/contactBox";
import { contactUsSelector } from "../../redux/reducers/contactBox";
import { Button } from "../../reusables";
// import { HeroBg } from 'assets/images';
// import { HeroIllustration } from '../../assets/images';

const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const useWindowSize = () => {
    const [width, setWidth] = React.useState(0);

    React.useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [setWidth]);

    return width > 768;
  };
  const size = useWindowSize();

  const { services } = useSelector(getServicesSelector);

  React.useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const [body, setBody] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const { fullName, email, message, phoneNumber } = body;
  const [submit, setSubmit] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if ((fullName, email, message, phoneNumber)) {
      dispatch(createContactUs(body));
    }
  };

  const { loading, success, error, errors } = useSelector(contactUsSelector);
  return (
    <HomeLayout
      content={
        <>
          <section className="home-section" id="home" name="home">
            <div className="container">
              <div className="row align-items-center">
                <div data-aos="fade-right" className="col-md-6">
                  <img
                    src="assets/images/ui-design.png"
                    className="hero-image width-100 margin-top-20"
                    alt="pic"
                  />
                  <br />
                  <br />
                  {/* <img
                    style={{ width: '100%', height: '100%' }}
                    src={HeroIllustration}
                    className='hero-image width-100 margin-top-20'
                    alt='pic'
                  /> */}
                </div>
                <div data-aos="fade-left" className="col-md-6">
                  <h2>
                    <b> Advanced and commonly used APIs marketplace</b>{" "}
                    <i className="bi bi-chat-left-quote green"></i>
                  </h2>

                  <br />

                  <p className="hero-text">
                    Track all your integrations data in one central location.
                  </p>

                  <br />
                  <div className="newsletter_form_box">
                    <p
                      className="newsletter_success_box"
                      style={{ display: "none" }}
                    >
                      We received your message and you'll hear from us soon.
                      Thank You!
                    </p>
                    {user ? (
                      <a href="/marketplace" className="w-75 btn btn-success">
                        Explore Marketplace
                      </a>
                    ) : (
                      <div style={{ display: "flex", gap: "10px" }}>
                        <a
                          href="/register"
                          className="w-75 btn me-2 btn-primary"
                        >
                          Get Started
                        </a>
                        <a href="/marketplace" className="w-75 btn btn-success">
                          Explore Marketplace
                        </a>
                      </div>
                    )}
                    <br />
                    <br />
                    <p className="newsletter-form-terms">
                      <span>
                        <i className="bi bi-check2"></i> Hassle free integration
                      </span>

                      <span>
                        <i className="bi bi-check2"></i> 24/7 customer support
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-white" id="about" name="about">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 data-aos="fade-up" className="about_heading">
                    About
                  </h2>
                </div>
                <br />
                <br />
                <p data-aos="fade-up" className="text-center px-3 about_text">
                  TM30’s SAAS Platform is a solution built to speed up
                  integration for Company’s, developers, individuals or
                  entrepreneurs’ websites, Applications or processes. This
                  platform helps to speed up integration without sacrificing the
                  customization of the user’s solution by copying and pasting
                  our pre-built components. Modern solutions are highly
                  interdependent and require a constant flow of all kinds of
                  data. Application programming interfaces (APIs) make these
                  data flows smooth, secure, and reliable. These APIs connect
                  different systems. With their help, you can easily enhance
                  your solution with the necessary features and functionality.
                </p>

                <div className="col-md-4">
                  <div data-aos="zoom-in" className="main-services">
                    <i className="bi bi-gem red"></i>

                    <h4>Enhance Management</h4>

                    <p>
                      Save time managing multiple integrations, dashboards,
                      logins, passwords and management across platforms. With
                      TMSAAS, all your logins, integrations and api management
                      in one single dashboard.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div data-aos="zoom-in" className="main-services">
                    <i className="bi bi-megaphone green"></i>

                    <h4>One Integration and it’s done</h4>

                    <p>
                      Save time and money spent managing multiple integrations
                      and negotiations across different platforms. We have
                      provided most of the underlying infrastructure you need to
                      create your product as a service, so you can focus on what
                      matters most. Customer experience and acquisition.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div data-aos="zoom-in" className="main-services">
                    <i className="bi bi-speedometer2 blue"></i>

                    <h4>Integrate Faster</h4>

                    <p>
                      TM30 has pre-integrated to multiple providers of the more
                      common APIs that most businesses or most company’s need to
                      get their processes, payments for products and services
                      etc going. Rather than spend time and effort negotiating
                      and integrating with an array of different suppliers, you
                      would find all of their APIs on TM30’s SAAS platform
                      unified by a common standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-grey">
            <div className="container">
              <div className="row align-items-center">
                <div data-aos="fade-left" className="col-md-6">
                  <h3>
                    Discover how we can help you to grow your business fast.
                  </h3>
                  <br />
                  <p style={{ marginBottom: "10px !important" }}>
                    API integration provides you with numerous benefits:
                  </p>
                  <br />
                  <ul className="benefits">
                    <li>
                      <i className="bi bi-check blue"></i>API integration helps
                      you to develop products fast and cost-effectively
                    </li>

                    <li>
                      <i className="bi bi-check blue"></i>Helps you to easily
                      implement new features and functionalities on your new or
                      existing system
                    </li>

                    <li>
                      <i className="bi bi-check blue"></i>Seamlessly interface
                      with other systems, apps, and devices
                    </li>
                    <li>
                      <i className="bi bi-check blue"></i>Eliminates costly
                      software and wasteful development
                    </li>
                    <li>
                      <i className="bi bi-check blue"></i>Helps you{" "}
                      <b> BUILD SMARTER</b> and <b>DEPLOY FASTER</b>
                    </li>
                  </ul>

                  <a href="/#" className="scrool">
                    <button type="button" className="btn btn-lg btn-primary">
                      Discover More
                    </button>
                  </a>
                </div>

                <div data-aos="fade-right" className="col-md-6">
                  <img
                    src="assets/images/digital-marketing.png"
                    className="width-100 responsive-top-margins"
                    alt="pic"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-white" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 data-aos="fade-up" className="about_heading">
                    Available Services
                  </h2>
                </div>
                {services.map((service, index) => {
                  return <APISummaryCardHome key={index} {...service} />;
                })}
              </div>
              <br />
              <br />
              <br />
              <div className="service_btn_wrapper">
                <a
                  style={{ padding: "0.3rem 2rem" }}
                  href="/marketplace"
                  className="btn btn-success"
                >
                  Explore Marketplace
                </a>
              </div>
            </div>
          </section>

          <section className="section-grey" id="how-it-works">
            <div className="container">
              <div className="row align-items-center">
                <div data-aos="fade-left" className="col-md-5 col-sm-12">
                  <h2>How It Works.</h2>

                  <p>
                    Tmsaas platform gets a request from you and sends it to the
                    required provider based on the services and configurations
                    from the client’s request. The client will have to configure
                    the integrations according to the available services and
                    providers on the dashboard so we know the provider we are
                    routing the request to.
                  </p>
                </div>

                <div className="col-md-1"></div>

                <div data-aos="fade-right" className="col-md-6">
                  <div className="accordion accordion-flush" id="accordionOne">
                    <div className="accordion-item">
                      <h2
                        className="px-3 py-3 accordion-header"
                        id="headingOne"
                      >
                        <button className="accordion-button" type="button">
                          <i className="bi bi-pencil-fill"></i> Create Account
                        </button>
                      </h2>
                    </div>

                    <div className="accordion-item">
                      <h2
                        className="px-3 py-3 accordion-header"
                        id="headingTwo"
                      >
                        <button className="accordion-button" type="button">
                          <i className="bi bi-bar-chart-line-fill"></i> Choose
                          Desired Service
                        </button>
                      </h2>
                    </div>

                    <div className="accordion-item">
                      <h2
                        className="accordion-header px-3 py-3"
                        id="headingThree"
                      >
                        <button className="accordion-button" type="button">
                          <i className="bi bi-hand-thumbs-up-fill"></i> Enjoy
                          Our Services{" "}
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section-white medium-padding-bottom"
            id="features"
          >
            <div className="container">
              <div data-aos="fade-up" className="row">
                <div className="col-md-12 text-center">
                  <h2>Amazing Features</h2>
                </div>
              </div>

              <div data-aos="fade-up" className="row">
                <div data-aos="fade-up" className="col-md-4">
                  <div className="feature-box light-green">
                    <i className="bi bi-gem"></i>

                    <div className="feature-box-text">
                      <h4>Support 24/7</h4>

                      <p>
                        We support you in many ways! If you have any questions
                        or get a problem, you can easily contact us through the
                        contact form. Our team is great and giving you the
                        support you need, just when you need it.
                      </p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="col-md-4">
                  <div className="feature-box light-blue">
                    <i className="bi bi-people"></i>

                    <div className="feature-box-text">
                      <h4>User Friendly</h4>

                      <p>
                        We provide a standard, simple, user friendly and unified
                        API interface which combines all feature sets available
                        across numerous providers with the ability to easily
                        switch from one provider to the other without changing
                        code or integration.
                      </p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="col-md-4">
                  <div className="feature-box orange">
                    <i className="bi bi-bell"></i>

                    <div className="feature-box-text">
                      <h4>Notifications</h4>

                      <p>
                        Save time and money spent managing multiple integrations
                        and negotiations across different bank partners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="row">
                <div data-aos="fade-up" className="col-md-4">
                  <div className="feature-box dark-blue">
                    <i className="bi bi-gear"></i>
                    <div className="feature-box-text">
                      <h4>Accesibility</h4>
                      <p>
                        Save time and money spent managing multiple integrations
                        and negotiations across different bank partners. We've
                        carefully selected best-in-class APIs in the market. We
                        monitor, scale and secure them.
                      </p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="col-md-4">
                  <div className="feature-box light-red">
                    <i className="bi bi-cash-stack"></i>
                    <div className="feature-box-text">
                      <h4>One integration and it’s done</h4>
                      <p>
                        Save time and money spent managing multiple integrations
                        and negotiations across different bank partners.
                      </p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="col-md-4">
                  <div className="feature-box dark-green">
                    <i className="bi bi-chat-left-text"></i>
                    <div className="feature-box-text">
                      <h4>Detailed Documentation</h4>
                      <p>
                        Save time and money spent managing multiple integrations
                        and negotiations across different bank partners. The
                        APIs are fairly RESTful and are organized around the
                        main services you would be interacting with.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            data-aos="fade-up"
            className="section-white no-padding-bottom"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <p className="testimonial-single">
                    “People who succeed in business aren't afraid to hear
                    feedback from their customers - they actually thrive from
                    it.”
                  </p>

                  <h5 className="margin-bottom-5">Afolabi Albert</h5>

                  <p className="blue">CEO TM30</p>
                </div>

                <div className="col-md-6">
                  <img
                    src="assets/images/testimonials-woman.jpg"
                    className="width-100"
                    alt="pic"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            data-aos="fade-up"
            className="section-grey medium-padding-bottom"
            id="blog"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2>Our Blog</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="popup-wrapper">
                      <div className="popup-gallery">
                        <a href="https://tm30.medium.com/elevate-your-customer-experience-using-chatbots-8512147d6da5">
                          <img
                            src="assets/blog/blogpost1.png"
                            className="width-100"
                            alt="pic"
                          />

                          <span className="eye-wrapper2">
                            <i className="bi bi-link-45deg"></i>
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="blog-item-inner">
                      <h3 className="blog-title">
                        <a href="https://tm30.medium.com/elevate-your-customer-experience-using-chatbots-8512147d6da5">
                          Use Our Chatbots
                        </a>
                      </h3>

                      <a
                        href="https://tm30.medium.com/elevate-your-customer-experience-using-chatbots-8512147d6da5"
                        className="blog-icons last"
                      >
                        <i className="bi bi-card-text"></i> Technology &amp;
                        Design &#8212; 4 Min Read
                      </a>

                      <p>
                        Elevate Your Customer Experience Using Chatbots. With
                        Chatbot, automating customer service is nothing but a
                        breeze...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="popup-wrapper">
                      <div className="popup-gallery">
                        <a href="https://tm30.medium.com/the-software-development-life-cycle-22d7b34de850">
                          <img
                            src="assets/blog/blogpost2.jpeg"
                            className="width-100"
                            alt="pic"
                          />

                          <span className="eye-wrapper2">
                            <i className="bi bi-link-45deg"></i>
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="blog-item-inner">
                      <h3 className="blog-title">
                        <a href="https://tm30.medium.com/the-software-development-life-cycle-22d7b34de850">
                          SDLC
                        </a>
                      </h3>

                      <a
                        href="https://tm30.medium.com/the-software-development-life-cycle-22d7b34de850"
                        className="blog-icons last"
                      >
                        <i className="bi bi-card-text"></i> Software Development
                        &#8212; 4 Min Read
                      </a>

                      <p>
                        The life cycle of a software product is the stages that
                        the product goes through from the appearance of an idea
                        to...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="blog-item">
                    <div className="popup-wrapper">
                      <div className="popup-gallery">
                        <a href="https://tm30.medium.com/7-tech-mistakes-smes-make-and-how-to-help-avoid-them-30a07951086">
                          <img
                            src="assets/blog/blogpost3.jpeg"
                            className="width-100"
                            alt="pic"
                          />

                          <span className="eye-wrapper2">
                            <i className="bi bi-link-45deg"></i>
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="blog-item-inner">
                      <h3 className="blog-title">
                        <a href="https://tm30.medium.com/7-tech-mistakes-smes-make-and-how-to-help-avoid-them-30a07951086">
                          7 Tech SME's Mistakes
                        </a>
                      </h3>

                      <a
                        href="https://tm30.medium.com/7-tech-mistakes-smes-make-and-how-to-help-avoid-them-30a07951086"
                        className="blog-icons last"
                      >
                        <i className="bi bi-card-text"></i> Product Launch
                        &#8212; 5 Min Read
                      </a>

                      <p>
                        One of the best ways to learn in life is through
                        mistakes. But a smarter way is to learn from other
                        people’s mistake...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section
            data-aos="fade-up"
            className="section-grey medium-padding-bottom"
            id="blog"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2>Testimonials</h2>
                  <p>Here's what our past and current clients have to say</p>
                </div>
              </div>
              {size ? (
                <Slider className="testimonial-cards" {...settings}>
                  {testimonials.map((item) => {
                    const { key, quote, name, position, company, image } = item;
                    return (
                      <div key={key} className="testimonial-card">
                        <div className="testimonial-item">
                          <div className="testimonial-item-inner">
                            <p className="text-center">"{quote}"</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <img
                              src={image}
                              className="testimonial-image"
                              alt="pic"
                            />
                            <div className="details">
                              <h4 className="blog-title">{name}</h4>
                              <span className="text-muted">
                                {position}, <b>{company}</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                <Slider className="testimonial-cards" {...settings2}>
                  {testimonials.map((item) => {
                    const { key, quote, name, position, company, image } = item;
                    return (
                      <div key={key} className="testimonial-card">
                        <div className="testimonial-item">
                          <div className="testimonial-item-inner">
                            <p className="text-center">"{quote}"</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-center pb-3">
                            <img
                              src={image}
                              className="testimonial-image"
                              alt="pic"
                            />
                            <div className="details">
                              <h4 className="blog-title">{name}</h4>
                              <span className="text-muted">
                                {position}, <b>{company}</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </section> */}

          <section className="section-white" id="contact">
            <div className="container">
              <div className="row">
                <div data-aos="fade-right" className="col-md-6">
                  <h3>Get in touch</h3>
                  {success && (
                    <>
                      <br />
                      <p className="contact_success_box">
                        We received your message and you'll hear from us soon.
                        Thank You!
                      </p>
                    </>
                  )}
                  {!success && (
                    <form
                      id="contact-form"
                      className="contact"
                      onSubmit={handleSubmit}
                      // action='/'
                      // method='post'
                    >
                      <input
                        className="contact-input white-input mb-3"
                        required=""
                        name="fullName"
                        placeholder="Full Name*"
                        type="text"
                        onChange={handleChange}
                      />
                      {submit && !fullName && (
                        <p className="error-msg">Fullname is required</p>
                      )}
                      <input
                        className="contact-input white-input mb-3"
                        required=""
                        name="email"
                        placeholder="Email Adress*"
                        type="email"
                        onChange={handleChange}
                      />
                      {submit && !email && (
                        <p className="error-msg">Email is required</p>
                      )}
                      <input
                        className="contact-input white-input mb-3"
                        required=""
                        name="phoneNumber"
                        placeholder="Phone Number*"
                        type="number"
                        onChange={handleChange}
                      />
                      {submit && !phoneNumber && (
                        <p className="error-msg">Phone number is required</p>
                      )}
                      <textarea
                        className="contact-commnent white-input mb-3"
                        rows="2"
                        cols="20"
                        name="message"
                        placeholder="Your Message..."
                        onChange={handleChange}
                      ></textarea>
                      {submit && !message && (
                        <p className="error-msg">Message is required</p>
                      )}
                      {error && <p className="error-msg">{errors}</p>}
                      <Button full text="Submit" loading={loading} primary />
                    </form>
                  )}
                </div>

                <div
                  data-aos="zoom-in"
                  className="col-md-6 responsive-top-margins"
                >
                  <h3>How to find us</h3>

                  <iframe
                    title="video_play"
                    className="contact-maps"
                    src="https://www.google.com/maps/embed"
                    width="600"
                    height="270"
                    style={{ border: "0" }}
                    allowFullScreen
                  ></iframe>

                  <h5>Head Office</h5>

                  <p className="contact-info">
                    <i className="bi bi-geo-alt-fill"></i> No. 29A, Beckley
                    Street, Onikan, Lagos, Nigeria.
                  </p>

                  <p className="contact-info">
                    <i className="bi bi-envelope-open-fill"></i>{" "}
                    <a href="mailto:contact@youremail.com">
                      support@tmsaas.net
                    </a>
                  </p>

                  <p className="contact-info">
                    <i className="bi bi-telephone-fill"></i> +234 818 250 4430
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default Home;

const testimonials = [
  {
    key: 1,
    quote:
      "Elevate Your Customer Experience Using Chatbots. With Chatbot, automating customer service is nothing but a breeze",
    name: "Dr John Doe",
    company: "TM30",
    position: "Director",
    image: "assets/blog/blogpost2.jpeg",
  },
  {
    key: 2,
    quote:
      "Elevate Your Customer Experience Using Chatbots. With Chatbot, automating customer service is nothing but a breeze",
    name: "Dr John Doe",
    company: "TM30",
    position: "Director",
    image: "assets/blog/blogpost2.jpeg",
  },
  {
    key: 3,
    quote:
      "Elevate Your Customer Experience Using Chatbots. With Chatbot, automating customer service is nothing but a breeze",
    name: "Dr John Doe",
    company: "TM30",
    position: "Director",
    image: "assets/blog/blogpost2.jpeg",
  },
  {
    key: 4,
    quote:
      "Elevate Your Customer Experience Using Chatbots. With Chatbot, automating customer service is nothing but a breeze",
    name: "Dr John Doe",
    company: "TM30",
    position: "Director",
    image: "assets/blog/blogpost2.jpeg",
  },
  {
    key: 5,
    quote:
      "Elevate Your Customer Experience Using Chatbots. With Chatbot, automating customer service is nothing but a breeze",
    name: "Dr John Doe",
    company: "TM30",
    position: "Director",
    image: "assets/blog/blogpost2.jpeg",
  },
];
