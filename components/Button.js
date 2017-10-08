import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border-color: #007bff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
`;

export default Button;
