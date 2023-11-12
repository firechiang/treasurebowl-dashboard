import { Navigate } from 'react-router-dom';
import { Main } from 'pages/main';
import { TradeList } from 'pages/trade-list';
import { Analyze } from 'pages/analyze';

export const DashboardChildren = [
	{
		path: '/dashboard',
		element: <Navigate to= '/dashboard/trade-list' />
	},
	{
		path: '/dashboard/trade-list',
		element: <TradeList />
	},
	{
		path: '/dashboard/analyze',
		element: <Analyze />
	}
]

export const HomeRoutes = [
	{
		path: '/',
		element: <Navigate to='/dashboard'/>
	},
	{
		path: '/dashboard',
		element: <Main />,
		children: DashboardChildren
		
	}
];