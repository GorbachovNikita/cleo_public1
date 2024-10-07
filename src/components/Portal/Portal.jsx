import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ id, children }) => {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        let portalContainer = document.getElementById(id);

        if (!portalContainer) {
            portalContainer = document.createElement('div');
            portalContainer.setAttribute('id', id);
            document.body.appendChild(portalContainer);
        }

        setContainer(portalContainer);

        return () => {
            // Очистите контейнер, если он был создан здесь
            if (portalContainer) {
                document.body.removeChild(portalContainer);
            }
        };
    }, [id]);

    return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;