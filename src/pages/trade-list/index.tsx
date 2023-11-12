import React, { ReactNode } from 'react';
import { Tag, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useHttpGet } from 'utils/http';
import { TradeReoContainer, TradeReoDiv, TradeReoForm, TradeReoFormLeft, TradeReoFormRight, SchedulerTime } from './styles';

interface DataType {
	key: string;
	tokenSymbol: string;
	tokenAddr: string;
	blockChain: string;
	blockDex: string;
	status: number;
	lastModifyTime: string;
}

const statusTags: ReactNode[] = [
	(<Tag color='orange'>BuyWait</Tag>),
	(<Tag color='lime'>Buyed</Tag>),
	(<Tag color='blue'>SellWait</Tag>),
	(<Tag color='purple'>Selled</Tag>),
	(<Tag color='red'>Fail</Tag>),
	(<Tag color='magenta'>NotOpenSource</Tag>),
	(<Tag color='volcano'>NotSupport</Tag>),
];

const selectOptions = [
	{ value: '3000', label: 'Refresh in 3 Second' },
	{ value: '5000', label: 'Refresh in 5 Second' },
	{ value: '7000', label: 'Refresh in 7 Second' },
	{ value: '9000', label: 'Refresh in 9 Second' },
];

const columns: ColumnsType<DataType> = [
	{
		title: 'BlockChain',
		dataIndex: 'blockChain',
		key: 'blockChain',
	},
	{
		title: 'TokenName',
		dataIndex: 'tokenSymbol',
		key: 'tokenSymbol'
	},
	{
		title: 'TokenAddr',
		dataIndex: 'tokenAddr',
		key: 'tokenAddr',
	},
	{
		title: 'BlockDex',
		dataIndex: 'blockDex',
		key: 'blockDex',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: (status) => (statusTags[status])
	},
	{
		title: 'ModifyTime',
		dataIndex: 'lastModifyTime',
		key: 'lastModifyTime',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<a>Delete</a>
		),
	},
];


const data: DataType[] = [
	{
		key: '1',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '2',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '3',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '4',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '5',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '6',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '7',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '8',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '9',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
	{
		key: '10',
		tokenSymbol: 'John Brown',
		tokenAddr: '0xC3f078504154860c26728879bf539BF0153e3E28',
		blockChain: 'linea',
		blockDex: 'uniswap',
		status: 1,
		lastModifyTime: '2023-11-11 12:15:01'
	},
];




export const TradeList: React.FC = () => {
	return (
		<TradeReoContainer>
			<TradeReoDiv>
				<TradeReoForm>
					<TradeReoFormLeft></TradeReoFormLeft>
					<TradeReoFormRight>
						<SchedulerTime defaultValue="3000" options={selectOptions} />
					</TradeReoFormRight>
				</TradeReoForm>
			</TradeReoDiv>
			<TradeReoDiv>
				<Table columns={columns} dataSource={data} pagination={false} />
			</TradeReoDiv>
		</TradeReoContainer>
	);
};





