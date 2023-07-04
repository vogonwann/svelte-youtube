<script>
    import { page } from "$app/stores";
    const greetings = {
        en: 'Hello!',
        es: 'Hola!',
        fr: 'Bonjour!'
    };

    const { lang = 'en' } = $page.params;
    // @ts-ignore
    const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>