import { subjects, subjectPlurals, issues, events, objects, places, miscQuestions} from "./carddata";
import { useState } from "react";

export function generateQuestion() {
    const RandomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const RandomSubject2 = subjects[Math.floor(Math.random() * subjects.length)];
    const RandomSubject3 = subjects[Math.floor(Math.random() * subjects.length)];
    const RandomEvent = events[Math.floor(Math.random() * events.length)];
    const RandomObject = objects[Math.floor(Math.random() * objects.length)];
    const RandomIssue = issues[Math.floor(Math.random() * issues.length)];
    const RandomIssue2 = issues[Math.floor(Math.random() * issues.length)];
    const RandomPlace1 = places[Math.floor(Math.random() * places.length)];
    const RandomPlace2 = places[Math.floor(Math.random() * places.length)];
    const RandomMiscQuestion = miscQuestions[Math.floor(Math.random() * miscQuestions.length)];
    const RandomSubjectPlural = subjectPlurals[Math.floor(Math.random() * subjectPlurals.length)];
    const patterns = [
        () => `Is ${RandomSubject} good or bad? 

        Player One: Good, Player Two: Bad`, 
        () => `Is ${RandomSubject} to blame for ${RandomIssue}? 
       
        Player One: Yes, Player Two: No`,
        () => `Fuck, Marry, Kill: ${RandomSubject}, ${RandomSubject2}, ${RandomSubject3}`,
        () => `If you could solve ${RandomIssue} OR ${RandomIssue2}, which would you choose? 
       
        Player One: ${RandomIssue}, Player Two: ${RandomIssue2}`,
        () => `Was ${RandomEvent} good or bad? 
       
        Player One: Good, Player Two: Bad`, 
        () => `Are ${RandomSubjectPlural} good or bad? 
       
        Player One: Good, Player Two: Bad`, 
        () => `Is ${RandomSubject} real? 
       
        Player One: Yes, Player Two: No`,
        () => `Who would win in a fight: ${RandomSubject} or ${RandomSubject2}? 
       
        Player One: ${RandomSubject}, Player Two: ${RandomSubject2}`,
        () => `Would you rather go on a date with ${RandomSubject} or ${RandomSubject2}? 
       
        Player One: ${RandomSubject}, Player Two: ${RandomSubject2}`,
        () => `If ${RandomSubject} was assassinated, would that be good or bad for the country? 

        Player One: Good, Player Two: Bad`,
        () => `Is ${RandomSubject} good for ${RandomIssue}? 
       
        Player One: Yes, Player Two: No`,
        () => `Would it be better if ${RandomObject} didn't exist? 
        
        Player One: Yes, Player Two: No`,
        () => `Would you rather get food poisoning at ${RandomPlace1} or ${RandomPlace2}? 
       
        Player One: ${RandomPlace1}, Player Two: ${RandomPlace2}`,
        () => `${RandomMiscQuestion}`,
        () => `If ${RandomSubject} and ${RandomSubject2} started dating, would they eventually break up? 
        
        Player One: Yes, Player Two: No`,
        () => `If you killed someone in broad daylight, would you be more likely to get away with it in ${RandomPlace1} or ${RandomPlace2}? 
       
        Player One: ${RandomPlace1}, Player Two: ${RandomPlace2}`,
        () => `If ${RandomSubject} killed ${RandomSubject2}, would you condone their actions? 
        
        Player One: Yes, Player Two: No`,
];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    console.log(pattern());
    return pattern();
}

    export default function Cardpatterns({ content }: { content: string }) {
        return (
            <p className="pb-4 whitespace-pre-line">{content}</p>
    )
}



// "Is Kim Kardashian good for the environment?"
// "Was 9/11 good or bad?"
// 
// a JSON situation that gives guidance on how to use the term ("was or "is," etc.") 
// assigns sides too. 
// maybe if there's a question the group finds truly unacceptable, there can be a button to draw another card. 