'use strict';


Vue.component('record', {
	template: `
		<!--modal window-->
		<div class="modal fade" id="record" tabindex="-1" role="dialog" aria-labelledby="record" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">Запись на прием</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="exampleInputEmail1">ФИО</label>
							<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя пользователя">
						</div>
						<div class="form-group">
							<label for="examplePhone1">Телефон</label>
							<input type="tel" class="form-control" id="examplePhone1" aria-describedby="emailHelp" placeholder="Введите номер телефона">
						</div>
						<div class="form-group">
							<select id="inputState" class="form-control">
								<option selected>Запись...</option>
								<option>Первичный осмотр</option>
								<option>Повторный осмотр</option>
								<option>Протезирование</option>
							</select>
						</div>
						<div class="form-group">
							<select id="inputState" class="form-control">
								<option selected>Врач...</option>
								<option>Врач1</option>
								<option>Врач2</option>
								<option>Врач3</option>
								<option>Врач4</option>
							</select>
						</div>
						<p>Дата приема: 19.04.2019</p>
						<p>Начало приема:</p>
						<div class="form-row">
							<div class="form-group col-4">
								<select id="time_start" class="form-control">
									<option selected>Часы</option>
									<option>09</option>
									<option>10</option>
									<option>11</option>
									<option>12</option>
									<option>13</option>
									<option>14</option>
									<option>15</option>
									<option>16</option>
									<option>17</option>
									<option>18</option>
								</select>
							</div>
							<div class="form-group col-4">
								<select id="time_start" class="form-control">
									<option selected>Минуты</option>
									<option>00</option>
									<option>05</option>
									<option>10</option>
									<option>15</option>
									<option>20</option>
									<option>25</option>
									<option>30</option>
									<option>35</option>
									<option>40</option>
									<option>45</option>
									<option>50</option>
									<option>55</option>
								</select>
							</div>
						</div>
						<p>Окончание приема:</p>
						<div class="form-row">
							<div class="form-group col-4">
								<select id="time_start" class="form-control">
									<option selected>Часы</option>
									<option>09</option>
									<option>10</option>
									<option>11</option>
									<option>12</option>
									<option>13</option>
									<option>14</option>
									<option>15</option>
									<option>16</option>
									<option>17</option>
									<option>18</option>
								</select>
							</div>
							<div class="form-group col-4">
								<select id="time_start" class="form-control">
									<option selected>Минуты</option>
									<option>00</option>
									<option>05</option>
									<option>10</option>
									<option>15</option>
									<option>20</option>
									<option>25</option>
									<option>30</option>
									<option>35</option>
									<option>40</option>
									<option>45</option>
									<option>50</option>
									<option>55</option>
								</select>
							</div>
						</div>
						<button class="btn btn-warning">Записать</button>
					</div>
					<div class="modal-footer">
						<button class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
					</div>
				</div>
			</div>
		</div>
		<!--/modal window-->
	`,
});
