import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import * as S from './styles';

const SideBar: React.FC = () => {
  return (
    <S.Container>
      <S.SearchWrapper>
        <S.SearchInput placeholder="Buscar no Twitter" />
        <S.SearchIcon />
      </S.SearchWrapper>

      <StickyBox>
        <S.Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </S.Body>
      </StickyBox>
    </S.Container>
  );
};

export default SideBar;
