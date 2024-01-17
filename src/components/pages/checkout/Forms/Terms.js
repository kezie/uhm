import React from 'react'
import policy from '../../../files/Policy_Exclusions.pdf'

const Terms = () => {
  return (
    <>
        <div className='mt-2'>
            <label><input type="checkbox" name='confirm' required/> I confirm that I have read the exclusions to my policy stated <a href="#" className="text-success" data-bs-toggle="modal" data-bs-target="#policyModal">here</a>  </label>
        </div>
        <div className="modal fade" id="policyModal" tabIndex="-1" aria-labelledby="policyModalLabel" aria-hidden="true">
            <div className=" modal-dialog modal-lg pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="user-wrapper text-center">
                            <div className="user-content modal-content p-4">
                                <iframe src={policy} height={400}></iframe>
                                <span type="button" className="ms-4 text-danger" data-bs-dismiss="modal" aria-label="Close">Close</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Terms 