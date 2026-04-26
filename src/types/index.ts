import React from "react";

export interface Project {
  title: string;
  description: React.ReactNode;
  image: string;
  links: { name: string; url: string }[];
}
