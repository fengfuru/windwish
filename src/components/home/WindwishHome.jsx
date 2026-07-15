import React, { memo } from "react";

import HomeImg from '../../assets/HomeBanner.png';

function WindwishHome() {

    return <>
        <div class="homeImageContainer">
            <img src={HomeImg} />
        </div>
    </>
}

export default memo(WindwishHome);