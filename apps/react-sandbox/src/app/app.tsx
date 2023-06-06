// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  ButtonComponent,
  TableBodyCellComponent,
  TableBodyRowComponent,
  TableComponent,
  TableHeaderCellComponent,
} from '@egov/cvi-react';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  const initialTable = {
    header: ['Event', 'Status', 'Last changed'],
    body: [
      { event: 'Event', state: "Draft", lastChanged: '2021-07-15' },
      { event: 'Event 1', state: 'Public', lastChanged: '2021-07-15' },
    ]
  }

  return (
    <>
      <ButtonComponent appearance={'primary'} size={'s'}>Click me</ButtonComponent>
      <div />

      <TableComponent
        headerCells={
          initialTable.header.map((data, i) => <TableHeaderCellComponent key={i}>{data}</TableHeaderCellComponent>)
        }
        body={
          initialTable.body.map((data, i) => <TableBodyRowComponent key={i}>
            <TableBodyCellComponent>{data.event}</TableBodyCellComponent>
            <TableBodyCellComponent>{data.state}</TableBodyCellComponent>
            <TableBodyCellComponent>{data.lastChanged}</TableBodyCellComponent>
          </TableBodyRowComponent>
          )
        }
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
