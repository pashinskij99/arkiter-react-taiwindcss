import { TypographyH2 } from "../../Components/UI/Typography"
import RocketIcon from '../../Assets/contact/Rocket.png'
import BrainsIcon from '../../Assets/contact/Brains.png'
import StackOfCoinsIcon from '../../Assets/contact/StackOfCoins.png'

export const ContactPage = () => {
  return (
    <main className="relative overflow-hidden pt-[99px] pb-[81px]" style={{backgroundImage: 'url(/contactBack.png)', backgroundSize: '100%'}}>

      <div className="container">
        <section className="flex items-center">

          <div>
            <TypographyH2 className='text-[6.6rem] font-bold'>Get Started With <br /> Arkiter</TypographyH2>
            <ul>
              <li className="flex items-center">
                <img src={BrainsIcon} alt="" />
                Predict real-world performance <br /> with our AI tests
              </li>
              <li className="flex items-center">
                <img src={RocketIcon} alt="" />
                Unlock powerful insights and <br /> analysis
              </li>
              <li className="flex items-center">
                <img src={StackOfCoinsIcon} alt="" />
                Discover your potential savings
              </li>
            </ul>
          </div>

          <form className="">
            <h2>Sign Up</h2>
            <input type="text" />
            <input type="text" />
            <input type="email" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <p>
              For information about how Arkiter handles personal data, see our
              <a href="#">Privacy Policy</a>
            </p>
            <button>Contact us</button>
          </form>

        </section>
      </div>
    </main>
  )
}
