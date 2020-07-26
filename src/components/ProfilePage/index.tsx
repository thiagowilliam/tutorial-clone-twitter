import React from 'react';

import Feed from '../Feed';
import * as S from './styles';

const ProfilePage: React.FC = () => {
  return (
    <S.Container>
      <S.Banner>
        <S.Avatar />
      </S.Banner>

      <S.ProfileData>
        <S.EditButton outlined>Edit Perfil</S.EditButton>
        <h1>Thiago William</h1>
        <h2>@thiago_william</h2>

        <p>Frontend Developer</p>

        <ul>
          <li>
            <S.LocationIcon />
            Brasília, Brazil
          </li>

          <li>
            <S.CakeIcon />
            Nascido(a) em 17 de janeiro de 2001
          </li>
        </ul>

        <S.Followage>
          <span>
            seguindo <strong>24</strong>
          </span>

          <span>
            <strong>672</strong> seguidores
          </span>
        </S.Followage>
      </S.ProfileData>
      <Feed />
    </S.Container>
  );
};

export default ProfilePage;
