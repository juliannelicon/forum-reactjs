import React, { useState } from 'react';

import { Container, Question, CommentForm, AnswerForm } from './styles';

const Dashboard: React.FC = () => {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);

  const handleOpenComment = () => {
    setIsOpenComment(!isOpenComment);
  }

  const handleOpenAnswer = () => {
    setIsOpenAnswer(!isOpenAnswer);
  }

  return (
    <Container>
      <main>
        <header>
          <h1>Framework front-end React.js</h1>
          <button type="button" onClick={handleOpenAnswer}>
            PERGUNTAR
          </button>
        </header>
        <Question>
          <img
            src="https://avatars.githubusercontent.com/u/27890457?s=460&v=4"
            alt="Avatar"
          />
          <div>
            <header>
              <strong>Julianne Licón</strong>
              <span>20/03/2021 às 10:00</span>
            </header>

            <p>Qual o melhor framework front-end react.js, vue ou angular?</p>

            <button type="button" onClick={handleOpenComment}>
              RESPONDER
            </button>

            <CommentForm isOpenComment={isOpenComment}>
              <input type="text"/>
              <button>ENVIAR</button>
            </CommentForm>
          </div>
        </Question>

        <AnswerForm isOpenAnswer={isOpenAnswer}>
          <img
            src="https://avatars.githubusercontent.com/u/27890457?s=460&v=4"
            alt="Avatar"
          />
          <form action="">
            <input type="text"/>
            <button>ENVIAR</button>
          </form>
        </AnswerForm>
      </main>
    </Container>
  );
}

export default Dashboard;