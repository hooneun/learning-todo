import styled from "@emotion/styled";
import { Button } from "../Button";
import React from "react";

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

interface Props {
  readonly show: boolean;
  readonly onClick: () => void;
}

export const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <Container>
      <Button
        label={show ? "닫기" : "할일추가"}
        color={show ? undefined : "#304FFE"}
        onClick={onClick}
      />
    </Container>
  );
};
