import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
import CatalogCard from './CatalogCard';
import { ICatalogState, IState } from '../reducers';
import { updateCartCount } from '../actions/navbar.actions';
import { catalogActions } from '../actions/catalog.actions';
import { connect } from 'react-redux';
import Axios from 'axios';
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
export class Catalog extends React.Component<any, ICatalogProps> {
    async componentDidMount() {
        let masksRes = await Axios.get('http://localhost:8080/items/type/mask');
        let masks = masksRes.data
        let glovesRes = await Axios.get('http://localhost:8080/items/type/gloves');
        let gloves = await glovesRes.data;
        let suitsRes = await Axios.get('http://localhost:8080/items/type/suit');
        let suits = suitsRes.data;
        this.setState({ masks:masks.slice(0,4), gloves:gloves.slice(0,4), suits:suits.slice(0,4)});
        console.log(suits);
    }
    /**
     handleClick = (id: any)=>{
        this.props.addToCart(id);
    }

    componentDidMount() {
        if(!this.props.stateCheck) {
            const url = `http://localhost:8080/items/`;
            Axios.get(url).then(payload => {
                console.log(payload);

                const items = payload.data.map((item: any) => {
                    return item;
                });
                console.log(items);
                this.props.getProducts(items.slice(0,6));
            })
        }
    }
     */
    render() {
        return (<div className="container card-container">
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
                                    <div className="row f-box">
                                        <CatalogCard 
                                            name="Doomsday Blue"
                                            price="500" updateDisplay={this.props.updateSuit} 
                                            pathToThumb= "../images/thumbnails/bodysuit-blue-female.png"
                                            thumbObj={require('../images/thumbnails/bodysuit-blue-female.png')}
                                            pathToImg={'../images/alphas/bodysuit-blue-female.png'} 
                                            imgObj={require('../images/alphas/bodysuit-blue-female.png')} />
                                        <CatalogCard 
                                            name="Suit of Shadow"
                                            price="200"
                                            pathToThumb= "../images/thumbnails/bodysuit-black-female.png"
                                            thumbObj={require('../images/thumbnails/bodysuit-black-female.png')}
                                            updateDisplay={this.props.updateSuit} 
                                            pathToImg={'../images/alphas/bodysuit-black-female.png'} 
                                            imgObj={require('../images/alphas/bodysuit-black-female.png')} />
                                        <CatalogCard 
                                            name="Suit of Flames"
                                            price="120"
                                            pathToThumb= "../images/thumbnails/bodysuit-red-female.png"
                                            thumbObj={require('../images/thumbnails/bodysuit-red-female.png')}
                                            updateDisplay={this.props.updateSuit} 
                                            pathToImg={'../images/alphas/bodysuit-red-female.png'} 
                                            imgObj={require('../images/alphas/bodysuit-red-female.png')} />
                                        <CatalogCard 
                                            name="Green Mamba"
                                            price="50"
                                            pathToThumb= "../images/thumbnails/bodysuit-green-female.png"
                                            thumbObj={require('../images/thumbnails/bodysuit-green-female.png')}
                                            updateDisplay={this.props.updateSuit} 
                                            pathToImg={'../images/alphas/bodysuit-green-female.png'} 
                                            imgObj={require('../images/alphas/bodysuit-green-female.png')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade p-12" id="two" role="tabpanel" aria-labelledby="two-tab">
                                <div className="container">
                                    <div className="row f-box">
                                        <CatalogCard 
                                            name="Doomsday Blue"
                                            price="500"
                                            pathToThumb= "../images/thumbnails/mask-blue-female.png"
                                            thumbObj={require('../images/thumbnails/mask-blue-female.png')}
                                            updateDisplay={this.props.updateMask} 
                                            pathToImg={'../images/alphas/mask-blue-female.png'} 
                                            imgObj={require('../images/alphas/mask-blue-female.png')} />
                                        <CatalogCard 
                                            name="Shadow Mask"
                                            price="500"
                                            pathToThumb= "../images/thumbnails/mask-black-female.png"
                                            thumbObj={require('../images/thumbnails/mask-black-female.png')}
                                            updateDisplay={this.props.updateMask} 
                                            pathToImg={'../images/alphas/mask-black-female.png'} 
                                            imgObj={require('../images/alphas/mask-black-female.png')} />
                                        <CatalogCard 
                                            name="Mamba Mask"
                                            price="500"
                                            pathToThumb= "../images/thumbnails/mask-green-female.png"
                                            thumbObj={require('../images/thumbnails/mask-green-female.png')}
                                            updateDisplay={this.props.updateMask} 
                                            pathToImg={'../images/alphas/mask-green-female.png'} 
                                            imgObj={require('../images/alphas/mask-green-female.png')} />
                                        <CatalogCard 
                                            name="Mask of Fury"
                                            price="500"
                                            pathToThumb= "../images/thumbnails/mask-red-female.png"
                                            thumbObj={require('../images/thumbnails/mask-red-female.png')}
                                            updateDisplay={this.props.updateMask} 
                                            pathToImg={'../images/alphas/mask-red-female.png'} 
                                            imgObj={require('../images/alphas/mask-red-female.png')} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade p-12" id="three" role="tabpanel" aria-labelledby="three-tab">
                                <div className="container">
                                    <div className="row f-box">
                                        <CatalogCard 
                                            name="Super Gloves"
                                            price="500"
                                            pathToThumb= "../images/thumbnails/gloves-female.png"
                                            thumbObj={require('../images/thumbnails/gloves-female.png')}
                                            updateDisplay={this.props.updateGloves} 
                                            pathToImg={'../images/alphas/gloves-female.png'} 
                                            imgObj={require('../images/alphas/gloves-female.png')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

// read state-store values into state-component values
const mapStateToProps = (state: IState) => {
    return {
        catalog: state.catalog,
        addedItems: state.cart.addedItems,
        total: state.cart.totalItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCartCount: updateCartCount,
        updateSuit: (suit: any) => { dispatch(catalogActions.updateSuit(suit)) },
        updateGloves: (gloves: any) => { dispatch(catalogActions.updateGloves(gloves)) },
        updateMask: (mask: any) => { dispatch(catalogActions.updateMask(mask)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
