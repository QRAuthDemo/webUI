import { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import axios from 'axios';
import userIcon from '../userIcon.png'

import { toast } from "react-toastify";
export default function ExampleV2({setIsLoggedIn}) {
    const [user,setUsername] = useState();
    const [pass,setPassword] = useState();
    const loginUser = async()=>{
            let resp = await axios.post("https://backend.qrauthdemo.amzi.top/login",{mobileNumber:user,password:pass}).catch(err=>console.log(err));
            console.log('resp',resp);
            if(resp ){
                toast.success('Login successful');
                sessionStorage.setItem('user',resp.data.jwt);
                sessionStorage.setItem('qr',resp.data.jwtqr);
                sessionStorage.setItem('authenticator',resp.data.authenticatorqr);
                setIsLoggedIn(true)

            }else{
                toast.error('Invalid credentials')
            }
    }
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 h-screen m-auto">
      <div className="container h-full p-10 m-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={userIcon}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        QR Login Test
                      </h4>
                    </div>

                    <form>
                      <h1 className="mb-4 m-auto text-[22px] text-center">Please login to your account</h1>
                      {/* <!--Username input--> */}
                      <p>Username</p>
                      <input
                        type="text"
                        label="" value={user} onChange={(e)=>setUsername(e.target.value)}
                        className="mb-4 !text-black txt-input"
                      ></input>

                      {/* <!--Password input--> */}
                      <p>Password</p>
                      <input
                        type="password"
                        label="" value={pass} onChange={(e)=>setPassword(e.target.value)}
                        className="mb-4 !text-black txt-input"
                      ></input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                          <button  onClick={loginUser}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in 
                          </button>

                        {/* <!--Forgot password link--> */}                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Dont have an account?</p>
                        {/* <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                        </TERipple> */}
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      This is more than just a test website.
                    </h4>
                    <p className="text-sm">
                     We have a sample page for loggin in the user and creating a QR code for authentication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}