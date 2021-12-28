import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from 'react-native';
import BaseUrl from './BaseUrl';
import {styles} from './Style';
import {Card} from 'react-native-paper';

const EmployeDetailScreen = props => {
  const Data = props.route.params;
  const [employeedata, setEmployeeData] = useState('');
  const [isLoading, setLoading] = useState(true);

  //getEmployeDetail Api
  const getEmployeDetail = async () => {
    return fetch(BaseUrl.BASE_URL + 'employee/' + Data.Empid, {
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
            setLoading(false);
            if (res.status === 'success') {
              setEmployeeData(res.data);
            } else {
              console.log('Check Res Json', res.message);
            }
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
    getEmployeDetail();
    return () => {
      setEmployeeData('');
    };
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
            <Text style={styles.HeadingText}>Employe Detail</Text>
          </View>
          <Card style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              {employeedata.profile_image != '' ? (
                <Image
                  style={styles.empImage}
                  source={{uri: employeedata.profile_image}}
                />
              ) : (
                <Image
                  style={styles.empImage}
                  source={require('./assets/noimage.jpg')}
                />
              )}
              <View style={styles.TextContainer}>
                <Text style={styles.NameText}>
                  {employeedata.employee_name}
                </Text>
                <Text style={styles.normalText} numberOfLines={1}>
                  Emp. Salary : {employeedata.employee_salary}
                </Text>
                <Text style={styles.normalText} numberOfLines={1}>
                  Emp. Age : {employeedata.employee_age}
                </Text>
              </View>
            </View>
          </Card>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EmployeDetailScreen;
