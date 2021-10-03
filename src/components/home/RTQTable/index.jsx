import { useTickerSocket } from '@hooks';
import { parseToDataSource, tickerColumns } from '@utils/bithumb';

import * as S from '@components/home/RTQTable/style';
import { Divider } from '@components/home/Filter/style';
import { 
	TABLE_TITLE, 
	SCROLL_DOWN 
} from '@assets/string';

const RTQTable = () => {
	const { currentTickers } = useTickerSocket();

	return (
		<>
			<S.DividerContainer>
				<S.Ribbon text={ SCROLL_DOWN } color="#E8D5A3">
					<Divider orientation="left">{ TABLE_TITLE }</Divider>
				</S.Ribbon>
			</S.DividerContainer>
			<S.TableContainer>
				<S.Table
					columns={tickerColumns}
					dataSource={parseToDataSource(currentTickers)}
					pagination={false}
				/>
			</S.TableContainer>
		</>
	);
};

export default RTQTable;