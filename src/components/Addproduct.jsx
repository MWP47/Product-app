import React from 'react'
import Navbar from './Navbar'

const Addproduct = () => {
    return (
        <div>
<Navbar/>
            <div className="container mb-5">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Name</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="" id="" className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Warranty</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Expiry Date</label>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Manufacturing Date</label>
                                <input type="date" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Photo</label>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button">UPLOAD</button>

                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Customer Care No</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success">SUBMIT</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addproduct