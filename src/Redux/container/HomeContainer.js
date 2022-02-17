import { connect } from "react-redux";
import Home from '../components/home';
import {addToCart} from '../services/Action/action';


const mapStateToProps= state =>({

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)