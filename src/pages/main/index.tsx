import { HeaderContainer, CenterContainer, HeaderItem, LayoutMain, LayoutLeft, LayoutRight } from './styles';
import { Dropdown, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Logo from 'components/logo';
import { NavMenu } from './nav-menu';
import AvatarImg from 'assets/images/avatar_25.jpg';
import ManagerImg from 'assets/images/manager_25.jpg';



export const Main = () => {
	const { token: { colorBgContainer }, } = theme.useToken();

	return (
		<LayoutMain style={{ background: colorBgContainer }} >
			<LayoutLeft>
				<Logo />
				<NavMenu />
			</LayoutLeft>
			<LayoutRight>
				<HeaderContainer>
					<HeaderItem>
						<Dropdown open={false}>
							<img alt="设置" src={ManagerImg} style={{ width: '2.1rem' }} />
						</Dropdown>
					</HeaderItem>
					<HeaderItem>
						<Dropdown open={false}>
							<img alt="个人中心" src={AvatarImg} style={{ width: '4rem', borderRadius: '50%' }} />
						</Dropdown>
					</HeaderItem>
				</HeaderContainer>
				<CenterContainer>
					<Outlet />
				</CenterContainer>
			</LayoutRight>
		</LayoutMain>
	);
}