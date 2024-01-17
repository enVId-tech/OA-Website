type CalendarEvent = {
    name: string,
    date: Date
}

class SchoolCalendar {
    holidays: CalendarEvent[] = [];
    oneDayBreaks: CalendarEvent[] = [];
    summerTime: { start: Date; end: Date; } | null = null;
    semesters: { start: Date; end: Date; }[] = [];

    addHoliday(name: string, date: Date) {
        this.holidays.push({ name, date });
    }

    addOneDayBreak(name: string, date: Date) {
        this.oneDayBreaks.push({ name, date });
    }

    setSummerTime(start: Date, end: Date) {
        this.summerTime = { start, end };
    }

    addSemester(start: Date, end: Date) {
        this.semesters.push({ start, end });
    }
}

