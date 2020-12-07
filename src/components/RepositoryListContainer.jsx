import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
//import RNPickerSelect from 'react-native-picker-select';
import { Menu, Button, Searchbar } from 'react-native-paper';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import RepositoryItem from './RepositoryItem';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
import theme from '../theme';
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, onSelectChange, onSearchChange, onEndReach }) => {
  const history = useHistory();
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];
  const onPress = (id) => {
    history.push('/repositories/'+id);
  };
  const debounced = useDebouncedCallback(
    (value) => {
      onSearchChange(value);
    },
    500
  );

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [selection, setSelection] = useState('Latest repositories');

  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearch = (query) => {
    setSearchTerm(query);
    debounced.callback(query);
  };

  const changeSelection = (value) => {
    if(value === 'latest')
      setSelection('Latest repositories');
    if(value === 'highest')
      setSelection('Highest rated repositories');
    if(value === 'lowest')
      setSelection('Lowest rated repositories');
    onSelectChange(value);

  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        // // <RNPickerSelect
        // //   onValueChange={(value) => onSelectChange(value)}
        // //   items={[
        // //     { label: 'Latest repositories', value: 'latest' },
        // //     { label: 'Highest rated repositories', value: 'highest'},
        // //     { label: 'Lowest rated repositories', value: 'lowest'}
        // //   ]}
        // // />
        <View>
          <Searchbar 
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchTerm}
            style={{ margin: 5 }}
          />
          <View style={theme.cardStyle}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>{selection}</Button>}>
              <Menu.Item  onPress={() => { changeSelection('latest'); }} title='Latest repositories' />
              <Menu.Item  onPress={() => { changeSelection('highest'); }} title='Highest rated repositories' />
              <Menu.Item  onPress={() => { changeSelection('lowest'); }} title='Lowest rated repositories' />
            </Menu>
          </View>
        </View>
      }
      renderItem={({ item }) =>
      <TouchableOpacity onPress={()=> onPress(item.id)} >
        <RepositoryItem item={item} testID="repositoryItem" showGithub={false} />
      </TouchableOpacity>
      }
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryListContainer;