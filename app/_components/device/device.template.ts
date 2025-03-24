/**
 * @description - This function checks if the user is using a mobile device or a desktop device
 * @param {boolean} device - A boolean value that makes the function return a device or a browser
 * @returns {string} - The type of device the user is using
 */
function globalType(type: string): string {
    const browserType = navigator.userAgent;

    if (type === "device") {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(browserType);

        if (isMobile) {
            return "mobile";
        }

        return "desktop";
    } else if (type === "browser") {
        switch (true) {
            case /Chrome/i.test(browserType):
                return "Chrome";
            case /Firefox/i.test(browserType):
                return "Firefox";
            case /Safari/i.test(browserType):
                return "Safari";
            case /Opera/i.test(browserType):
                return "Opera";
            case /MSIE|Trident/i.test(browserType):
                return "Internet Explorer";
            case /Edge/i.test(browserType):
                return "Edge";
            default:
                return "Unknown";
        }
    }

    return "Unknown Global Type";
}

export default globalType;