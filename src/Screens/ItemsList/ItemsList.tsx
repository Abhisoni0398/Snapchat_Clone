import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
//custom components
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
//constants
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
//styling
import styles from './styles';
//3rd party
import {Rating} from 'react-native-ratings';
import SQLite from 'react-native-sqlite-storage';
import FastImage from 'react-native-fast-image';
//custom functions
import actions from '../../redux/actions';
import colors from '../../styles/colors';

var db = SQLite.openDatabase({name: 'restaurant_database.db'});

const ItemsList: FC = (props: any) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(10);
  const [pageNo, setPageNo] = useState<number>(1);

  useEffect(() => {
    restaurantData();
  }, [pageNo, isRefreshing]);

  const createTables = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Restaurant_data'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Restaurant_data', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Restaurant_data(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(30), image VARCHAR(255), rating INT(15), latitude VARCHAR(255), longitude VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  };

  useEffect(() => {
    createTables();
  }, []);

  const restaurantData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response: any = await actions.restaurantList(
        `?limit=${limit}&page=${pageNo}`,
      );
      insertData(response?.data);
    } catch (err: any) {
      console.error(err, 'errorerror');
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  }, []);

  const insertData = data => {
    db.transaction(function (tx) {
      for (let i = 0; i < data.length; i++) {
        tx.executeSql(
          'INSERT INTO Restaurant_data (title, image, rating, latitude, longitude) VALUES (?,?,?,?,?)',
          [
            data[i]?.title,
            data[i]?.images[0]?.url,
            data[i]?.rating,
            data[i]?.latitude,
            data[i]?.longitude,
          ],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              console.log('Data Inserted Successfully....');
            } else console.log('Failed....');
          },
        );
      }
    });

    viewData();
  };

  const viewData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT DISTINCT title, rating, image, latitude, longitude FROM Restaurant_data ORDER BY title',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setData(temp);
        },
      );
    });
  };

  const _renderItem = useCallback((item: any) => {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate(navigationStrings.MAP, {
            item: item?.item,
          })
        }>
        <View style={styles.view}>
          <FastImage
            source={{
              uri: item?.item?.image,
              priority: FastImage.priority.high,
            }}
            style={{width: 48, height: 48, borderRadius: 8}}
          />
          <View style={styles.rating}>
            <Text style={styles.title}>{item?.item?.title}</Text>
            <Rating
              startingValue={item?.item?.rating}
              showRating
              style={{paddingVertical: 10}}
              imageSize={15}
              showRating={false}
              readonly={true}
            />
          </View>
        </View>
        <Image
          source={imagePath.location}
          style={{width: 25, height: 25, borderRadius: 4}}
        />
      </TouchableOpacity>
    );
  }, []);

  const handleRefresh = () => {
    setPageNo(1);
    setIsRefreshing(true);
  };

  const onEndReached = () => {
    if (data.length >= 10) {
      setPageNo(pageNo + 1);
    }
  };

  return (
    <WrapperContainer isLoading={isLoading}>
      <HeaderComp leftText={strings.RESTAURANTDATA} />
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={_renderItem}
          keyExtractor={item => item?.id}
          refreshing={isRefreshing}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor={colors.green}
            />
          }
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          ListFooterComponent={<View style={{marginBottom: '15%'}} />}
        />
      </View>
    </WrapperContainer>
  );
};

export default ItemsList;
