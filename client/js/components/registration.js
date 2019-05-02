'use strict';

Vue.component('registration', {
	template: `
		<div class="px-4">

			<!--content start-->
			<main role="main" class="flex-shrink-0">
				<!--row-->
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
						<week-days></week-days>

						<button type="button" class="btn btn-warning ml-3" data-toggle="modal" data-target="#record"><i class="fas fa-plus-circle"></i> Запись</button>
						<record></record>

						<div class="table-responsive mt-3">
							<schedule-table></schedule-table>
						</div>
					</div>
				</div>
				<!--row-->
			</main>
			<!--main-->
			<!--content end-->

		</div>
		`,
});
