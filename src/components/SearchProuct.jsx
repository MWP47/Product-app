import React from 'react'
import Navbar from './Navbar'

const SearchProuct = () => {
    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label className="form-label">Product Name</label>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">

                                <button className="btn btn-success">Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchProuct