import React,{useEffect} from 'react';
import Link from 'next/link';
import renderHTML from 'react-render-html';

// import Client from 'shopify-buy';
// import ShopifyBuy from '@shopify/buy-button-js'

const ShopifyBuyButton = () => {

    
    var Hello = React.createClass({

        getInitialState: function() {
          return {showExternalHTML: false};
        },
        
        render: function() {
          return (
              <div>
              <button onClick={this.toggleExternalHTML}>Toggle Html</button>
              {this.state.showExternalHTML ? <div>
                <div dangerouslySetInnerHTML={this.createMarkup()} ></div>
              </div> : null}
            </div>
          );
        },
        
        toggleExternalHTML: function() {
          this.setState({showExternalHTML: !this.state.showExternalHTML});
        },
        
        createMarkup: function() { 
          return {__html: '<div class="ext">Hello!</div>'};
        }
      
    });
    
    ReactDOM.render(
        <Hello name="World" />,
        document.getElementById('collection-component-1593737701158')
        );


    return (
        <section className="gallery-area2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <Link href="/item-detail">
                            <img src="/images/gallery-img7.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link href="/item-detail">
                            <img src="/images/gallery-img7.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link href="/item-detail">
                            <img src="/images/gallery-img7.jpg" alt="" />
                        </Link>
                    </div>
                    <div id="collection-component-1593737701158">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopifyBuyButton;


  





