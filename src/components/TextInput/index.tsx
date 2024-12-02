import styled from "@emotion/styled";

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface Props {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};
