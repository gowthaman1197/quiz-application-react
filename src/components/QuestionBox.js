import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return(
        <div className="questionBox">
            <h2 className="question">{question}</h2>
           {answer.map((text, index) => (
               <button key={index} className="btn btn-default c-btn" onClick={()=>{
                   setAnswer([text]);
                   selected(text);
               }}>{text}</button>
           ))}
        </div>
    )
}

export default QuestionBox;