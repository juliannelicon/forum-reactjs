import styled, { css } from 'styled-components';

export const Container = styled.div`

  main{
    max-width: 800px;
    margin: 0 auto;
    padding: 0.5rem;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Question = styled.div`
  display: flex;
  margin-top: 1rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }

  div {
    flex:1;
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;

    background: #efefef;

    header {
      display: flex;
      flex-direction:column;

      span {
        font-size: 0.8rem;
        margin-top: 0.1rem;
      }
    }

    p {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 0.5rem;
      margin: 0.5rem 0;
    }

    footer {
      display: flex;

      button {
        font-size: 0.8rem;

        & + button {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

interface CommentFormProps {
  isOpenComment: boolean;
}

export const CommentForm = styled.form<CommentFormProps>`
  display: none;
  flex-direction: column;
  margin-top: 1rem;

  ${props => props.isOpenComment &&
  css`
    display: flex;
  `}

  input {
    height: 5rem;
    margin-top: 0.5rem;
  }

  button {
    max-width: 100px;
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.8rem;
  }
`;

interface AnswerFormProps {
  isOpenAnswer: boolean;
}

export const AnswerForm = styled.div<AnswerFormProps>`
  display: none;
  margin-top: 1rem;



  ${props => props.isOpenAnswer &&
  css`
    display: flex;
  `}

  img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }

  form {
    flex:1;
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;

    background: #efefef;

    input {
      height: 5rem;
    }

    button {
      max-width: 100px;
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;
