import styled from "@emotion/styled";
import { TopContainer } from "pages/main/styles";

export const LogoContainer = styled(TopContainer)`
    display: flex;
    border-right: 0.1rem solid rgba(5, 5, 5, 0.06);
    align-items: center;
    padding-left: 3.5rem;
    box-sizing: border-box;
`;

export const LogoImg = styled.img`
    width: 4rem;
    height: 4rem;
`;