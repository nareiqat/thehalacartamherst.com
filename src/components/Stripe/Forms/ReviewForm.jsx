import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import CartItem from './../../Cart/CartItem';

class ServiceForm extends React.Component {
    // constructor(props){
    //     super(props)

    // }

    render(){
        
        return <>
            <Grid item xs={12}>
                <Typography variant="h6">Review</Typography>
            </Grid>
            {/* <Grid>
            {this.props.cart?.line_items?.map((lineItem) => (
              <CartItem
                item={lineItem}
                key={lineItem.id}
                {...this.props}
                className="cart__inner"
              />
          ))} */}
            {/* </Grid> */}
            
        </>
    }
}

export default ServiceForm;