'use strict';

Vue.component('registration', {
	template: `
		<div class="px-4">

			<!--header start-->
			<header class=" hover ">
				<div class="row bg-white border-bottom">
					<div class="container">
						<h4 class="my-0 mr-md-auto font-weight-normal float-left">Название компании</h4>
						<nav class="float-right">
							<ol class="breadcrumb-med">
								<li class="breadcrumb-item"><a href="#">Главная</a></li>
								<li class="breadcrumb-item active" aria-current="page">Дневное расписание</li>
							</ol>
						</nav>
						<div class="clearfix"></div>
					</div>
				</div>
				<i class="fas fa-arrow-down float-right mr-5 text-primary"></i>
			</header>
			<!--header end-->
			<!--content start-->
			<main role="main" class="flex-shrink-0">
				<div class="row mt-3">
					<div class="col-12 col-md-2">

						<div class="border-bottom text-right">
							<user-info></user-info>
						</div>

						<div class=" border-bottom">
							<calendar></calendar>
						</div>

						<div class="border-bottom py-3">
							<post-radios></post-radios>
						</div>

					</div>

					<div class="col-12 col-md-10 ">
						<div class="w-100">
							<span class="btn-group">
								<button type="button" class="btn btn-primary ">Понедельник</button>
								<button type="button" class="btn btn-secondary ">Вторник</button>
								<button type="button" class="btn btn-secondary ">Среда</button>
								<button type="button" class="btn btn-secondary ">Четверг</button>
								<button type="button" class="btn btn-secondary ">Пятница</button>
								<button type="button" class="btn btn-secondary ">Суббота</button>
							</span>
							<button type="button" class="btn btn-warning ml-3" data-toggle="modal" data-target="#entry"><i class="fas fa-plus-circle"></i> Запись</button>

							<div class="modal fade" id="entry" tabindex="-1" role="dialog" aria-labelledby="entry" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Запись на прием</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											<form>
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
												<button type="submit" class="btn btn-warning">Записать</button>
											</form>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
										</div>
									</div>
								</div>
							</div>

						</div>
						<!--buttons-->
						<br />
						<div class="table-responsive">
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
						</div>
					</div>

				</div>
				<!--row-->
			</main>
			<!--main-->
			<!--content end-->
			<!--footer start-->
			<footer class="footer mt-auto py-3 border-top">
				<div class="container">
					<span class="text-muted">Название компании &COPY; medical_erp 2019</span>
				</div>
			</footer>
			<!--footer end-->

		</div>
		`,
});
