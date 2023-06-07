// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonComponent, SelectComponent } from '@egov/cvi-react';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <ButtonComponent appearance={'primary'} size={'s'}>
        Click me
      </ButtonComponent>
      <div />
      <SelectComponent
        style={{ width: 250 }}
        label={'Some label'}
        placeholder={'Otsi elementi või lisa uss 🐍'}
        options={[
          {
            label: 'Item 1 that is not that short but actually quite long',
            value: 'first',
          },
          { label: 'item 2', value: 'second' },
          { label: 'Item that can be selected from keyboard', value: 'third' },
          { label: 'Item 4', value: 'fourth' },
          { label: 'Item 5', value: 'fifth' },
          {
            label: 'Item 6 with a very long text spanning many lines',
            value: 'sixth',
          },
        ]}
      ></SelectComponent>

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
