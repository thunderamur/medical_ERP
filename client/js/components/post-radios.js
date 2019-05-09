'use strict';


Vue.component('post-radios', {
	data() {
		return {
			doctorPosts: [],
			doctorPostIds: [],
		}
	},
	methods: {
		getPosts() {
			if (this.$root.posts.length === 0) {
				this.$api.get(
					'posts/',
					this.$cookies.get('token'),
				)
				.then(data => {
					this.$root.posts = data;
					this.getDoctorPosts();
				});
			} else {
				this.getDoctorPosts();
			}
		},

		getDoctorPosts() {
			if (this.$root.posts.length === 0) return

			for (let post of this.$root.posts) {
				if (post.is_doctor) {
					this.doctorPosts.push(post);
					this.doctorPostIds.push(post.id)
				}
			}
			this.$root.$emit('postChanged', this.doctorPostIds);
		},

	 	// Click handler for postRadios
		postChanged(postId) {
			let doctorPostIds = [postId];
			if (postId === 0) doctorPostIds = this.doctorPostIds;
			this.$root.$emit('postChanged', doctorPostIds);
		}

	},
	created() {
		this.getPosts();
	},
	template: `
		<div>
			<h6 class="font-weight-normal">Выбор врачей:</h6>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="postRadios" id="postRadios_0" value="0" checked @click="postChanged(0)">
				<label class="form-check-label" for="postRadios_0">
					Все
				</label>
			</div>
			<div v-for="post in doctorPosts" :key="post.id" class="form-check">
				<input class="form-check-input" type="radio" name="postRadios" :id="post.id" :value="post.id" @click="postChanged(post.id)">
				<label class="form-check-label" :for="post.id">
					{{post.name}}
				</label>
			</div>
		</div>
	`,
});
