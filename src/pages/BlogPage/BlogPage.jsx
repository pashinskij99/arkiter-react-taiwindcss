import { ReactComponent as ArrowLeft } from '../../Assets/icons/arrow-left.svg'
import { TypographyBlogH1, TypographyBlogH2, TypographyBlogP } from '../../Components/UI/Typography'
import codeImage from '../../Assets/blog/blogCodeImage.jpg'
import codeImage2 from '../../Assets/blog/blogCodeImage2.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Landing Page/NavBar'

export const BlogPage = () => {
  return (
    <>

      <Navbar />

      <main className='text-[#fff] bg-[#0A265F] pt-[10rem] pb-[13rem]'>
        <div className="container">
          <Link to='/' className="flex items-center font-medium text-[3rem] leading-[1] mb-[5.8rem]">
            <div className='flex items-center justify-center h-[3.7rem] bg-white rounded-full w-[3.7rem] mr-[1.8rem] -tracking-[-2%]'>
              <ArrowLeft className='w-[1.8rem] h-[1.575rem]' />
            </div>
            Take me back
          </Link>

          <section>
            <TypographyBlogH1 className='mb-[4.281rem]'>How Arkiter will change the <br /> game?</TypographyBlogH1>

            <ul className='flex items-center gap-[3.012rem] font-semibold text-[2.177rem] leading-[2.265rem] -tracking-[-1%] mb-[5.121rem]'>
              <li className='flex items-center rounded-[.753061rem] px-[3.615rem] h-[5.422rem] bg-[#313131]' style={{
                border: '.150612rem solid #FFFFFF4F'
              }}>Technology</li>
              <li className='flex items-center rounded-[.753061rem] px-[3.615rem] h-[5.422rem] bg-[#49CCF940]' style={{
                border: '.150612rem solid #49CCF982'
              }}>Interviews</li>
              <li className='flex items-center rounded-[.753061rem] px-[3.615rem] h-[5.422rem] bg-[#0A3D62]' style={{
                border: '.150612rem solid #0F5282'
              }}>May, 2023</li>
            </ul>

            <TypographyBlogP className='text-[3.615rem] leading-[3.76rem] mb-[10.976rem]'>
              At Arkiter, we uncovered a variety of interesting challenges and oft- <br /> overlooked choices when building our product....
            </TypographyBlogP>

            <div className='max-h-[45.3rem] overflow-hidden rounded-[3.08768rem] mb-[10.5rem]'>
              <img src={codeImage} className='object-contain w-full h-full' alt="blog image" />
            </div>

            <TypographyBlogP className='mb-[12.0rem]'>
              The process of hiring developers can be a challenging and time-consuming endeavor. Traditional methods often involve multiple rounds of interviews, scrutinizing resumes, and conducting technical assessments. However, with the advent of artificial intelligence (AI), a new paradigm in developer recruitment is emerging. AI-powered automated testing is revolutionizing the way companies evaluate and hire developers, streamlining the process, and enhancing the accuracy and efficiency of candidate assessments.
            </TypographyBlogP>

            <TypographyBlogH2 className='mb-[5.2rem]'>Eliminating Bias in the Hiring Process</TypographyBlogH2>

            <TypographyBlogP className='mb-[13.1rem]'>
              AI-driven automated testing has the potential to eliminate biases commonly found in traditional hiring practices. Human biases, such as age, gender, or educational background, can unintentionally influence decision-making during the hiring process. Automated testing evaluates candidates based solely on their skills, performance, and demonstrated knowledge, minimizing bias and promoting fairness
            </TypographyBlogP>

            <div className='md:mx-[10.9rem] mb-[13.1rem] max-h-[57.391rem] overflow-hidden rounded-[2.44867rem]'>
              <img src={codeImage2} className='object-contain relative top-[-1px] left-[-1px] w-full h-full' alt="code 2" />
            </div>

            <TypographyBlogH2 className='mb-[5.2rem]'>Efficient Screening of Candidates</TypographyBlogH2>

            <TypographyBlogP className='mb-[13.1rem]'>
              Identifying qualified candidates from a large pool of applicants can be a daunting task. AI-powered automated testing allows recruiters to screen a vast number of candidates efficiently. Using predetermined criteria and algorithms, AI can analyze candidate responses, code quality, problem-solving skills, and other relevant parameters to provide an initial evaluation. This automated screening helps recruiters to shortlist the most promising candidates, saving time and effort.
            </TypographyBlogP>

            <TypographyBlogH2 className='mb-[5.2rem]'> Objective Evaluation of Technical Skills</TypographyBlogH2>

            <TypographyBlogP>
              Assessing technical skills accurately can be challenging, particularly in domains like software development. AI-driven automated testing provides an objective evaluation of a candidate's technical proficiency. Advanced algorithms can analyze code quality, accuracy, efficiency, and adherence to best practices, providing a quantitative measure of a candidate's abilities. This objective evaluation ensures that hiring decisions are based on merit, leading to more successful outcomes.
            </TypographyBlogP>

          </section>
        </div>
      </main>
    </>

  )
}
