import { shuffleArray } from "./Random";



export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;

}

export type QuestionsState = Question & { answers:string[]}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}


export const fetchQuizQuestions = async (amount:number, difficulty:Difficulty) => {
    const endpoint = 'https://opentdb.com/api.php?amount=10&type=multiple';

    const data = await (await fetch(endpoint)).json();
    return data.results.map((question:Question) =>(
        {
        
            ...question,
            
            answer: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        


    }))
};  

    
