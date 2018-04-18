/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const src = require("./attribution/kefaro-horizontal.png");
require('./footer/footer.css');

class Footer extends React.Component {
    render() {
        return (
            <div className="ms-footer col-md-12">
            <div>
                <a target="_blank" href="http://www.kefaro.com.br/">
                    <img src={src} width="140" title="Kefaro" alt="Kefaro" />
                </a>
                <br/><br/></div>
                {/*GeoSolutions S.a.s. | Via Poggio alle Viti, 1187 - 55054 Massarosa (Lucca) - Italy*/}
                {/*contato@kefaro.com.br | Tel: +55 62 99999-9999 | Fax: +39 0584 1660272*/}
                contato@kefaro.com.br
            </div>
        );
    }
}

module.exports = {
    FooterPlugin: Footer
};
