// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { ButtonComponent, Steps } from '@egov/cvi-react';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {

  const [step, setStep] = useState(0)

  return (
    <>
      <ButtonComponent appearance={ 'primary'} size={'s'}>Click me</ButtonComponent>
      <div/>

      <Steps
        title='Steps Example'
        description='Some Description'
        steps={[
          { title: 'Step A', content: 'Step a content' },
          { title: 'Step B', content: 'Step b content' },
          { title: 'Step C', content: 'Step c content' },
          { title: 'Step D', content: 'Step d content' },
        ]}
        activeStepIndex={step}
        select={setStep}
      />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br/>
      <hr/>
      <br/>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
