import React, {useState} from 'react';

const NewGoal = (props) => {
    const [enterdText, setEnterdText] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {id: Math.random().toString(),
        text: enterdText
        };

        setEnterdText('');
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = (event) => {
        setEnterdText(event.target.value);
    }

    return (
        <form className='New-Goal' onSubmit={addGoalHandler}>
            <input type="text" value={enterdText} onChange={textChangeHandler}/>
            <button type='submit'>Add goal</button>
        </form>
    );
}

export default NewGoal;