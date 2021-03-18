import React, {useState} from 'react';
import './app.css';
import GoalList from './Components/GoalList/goal-list'
import NewGoal from './Components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finnish the corse'},
    {id: 'cg2', text: 'Learn the Material'},
    {id: 'cg3', text: 'Help other students'}
  ])

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((precCorseGoals) => {
      return precCorseGoals.concat(newGoal);
    });
  }

  return (
    <div>
      <h2 className='goals-header'>Course goals</h2>
      <GoalList goals={courseGoals}/>
      <NewGoal onAddGoal={addNewGoalHandler}/>
    </div>
  );
};

export default App;
