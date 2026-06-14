import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  private weeklyActivity = signal<{ day: string; count: number }[]>([
    { day: 'Mon', count: 12 },
    { day: 'Tue', count: 18 },
    { day: 'Wed', count: 9 },
    { day: 'Thu', count: 14 },
    { day: 'Fri', count: 22 },
    { day: 'Sat', count: 7 },
    { day: 'Sun', count: 11 },
  ]);

  private departmentBreakdown = signal<{ department: string; count: number }[]>([
    { department: 'IT', count: 25 },
    { department: 'Math', count: 18 },
    { department: 'Physics', count: 12 },
    { department: 'Biology', count: 9 },
  ]);

  getWeeklyActivity(): { day: string; count: number }[] {
    return this.weeklyActivity();
  }

  getDepartmentBreakdown(): { department: string; count: number }[] {
    return this.departmentBreakdown();
  }
}