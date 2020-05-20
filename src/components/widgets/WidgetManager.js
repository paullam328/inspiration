import React from 'react';

class WidgetManager extends React.Component {
    render() {
        return (
            (!!this.props.activeWidget)
                ?
                <this.props.activeWidget></this.props.activeWidget>
                :
                <></>
        );
    }
}

export default WidgetManager;