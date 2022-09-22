import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <Layout>
      {/* <Quiz/> */}
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/quiz-creator' element={<QuizCreator></QuizCreator>}/>
        <Route path='/quiz/:id' element={<Quiz></Quiz>}/>
        <Route path='/' element={<QuizList></QuizList>}/>
      </Routes>
    </Layout>
  );
}

export default App;
