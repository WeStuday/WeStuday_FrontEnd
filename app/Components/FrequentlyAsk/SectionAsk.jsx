import dynamic  from "next/dynamic"
const  Accordion = dynamic(()=>import('./Accordion'))

const SectionAsk = ({ data , Visible}) => {
    return (
        <div className=" lg:w-[100%]  pt-8">
            <div className="max-xl:w-[90vw] xl:w-[60vw] pt-2 pb-4  text-center mx-auto">

                {data?.slice(0,Visible).map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))} 
                <br />
            </div >
        </div >
    )
}

export default SectionAsk