import React from "react";

export interface Project {
  title: string;
  description: React.ReactNode[];
  images: string[];
  stack: string[];
  links: { name: string; url: string; icon?: string }[];
}

export interface Award {
  imgSrc: string;
  imgAlt: string;
  title: string;
  result: string;
  additionalInfo?: string;
}
