import React from 'react'

const PriceCar = () => {
  return (
  <>
           
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Basic Plan</h4>
              </div>

              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $50 <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-3">
                  <li>Exclusive Stocks</li>
                  <li>5GB Cloud Database</li>
                  <li>Free Premium Emails</li>
                  <li>Free Premium Support</li>
                  <li>Cloud AI Analytics</li>
                </ul>
                <button className="w-100 btn btn-lg btn-outline-danger">Sign Up</button>
              </div>
            </div>
          </div>
     
  </>
  )
}

export default PriceCar