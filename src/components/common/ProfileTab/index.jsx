import { useState, useEffect } from "react";
import * as S from '@/components/common/ProfileTab/style';
import Invest from '@/components/leaderportfolio/Invest/index';
import { PROFILE_TAB_LEFT, PROFILE_TAB_RIGHT } from '@assets/string';

const ProfileTab = () => {
	return (
		<div>
			<S.Tabs defaultActiveKey="1" centered>
				<S.TabPane tab={ PROFILE_TAB_LEFT } key="1"><Invest/></S.TabPane>
				<S.TabPane tab={ PROFILE_TAB_RIGHT } key="2"><div /></S.TabPane>
			</S.Tabs>
		</div>
	);
}
  
export default ProfileTab;
