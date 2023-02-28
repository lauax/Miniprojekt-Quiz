export const shuffleArray = (array:any[]) =>
[...array].sort(() => Math.random()-0.5);

export const shuffleQuestion = (array: any) => [...array].sort(() => Math.random() * 20);