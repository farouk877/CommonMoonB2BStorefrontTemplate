import { PayPalButton } from "react-paypal-button-v2";
import React, {Component} from 'react';

export default class ExamplePaypal extends Component {
        

   
        // render() {
        //   return (
        //     <PayPalButton
        //       // amount = {this.props.amount}
        //       amount = "11.00"
        //       // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        //       onSuccess={(details, data) => {
        //         console.log("Transaction completed by " + details.payer.name.given_name);
       
        //         // OPTIONAL: Call your server to save the transaction
        //         // return fetch("/paypal-transaction-complete", {
        //         //   method: "post",
        //         //   body: JSON.stringify({
        //         //     orderId: data.orderID
        //         //   })
        //         // });
        //       }}
        //       options={{
        //         clientId: "AXY9h5mWwerWSUJHRyQkGAqCBFd-AoHmHgHPf7OisSg3Ki2WtNQxiuT0Gmt3WT_4amdlQKhXapJZID8_"
        //       }}
        //     />
            
        //   );
        // }

        render() {
          const { amount, currency} = this.props;
            return (
                <PayPalButton
                  amount={amount}
                  currency={currency}
                  onSuccess={(details, data) => {
                            console.log("Transaction completed by " + details.payer.name.given_name);
                    }}
                  options={{
                    clientId: "AXY9h5mWwerWSUJHRyQkGAqCBFd-AoHmHgHPf7OisSg3Ki2WtNQxiuT0Gmt3WT_4amdlQKhXapJZID8_"
                  }}
              />
            );
        }

      }