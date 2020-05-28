import React from 'react';
import { Animated, View } from 'react-native'
import { Dimensions } from 'react-native';

class WidgetManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            //0 is top, height is bottom
            slideUpAnim: new Animated.Value(Dimensions.get('window').height)
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.activeWidget != newProps.activeWidget) {
            console.log(newProps.activeWidget);
            this.expandWidget();
        }
    }

    expandWidget = () => {
        Animated.timing(
            this.state.slideUpAnim,
            {
                toValue: 0,
                duration: 500
            }
        ).start();
    }

    shrinkWidget = () => {
        Animated.timing(
            this.state.slideUpAnim,
            {
                toValue: Dimensions.get('window').height,
                duration: 500
            }
        ).start(() => this.closeWidget());
    }

    closeWidget = () => {
        this.props.destroyActiveWidget();
    }

    render() {
        return (
            (!!this.props.activeWidget)
                ?
                <Animated.View
                    style={{
                        transform: [{ translateY: this.state.slideUpAnim }], bottom: 0, left: 0, right: 0, position: 'absolute', zIndex: 100
                    }} >
                    <this.props.activeWidget
                        shrinkWidget={this.shrinkWidget}></this.props.activeWidget>
                </Animated.View>
                :
                <></>
        );
    }
}

export default WidgetManager;