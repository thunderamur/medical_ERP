'use strict';


Vue.component('schedule-table', {
	data() {
		return {
			currentDate: moment(),
			doctors: [],
			doctorPostIds: [],
			timeRows: [],
			doctorRecords: [],
		}
	},
	methods: {
		changeDate(date) {
			this.currentDate = date;
			this.getRecords();
		},

		changePost(doctorPostIds) {
			this.doctorPostIds = doctorPostIds;
		},

		// TODO: Refactor this bullshit!
		getTimeRows() {
			this.timeRows = [];
			for (let i = 9; i < 18; i++) {
				let timeStr = `${i}`;
				if (i < 10) timeStr = `0${i}`;
				let time = `${timeStr}:00`;
				let	row = {
					time: time,
					cols: [],
				};
				for (let doctor of this.doctors) {
					let save_record = [];
					for (let recordId in this.doctorRecords[doctor.id]) {
						let record = this.doctorRecords[doctor.id][recordId];
						if (record.time_start >= time + ':00' &&
						 		record.time_start < time + ':30') {
							save_record = record;
						}
					}
					if (save_record.length !== 0) {
						row.cols.push(save_record);
					} else {
						row.cols.push(0);
					}
				}
				this.timeRows.push(row);


				let timeStr2 = `${i + 1}`;
				if (i < 10) timeStr2 = `0${i + 1}`;
				let time2 = `${timeStr2}:00`;

				time = `${timeStr}:30`;
				row = {
					time: time,
					cols: [],
				};
				for (let doctor of this.doctors) {
					let save_record = [];
					for (let recordId in this.doctorRecords[doctor.id]) {
						let record = this.doctorRecords[doctor.id][recordId];
						if (record.time_start >= time + ':30' &&
						 		record.time_start < time2 + ':00') {
							save_record = record;
						}
					}
					if (save_record.length !== 0) {
						row.cols.push(save_record);
					} else {
						row.cols.push(0);
					}
				}
				this.timeRows.push(row);
			}
		},

		getDoctors() {
			this.$api.get(
				'staffs/',
				this.$cookies.get('token'),
			)
			.then(data => {
				if (this.$root.checkStatus()) {
					for (let staff of data) {
						if (this.doctorPostIds.indexOf(staff.post.id) != -1) {
							staff['shortName'] = getShortName(staff);
							this.doctors.push(staff);
						}
					}
				}
			});
		},

		getRecords(){
			this.$api.get(
				'records/' + this.currentDate.format('YYYY-MM-DD') + '/day/',
				this.$cookies.get('token'),
			)
			.then(data => {
				this.$root.checkStatus();
				const doctorRecords = [];
				for (let record of data) {
					if (!doctorRecords[record.doctor.id]) {
						doctorRecords[record.doctor.id] = [];
					}
					record.patient['shortName'] = getShortName(record.patient);
					doctorRecords[record.doctor.id].push(record);
				}
				this.doctorRecords = doctorRecords;
				this.getTimeRows();
			});
		},

	},
	created() {
		this.$root.$on('dateChanged', this.changeDate);
		this.$root.$on('postChanged', this.changePost);
		this.getDoctors();
		this.getRecords();
	},
	template: `
		<table class="table table-bordered table-hover timetable">
			<thead>
				<tr>
					<th scope="col" class="time">Время<br /><small class="text-muted">&nbsp;</small></th>
					<th v-for="doctor in doctors" scope="col" class="doctor"><a href="#" title="" alt="">{{doctor.shortName}}<br><small class="text-muted">{{doctor.post.name}}</small></a></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in timeRows">
					<th scope="row">{{row.time}}</th>
					<td v-for="col in row.cols">
						<div v-if="col.patient" data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Повторный осмотр. 14:00 - 14:35 тел. 8-800-555-55-00" class="item-card list-group-item-primary w-100 border border-primary zindex-fixed" style="height:30px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">{{col.patient.shortName}}</h5>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		`,
	});
