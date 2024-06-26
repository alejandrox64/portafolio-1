import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
// Icons
import { Icon } from "@iconify/react";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);
  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
        target="_blank"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      <a
        href={"https://www.linkedin.com/in/alejandro-rojas-216a87258/"}
        aria-label="External link"
        className="link-icons"
        target="_blank"
      >
        <Icon icon="fa-brands:linkedin" />
      </a>
    </StyledSocialLinks>
  );
}
