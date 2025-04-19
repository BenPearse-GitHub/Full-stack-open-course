import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ label, value, unit = "" }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
    <td>{unit}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <StatisticsLine label="good" value={good} />
      <StatisticsLine label="neutral" value={neutral} />
      <StatisticsLine label="bad" value={bad} />
      <StatisticsLine label="total" value={good + neutral + bad} />
      <StatisticsLine
        label="average"
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticsLine
        label="positive"
        value={(good / (good + neutral + bad)) * 100}
        unit="%"
      />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodFeedback} text="good" />
      <Button onClick={handleNeutralFeedback} text="neutral" />
      <Button onClick={handleBadFeedback} text="bad" />
      <h1>Statistics</h1>
      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </>
  );
};

export default App;
