import styled from "styled-components";

export const Styledlabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  border: 1px solid red;
  padding: 10px;
  font-size: 12px;
`;
export const StyledInput = styled.input`
  font-size: 15px;
  padding: 5px;

  &:focus {
    outline: 0;
  }
`;
