import './Register.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'



const Register = () => {

  
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Registeration Form</div>
        <div className="underline"></div>
      </div>
      <form>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='First-Name' id="first-name" autoComplete="off" name="first-name" />
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Last Name' id="first-name" autoComplete="off" name="first-name" />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' id="email" autoComplete="off" name="email" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id="password" autoComplete="off" name="password" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Conf-pasw' id="password" autoComplete="off" name="password" />
          </div>
        </div>
        <div className="Submit"> Register </div>

      </form>



      {/* Add more form fields here */}

    </div>
  )
}

export default Register

// username , email password, confirm password,  First Name and Last Name, Gender, Profile Picture, captha, Terms and Conditions .