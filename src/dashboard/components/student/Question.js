import React, {useState} from "react";
import "../../style/exam.css";

export const Question = ({handleSubmit, question}) => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    // need to clear selectedOptions after submission

    return (
        <div className="question-box">
            <h3 className="question-text">{ question?.name }</h3>
            <form onSubmit={e => e.preventDefault()} className="options">
                {(question?.type === "MultipleChoice" || question?.type === "CheckBoxes") && question.options.map(option => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            name="option"
                            value={option}
                            // checked={selectedOption === option}
                            checked={selectedOptions.includes(option)}
                            // onChange={e => setSelectedOption(e.target.value)}
                            onChange={e => {
                                if (question.type === "CheckBoxes") {
                                    if (e.target.checked) {
                                        setSelectedOptions(prev => [...prev, e.target.value]);
                                    } else {
                                        setSelectedOptions(prev => prev.filter(val => val !== e.target.value));
                                    }
                                } else if (question.type === "MultipleChoice") {
                                    setSelectedOptions([e.target.value]);
                                }
                            }}
                        />
                        {option}
                    </label>
                ))}
            </form>
            <button className="submit-q" onClick={() => handleSubmit(selectedOptions)}>Submit</button>
        </div>
    );
}