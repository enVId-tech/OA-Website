// type CalendarEvent = {
//     name: string,
//     date: Date
// }

// class SchoolCalendar {
//     holidays: CalendarEvent[] = [];
//     oneDayBreaks: CalendarEvent[] = [];
//     summerTime: { start: Date; end: Date; } | null = null;
//     semesters: { start: Date; end: Date; }[] = [];

//     addHoliday(name: string, date: Date) {
//         this.holidays.push({ name, date });
//     }

//     addOneDayBreak(name: string, date: Date) {
//         this.oneDayBreaks.push({ name, date });
//     }

//     setSummerTime(start: Date, end: Date) {
//         this.summerTime = { start, end };
//     }

//     addSemester(start: Date, end: Date) {
//         this.semesters.push({ start, end });
//     }
// }

function checkInClass(): string {
    // const calendar = new SchoolCalendar();
    
    const startStringsArray: string[] = [
        "School's in session!",
        "School's out of session!",
        "Have a great weekend!",
        "Have a a great summer!",
        "Have a great break!",
        "Have a great holiday!"
    ];

    const date: Date = new Date();
    const day: number = date.getDay();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();

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