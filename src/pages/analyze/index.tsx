import { Col, Row } from 'antd';
import { Carda,Cardb,Cardc,Cardd } from './styles';

export const Analyze = () => {
	return (
		<>
			<Row gutter={32}>
				<Col span={6}>
					<Carda title="Card title" bordered={false}>
						Card content
					</Carda>
				</Col>
				<Col span={6}>
					<Cardb title="Card title" bordered={false}>
						Card content
					</Cardb>
				</Col>
				<Col span={6}>
					<Cardc title="Card title" bordered={false}>
						Card content
					</Cardc>
				</Col>
				<Col span={6}>
					<Cardd title="Card title" bordered={false}>
						Card content
					</Cardd>
				</Col>
			</Row>
		</>
	);
}