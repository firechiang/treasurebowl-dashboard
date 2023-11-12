import type { ThemeConfig } from 'antd';

const menuSelectColor = 'rgb(0, 167, 111)';
const menuSelectbg = 'rgb(200, 250, 214)';


const themeConfig: ThemeConfig = {


	token: {
	},
	components: {
		Menu: {
			darkItemSelectedBg: menuSelectColor,
			horizontalItemHoverColor: menuSelectColor,
			horizontalItemSelectedColor: menuSelectColor,
			itemSelectedColor: menuSelectColor,
			itemSelectedBg: menuSelectbg,
			itemActiveBg: menuSelectbg,
		},
		Table: {
			headerBg: 'rgb(244, 246, 248)',
			headerColor: 'rgb(99, 115, 129)',
		}
	}
};

export default themeConfig;
