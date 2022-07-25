import React, { useState, useEffect } from "react";
import "./ProfileLayout.css"

import MobileProfileHeader from "../../../components/Headers/MobileProfileHeader/MobileProfileHeader";

const ProfileLayout = (props) => {
    return (
        <div className="body">
            {/* DESKTOP LAYOUT */}
            <div className="Desktop-view">If Desktop</div>
            {/* MOBILE LAYOUT */}
            <div className="Mobile-view">
            <MobileProfileHeader />
            </div>
        </div>
    );

}

export default ProfileLayout;
