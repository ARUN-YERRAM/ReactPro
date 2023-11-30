import React from 'react';



const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello, nice to meet you.I am here to assist you');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleCivil = () => {
        const botMessage = createChatBotMessage('Civil law systems, also called continental or Romano-Germanic legal systems, are found on all continents and cover about 60% of the world');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    const handleFamily = () => {
        const botMessage = createChatBotMessage('Family laws and rights encompass a wide range of legal principles and regulations that pertain to family relationships, including marriage, divorce, child custody, adoption, domestic violence, and inheritance. These laws vary from one country to another, and sometimes even within regions or states. Here is an overview of key areas of family laws and rights');
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    const handleEducation = () => {
        const botMessage = createChatBotMessage('Educational rights and laws are essential for ensuring that individuals have access to quality education and are protected from discrimination and other injustices within the educational system.');
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

    const handleCriminal = () => {
        const botMessage = createChatBotMessage('Criminal law systems, also called continental or Romano-Germanic legal systems, are found on all continents and cover about 60% of the world');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    };

  // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,handleCivil,handleFamily,handleEducation,handleCriminal,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;