import React, { useState } from 'react'

const TagUploadFile = () => {
    const [show, upshow] = useState(false);
    const [seteng, upseteng] = useState(false);

    return (
        <>
            <div className='main-wrapper'>
                {/* 
                <div className="container">
                    <div className='row'>
                        <div className='col-12 ps-0'>
                            <h3 className='mt-4 ms-1'>Tag 12 Files</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>

                            <div className='row mt-4 '>

                                <div className='col-10 px-0'>
                                    <p> Template</p>
                                </div>
                                <div className='col-2 px-0 text-end '>
                                    {show ?
                                        <i onClick={() => upshow(!show)} class="fa fa-angle-up  fa-lg" aria-hidden="true"></i>

                                        :
                                        <i onClick={() => upshow(!show)} class="fa fa-angle-down  fa-lg" aria-hidden="true"></i>
                                    }
                                </div>
                                {show ?

                                    <div className='col-12'>
                                        <form class="row">
                                            <div class="col-9 ps-0 mt-2">
                                                <label for="template" class="form-label small">Select Template</label>
                                                <select class="form-select" id="template">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-3 mt-2 px-0 d-flex justify-content-center align-items-end py-0">
                                                <button type='button' className="form-control border-0 outline-0 bg-secondary small text-white">
                                                    Update
                                                </button>
                                            </div>
                                            <div class="col-9 ps-0 mt-4">
                                                <label for="template" class="form-label small">New Template</label>
                                                <select class="form-select" id="template">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-3 mt-2 px-0 d-flex justify-content-center align-items-end py-0">
                                                <button type='button' className="form-control border-0 outline-0 bg-secondary small text-white">
                                                    Create
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                    : null
                                }
                            </div>


                        </div>

                    </div>
                </div> */}
                <section className='container-fluid px-0'>
                    <div className='img-wrapper'>
                        <div className='row'>
                            <div className='col-12'>
                                <h3 className='mt-4 ms-3'>Tag 12 Files</h3>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-12'>
                                <ul className='nav flex-column'>
                                    <li className='d-flex flex-row'>
                                        <div className='col-10 d-flex  justify-content-start align-items-center p-3'>
                                            <p className='mb-0'> Template</p>
                                        </div>
                                        <div className='col-2 d-flex justify-content-end align-items-center '>
                                            {show ?
                                                <i onClick={() => upshow(!show)} class="fa fa-angle-up me-3 fa-lg" aria-hidden="true"></i>

                                                :
                                                <i onClick={() => upshow(!show)} class="fa fa-angle-down me-3  fa-lg" aria-hidden="true"></i>
                                            }
                                        </div>
                                    </li>
                                </ul>
                                {show ?

                                    <div className='col-12 pb-4'>
                                        <form class="row">
                                            <div class="col-8 mt-2">
                                                <label for="template" class="form-label small ms-3">Select Template</label>
                                                <select class="form-select ms-3" id="template">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-4 mt-2 d-flex justify-content-center align-items-end ">
                                                <button type='button' className="form-control border-0 outline-0 bg-secondary small me-3 text-white">
                                                    Update
                                                </button>
                                            </div>
                                            <div class="col-8 mt-4">
                                                <label for="template" class="form-label small ms-3">New Template</label>
                                                <select class="form-select ms-3" id="template">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-4 mt-2 d-flex justify-content-center align-items-end ">
                                                <button type='button' className="form-control border-0 outline-0 bg-secondary small me-3 text-white">
                                                    Create
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                    : null
                                }


                            </div>
                            <div className='col-12'>
                                <ul className='nav flex-column'>
                                    <li className='d-flex flex-row'>
                                        <div className='col-10 d-flex flex-row justify-content-start align-items-center p-3'>
                                            <span className=''>img</span> <p className='mb-0 ms-3'> English</p>
                                        </div>
                                        <div className='col-2 d-flex justify-content-end align-items-center '>
                                            {seteng ?
                                                <i onClick={() => upseteng(!seteng)} class="fa fa-angle-up me-3 fa-lg" aria-hidden="true"></i>

                                                :
                                                <i onClick={() => upseteng(!seteng)} class="fa fa-angle-down me-3  fa-lg" aria-hidden="true"></i>
                                            }
                                        </div>
                                    </li>
                                </ul>
                                {seteng ?

                                    <div className='col-12 pb-4'>
                                        <form class="row">
                                            <div class="col-8 mt-2">
                                                <label for="template" class="form-label small ms-3">Select Template</label>
                                                <select class="form-select ms-3" id="template">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-4 mt-2 d-flex justify-content-center align-items-end ">
                                                <button type='button' className="form-control border-0 outline-0 bg-secondary small me-3 text-white">
                                                    Update
                                                </button>
                                            </div>
                                            <div class="col-8 mt-4">
                                                <label for="template" class="form-label small ms-3">New Template</label>
                                                <select class="form-select ms-3" id="template">
                                                    <option selected></option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-4 mt-2 d-flex justify-content-center align-items-end ">
                                                <button type='button' className="form-control border-0 outline-0 bg-secondary small me-3 text-white">
                                                    Create
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                    : null
                                }


                            </div>


                        </div>
                    </div>
                </section>


                <div className='col-12 position-fixed ms-0 pe-0 bg-white shadow-lg py-4 bottom-0 left-0 d-flex align-items-center justify-content-center'>
                    <span className='bg-primary  theme-btn position-relative'>
                        <i class="fa fa-cloud-arrow-up user fa-lg"></i> Upload 12 files
                    </span >
                </div>

            </div>
        </>
    )
}

export default TagUploadFile;