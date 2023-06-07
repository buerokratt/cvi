// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonComponent, RadioButtonGroupComponent } from '@egov/cvi-react';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <ButtonComponent appearance={'primary'} size={'s'}>Click me</ButtonComponent>
      <div />

      <RadioButtonGroupComponent
        label={'Default radio buttons example'}
        name={''}
        items={[
          { value: '1', label: 1, },
          { value: '2', label: 2 },
        ]}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
      <RadioButtonGroupComponent
        apperance='regular'
        label={'Regular radio buttons example'}
        name={''}
        items={[
          { value: '1', label: 1 },
          { value: '2', label: 2 },
        ]}
        onChange={(selectedValue) => console.log(selectedValue)}
      />
      <RadioButtonGroupComponent
        apperance='compact'
        label={'Compact radio buttons example'}
        name={''}
        items={[
          { value: '1', label: 1 },
          { value: '2', label: 2 },
        ]}
        onChange={(selectedValue) => console.log(selectedValue)}
      />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
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
