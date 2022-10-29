import React from "react";

const TestComponent = () => (
  <div>
    <p
      style={{
        color: "var(--gdsc-core-red)",
        fontFamily: "Google Sans",
        fontWeight: 600,
      }}
    >
      Hello World!
    </p>
  </div>
);

export default React.memo(TestComponent);
