import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FunctionObject } from './FunctionObject';
import { styles } from './mainViewStyles';

//i explained this
export const FloatingActionButton = (myFunction: FunctionObject) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={() => myFunction.myFunction(myFunction.argument)}>


      <MaterialCommunityIcons name="plus" size={32} color={"#767171"} />


    </TouchableOpacity>
  );
};
