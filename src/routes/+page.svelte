<script lang='ts'>
    import "../app.css"
    import type { PageData } from "./$types";
    import { Label, Input, Button } from 'flowbite-svelte';
    import { superForm } from 'sveltekit-superforms/client';
    import  SuperDebug  from 'sveltekit-superforms/client/SuperDebug.svelte';

    export let data: PageData;

    const {form, errors, enhance} = superForm(data.form)

</script>

<SuperDebug data={$form}/>

<form  class="flex flex-col w-1/2 items-center" method="POST" use:enhance>
    <Label for="firstName">First Name</Label>
    <Input id="firstName" name="firstName" type="text" placeholder="First Name" bind:value={$form.firstName} />
    {#if $errors.firstName}
        <p class="text-red-500">{$errors.firstName}</p>
    {/if}
    <Label for="lastName">Last Name</Label>
    <Input id="lastName" name="lastName" type="text" placeholder="Last Name" bind:value={$form.lastName} />
    {#if $errors.lastName}
        <p class="text-red-500">{$errors.lastName}</p>
    {/if}
    <Label for="email">Email Address</Label>
    <Input id="email" name="email" type="email" placeholder="Email Address" bind:value={$form.email} />
    {#if $errors.email}
        <p class="text-red-500">{$errors.email}</p>
    {/if}
    <Label for="company">Company</Label>
    <Input id="company" name="company" type="text" placeholder="Company" bind:value={$form.company} />
    {#if $errors.company}
        <p class="text-red-500">{$errors.company}</p>
    {/if}
    <Button type="submit">Submit</Button>
</form>
<style>

</style>