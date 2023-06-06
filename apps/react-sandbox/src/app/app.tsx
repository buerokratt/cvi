// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import { ButtonComponent, useToast } from '@egov/cvi-react';

export function App() {
  const toast = useToast()

  const showToast = (type: 'info' | 'success' | 'error' | 'warning') => toast.open({
    type,
    title: 'Toast Title',
    message: 'Toast Message',
  })

  return (
    <>
      <ButtonComponent appearance={ 'primary'} size={'s'}>Click me</ButtonComponent>
      <div/>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('success')}>Show Success Toast</ButtonComponent>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('info')}>Show Info Toast</ButtonComponent>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('error')}>Show Error Toast</ButtonComponent>
        <ButtonComponent appearance={'primary'} size={'s'} onClick={() => showToast('warning')}>Show Warning Toast</ButtonComponent>
      </div>

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
