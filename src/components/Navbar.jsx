import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>


      <div className="container">
        <div className="row">
          <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <Link class="navbar-brand" to="/#">Product</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <Link class="nav-link active" aria-current="page" to="/#">Add Product</Link>
                    <Link class="nav-link" to="/del">Delete Product</Link>
                    <Link class="nav-link" to="/Sea">Search</Link>
                    <Link class="nav-link" to="/V">View All Product</Link>
                  </div>
                </div>
              </div>
            </nav>


          </div>
        </div>
      </div>






    </div>
  )
}

export default Navbar