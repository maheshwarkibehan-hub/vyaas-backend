import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
    mobile: 640,
    tablet: 1024,
    desktop: 1280,
    wide: 1920,
} as const;

export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'wide';
export type Orientation = 'portrait' | 'landscape';

export function useDeviceType(): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

    useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;
            if (width < BREAKPOINTS.mobile) {
                setDeviceType('mobile');
            } else if (width < BREAKPOINTS.tablet) {
                setDeviceType('tablet');
            } else if (width < BREAKPOINTS.desktop) {
                setDeviceType('desktop');
            } else {
                setDeviceType('wide');
            }
        };

        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);
        return () => window.removeEventListener('resize', updateDeviceType);
    }, []);

    return deviceType;
}

export function useOrientation(): Orientation {
    const [orientation, setOrientation] = useState<Orientation>('portrait');

    useEffect(() => {
        const updateOrientation = () => {
            setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
        };

        updateOrientation();
        window.addEventListener('resize', updateOrientation);
        return () => window.removeEventListener('resize', updateOrientation);
    }, []);

    return orientation;
}

export function useIsMobile(): boolean {
    const deviceType = useDeviceType();
    return deviceType === 'mobile';
}

export function useIsTablet(): boolean {
    const deviceType = useDeviceType();
    return deviceType === 'tablet';
}

export function useResponsive() {
    const deviceType = useDeviceType();
    const orientation = useOrientation();

    return {
        deviceType,
        orientation,
        isMobile: deviceType === 'mobile',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop' || deviceType === 'wide',
        isPortrait: orientation === 'portrait',
        isLandscape: orientation === 'landscape',
    };
}
