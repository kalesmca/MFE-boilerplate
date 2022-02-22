import React, { Suspense } from "react";

// const CustomerList = React.lazy(() => import("customerList_app/CustomerList"));

// const RegistrationForm = React.lazy(() =>
//   import("registration_app/registrationForm")
// );

const LayoutApp = React.lazy(() => import("layout_app/Layout"));
const DashboardApp = React.lazy(() => import("dashboard_app/Dashboard"));


import ErrorBoundary from "./components/error-boundary";

const App = (props) => {
  console.log("props::", props);
  
  return (
    <div>
      Main Application loaded : 
      Customer
      
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <LayoutApp />
        </Suspense>
       
      </ErrorBoundary>
      <div>
        dashboardsssssssssssssssssssssssssss
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div>DashboardApp Loading...</div>}>
          <DashboardApp  />
        </Suspense>
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <Suspense fallback={<div>Test App Loading...</div>}>
          <TestApp parentCallback={parentCallback}/>
        </Suspense>
      </ErrorBoundary> */}
    </div>
  );
};

export default App;
