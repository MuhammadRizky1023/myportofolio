import data from "../../data/index.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MyBlog() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="blog--section" id="MyBlog">
      <div className="blog--container-box">
        <div className="blog--container">
          <p className="sub--title">Recent Blogs</p>
          <h2 className="section--heading">My Blog</h2>
        </div>
        <div>
        
        </div>
      </div>
      <div className="blog--section--container">
       <Slider {...settings}>
       {data.blog.map((item, index) => (
          <a href={item.url} key={index} className="blog--section--card">
            <div className="blog--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="blog--section--card--content">
              <div>
                <h3 className="blog--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </a>
        ))}
       </Slider>
      </div>
    </section>
  );
}