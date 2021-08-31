import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactioCard,
  TransactioCardProps,
} from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
  LoadContainer,
} from './styles';

export interface DataListProps extends TransactioCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

export function Dashboard() {
  const [isLoading, setLoading] = React.useState(true);
  const [transactions, setTransactions] = React.useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = React.useState<HighlightData>(
    {} as HighlightData,
  );

  const theme = useTheme();

  const getLastTransactionDate = (
    collection: DataListProps[],
    type: 'positive' | 'negative',
  ) => {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter(transaction => transaction.type === type)
          .map(transaction => new Date(transaction.date).getTime()),
      ),
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-BR',
      {
        month: 'long',
      },
    )}`;
  };

  const loadTransaction = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );

    setTransactions(transactionsFormatted);

    const lastTransactionsEntries = getLastTransactionDate(
      transactions,
      'positive',
    );

    const lastTransactionsExpensives = getLastTransactionDate(
      transactions,
      'negative',
    );

    const totalInterval = `01 a ${lastTransactionsExpensives}`;

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última entrada dia ${lastTransactionsExpensives}`,
      },
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última saída dia ${lastTransactionsEntries}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });

    setLoading(false);
  };

  React.useEffect(() => {
    loadTransaction();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadTransaction();
    }, []),
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: 'https://avatars.githubusercontent.com/u/54040740?v=4',
                  }}
                />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Jonathas</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saidas"
              amount={highlightData.expensives.amount}
              lastTransaction={highlightData.expensives.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactioCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
