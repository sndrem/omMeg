var feed = new Instafeed({
	get: 'user',
	userId: 95661,
	accessToken: '95661.467ede5.d03e71e9761648e181b225636acb6483',
	clientId: 'da1875ca87904c308343fda60516f077',
	useHttp: true,
	limit: 3,
	resolution: 'thumbnail',
	sortBy: 'most-liked',
	template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
});
feed.run();