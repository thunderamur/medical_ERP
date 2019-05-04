'use strict';


Vue.component('week-days', {
	data() {
		return {
			currentDate: moment(),
			weekDay: 0,
			week: [],
		}
	},
	methods: {
		changeDate(date) {
			this.currentDate = date;
			this.createWeek();
		},
		showDay(dateStr){
			this.$root.$emit('dateChanged', moment(dateStr));
		},
		createWeek(){
			this.weekDay = this.currentDate.weekday();
			let firstDayWeek = moment(this.currentDate).subtract(
				this.currentDate.weekday(), 'days'
			);
			let new_day = firstDayWeek;
			this.week = [];
			for (let i = 0; i < 7; i++) {
				let day = {
					'dateStr': new_day.format('YYYY-MM-DD'),
					'weekDay': new_day.format('dddd'),
					'current': new_day.format('YYYY-MM-DD') == this.currentDate.format('YYYY-MM-DD'),
				}
				this.week.push(day);
				new_day = new_day.add(1, 'days');
			}
		},
	},
	mounted(){
		this.createWeek();
		this.$root.$on('dateChanged', this.changeDate);
	},
	template: `
		<span class="btn-group">
			<button type="button" class="btn text-capitalize"
				v-for="day in week"
				@click="showDay(day.dateStr)"
				:class="{'btn-primary': day.current, 'btn-secondary': !day.current}">
					{{day.weekDay}}
			</button>
		</span>
	`,
});
