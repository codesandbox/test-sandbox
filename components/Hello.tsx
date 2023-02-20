import React from "react";

export const Hello = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => (
  <div>
    <h1 className={className}>Koek {name}!</h1>
  </div>
);
