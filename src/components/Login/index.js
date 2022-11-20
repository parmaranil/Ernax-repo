import React from 'react'

const Login = () => {
    return (
        <>
            <div id="main-wrapper">
                <div className='container align-middle'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center' >
                            <div class="my-form my-auto">
                                <div class="form-title">
                                    <h1>Member Login</h1>
                                </div>
                                <form action="">
                                    <div class="single-input">
                                        <span><i class="fas fa-user"></i></span>
                                        <input type="text" placeholder="User Name" />
                                    </div>
                                    <div class="single-input">
                                        <span><i class="fas fa-unlock"></i></span>
                                        <input type="password" placeholder="Password" />
                                    </div>

                                    <div class="single-input submit-btn">
                                        <input type="submit" value="Login" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;