import React, { Component } from 'react';

export default class HomePage extends Component {

    

    render(){
        return (
            <section>
                <section id="showcase">
                    <div className="cover">test</div>
                    <div className="container">
                        <div className="row center-xs center-sm center-md center-lg">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 showcase-content">
                                <span className="glitch1" data-text="coding">codingDIVA</span>
                                <p>a friendly place to code</p>
                            </div>
                        </div>
                    </div>		
                </section>
                
                <section id="features">
                    <div id="container">
                        <div className="row center-xs center-sm center-md center-lg">
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                            </div>
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                            </div>
                        </div>
                    </div>				
                </section>
            </section>
        )
    }
}