import React, { memo } from "react";

const message = ({ count, handleOnIncrement }) => {
  console.log("message rendering");
  return (
    <div>
      send {count} message
      <button onClick={handleOnIncrement}>Handle Increment Message</button>
    </div>
  );
};
/* export default memo(message); */
export default message;
