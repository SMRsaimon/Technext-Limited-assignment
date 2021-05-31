import React from 'react';

const UserDetails = ({profile, adress}) => {

    const { name,username, id, email,phone ,website, company } = profile;
    return (
        <>
        <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">ID</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{id}</div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{phone}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{email}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Website</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                         <h6>{website}</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Company</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                         <h6>{company?.name}</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{adress}</div>
                    </div>
                  </div>
                </div>
              

            
        </>
    );
};

export default UserDetails;