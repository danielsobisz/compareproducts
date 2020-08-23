import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts, compare } from '../../actions/product'
import ProductList from '../../components/ProductList/ProductList';
import CompareTable from '../../components/CompareTable/CompareTable';


class Main extends React.Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }
    render() {
        const { products, actions } = this.props;
        const compareProducts = products.filter(product => product.compare)
        return (
            <>
                <ProductList products={products} compare={actions.compare}></ProductList>
                {compareProducts.length >= 2 ? <CompareTable products={compareProducts} /> : null}

            </>
        );
    }
}

const mapStateToProps = state => ({
    products: state.product.products
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getProducts, compare }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);