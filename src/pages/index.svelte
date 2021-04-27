<div class="p-3">
	<div class="text-2xl">{isi.trim().split(/\s+/).length} kata</div>
	<textarea name="" placeholder="Tulis di sini" bind:value={isi} id="" cols="30" rows="10" class="w-full h-[70vh]"></textarea>
</div>

<script>
	document.title = 'Jumlah Kata'

	let isi = ''
</script>