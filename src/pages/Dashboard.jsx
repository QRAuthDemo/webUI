import { useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import axios from 'axios';
import userIcon from '../userIcon.png'
import { toast } from "react-toastify";
export default function ExampleV2({setIsLoggedIn}) {
    const [user,setUsername] = useState();
    const [pass,setPassword] = useState();
    const [qrCode,setQrCode] = useState();
    const [authenticator,setAuthenticator] = useState();  
    useEffect(()=>{
        if(sessionStorage.getItem('qr')){
            setQrCode(sessionStorage.getItem('qr'));
        }
        if(sessionStorage.getItem('authenticator')){
            setAuthenticator(sessionStorage.getItem('authenticator'));
        } 
    },[]);

    const registerUser = async()=>{
            let resp = await axios.post("http://localhost:3000/createUser",{mobileNumber:user,password:pass},{headers:{Authorization:"bearer "+ sessionStorage.getItem('user')}}).catch(err=>console.log(err));
            console.log('resp',resp);
            if(resp ){
                toast.success('User Created');
            
            }else{
                toast.error('User not created')
            }
    }
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 h-screen">
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

                    <form className="p-10 ">
                      <h1 className="mb-4 m-auto text-[24px] text-center">Create User</h1>

                      {/* <!--Username input--> */}
                      <p>Username</p>
                      <input
                        type="text" 
                        label="Username" value={user} onChange={(e)=>setUsername(e.target.value)}
                        className="mb-4 !text-black txt-input"
                      ></input>

                      {/* <!--Password input--> */}
                      <p>Password</p>
                      <input
                        type="password"
                        label="Password" value={pass} onChange={(e)=>setPassword(e.target.value)}
                        className="mb-4 !text-black txt-input"
                      ></input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center p-2">
                          <button  onClick={registerUser}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Register
                          </button>

                 
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none p-2"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="w-1/2 text-center">
<h1 className="text-white text-[22px] p-2">Authenticator QR Code</h1>
                  <img className="m-auto" src={`data:image/png;base64, ${authenticator}`} alt="Authenticator" />

                  </div>
                  <div className="w-1/2 text-center">
                    <h1  className="text-white p-2 !text-[22px]">Login with QR Code</h1>
                  <img className="m-auto" src={`data:image/png;base64, ${qrCode}`} alt="Authenticator" />

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