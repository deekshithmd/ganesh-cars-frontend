export const useDeviceCheck = () => {
    const isMobileDevice = () => {
        // Check if window is available (client-side context)
        if (typeof window === 'undefined') {
            return false;
        }
        const screenWidth = window.innerWidth;
        const maxMobileWidth = 767; // Screens less than 768px wide
        return screenWidth <= maxMobileWidth;
    };

    const isTabletDevice = () => {
        // Check if window is available (client-side context)
        if (typeof window === 'undefined') {
            return false;
        }
        const screenWidth = window.innerWidth;
        const minTabletWidth = 768;
        const maxTabletWidth = 1024;
        return screenWidth >= minTabletWidth && screenWidth <= maxTabletWidth;
    };

    const isDesktopDevice = () => {
        return !isMobileDevice() && !isTabletDevice();
    };

    return { isMobileDevice, isTabletDevice, isDesktopDevice };
};