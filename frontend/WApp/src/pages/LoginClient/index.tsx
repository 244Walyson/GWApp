import svgLogo from '@/assets/logo.svg'
import githubLogo from '@/assets/github_logo.svg'
import googleLogo from '@/assets/google_logo.svg'
import loginDetails from '@/assets/login_detail.svg'
import InversePrimaryButton from '@/components/InversePrimaryButton'
import PrimaryButton from '@/components/PrimaryButton'
import InputField from '@/components/InputField'
import { loginRequest, saveAccessToken } from '../../services/authService'
import { useState } from 'react'

const LoginClient = () => {

  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
      validation: function (value: string) {
        return value.length > 5
      },
      message: "a senha deve conter no minimo 6 caracters"
    }
  })

  const login = async () => {
    const loginData = {
      username: "maria@gmail.com",
      password: "123456"
    }
    loginRequest(loginData).then((res) => {
      console.log(res.data)
      saveAccessToken(res.data.access_token)
    }).catch((err) => {
      console.log(err)
    })
  }

  login()
 
  return (
    <div className="flex items-center justify-center w-full font-quicksand">
      
      <div className='flex text-color w-10/12  h-5/6 pb-24'>
        <div className=" w-full flex flex-col items-center">
        <div className="flex my-7 text-white items-center text-6xl font-bold gap-3">
          <img src={svgLogo} alt="" />
          <h2>Kanban</h2>
        </div>
        
        <div className="border p-5 rounded-xl">
        <div className='w-full flex justify-center mb-5'>
          <p>Login into your account</p>
        </div>

          <div className='mt-5 w-80 '>Username</div>
          <InputField placeholder='example@gmail.com'/>
          <div className='mt-3'>Password</div>
          <InputField type="password" placeholder='Enter your password'/>
          <div className="w-full justify-end flex mt-1.5 mb-7">
            <a className='text-base underline'>Forgot password?</a>
          </div>
          <PrimaryButton text='Login' onClick={() => {}} />
          <div className="w-full flex justify-around items-center">
          <div className="h-px bg-border w-full mr-1.5"></div>
          <p className='text-lg'>or</p>
          <div className="h-px bg-border w-full ml-1.5"></div>
          </div>
          <InversePrimaryButton text='Sign up' onClick={() => {}} />
          <div className="flex w-full justify-center items-center gap-5 p-7">
            <div className="rounded-md bg-primary h-10 w-10 flex items-center justify-center"><img src={googleLogo} alt="" /></div>
            <div className="rounded-md bg-primary h-10 w-10 flex items-center justify-center"><img src={githubLogo} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-screen">
        <img src={loginDetails} alt="" />
      </div>


    </div>
  )
}

export default LoginClient