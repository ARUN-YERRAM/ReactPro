import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if(message.includes('hello') || message.includes('Hello') || message.includes('Hi')|| message.includes('hi')){
        console.log('hi');
        actions.handleHello();
        }

        if(message.includes('Civil') || message.includes('civil')){
            console.log('Civil law systems, also called continental or Romano-Germanic legal systems, are found on all continents and cover about 60% of the world.');
            actions.handleCivil();
            }
        
        if(message.includes('Family') || message.includes('family')){
            console.log('Marriage laws govern the formation and dissolution of marriages. They outline the legal requirements for marriage, such as age restrictions, consent, and eligibility.');
            actions.handleFamily();
            }
        
        if(message.includes('Education') || message.includes('education')){
            actions.handleEducation();
            }
        if(message.includes('Criminal') || message.includes('criminal')){
            actions.handleCriminal();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
            parse: parse,
            actions,
        });
        })}
    </div>
    );
};

export default MessageParser;