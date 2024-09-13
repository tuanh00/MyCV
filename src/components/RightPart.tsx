import About from "./content/About";
import HomeCv from "./content/HomeCv";

const RightPart = () => {
    return(
        <>
            <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
             {/* <!-- HOMECV --> */}
              <HomeCv/>
            {/* <!-- HOMECV --> */}

             {/* <!-- ABOUT --> */}
             <About/>
             {/* <!-- /ABOUT --> */}
              
             {/* <!-- SKILLS --> */}
              <div className="arlo_tm_section">
                <div className="arlo_tm_skills_wrap">
                  <div className="container">
                    <div className="inner_wrap">
                      <div className="leftbox">
                        <div className="arlo_tm_mini_title_holder">
                          <h4>Some About my Abilities</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
                      </div>
                      <div className="rightbox">
                        <div className="progress_bar_wrap_total">
                          <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                            <div className="arlo_tm_progress" data-value="95" data-color="#000">
                              <span><span className="label">Wordpress - <span className="experience">5 years of experience</span></span><span className="number">95%</span></span>
                              <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                            </div>
                            <div className="arlo_tm_progress" data-value="85" data-color="#000">
                              <span><span className="label">Css - <span className="experience">3 years of experience</span></span><span className="number">85%</span></span>
                              <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                            </div>
                            <div className="arlo_tm_progress" data-value="75" data-color="#000">
                              <span><span className="label">HTML - <span className="experience">4 years of experience</span></span><span className="number">75%</span></span>
                              <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                            </div>
                            <div className="arlo_tm_progress" data-value="90" data-color="#000">
                              <span><span className="label">After Effect - <span className="experience">6 years of experience</span></span><span className="number">90%</span></span>
                              <div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar"></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*{/* <!-- /SKILLS --> */} 
              
             {/* <!-- SERVICES --> */}
              <div className="arlo_tm_section" id="services">
                <div className="arlo_tm_services_wrap">
                  <div className="container">
                    <div className="arlo_tm_title_holder">
                      <h3>Amazing Services</h3>
                      <span>Meet our amazing services</span>
                    </div>
                    <div className="list_wrap">
                      <ul>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <img className="svg" src="img/svg/camera-diaphragm.svg" alt="camera-diaphragm" />
                            </div>
                            <div className="title_service">
                              <h3>Photography</h3>
                            </div>
                            <div className="text">
                              <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <img className="svg" src="img/svg/new-tab.svg" alt="new-tab" />
                            </div>
                            <div className="title_service">
                              <h3>Web Design</h3>
                            </div>
                            <div className="text">
                              <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <img className="svg" src="img/svg/layers.svg" alt="layers" />
                            </div>
                            <div className="title_service">
                              <h3>Branding</h3>
                            </div>
                            <div className="text">
                              <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <img className="svg" src="img/svg/share.svg" alt="share" />
                            </div>
                            <div className="title_service">
                              <h3>Social Media</h3>
                            </div>
                            <div className="text">
                              <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <img className="svg" src="img/svg/adobe-illustrator.svg" alt="adobe-illustrator" />
                            </div>
                            <div className="title_service">
                              <h3>Illustrator</h3>
                            </div>
                            <div className="text">
                              <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="inner">
                            <div className="icon">
                              <img className="svg" src="img/svg/seo-performance-marketing-graphic.svg" alt="seo-performance-marketing-graphic" />
                            </div>
                            <div className="title_service">
                              <h3>Marketing</h3>
                            </div>
                            <div className="text">
                              <p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
             {/* <!-- /SERVICES --> */}
              
             {/* <!-- PORTFOLIO --> */}
              <div className="arlo_tm_section relative" id="portfolio">
                <div className="arlo_tm_portfolio_wrapper_all">
      
                 {/* <!-- PORTFOLIO FILTER --> */}
                  <div className="arlo_tm_second_portfolio">
                  <div className="container">
                    <div className="arlo_tm_portfolio_wrap">
                      <div className="arlo_tm_title_holder portfolio">
                        <h3>Creative Works</h3>
                        <span>Check out our latest creative works</span>
                      </div>
                      <div className="arlo_tm_portfolio_titles"></div>
                      <ul className="arlo_tm_portfolio_filter">
                        <li><a href="#" className="current" data-filter="*">All</a></li>
                        <li><a href="#" data-filter=".design">Design</a></li>
                        <li><a href="#" data-filter=".photography">Photography</a></li>
                        <li><a href="#" data-filter=".development">Development</a></li>
                      </ul>
                      <ul className="arlo_tm_portfolio_list gallery_zoom">
                        <li className="design">
                          <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Aoc Productions" data-category="Design">
                            <a href="portfolio-single.html">
                              <img src="img/portfolio/600x600.jpg" alt="600x600" />
                              <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/1.jpg"></div>
                            </a>
                          </div>
                        </li>
                        <li className="photography">
                          <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Ind Hed" data-category="Photography">
                            <a href="portfolio-single-2.html">
                              <img src="img/portfolio/600x600.jpg" alt="600x600" />
                              <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/2.jpg"></div>
                            </a>
                          </div>
                        </li>
                        <li className="development">
                          <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Paper Mockup" data-category="Development">
                            <a href="portfolio-single-3.html">
                              <img src="img/portfolio/600x600.jpg" alt="600x600" />
                              <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/3.jpg"></div>
                            </a>
                          </div>
                        </li>
                        <li className="photography">
                          <div className="entry arlo_tm_portfolio_animation_wrap" data-title="The Nordic" data-category="Photography">
                            <a href="portfolio-single-4.html">
                              <img src="img/portfolio/600x600.jpg" alt="600x600" />
                              <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/4.jpg"></div>
                            </a>
                          </div>
                        </li>
                        <li className="design">
                          <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Creatives Castle" data-category="Design">
                            <a href="portfolio-single-5.html">
                              <img src="img/portfolio/600x600.jpg" alt="600x600" />
                              <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/5.jpg"></div>
                            </a>
                          </div>
                        </li>
                        <li className="photography">
                          <div className="entry arlo_tm_portfolio_animation_wrap" data-title="White Bag" data-category="Photography">
                            <a href="portfolio-single-6.html">
                              <img src="img/portfolio/600x600.jpg" alt="" />
                              <div className="arlo_tm_portfolio_image_main" data-img-url="img/portfolio/6.jpg"></div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
               {/* <!-- /PORTFOLIO FILTER --> */}
      
                </div>
              </div>
             {/* <!-- /PORTFOLIO --> */}
              
             {/* <!-- TESTIMONIALS --> */}
              <div className="arlo_tm_section" id="testimonials">
                <div className="arlo_tm_testimonials_wrapper_all">
                  <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                      <div className="overlay_image testimonial jarallax" data-speed="0"></div>
                      <div className="overlay_color testimonial"></div>
                    </div>
                    <div className="content testimonial">
                      <div className="arlo_tm_testimonial_wrap">
                        <div className="container">
                          <div className="carousel_wrap">
                            <ul className="owl-carousel">
                              <li className="item">
                                <div className="inner">
                                  <div className="quotebox_wrap">
                                    <i className="xcon-quote-left"></i>
                                  </div>
                                  <div className="definitions_wrap">
                                    <p>“Arlo team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for works.”</p>
                                  </div>
                                  <div className="name_holder">
                                    <p>Antonio Baraley, CEO Founder</p>
                                  </div>
                                </div>
                              </li>
                              <li className="item">
                                <div className="inner">
                                  <div className="quotebox_wrap">
                                    <i className="xcon-quote-left"></i>
                                  </div>
                                  <div className="definitions_wrap">
                                    <p>“We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design.”</p>
                                  </div>
                                  <div className="name_holder">
                                    <p>Calena Gomez, AOC Designer</p>
                                  </div>
                                </div>
                              </li>
                              <li className="item">
                                <div className="inner">
                                  <div className="quotebox_wrap">
                                    <i className="xcon-quote-left"></i>
                                  </div>
                                  <div className="definitions_wrap">
                                    <p>“Awesome to work with Arlo. Good organized, easy to communicate with, responsive with next iterations.”</p>
                                  </div>
                                  <div className="name_holder">
                                    <p>Torren Winston, Photographer.</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             {/* <!-- /TESTIMONIALS --> */}
              
             {/* <!-- COUNTERBOX --> */}
              <div className="arlo_tm_section">
                <div className="container">
                  <div className="arlo_tm_counter_wrap" data-col="4" data-delay="300">
                    <ul className="arlo_tm_counter_list arlo_tm_miniboxes">
                      <li>
                        <div className="inner arlo_tm_minibox">
                          <h3><span><span className="arlo_tm_counter" data-from="0" data-to="2222" data-speed="3000">0</span></span></h3>
                          <span>Projects Completed</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner arlo_tm_minibox">
                          <h3><span><span className="arlo_tm_counter" data-from="0" data-to="333" data-speed="3000">0</span>K</span></h3>
                          <span>Lines of Code</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner arlo_tm_minibox">
                          <h3><span><span className="arlo_tm_counter" data-from="0" data-to="8888" data-speed="3000">0</span></span></h3>
                          <span>Happy Clients</span>
                        </div>
                      </li>
                      <li>
                        <div className="inner arlo_tm_minibox">
                          <h3><span><span className="arlo_tm_counter" data-from="0" data-to="777" data-speed="3000">0</span>+</span></h3>
                          <span>My Awwwards</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             {/* <!-- /COUNTERBOX --> */}
              
             {/* <!-- NEWS --> */}
              <div className="arlo_tm_section" id="news">
                <div className="arlo_tm_news_wrap">
                  <div className="container">
                    <div className="arlo_tm_title_holder news">
                      <h3>Latest News</h3>
                      <span>Check out our latest News</span>
                    </div>
                    <div className="arlo_tm_list_wrap blog_list">
                      <ul className="total">
                        <li className="wow fadeInUp" data-wow-duration="1.2s">
                          <div className="inner_list">
                            <div className="image_wrap">
                              <img className="small" src="img/blog/500x350.jpg" alt="" />
                              <img className="big" src="img/blog/1170x450.jpg" alt="" />
                              <div className="news_image" data-url="img/blog/1.jpg"></div>
                              <a className="link_news" href="index.html"></a>
                            </div>
                            <div className="definitions_wrap">
                              <div className="date_wrap">
                                <p>January 22, 2018 <a href="index.html">Logos</a></p>
                              </div>
                              <div className="title_holder">
                                <h3><a href="index.html">How to Create Great Logo for Your Business</a></h3>
                              </div>
                              <div className="definition">
                                <p>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have ...</p>
                              </div>
                              <div className="full_def">
                                <p>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have a couple of questions running through your mind like: Do I really need that logo? Or Yep, I really need one. But how can I get it on a budget? This post was created to help you bring system out of confusion so you can get the best out of your business and enter the market full force. First of all, yes, you do need a logo, and it does not really matter how big or small your business is. Even if you  making a craft soap and sell it to your relatives and friends, you still need a logo. If you plan to monetize an idea, you need a logo for it. Otherwise your work, your efforts, your image and your future brand belong to everyone, like grapes at a grocery store. But most importantly, the final design you come up with should be effective enough to promote your business and get you that place in the sun. Here are a few tips that will make the whole process easier and more fun. The first step to a killer logo is an idea. So start feeding your brain with new impressions and experiences. Use anything that works for you. Try hiking and gain inspiration from nature. Or visit an art gallery. Meditation, photography, action sports In a nutshell, any kind of activity that fills you up with energy and joy may help you get that revolutionary idea. It is always useful to browse the websites (or social media profiles) of your potential rivals to not only judge their logos but to practice analysis. Do you find your competitor logo effective or attractive? Try to think of the ways it helps the rival company to be profitable. Is there something you would change? Why? All of these questions can really help you to improve your own perception of your brand as well as the future marketing strategy. Find out what the strengths and weaknesses of your rivals are and benefit from that knowledge. When it comes to logo design, there are and always will be several safe choices like bold and elegant black and white logos or serif font wordmarks. But if you are striving to get that killer logo, do not be afraid to cross the line and try something rebellious. Go out there and get to know the latest design trends. For example, you may experiment with the bold colors like Ultra Violet, which is the Pantone color of the year, by the way. Or play with the typography and color gradients.</p>
                              </div>
                              <div className="arlo_tm_popup_share_wrap">
                                <ul>
                                  <li><a href="#">Facebook</a></li>
                                  <li><a href="#">Twitter</a></li>
                                  <li><a href="#">Linkedin</a></li>
                                  <li><a href="#">Behance</a></li>
                                </ul>
                              </div>
                              <div className="read_more">
                                <a href="#"><span>Read More</span></a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
                          <div className="inner_list">
                            <div className="image_wrap">
                              <img className="small" src="img/blog/500x350.jpg" alt="" />
                              <img className="big" src="img/blog/1170x450.jpg" alt="" />
                              <div className="news_image" data-url="img/blog/2.jpg"></div>
                              <a className="link_news" href="index.html"></a>
                            </div>
                            <div className="definitions_wrap">
                              <div className="date_wrap">
                                <p>February 07, 2018 <a href="index.html">Illustrator</a></p>
                              </div>
                              <div className="title_holder">
                                <h3><a href="index.html">How to Autumn Clean Your Design Career?</a></h3>
                              </div>
                              <div className="definition">
                                <p>Spring cleaning is not just about washing windows and clearing away cobwebs. Your design career also needs a thorough ...</p>
                              </div>
                              <div className="full_def">
                                <p>Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether yo are a freelancer or an in-house designer, or at a studio or agency, you'll probably have to rebrand at the andWhether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether yo are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and.Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether youa are a freelancer or an in-house designer, or at a studio or agency.</p>
                              </div>
                              <div className="arlo_tm_popup_share_wrap">
                                <ul>
                                  <li><a href="#">Facebook</a></li>
                                  <li><a href="#">Twitter</a></li>
                                  <li><a href="#">Linkedin</a></li>
                                  <li><a href="#">Behance</a></li>
                                </ul>
                              </div>
                              <div className="read_more">
                                <a href="#"><span>Read More</span></a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
                          <div className="inner_list">
                            <div className="image_wrap">
                              <img className="small" src="img/blog/500x350.jpg" alt="" />
                              <img className="big" src="img/blog/1170x450.jpg" alt="" />
                              <div className="news_image" data-url="img/blog/3.jpg"></div>
                              <a className="link_news" href="index.html"></a>
                            </div>
                            <div className="definitions_wrap">
                              <div className="date_wrap">
                                <p>April 12, 2018 <a href="index.html">Branding</a></p>
                              </div>
                              <div className="title_holder">
                                <h3><a href="index.html">Innovative Ways to Increase Brand</a></h3>
                              </div>
                              <div className="definition">
                                <p>Having a solid, trusted brand is important for your company to thrive. If your target audience does not know or trust ...</p>
                              </div>
                              <div className="full_def">
                                <p>Having a solid, trusted brand is important for your company to thrive. If your target audience does not know or trust your brand, how will you ever increase your customer base and sales? Here are six innovative strategies you can use to increase brand awareness and help your business thrive. Inviting influencers into your niche is a great way to increase brand awareness and hopefully drive sales. When influencers have an established audience that knows and trusts them, once they mention your product(s) and discuss your brand in their content, those mentions will expand your reach and increase peoples awareness of your product. Ikonick is a perfect example of a company that works directly with influencers: It sells canvas art for your home and office. The way Ikonick uses influencers involves providing them with art and having those influencers pose with the art, then share the photos on social media. "Our relationships are an important part of our business,"  co-founder Mark Mastrandrea told me. "Our relationships make up our community, and the community is how our brand grows." Ikonick uses all types of influencers, from Instagram photographers to celebrities. The companys social strategy has enabled it to scale and grow exponentially because its influencers become part of its sales team -- even ambassadors. The relationship is mutually rewarding, Mastrandrea said. Companies can also offer to sponsor influencers at an event (if they do that sort of thing) and even use them as spokespersons for their brand and product(s). A lot of CrossFit-related companies do this, including Rogue Fitness, which sponsors certain athletes with clothing. The athlete then becomes a walking billboard for the company. Have you ever received an order that came in branded packaging? Rather than see it as just another shipment, perhaps you felt that that that special branding made the package seem like a gift. The team knows that the product experience doesn't commence at first use, but rather at the unboxing stage. How companies present their brand, and the story they tell through their design and graphics, can create an emotional connection with the customer that may last even longer than the product itself.</p>
                              </div>
                              <div className="arlo_tm_popup_share_wrap">
                                <ul>
                                  <li><a href="#">Facebook</a></li>
                                  <li><a href="#">Twitter</a></li>
                                  <li><a href="#">Linkedin</a></li>
                                  <li><a href="#">Behance</a></li>
                                </ul>
                              </div>
                              <div className="read_more">
                                <a href="#"><span>Read More</span></a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*{/* <!-- /NEWS --> */} 
      
             {/* <!-- CONTACT & FOOTER --> */}
              <div className="arlo_tm_section" id="contact">
                <div className="container">
                  <div className="arlo_tm_title_holder contact">
                    <h3>Contact Me</h3>
                    <span>Get in touch with me</span>
                  </div>
                </div>
                <div className="arlo_tm_footer_contact_wrapper_all">
                  <div className="arlo_tm_contact_wrap_all">
                    <div className="container">
                      <div className="leftbox">
                        <div className="arlo_tm_mini_title_holder contact">
                          <h4>Get in Touch</h4>
                        </div>
                        <div className="short_info_wrap">
                          <ul>
                            <li><p><label>Address:</label><span>123 Qwerty Avenue NYC, USA</span></p></li>
                            <li><p><label>Email:</label><span><a href="mailto:example@gmail.com">example@gmail.com</a></span></p></li>
                            <li><p><label>Phone:</label><span>+77 022 177 05 05</span></p></li>
                            <li><p><label>Website:</label><span><a href="mailto:example@gmail.com">www.yourdomain.com</a></span></p></li>
                          </ul>
                        </div>
                      </div>
                      <div className="rightbox">
                        <div className="arlo_tm_contact_wrap">
                          <div className="main_input_wrap">
                            <form action="http://frenify.com/" method="post" className="contact_form" id="contact_form">
                              <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                              <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                              <div className="wrap">
                                <input id="name" type="text" placeholder="Your Name" />
                              </div>
                              <div className="wrap">
                                <input id="email" type="text" placeholder="Your Email" />
                              </div>
                              <div className="wrap">
                                <textarea id="message" placeholder="Your Message"></textarea>
                              </div>
                              <div className="arlo_tm_button">
                                <a id="send_message" href="#"><span>Send Message</span></a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arlo_tm_footer_wrap">
                    <div className="container">
                      <p>&copy; Copyright 2019. All Rights are Reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
             {/* <!-- /CONTACT & FOOTER --> */}
              
            </div>
          </div>
        </>
    );
}
export default RightPart;