import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BaseUrl from './BaseUrl';
import {Card} from 'react-native-paper';
import {styles} from './Style';

const EmployeesScreen = props => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //getEmployees Api
  const getEmployees = async () => {
    return fetch(BaseUrl.BASE_URL + 'employees', {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => {
        res
          .json()
          .then(async res => {
            console.log('Check Res Json', res);
            setEmployees(res.data);
            setLoading(false);
          })
          .catch(err => {
            console.log('error after josn', err);
            setLoading(false);
          });
      })
      .catch(err => {
        console.log('error before josn', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.container}>
          <View style={styles.ActivStyle}>
            <ActivityIndicator size="large" color="#bc2c3d" />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.HeadingContainer}>
            <Text style={styles.HeadingText}>Employees List</Text>
          </View>
          <FlatList
            data={employees}
            scrollEnabled={true}
            // ListEmptyComponent={EmpteyMessage}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('EmployeDetailScreen', {
                    Empid: item.id,
                  });
                }}>
                <Card style={styles.card}>
                  <View style={{flexDirection: 'row'}}>
                    {item.profile_image != '' ? (
                      <Image
                        style={styles.empImage}
                        source={{uri: item.profile_image}}
                      />
                    ) : (
                      <Image
                        style={styles.empImage}
                        source={require('./assets/noimage.jpg')}
                      />
                    )}
                    <View style={styles.TextContainer}>
                      <Text style={styles.NameText}>{item.employee_name}</Text>
                      <Text style={styles.normalText} numberOfLines={1}>
                        Emp. Salary : {item.employee_salary}
                      </Text>
                      <Text style={styles.normalText} numberOfLines={1}>
                        Emp. Age : {item.employee_age}
                      </Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default EmployeesScreen;
