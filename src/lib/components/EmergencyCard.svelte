<script>
	let contents = [
		{
			title: 'Kebencanaan',
			link: '/emergency?id=1',
            color: 'border border-2 border-yellow-500'
		},
        {
			title: 'Kebakaran',
			link: '/emergency?id=2',
            color: 'border border-2 border-red-500'
		},
        {
            title: 'Keamanan',
            link: '/emergency?id=3',
            color: 'border border-2 border-green-500'
        },
        {
            title: 'Kesehatan',
            link: '/emergency?id=4',
            color: 'border border-2 border-blue-500'
        },
        {
            title: 'Ketertiban',
            link: '/emergency?id=5',
            color: 'border border-2 border-purple-500'
        }
	];
</script>

<section class="flex flex-wrap justify-center gap-10 pt-5">
	{#each contents as content}
        <a href={content.link} class="lg:w-64 w-44">
		    <section class="card {content.color} shadow-xl py-14 text-gray-600">
				<div class="flex items-center justify-center ">
					<h2 class="card-title">{content.title}</h2>
				</div>
            </section>
        </a>
	{/each}
</section>
