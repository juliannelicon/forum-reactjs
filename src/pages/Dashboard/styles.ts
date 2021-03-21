import styled, { css } from 'styled-components';

export const Container = styled.div`

  main{
    max-width: 800px;
    margin: 0 auto;
    padding: 0.5rem;

    > header {
      display: flex;
      align-items: center;

      h1 {
        flex:1;
        text-align:center;
      }

      > button {
        max-width: 120px;
        text-align: center;
        font-size: 0.8rem;
        font-weight: 600;

        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;

        background: #1877F2;
        color: #f1f2f3;

        transition: filter 0.2s;

        &:hover{
          filter: brightness(0.9);
        }
      }
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

    background: #fff;

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

    > button {
      max-width: 120px;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 600;

      border: 0;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;

      background: #1877F2;
      color: #f1f2f3;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.9);
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
    max-width: 80px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;

    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    background: #eee;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
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

    background: #fff;

    input {
      height: 5rem;
    }

    > button {
      max-width: 80px;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 600;
      margin-top: 0.5rem;

      border: 1px solid #ccc;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;

      background: #eee;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.9);
      }
    }
  }
`;
