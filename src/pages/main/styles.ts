import styled from "@emotion/styled";

export const LayoutMain = styled.div`
    display: flex;
    background: #ffffff;
    width: 100%;
    height: 100%;
`;

export const LayoutLeft = styled.div`
    width: 28rem;
    display: flex;
    flex-direction: column;
`;

export const LayoutRight = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const TopContainer = styled.div`
    height: 6.4rem;
`;

export const HeaderContainer = styled(TopContainer)`
    display: flex;
    justify-content: right;
    align-items: center;
    padding-left: 4rem;
    padding-right: 4rem;
    box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.03), 0 0.1rem 0.6rem -0.1rem rgba(0, 0, 0, 0.02), 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.02);
`;

export const HeaderItem = styled.div`
    height: 100%;
    min-width: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CenterContainer = styled.div`
    padding: 4rem;
    height: 100%;
`;


