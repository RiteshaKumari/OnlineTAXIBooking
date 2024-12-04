import React from 'react'

function PageNotFound() {
  return (
    <>
    {/* 404 Section */}
    <section className="">
      <div className="auto-container pb-10">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-page__inner">
              <div className="error-page__title-box">
                <img src="images/resource/404.jpg" alt="img" />
                <h3 className="error-page__sub-title">Page not found!</h3>
              </div>
              <p className="error-page__text">
                Sorry we can't find that page! The page you are looking <br />
                for was never existed.
              </p>
            
              <a href="index-2.html" className="theme-btn btn-style-one shop-now">
                <span className="btn-title">Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End 404 Section */}
  </>
  
  )
}

export default PageNotFound
