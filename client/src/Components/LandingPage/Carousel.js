import React from "react";

export default function Carousel({ items }) {
  const getItem = (index) => {
    const [item] = items.filter(({ id }) => id === index);
    return item;
  };

  return (
    <>
      <span className="Text text__delivery"> Bestsellery:</span>
      <hr />

      <div
        id="carouselExampleIndicators"
        class="carousel slide my-4 carousel-modified"
        data-ride="carousel"
        data-interval="2500"
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
              <div className="slider__section">
                {[Item(getItem(19)), Item(getItem(22))]}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="slider__section">
              {[Item(getItem(21)), Item(getItem(23))]}
            </div>
          </div>
          <div class="carousel-item">
            <div className="slider__section">
              {[Item(getItem(3)), Item(getItem(24))]}
            </div>
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
const Item = ({ id, images, name, prize, prizeEach, oldPrize }) => {
  return (
    <div class="col-lg-6 col-md-6  col-sm-6 mb-2 flexcolumn">
      <div class="card h-100  text-center color-gray">
        <a href={`/product/${id}`}>
          <img
            onPointerEnter={(e) => {
              images[1]
                ? (e.target.src = images[1])
                : (e.target.src = images[0]);
            }}
            onPointerLeave={(e) => {
              e.target.src = images[0];
            }}
            class="card-img-top"
            src={images[0]}
            alt=""
          />
        </a>
        <div class="card-body">
          <h4 class="card-title">
            <a href={`product/${id}`}>{name}</a>
          </h4>
          <h4>
            <s style={{ color: "red", fontSize: "15px" }}>{oldPrize}zł</s>
            {prize}zł
          </h4>
          <div class="product-rating mb-2 vat">{prizeEach} zł/maska</div>

          <h6 class="vat">zawiera 23% VAT, bez kosztów dostawy</h6>
        </div>
        <div class="card-footer">
          <a href={`product/${id}`}>
            <button type="button" class="btn btn-danger">
              Sprawdź
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
