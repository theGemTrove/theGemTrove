;'use strict';
import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTreasureChest} 	 from "@fortawesome/pro-duotone-svg-icons";

import './Brand.scss';
const Brand = () => { 'use strict';
	const brandInfo = Object.seal({
		title: 'The GemTrove'
	});
	return (

		<div className="brand">
			<div>
				<FontAwesomeIcon icon={faTreasureChest} className="gemArk" title={brandInfo.title} />
			</div>
			<div>
				<h1 className="brandName">{brandInfo.title}</h1>
			</div>
		</div>

	);
}

export default Brand;