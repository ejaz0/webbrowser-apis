const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
        'red',
        'green',
        'yellow',
        'white',
        'brown',
        'orange',
        'black',
        'blue',
        'purple',
    ];
    for (let i = e.resultIndex; i < e.results.length; i++) {
        let script = e.results[i][0].transcript.toLowerCase().trim();
        script = script.replace(/\.$/, "");
        console.log(script)
        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;

        } else {
            alert('Please say a color!');
        }

    }
}

rec.start();
