import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/General/Spinner';
import Order from '../../components/Order';
import * as actions from '../../redux/actions/orderAction';
class OrderPage extends React.Component {



    componentDidMount() {
        this.props.loadOrders(this.props.userId);
        // this.setState({
        //     loading: true
        // });
        // axios.get('/orders.json').then(response => {
        //     this.setState({
        //         orders: Object.entries(response.data).reverse()
        //     });
        // }).catch(err => console.log(err)).finally(() => {
        //     this.setState({
        //         loading: false
        //     })
        // });

    }

    render() {

        return <div>
            {this.props.loading ? (
                <Spinner />
            ) : (
                    this.props.orders.map(el => <Order key={el[0]} order={el[1]} />)
                )}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        userId: state.signupReducer.userId,
        //token: state.signupReducer.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: (userId) => dispatch(actions.loadOrders(userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);