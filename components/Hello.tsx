import React from "react";

export const Hello = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => <h1 className={className}>Hallo {name}!</h1>;
