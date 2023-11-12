import { Menu } from "antd";
import { ReconciliationOutlined/*, HomeOutlined */} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const menuIconSize = 24;

export const NavMenu = () => {
	const navigate = useNavigate();
	return (
		<Menu theme="light" mode="inline" defaultSelectedKeys={['2']} style={{ height: '100%' }} items={
			[
/*				{
					key: '1',
					icon: <HomeOutlined style={{ fontSize: menuIconSize }} />,
					label: '数据看版',
					onClick: () => navigate('/dashboard/analyze')
				},*/
				{
					key: '2',
					icon: <ReconciliationOutlined style={{ fontSize: menuIconSize }} />,
					label: 'BuyQueue',
					onClick: () => navigate('/dashboard/trade-reo')
				}
			]
		} />
	);
}