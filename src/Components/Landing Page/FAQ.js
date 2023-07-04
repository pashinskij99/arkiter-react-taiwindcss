import { useEffect, useRef, useState } from "react";
import { ReactComponent as PlusIcon } from "../../Assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../Assets/icons/minus.svg";
import clsx from "clsx";

const FaqItem = ({ question, answer, activeFaq, setActiveFaq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentEl = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setActiveFaq(index);
  };

  useEffect(() => {
    if (activeFaq !== index) setIsOpen(false);
  }, [activeFaq]);

  return (
    <div
      className={clsx("mb-[2.8rem] border-b-[#0A265F] border-b-2 w-full", {
        // ['border-b-[#0A265F] border-b-2']: !isOpen,
      })}
    >
      <button
        className="flex justify-between items-center w-full pb-[3.2rem] text-left focus:outline-none "
        onClick={toggleAccordion}
      >
        <span className="font-[600] text-[13.56px] md:text-[3.972rem] text-[#0A265F] flex-1">
          {question}
        </span>
        <span
          className={clsx(
            `rounded-full mr-[3rem] border border-[#0A265F] md:mr-[6rem] flex items-center justify-center w-[5.509rem] h-[5.509rem] ${
              isOpen ? "bg-[#0A265F]" : "bg-white"
            } ${isOpen ? "text-white/[1]" : "text-[#0A265F]"}`,
            {
              "border border-[#0A265F]": !isOpen,
            }
          )}
        >
          {isOpen ? (
            <MinusIcon className="w-[1.789rem] h-[1.789rem]" />
          ) : (
            <PlusIcon className="w-[1.789rem] h-[1.789rem]" />
          )}
        </span>
      </button>

      <div
        ref={contentEl}
        style={
          isOpen
            ? { height: contentEl.current && contentEl.current.scrollHeight }
            : { height: "0px" }
        }
        className="duration-300 transition-all overflow-hidden"
      >
        <p className="text-[#0A265F] text-[11.3px] md:text-[3.31rem] leading-[4rem] mb-[4rem]">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></div>
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqData = [
    {
      question: "Who are we?",
      answer:
        "Arkiter is an innovative recruitment technology service that specializes in streamlining your hiring process for top tech talent. We offer a comprehensive suite of tools that help hiring managers assess candidates' technical skills, problem-solving abilities, and fit for a role.",
    },
    {
      question: "How does it work?",
      answer:
        "We have simplified your assessment and hiring process into three simple steps: <br/><br/>" +
        "<b>Create a role:</b> Use our suggestion engine to create a tailored screening process that suits your specific role needs. Once the role is set up, invite candidates to participate in the interview process.<br/><br/>" +
        "<b>Candidates complete the interviews:</b> Candidates will complete the interviews at their own convenience. Arkiter provides a cheat-detection engine and advanced tracking mechanisms, ensuring the integrity of the interviews and verifying that the candidates themselves complete the tasks.<br/><br/>" +
        "<b>Make data-driven hiring decisions with confidence:</b> Upon completion, you will receive a detailed analysis and benchmark of the candidates' performances. You can use our advanced Insights screen to make informed decisions when hiring the top candidates for your organization.<br/><br/>",
    },
    {
      question: "What types of roles can you hire using Arkiter?",
      answer:
        "Currently, you can use Arkiter to interview candidates for Front End, Back End, Full-Stack Engineers, Site Reliability Engineers, and DevOps roles. We are actively working on adding more technical roles in the near future, such as Data Scientists, Data Analysts, and AI-Powered Engineers. We are also constantly adding new roles to our platform, so if you are looking to hire for a specific role that is not currently supported, please contact us. ",
    },
    {
      question:
        "Can you customize the Arkiter interviewing process with your own questions?",
      answer:
        "Certainly. We can assist you in creating and testing custom questions that meet your specific requirements. Once created, these questions will be associated with your account and not shared with other users, ensuring the privacy and security of your interview process.",
    },
    {
      question: "Can you conduct fit interviews with Arkiter?",
      answer:
        "Arkiter is a technical interview platform that helps you assess candidates' technical skills and problem-solving abilities. We do not currently offer fit interviews, as we believe that these are best conducted by experienced team members within the organization who may have a deeper understanding of the company's culture and values.",
    },
    {
      question: "Who can use Arkiter to assess top tech talent?",
      answer:
        "Arkiter is a user-friendly platform that can be used by a wide range of hiring professionals within an organization. Non-technical HR professionals can use the platform to get a high-level overview of candidates' performances, while technical hiring managers can use the platform’s playback feature to go deeper analyzing candidates' solutions. The platform also offers a switch option between normalized values and technical details such as complexity metrics, making it the perfect tool for a variety of hiring professionals.",
    },
    // Add more FAQ items here
  ];

  return (
    <div id="faq" className="pt-[4.2rem] pb-[8.3rem] bg-[#FCFCFC]">
      <div className="container">
        <h2 className="text-[7.404rem] text-center font-[700] text-[#0A265F]">
          FAQs
        </h2>
        <div className="flex flex-col justify-center items-center mt-[3.2rem]">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              setActiveFaq={setActiveFaq}
              activeFaq={activeFaq}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
