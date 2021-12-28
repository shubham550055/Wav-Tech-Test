import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeadingContainer: {
    flexDirection: 'row',
    margin: 15,
    marginBottom: 0,
  },
  HeadingText: {
    fontSize: 16,
    textAlign: 'left',
    color: '#bc2c3d',
    flex: 0.6,
  },
  subHeadingText: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 15,
    marginBottom: 5,
  },
  HeadingViewText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'right',
    flex: 0.6,
  },
  card: {
    margin: 15,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    marginTop: 7,
    elevation: 5,
  },
  empImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    flex: 0.3,
    borderRadius: 5,
  },
  TextContainer: {
    flex: 0.7,
    marginLeft: 10,
  },
  NameText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  normalText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    marginBottom: 0,
  },
  ActivStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
