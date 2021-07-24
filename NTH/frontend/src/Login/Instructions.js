const Instructions = () => {
  return (
    <div className="instructions">
      <h4>&lt;instructions&gt;</h4>
      <div className="instructions-content">
        <ul>
          <li>
            After logging in, there will be a question displayed which includes
            pictures and hints.
          </li>
          <li>
            As you have logged in, your URL will be
            https://nth.pictieee.in/question To submit your answer, you have to
            put a '/' in the URL followed by the answer.
          </li>
          <li>
            If your answer is correct, you will go to the next level, otherwise,
            you will be greeted with the same question with same level.
          </li>
          <li>
            The one who solves as many questions and reaches the top level is
            displayed on the leaderboard.
          </li>
          <li>
            If your answer is correct, you will go to the next level, otherwise,
            you will stay on the same level with the same question.
          </li>
          <li>
            After the 24-hour hunt, the one on the top of the leaderboard wins!
          </li>
          <li>
            The winner will be declared once and there will be no change in our
            decision. Furthermore, users should play with one account only.
          </li>
        </ul>
      </div>
      <h4>&lt;/instructions&gt;</h4>
      
    </div>
  );
};

export default Instructions;
