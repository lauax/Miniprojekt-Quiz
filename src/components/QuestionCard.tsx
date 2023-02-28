import React from 'react';

type Props= {
    question:string;
    answers: string[];
    callback:any;
    userAnswer:any;
    questionNr: number;
    totalQuestions:number;

}
//FC är inbyggt för FunctionalComponent 
const QuestionCard:React.FC<Props> = ({question, answers, callback, userAnswer,questionNr,totalQuestions}) => ( 

<div>
    <p className='number'>
        Question:{questionNr}/ {totalQuestions} 
    </p>  
    <p dangerouslySetInnerHTML={{__html:question}}/>

    <div>
        {answers.map(answer => (
            <div key={answer}>
                <button disabled = {userAnswer} onClick = {callback}>
                    <span dangerouslySetInnerHTML={{__html:answer}}></span>
                </button>
            </div>
               
        ))}
    </div>
    </div>

);

export default QuestionCard