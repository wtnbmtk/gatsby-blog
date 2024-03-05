import React from "react";
import type { FC } from "react";
import { Link } from "gatsby";

export const Header: FC = () => (
  <header>
    <h1>
      <Link to="/">Gatsby Blog Demo</Link>
    </h1>
  </header>
);
