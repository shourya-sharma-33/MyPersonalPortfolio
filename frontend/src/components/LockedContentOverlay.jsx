// components/LockedContentOverlay.jsx
import React from "react";
import { IonIcon } from "@ionic/react";
import { lockClosed } from "ionicons/icons";

const LockedContentOverlay = ({ children }) => {
    return (
        <div className="relative opacity-50 blur-sm pointer-events-none select-none locked">
            {children}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <IonIcon icon={lockClosed} className="text-9xl text-white" />
            </div>
        </div>
    );
};

export default LockedContentOverlay;
