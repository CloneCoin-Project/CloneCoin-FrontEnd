import { useTickerSocket } from '@hooks';
import { parseToDataSource, tickerColumns } from '@utils/bithumb';

import * as S from '@components/home/RTQTable/style';
import { Divider } from '@components/home/Filter/style';
import { TABLE_TITLE } from '@assets/string';

const RTQTable = () => {
	const { currentTickers } = useTickerSocket();

	return (
		<>
			<Divider orientation="left">{ TABLE_TITLE }</Divider>
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