import styled from "@emotion/styled";

const TextInput = styled.input`
  border-color: ${props => props.fieldIsEmpty && "red"};
`;

export default TextInput;