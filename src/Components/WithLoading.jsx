import React from "react";
import { Spinner } from "reactstrap";
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="spiner">
        <Spinner type="grow" color="info" />
      </div>
    );
  };
}
export default WithLoading;
