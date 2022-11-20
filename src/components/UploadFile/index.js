import React from 'react'
const Uploade = () => {
    return (
        <>
            <div id="main-wrapper">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>


                        </div>
                        <div className='col-12 button-position'>
                            <div className='text-center dropdown upload-menu-btn'>
                                <span data-bs-toggle="dropdown" className='bg-primary dropdown-toggle theme-btn position-relative'>
                                    <i class="fas fa-user user"></i> Brouser Files
                                </span >
                                <ul className='dropdown-menu '>
                                    <li className='dropdown-item'>
                                        <div className='row pb-1'>
                                            <div className='col-8 '>
                                                <span>Bildebibliotek</span>
                                            </div>
                                            <div className='col-4  text-end'>
                                                <i class="fas fa-user"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown-item'>
                                        <div className='row pb-1'>
                                            <div className='col-8 '>
                                                <span>Ta bilde eller video</span>
                                            </div>
                                            <div className='col-4  text-end'>
                                                <i class="fas fa-user"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown-item'>
                                        <div className='row pb-1'>
                                            <div className='col-8 '>
                                                <span>Velg filer</span>
                                            </div>
                                            <div className='col-4  text-end'>
                                                <i class="fas fa-user"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Uploade;