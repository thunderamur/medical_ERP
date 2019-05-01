'use strict';

Vue.component('calendar', {
	data() {
		return {
			currentDate: moment(),
			currentMonth: moment(),
			month: '',
			year: 0,
			calendar: [],
		}
	},
	methods: {
		getCalendar(current=moment()){
			current.locale('ru');

			this.current = current;
			this.month = current.format('MMMM');
			this.year = current.format('YYYY');

			let month = current.month();
			let year = current.year();
			let firstDayCurrMonth = moment([year, month, 1]);
			let weekDay = firstDayCurrMonth.weekday();
			let firstDayCalendar = firstDayCurrMonth.subtract(weekDay, 'days');

			let calendar = [];
			let new_day = firstDayCalendar;
			let counter = 0;
			for (let i = 1; i <= 5; i++) {
				let week = [];
				for (let j = 1; j <= 7; j++) {
					counter++;
					let digit = new_day.date()
					let day = {
						'digit': digit,
						'muted': digit > 7 && counter < 7 || digit <= 7 && counter > 28,
						'dateStr': new_day.format('YYYY-MM-DD'),
					}
					week.push(day);
					new_day = new_day.add(1, 'days');
				}
				calendar.push(week);
			}
			this.calendar = calendar;
		},
		nextMonth(){
			this.getCalendar(this.current.add(1, 'month'));
		},
		prevMonth(){
			this.getCalendar(this.current.subtract(1, 'month'));
		},
		showDay(dateStr){
			this.currentDate = moment(dateStr);
		}
	},
	mounted() {
		this.getCalendar();
	},
	template: `
		<table class="table table-borderless table-sm text-center">
			<thead>
				<tr>
					<th colspan="7" class="text-center">
						<span class="btn-group">
							<div class="btn pointer" @click="prevMonth()"><i class="fa fa-angle-left"></i></div>
							<div class="btn text-capitalize">{{month}} {{year}}</div>
							<div class="btn pointer" @click="nextMonth()"><i class="fa fa-angle-right"></i></div>
						</span>
					</th>
				</tr>
				<tr>
					<th>Пн</th>
					<th>Вт</th>
					<th>Ср</th>
					<th>Чт</th>
					<th>Пт</th>
					<th>Сб</th>
					<th>Вс</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="week in calendar">
					<td v-for="day in week" :class="{'text-muted': day.muted, 'bg-primary text-white': currentDate.format('YYYY-MM-DD') == day.dateStr}">
						<div class="pointer" @click="showDay(day.dateStr)">{{day.digit}}</div>
					</td>
				</tr>
			</tbody>
		</table>
	`,
});
