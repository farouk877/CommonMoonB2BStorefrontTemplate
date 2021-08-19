import React from 'react';
import Link from 'next/link';

const CommonMoonHeader = (props) => {
    return (
        <section className="commonMoon-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="commonMoon-content">
                            <h2 className="commonMoon__title">{ props.title }</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonMoonHeader;
