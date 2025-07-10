import React from 'react'

const DeleteProduct = () => {
  return (
    <div>

<div className="container mb-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label className="form-label">Product Name</label>
                            </div>
                            <div className="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                                
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">

                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default DeleteProduct