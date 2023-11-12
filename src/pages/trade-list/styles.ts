import styled from "@emotion/styled";
import { Select } from 'antd';

export const TradeReoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const TradeReoDiv = styled.div`
    display: block;
    width: 100rem;
`;

export const TradeReoForm = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
`;

export const TradeReoFormLeft = styled.div`

`;

export const TradeReoFormRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const SchedulerTime = styled(Select)`
    width: 17rem;
`;