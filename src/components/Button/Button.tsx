// @ts-nocheck
import React, { Component } from 'react';
import { View, Button as NativeButton } from 'react-native';

export class Button extends Component {
    render() {
      return (
        <View style={this.props.style}>  
          <NativeButton
            color={this.props.color}
            title={this.props.title}
            onPress={this.props.onClick}
          />
        </View>
      );
    }
  }