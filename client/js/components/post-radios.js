'use strict';


Vue.component('post-radios', {
	template: `
		<div>
			<h6 class="font-weight-normal">Выбор врачей:</h6>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
				<label class="form-check-label" for="exampleRadios1">
					Все
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
				<label class="form-check-label" for="exampleRadios1">
					Терапевты
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
				<label class="form-check-label" for="exampleRadios1">
					Ортопеды
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
				<label class="form-check-label" for="exampleRadios1">
					Хирурги
				</label>
			</div>
		</div>
	`,
});
