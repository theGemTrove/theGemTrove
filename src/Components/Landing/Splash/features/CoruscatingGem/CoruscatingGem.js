;'use strict';
import React from 'react';

// Font Awesome
import { FontAwesomeIcon } 	from '@fortawesome/react-fontawesome';
import { faGem } from "@fortawesome/pro-duotone-svg-icons";

import './CoruscatingGem.scss';
const CoruscatingGem = () => { 'use strict';
	return (
		<div className="gemContainer">
			<FontAwesomeIcon icon={faGem} className="gem" fixedWidth/>
			<div className="coruscate" />
		</div>
	);
}

export default CoruscatingGem;