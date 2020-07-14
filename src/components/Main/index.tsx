import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <button>
          <S.BackIcon />
        </button>

        <S.ProfileInfo>
          <strong>Thiago William</strong>
          <span>612 Tweets</span>
        </S.ProfileInfo>
      </S.Header>

      {/* <ProfilePage /> */}

      {/* <S.BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </S.BottomMenu> */}
    </S.Container>
  );
};

export default Main;
