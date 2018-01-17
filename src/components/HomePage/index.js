import React, { Component } from 'react';
import Contact from '../../components/Contact';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <section id="showcase">
                    <div className="showcase-container">
                        <div className="showcase-content">
                            <span className="glitch1" data-text="coding">
                                codingDIVA
                            </span>
                            <p>a friendly place to code</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
