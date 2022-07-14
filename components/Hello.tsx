import React from "react";

export const Hello = ({
  name,
  className,
}: {
  name: string;
}) => <h1 className={className}>Hello {name}!</h1>;
