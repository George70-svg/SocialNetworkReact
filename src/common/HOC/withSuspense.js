import React from 'react';
import Preloader from "../Preloader/preloader";

const withSuspense = (component) => {
    return (
        <React.Suspense fallback={<Preloader/>}>
            {component}
        </React.Suspense>
    )
}

export default withSuspense