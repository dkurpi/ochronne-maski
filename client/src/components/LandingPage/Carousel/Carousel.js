import React from "react";

function Carousel({ items }) {
  const item = [
    <div class="col-lg-6 col-md-4  col-sm-6 mb-2 flexcolumn">
      <div class="card h-100  text-center">
        <a href={`/product/${items[0].id}`}>
          <img class="card-img-top" src={items[0].images[0]} alt="" />
        </a>
        <div class="card-body">
          <h4 class="card-title">
            <a href={`product/${items[0].id}`}>{items[0].name}</a>
          </h4>
          <h5>
            <s style={{ color: "red", fontSize: "15px" }}>
              {items[0].oldPrize}zł
            </s>{" "}
            {items[0].prize}zł
          </h5>
        </div>
      </div>
    </div>
  ];

  return (
    <>
      <span className="Text text__delivery"> Bestsellery:</span>

      <div
        id="carouselExampleIndicators"
        class="carousel slide my-4 carousel-modified"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            src="http://placehold.it/900x350"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div className="slider__section">
              {/* <img class="slider__image" src="/images/slider1.jpg" alt="" /> */}
              <div className="slider__section">{[item, item]}</div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="slider__section">{[item, item]}</div>
          </div>
          <div class="carousel-item">
            <div className="slider__section">{[item, item]}</div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Carousel;
