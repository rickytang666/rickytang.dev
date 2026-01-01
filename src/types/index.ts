import React from "react";

export interface Project {
  title: string;
  description: React.ReactNode[];
  images: string[];
  stack: string[];
  github: string;
  website?: string;
}

export interface Award {
  imgSrc: string;
  imgAlt: string;
  title: string;
  result: string;
  additionalInfo?: string;
}
