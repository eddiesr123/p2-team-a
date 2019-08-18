import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
import CatalogCard from './CatalogCard';
import { ICatalogState, IState } from '../reducers';
import { updateCartCount } from '../actions/navbar.actions';
import { catalogActions } from '../actions/catalog.actions';
import { connect } from 'react-redux';
import Axios from 'axios';
import itemsMap from '../images/items-map';
import { getProducts } from '../actions/cartActions';
//import '../css/browsercss';
export interface ICatalogProps {
    catalogCard: ICatalogState,
    updateSuit: (image: String) => void,
    updateMask: (image: String) => void,
    updateGloves: (image: String) => void;
    masks: any,
    gloves: any,
    suits:any,
}
//axios.data
/**
 * pathToThumb= {itemsMap[allSuits[0].imgPath[1]]}
                                            thumbObj={itemsMap[require(allSuits[0].imgPath[1])]}
                                            pathToImg={itemsMap[allSuits[0].imgPath[0]]} 
                                            imgObj={itemsMap[require(allSuits[0].imgPath[0])]}
 */
export class Catalog extends React.Component<any, ICatalogProps> {
    /*async componentDidMount() {
        let masksRes = await Axios.get('http://localhost:8080/items/type/mask');
        let masks = masksRes.data
        let glovesRes = await Axios.get('http://localhost:8080/items/type/gloves');
        let gloves = await glovesRes.data;
        let suitsRes = await Axios.get('http://localhost:8080/items/type/suit');
        let suits = suitsRes.data;
        this.setState({ masks:masks.slice(0,4), gloves:gloves.slice(0,4), suits:suits.slice(0,4)});
        console.log(this.state.gloves[0].name);
    }*/
    componentDidMount() {
        if (this.props.stateCheck) {
          const url = `http://localhost:8080/items/`;
          Axios.get(url).then(payload => {
            console.log(payload);
    
            const items = payload.data.map((item: any) => {
              return item;
            });
            console.log(items);
            this.props.getProducts(items.slice(0, 9));
    
          });
        }
      }
    render() {
        let allGloves = this.props.gloves;
        let allMasks= this.props.masks;
        let allSuits=this.props.suits;
        console.log(allMasks);
        
        return (
        <div className="container card-container">
            {!this.props.stateCheck && 
            <div className="row" >
                <div className="col-12">
                    <div className="card tab-card">
                        <div className="card-header tab-card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true"><i className="fas fa-tshirt"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false"><i className="fas fa-mask"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false"><i className="fas fa-mitten"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active p-12" id="one" role="tabpanel" aria-labelledby="one-tab">
                                <div className="container">
                                <h5 className="card-title no-pad" >Bodysuits</h5>
                                    <div className="row f-box">
                                        <CatalogCard 
                                            name= {allSuits[1].name}
                                            price= {allSuits[1].price} updateDisplay={this.props.updateSuit} 
                                            thumbObj={itemsMap[allSuits[1].imgPath][1]}
                                            pathToImg={itemsMap[allSuits[1].imgPath][0]} 
                                            itemId = {allSuits[1].id}
                                            />
                                        <CatalogCard 
                                            name= {allSuits[0].name}
                                            price= {allSuits[0].price} updateDisplay={this.props.updateSuit} 
                                            thumbObj={itemsMap[allSuits[0].imgPath][1]}
                                            pathToImg={itemsMap[allSuits[0].imgPath][0]}
                                            itemId = {allSuits[0].id}  />
                                        <CatalogCard 
                                            name= {allSuits[2].name}
                                            price= {allSuits[2].price} updateDisplay={this.props.updateSuit} 
                                            thumbObj={itemsMap[allSuits[2].imgPath][1]}
                                            pathToImg={itemsMap[allSuits[2].imgPath][0]}
                                            itemId = {allSuits[2].id}  />
                                        <CatalogCard 
                                            name= {allSuits[3].name}
                                            price= {allSuits[3].price} updateDisplay={this.props.updateSuit} 
                                            thumbObj={itemsMap[allSuits[3].imgPath][1]}
                                            pathToImg={itemsMap[allSuits[3].imgPath][0]}
                                            itemId = {allSuits[3].id} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade p-12" id="two" role="tabpanel" aria-labelledby="two-tab">
                                <div className="container">
                                    <h5 className="card-title no-pad" >Masks</h5>
                                    <div className="row f-box">
                                        <CatalogCard 
                                            name={allMasks[0].name}
                                            price = {allMasks[0].price} updateDisplay = {this.props.updateMask}
                                            thumbObj = {itemsMap[allMasks[0].imgPath][1]}
                                            pathToImg = {itemsMap[allMasks[0].imgPath][0]}
                                            itemId = {allMasks[0].id} 
                                            />
                                        <CatalogCard 
                                            name={allMasks[1].name}
                                            price = {allMasks[1].price} updateDisplay = {this.props.updateMask}
                                            thumbObj = {itemsMap[allMasks[1].imgPath][1]}
                                            pathToImg = {itemsMap[allMasks[1].imgPath][0]}
                                            itemId = {allMasks[1].id} />
                                        <CatalogCard 
                                            name={allMasks[2].name}
                                            price = {allMasks[2].price} updateDisplay = {this.props.updateMask}
                                            thumbObj = {itemsMap[allMasks[2].imgPath][1]}
                                            pathToImg = {itemsMap[allMasks[2].imgPath][0]}
                                            itemId = {allMasks[2].id}  />
                                        <CatalogCard 
                                            name={allMasks[3].name}
                                            price = {allMasks[3].price} updateDisplay = {this.props.updateMask}
                                            thumbObj = {itemsMap[allMasks[3].imgPath][1]}
                                            pathToImg = {itemsMap[allMasks[3].imgPath][0]}
                                            itemId = {allMasks[3].id}  />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade p-12" id="three" role="tabpanel" aria-labelledby="three-tab">
                                <div className="container">
                                <h5 className="card-title no-pad glove-align">Gloves</h5>
                                    <div className="row f-box">
                                    <CatalogCard 
                                            name={allGloves[0].name}
                                            price = {allGloves[0].price} updateDisplay = {this.props.updateGloves}
                                            thumbObj = {itemsMap[allGloves[0].imgPath][1]}
                                            pathToImg = {itemsMap[allGloves[0].imgPath][0]}
                                            itemId = {allGloves[0].id}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        )
    }
}

// read state-store values into state-component values
const mapStateToProps = (state: IState) => {
    return {
        suits: state.cart.items.slice(0,4),
        gloves: state.cart.items.slice(4,5),
        masks: state.cart.items.slice(5,9),
        catalog: state.catalog,
        addedItems: state.cart.addedItems,
        total: state.cart.totalItems,
        stateCheck: state.cart.stateCheck
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCartCount: updateCartCount,
        updateSuit: (suit: any) => { dispatch(catalogActions.updateSuit(suit)) },
        updateGloves: (gloves: any) => { dispatch(catalogActions.updateGloves(gloves)) },
        updateMask: (mask: any) => { dispatch(catalogActions.updateMask(mask)) },
        getProducts: (items: any) => { dispatch(getProducts(items)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
