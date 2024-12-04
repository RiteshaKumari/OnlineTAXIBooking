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
              </div>
              <p className="error-page__text">
                Sorry we can't find that page! The page you are looking <br />
                for was never existed.
              </p> 
            </div>
          </div>
        </div>
      </div>
      <style>
        {`.error-page__title-box{
            display: flex;
    justify-content: center;}
        `}
      </style>
    </section>
    {/*End 404 Section */}
  </>
  )
}

export default PageNotFound
