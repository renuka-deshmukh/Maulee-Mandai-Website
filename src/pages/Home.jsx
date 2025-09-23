import React, { useRef, useState } from "react";
import { veggies } from "../data/Veggies";
import ItemCard from "./ItemCard";
import { fruits } from "../data/Fruits";

const Home = () => {
  const veggiesRef = useRef(null);
  const fruitsRef = useRef(null);

  const [readMore, setReadMore] = useState();


  // Scroll function
  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>

      <div style={{ backgroundColor: "#f4f6f8ff" }}>
        <div className="container my-4 bg-light">
          <div className="row">
            {/* Left Carousel */}
            <div className="col-md-6">
              <div id="carouselLeft" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://mandai.in/admin/assets/admin/images/mandai_online/banner/17.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mandai.in/admin/assets/admin/images/mandai_online/banner/16.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mandai.in/admin/assets/admin/images/mandai_online/banner/15.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="col-md-6">
              <div id="carouselRight" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img
                      src="https://mandai.in/admin/assets/admin/images/mandai_online/banner/15.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item active">
                    <img
                      src="https://mandai.in/admin/assets/admin/images/mandai_online/banner/16.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mandai.in/admin/assets/admin/images/mandai_online/banner/17.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Veggies Horizontal Scroll Section */}
        <div className="container my-4 position-relative">
          <h3 className="fw-bold mb-3">Fresh Veggies</h3>

          {/* Left Scroll Button */}
          <button
            className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 10 }}
            onClick={() => scroll(veggiesRef, "left")}
          >
            ◀
          </button>

          {/* Cards Container */}
          <div
            className="d-flex overflow-auto pb-3"
            style={{
              gap: "1rem",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
              overflowX: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
            ref={veggiesRef}
          >
            {veggies.map((veg) => (
              <div key={veg.id} style={{ flex: "0 0 auto" }}>
                <ItemCard item={veg} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 10 }}
            onClick={() => scroll(veggiesRef, "right")}
          >
            ▶
          </button>
        </div>

        {/* Veggies Horizontal Scroll Section */}
        <div className="container my-4 position-relative">
          <h3 className="fw-bold mb-3">Fresh Veggies</h3>

          {/* Left Scroll Button */}
          <button
            className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 10 }}
            onClick={() => scroll(fruitsRef, "left")}
          >
            ◀
          </button>

          {/* Cards Container */}
          <div
            className="d-flex overflow-auto pb-3"
            style={{
              gap: "1rem",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
              overflowX: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
            ref={fruitsRef}
          >
            {fruits.map((veg) => (
              <div key={veg.id} style={{ flex: "0 0 auto" }}>
                <ItemCard item={veg} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 10 }}
            onClick={() => scroll(fruitsRef, "right")}
          >
            ▶
          </button>
        </div>

        <div className="container bg-white rounded-4 text-dark">

          <div className="container p-4 rounded">
            <h3><b style={{ color: 'forestgreen' }}>
              Buy Fresh Fruits and Vegetables online in Pune and Pimpri-Chinchwad</b></h3>

            <p style={{ textAlign: "justify" }}>
              See where the technology has brought us all, offering us the privilege of ordering our daily fruits
              and vegetables online seating at home and getting them delivered at our doorstep within few hours.
              Most of our time is spent going to the local market and shopping for fresh fruits and vegetables.
              But, to our disappointment, not only our precious time is spent on these things but also it makes
              us tired searching for fresh vegetables and fruits all over the market and getting the desired products. <br />
              After analyzing all these problems which people of Pune face daily, we came up with the idea of establishing an online
              platform for fresh fruits and vegetables that will be purchased with just one click and will be delivered within few
              hours at your doorstep.Mandai App and website is now doing its part, of delivering fruits and vegetables, exotic
              vegetables, leafy vegetables, seasonal fruits, etc to customers, very well. For the past few years, Pune and PCMC have
              shown a lot of love to us and are ordering their daily needs online from us. Mandai has a wide variety of exotic fruits
              and vegetables in their product category. from zucchini, broccoli, red/yellow capsicum to lettuce, everything will be
              ordered online and delivered to you in just one click. All our products are hand-picked, fresh, and quality tested. <br />
              You can compare Mandai on basis of service and product prices offered with other online fruit and vegetable providers.
              Shopping with us can make you realize that the onion prices, potato prices, tomato prices, apple prices, and prices of
              all other products are way much cheaper than the market prices and the competitor's prices....
            </p>

            {readMore && (
              <>
                <p style={{ textAlign: "justify" }}>
                  The ease of using Mandai App and the Mandai website has satisfied all our customers in Pune and PCMC and has made online
                  fruits and vegetable shopping more affordable. We are happy with our daily growing orders.</p>
                <h3><b style={{ color: 'forestgreen' }}>
                  Sprouts, Exotic vegetables, dried veggies, and many more to choose</b></h3>

                <p style={{ textAlign: "justify" }}>
                  When you visit Mandai, you will come to know that even if we have a wide variety of fresh fruits and vegetables to offer, we have not messed up the user experience by adding unwanted products.
                  Our product includes all the necessary daily requirements of every person in Pune and PCMC.
                  Free yourself from the hassle of soaking and sprouting the grains. Not only fresh fruits and vegetables, but we
                  also provide fresh and healthy Sprouts since it is the basic requirement of every household in Pune and PCMC. Along with that, we also provide Dried veggies, seasonal fruits, Exotic Vegetables.
                </p>

                <h3><b style={{ color: 'forestgreen' }}>
                  What About Packaging..?</b></h3>

                <p style={{ textAlign: "justify" }}>
                  Well, Packaging of fruits and vegetables is our utmost priority at Mandai. Proper Hygiene is
                  maintained during packaging and delivering the products to your doorstep.
                </p>

                <h3><b style={{ color: 'forestgreen' }}>
                  Payment Options..?</b></h3>

                <p style={{ textAlign: "justify" }}>
                  Purchasing fresh fruits and vegetables In Pune is made easy. you can pay online using your Gpay, card, or can opt for cash on delivery (COD). <br />
                  But we request you to please go for Online payment as it is safe and secure and make us move one more step towards digital India.
                </p>

                <h3><b style={{ color: 'forestgreen' }}>
                  Delivery in all Parts of Pune and PCMC ?</b></h3>

                <p style={{ textAlign: "justify" }}>
                  Mandai delivers fresh fruits and vegetables in all parts and nooks of Pune and a few areas of PCMC.
                  Happy Shopping. <br /> Stay Safe Stay Healthy
                </p>


              </>
            )}


            <div className="text-end">
              <button
                className="btn btn-success text-dark fw-bold p-2"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;
