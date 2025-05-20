import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#FF3D00" : "#FF3D00")};
  background-color: ${(props) => (props.border ? "transparent" : "#FF3D00")};
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
 padding: 18px 20px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
   transform: scale(1.05);
    background-color: ${(props) => (props.border ? "transparent" : "#FF3D00")};
    border: 1px solid #FF3D00;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

