<template>
    <div id="content">
        <div class="note">
            <h3>Ackusativ</h3>
            <p>
                Maskulina ord (med artikeln "der") ändras om de efterföljer ett verb. <br />
                "Der" ändras då till "den", och "ein" ändras då till "einen".<br />
                Exempelvis:<br />
                Ich verstehe <b>den</b> Hund. <br />
                Ich habe <b>einen</b> Hund.
            </p>
        </div>
        <div class="note">
            <h3>Frågor</h3>
            <p>
                Frågor i tyska fungerar som på svenska, alltså att orden byter plats. <br />
                Exempel: <br />
                Du hast bier - Du har öl. <br />
                Hast du bier? - Har du öl?
            </p>
        </div>
        <div class="note">
            <h3>Hungrig/törstig</h3>
            <p>
                Kommer inte på vad det korrekta ordet för denna grammatik är, men tyskan gör som spanskan. <br />
                Om vi på svenska säger "Jag <b>är</b> hungrig" så säger tyskan "Jag <b>har</b> hunger". <br />
                Exempelvis: <br />
                Ich habe Hunger - Jag har hunger <br />
                Ich habe Durst - Jag har törst <br />
            </p>
        </div>
        <div class="note">
            <h3>Plural</h3>
            <p>
                Alla substantiv får artikeln "Die" i plural oavsett kön. Exempel: <br />
                <b>Der</b> Hund blir <b>Die</b> Hunden
                <b>Das</b> Mädchen blir <b>Die</b> Mädchen
                <b>Die</b> Frau förblir <b>Die</b> Frauen
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotePage'
}
</script>

<style scoped>
#content {
    text-align: left;
}
.note{
    text-align: left;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 500px;
    margin: 5px;
    display:inline-block;
    vertical-align: top;
}
</style>
