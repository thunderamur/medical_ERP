'use strict';


Vue.component('schedule-table', {
	data() {
		return {
			currentDate: moment(),
			urls: {
				'records': 'records/',
			},
		}
	},
	methods: {
		changeDate(date) {
			this.currentDate = date;
			this.showTable();
		},
		showTable(){
			this.$api.request(
				this.urls.records + this.currentDate.format('YYYY-MM-DD') + '/day/',
				'get',
				{},
				this.$cookies.get('token'),
			)
			.then(data => {
				this.$root.$emit('checkStatus');
				if(data){
					for (let record of data) {
						console.log(record.doctor.post);
					}
				}
			});
		},
	},
	mounted() {
		this.$root.$on('dateChanged', this.changeDate);
		this.showTable();
	},
	template: `
		<table class="table table-bordered table-hover timetable">
			<thead>
				<tr>
					<th scope="col" class="time">Время<br /><small class="text-muted">&nbsp;</small></th>
					<th scope="col" class="doctor"><a href="#" title="" alt="">Врач 1 <br /><small class="text-muted">Терапевт</small></a></th>
					<th scope="col" class="doctor"><a href="#" title="" alt="">Врач 2<br /><small class="text-muted">Терапевт</small></a></th>
					<th scope="col" class="doctor"><a href="#" title="" alt="">Врач 3<br /><small class="text-muted">Ортопед</small></a></th>
					<th scope="col" class="doctor"><a href="#" title="" alt="">Врач 4<br /><small class="text-muted">Ортопед</small></a></th>
					<th scope="col" class="doctor"><a href="#" title="" alt="">Врач 5<br /><small class="text-muted">Хирург</small></a></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">09:00</th>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Первичный осмотр. 09:00 - 09:50 тел. 8-800-555-55-00" class="item-card list-group-item-warning w-100 border border-warning zindex-fixed" style="height:50px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 16</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Повторный осмотр. 09:00 - 09:50 тел. 8-800-555-55-00" class="item-card list-group-item-primary w-100 border border-primary zindex-fixed" style="height:50px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 5</h5>
							</div>
						</div>
					</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">09:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">10:00</th>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 10:00 - 11:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:74px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 1</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">10:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">11:00</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 11:00 - 11:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 2</h5>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th scope="row">11:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">12:00</th>
					<td></td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 12:00 - 12:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 3</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">12:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">13:00</th>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 13:00 - 14:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:74px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 4</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">13:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">14:00</th>
					<td></td>
					<td></td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Повторный осмотр. 14:00 - 14:35 тел. 8-800-555-55-00" class="item-card list-group-item-primary w-100 border border-primary zindex-fixed" style="height:30px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 6</h5>
							</div>
						</div>
					</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">14:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">15:00</th>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 15:00 - 15:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 8</h5>
							</div>
						</div>
					</td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 20:30 - 21:00 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:23px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 16</h5>
							</div>
						</div>
					</td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 15:00 - 15:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 7</h5>
							</div>
						</div>
					</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">15:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">16:00</th>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 16:00 - 16:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 10</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 16:00 - 17:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:80px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 9</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 20:00 - 20:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 15</h5>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th scope="row">16:30</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">17:00</th>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 17:00 - 17:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 11</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Протезирование. 20:00 - 20:30 тел. 8-800-555-55-00" class="item-card list-group-item-success w-100 border border-success zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 14</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">17:30</th>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Повторный осмотр. 18:00 - 19:10 тел. 8-800-555-55-00" class="item-card list-group-item-primary w-100 border border-primary zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 12</h5>
							</div>
						</div>
					</td>
					<td></td>
					<td>
						<div data-toggle="tooltip" data-placement="top" title="Фамилия Имя Отчество Повторный осмотр. 20:00 - 21:00 тел. 8-800-555-55-00" class="item-card list-group-item-primary w-100 border border-primary zindex-fixed" style="height:45px;">
							<div class="text-center mx-auto">
								<h5 class="m-0">ФИО 13</h5>
							</div>
						</div>
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>
		`,
	});
