//Importing required packages, components and css
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display from './components/Display';
import Edit from './components/Edit';
import Add from './components/Add';
import SideNav from './components/SideNav';
//React functional app component
function App() {
  //Rendering the main app component with the sidenav, routes and links
  return (
    <div className="App">
    <SideNav className='sidenav'/>
      <Router>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/display' element={<Display />} />
          <Route exact path='/edit' element={<Edit />} />
          <Route exact path='/add' element={<Add />} />
        </Routes>  
      </Router>
    </div>
  );
}
//Exporting functional component
export default App;
/*
  Sources i used for this project:  https://www.npmjs.com/package/mongoose-type-url
                                    https://www.mongodb.com/docs/atlas/security/ip-access-list/
                                    https://www.w3schools.com/howto/howto_css_center-vertical.asp
                                    https://stackoverflow.com/questions/6632340/place-a-button-right-aligned
                                    https://www.youtube.com/watch?v=CXa0f4-dWi4
                                    https://codepen.io/gramirezcarrero/pen/qozJJE
                                    https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios
                                    https://github.com/gaurav-me/Weekly-Organiser/issues/3
                                    https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest
                                    https://www.youtube.com/watch?v=FgnxcUQ5vho&t=126s
                                    https://reactjs.org/docs/test-renderer.html
                                    https://scriptverse.academy/tutorials/jasmine-spy-matchers.html
                                    https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios
                                    https://stackoverflow.com/questions/51957794/jest-typeerror-is-not-a-function-in-jest-mock
                                    https://www.leighhalliday.com/mock-fetch-jest
                                    https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
                                    https://meticulous.ai/blog/how-to-use-jest-spyon/#:~:text=Jest's%20spyOn%20method%20is%20used,of%20code%2C%20generally%20a%20function.
                                    https://meticulous.ai/blog/how-to-use-jest-spyon/#:~:text=Jest's%20spyOn%20method%20is%20used,of%20code%2C%20generally%20a%20function.
                                    https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
                                    https://blog.logrocket.com/testing-node-js-mocha-chai/
                                    https://www.securecoding.com/blog/using-helmetjs/
                                    https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/
*/
