import './index.css'
import svgLogo from '../../assets/logo.svg'
import githubLogo from '../../assets/github_logo.svg'
import googleLogo from '../../assets/google_logo.svg'
import loginDetails from '../../assets/login_detail.svg'
import InversePrimaryButton from '../InversePrimaryButton'
import PrimaryButton from '../PrimaryButton'
import InputField from '../InputField'

const LoginClient = () => {
  return (
    <div className="page-login">
      
      <div className='modal'>
        <div className="login-fields">
        <div className="logo">
          <img src={svgLogo} alt="" />
          <h2>Kanban</h2>
        </div>
        
        <div>
          <p>Login into your account</p>
        </div>

        <div className="input-fields">
          <span id='login-span'>Username</span>
          <InputField placeholder='example@gmail.com'/>
          <span id='login-span'>Password</span>
          <InputField type="password" placeholder='Enter your password'/>
          <p id='forgot-password'>Forgot password?</p>
          <PrimaryButton text='Login' onClick={() => {}} />
          <div className="or-lines">
          <div className="line-one"></div>
          <p>or</p>
          <div className="line-two"></div>
          </div>
          <InversePrimaryButton text='Sign up' onClick={() => {}} />
          <div className="auth-google-github">
            <div className="google-login"><img src={googleLogo} alt="" /></div>
            <div className="github-login"><img src={githubLogo} alt="" /></div>
          </div>
        </div>
      </div>
    </div>

    <div className="details-login-page">
        <img src={loginDetails} alt="" />
      </div>


    </div>
  )
}

export default LoginClient