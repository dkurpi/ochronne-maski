import React from "react";
function Page() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">Maseczki ochronne</h1>
            <div class="list-group">
              <a href="#" class="list-group-item">
                Przciw wirusowi
              </a>
              <a href="#" class="list-group-item">
                Przciw smogowi
              </a>
              <a href="#" class="list-group-item">
                Nowości
              </a>
            </div>
          </div>
          {/* <!-- /.col-lg-3 --> */}

          <div class="col-lg-9">
            <div
              id="carouselExampleIndicators"
              class="carousel slide my-4"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img
                    class="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Finteractive-examples.mdn.mozilla.net%2Fmedia%2Fexamples%2Fgrapefruit-slice-332-332.jpg&imgrefurl=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fimg&tbnid=A4G7eW2zetaunM&vet=12ahUKEwj87euD9KHoAhUQtioKHX6sCy0QMygJegUIARDsAQ..i&docid=l3NoP295SYrYvM&w=332&h=332&q=image&safe=active&ved=2ahUKEwj87euD9KHoAhUQtioKHX6sCy0QMygJegUIARDsAQ"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="http://placehold.it/700x400"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet numquam aspernatur!
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="http://placehold.it/700x400"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item Two</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet numquam aspernatur! Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="http://placehold.it/700x400"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item Three</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet numquam aspernatur!
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="http://placehold.it/700x400"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item Four</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet numquam aspernatur!
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="http://placehold.it/700x400"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item Five</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet numquam aspernatur! Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="http://placehold.it/700x400"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item Six</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet numquam aspernatur!
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.col-lg-9 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </>
  );
}

export default Page;
