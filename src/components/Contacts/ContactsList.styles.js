import styled from "@emotion/styled";

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const BtnDelete = styled.button`
  display: flex;
  align-items: center;
  min-width: 80px;
  padding: 3px 18px;

  border-color: var(--second-color);
  border-radius: 6px;

  &:hover,
  &:focus {
    background-color: var(--second-color);
    color: var(--invers-color);
    cursor: pointer;
  }
`;