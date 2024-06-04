import React, { useState } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

export default function SpellCheck(){
    const[input, setInput] = useState("");
    const[suggestedText, setSuggestedText] = useState("");

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInput(text);
        const words = text.split(" ");
        const correctedWords = words.map((word) => {
            const correctedWord = customDictionary[word.toLowerCase()];
            return correctedWord || word;
        });

        let firstCorrection = "";
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== correctedWords[i]) {
              firstCorrection = correctedWords[i];
              break;
            }
        }
      
        setSuggestedText(firstCorrection);

    }


    return(
        <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    );
};