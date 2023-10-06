function checkInClass(): string {
    const startStringsArray: string[] = [
        "School's in session!",
        "School's out of session!",
        "Have a great weekend!",
    ];

    const date: Date = new Date();
    const day: number = date.getDay();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();

    console.log(day, hour, minute);

    if (day >= 1 && day <= 5) {
        if (day === 1) {
            if (hour >= 9 && hour <= 15) {
                if (hour === 9) {
                    if (minute >= 15) {
                        return startStringsArray[0];
                    } else {
                        return startStringsArray[1];
                    }
                } else if (hour === 15) {
                    if (minute <= 20) {
                        return startStringsArray[0];
                    } else {
                        return startStringsArray[1];
                    }
                } else {
                    return startStringsArray[0];
                }
            }
        } else {
            if (hour >= 8 && hour <= 15) {
                if (hour === 8) {
                    if (minute >= 30) {
                        return startStringsArray[0];
                    } else {
                        return startStringsArray[1];
                    }
                } else if (hour === 15) {
                    if (minute <= 20) {
                        return startStringsArray[0];
                    } else {
                        return startStringsArray[1];
                    }
                } else {
                    return startStringsArray[0];
                }
            } else {
                return startStringsArray[1];
            }
        }
    } else {
        return startStringsArray[2];
    }
    return startStringsArray[1];
}

export default checkInClass;