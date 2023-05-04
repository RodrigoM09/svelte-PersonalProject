<script>
let title = "Ninja Gaming Guides"

const updateTitle = () => {
    title = "Something else"
    }
</script>

<div class="index">
    <h1>{title}</h1>
    <p>Page content</p>
    <button on:click={updateTitle}>Update title</button>
    <input type="text" bind:value={title}>
</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>