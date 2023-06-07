// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  ButtonComponent,
  TableOfContentsComponent,
  TableOfContentsItemComponent,
  TableOfContentsWrapperComponent,
} from '@egov/cvi-react';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <ButtonComponent appearance={'primary'} size={'s'}>Click me</ButtonComponent>
      <div />

      <TableOfContentsWrapperComponent>
        <div>
          <div id="section-one">
            <h1>Section One</h1>
            <p>
              There comes a day when prey kills predator, the young one shall usher
              forth a strengthening of bonds and new aggressions.
            </p>
            <p>
              This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It
              has snowy legs, an icicle covered tail and frosty ears. They're
              generally playful by nature and can often be found in winter. If you're
              out looking for them they can often be seen lurking about and on their
              own. It tends to attack with Haze and Ice Punch. It hasn't evolved yet
              and there are no known evolutions.
            </p>
          </div>
          <div id="section-two">
            <h1>Section Two</h1>
            <p>
              There comes a day when prey kills predator, the young one shall usher
              forth a strengthening of bonds and new aggressions.
            </p>
            <p>
              This Pokemon is a ice-type Pokemon and looks a lot like an antelope. It
              has snowy legs, an icicle covered tail and frosty ears. They're
              generally playful by nature and can often be found in winter. If you're
              out looking for them they can often be seen lurking about and on their
              own. It tends to attack with Haze and Ice Punch. It hasn't evolved yet
              and there are no known evolutions.
            </p>
          </div>
        </div>
        <TableOfContentsComponent title={'Sisukord'}>
          <TableOfContentsItemComponent
            label={'Section One with a very long label that spans many lines'}
            linkTo={'#section-one'}
            isSelected={true}
          />
          <TableOfContentsItemComponent
            label={'Section One with a very long label that spans many lines'}
            linkTo={'#section-two'}
          />
        </TableOfContentsComponent>
      </TableOfContentsWrapperComponent>

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
