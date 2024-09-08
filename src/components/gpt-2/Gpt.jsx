import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

function Gpt() {

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [model, setModel] = useState(null);
  const [context, setContext] = useState('');
  const [question, setQuestion] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    const runQna = async () => {
      try {
        setLoading(true);
        const loadedModel = await qna.load(); // Load the QnA model
        setModel(loadedModel);
        console.log('Model Loaded!');
      } catch (error) {
        console.error('Error loading model:', error);
      } finally {
        setLoading(false); // Stop loading once the model is loaded
      }
    };

    runQna(); // Load the model on component mount
  }, []);

  const handleQuestionSubmit = async () => {
    if (model && context && question) {
      try {
        setLoading(true);
        const answers = await model.findAnswers(question, context);
        if (answers.length > 0) {
          setResponse(answers[0].text); // Get the first answer
        } else {
          setResponse('No answer found.');
        }
      } catch (error) {
        console.error('Error finding the answer:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setResponse('Please provide a context and a question.');
    }
  };

  if (loading) {
    return (
      <div className='flex w-full items-center justify-center'>
        <img src="src/assets/loading.gif" alt="Loading..." className='h-7' />
      </div>
    );
  }

  return (
    <div>
      <div className='w-full p-2'>
        <textarea
          cols="50"
          rows="10"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder='Enter Context'
          className='outline-none rounded-2xl w-1/2 h-1/2 bg-gray-200 p-3'
        />
      </div>
      <div className='w-full p-2 flex flex-col gap-2'>
        <h2 className='font-semibold'>Ask a Question!</h2>
        <input
          type="text"
          ref={inputRef}
          placeholder='Ask Question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className='outline-none p-2 border-2 border-gray-100 rounded-2xl bg-gray-200 w-1/5'
        />
        <button
          className='bg-blue-500 text-white rounded-3xl p-2 w-fit'
          onClick={handleQuestionSubmit}
        >
          Submit
        </button>
        <p><span className='font-semibold'>Answer :</span>{response}</p>
      </div>
    </div>
  );
}

export default Gpt;
