import { LogoContainer, LogoImg } from "./styles";
import LogoJpg from 'assets/images/logo.jpg';

export default function Logo() {
	
	return (
		<LogoContainer>
			<LogoImg src={LogoJpg} />
		</LogoContainer>
	);
}