import React from "react";
import { HighlightCard } from "../../components/HighlightCard";


import {
  Container,
  Header,
  UserInfo,
  UserWrapper,
  User,
  Photo,
  UserGreeting,
  UserName,
  Icon,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/54040740?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Jonathas</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCard />
    </Container>
  );
}
