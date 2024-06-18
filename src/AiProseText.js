const API_URL = "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta";
const API_TOKEN = ""; // Replace with your own API key

async function query(payload) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

function buildPayload(activity, duration) {
    return {
        "inputs": "<user> Schreibe einen persönlichen deutschen Kommentar zur Trainingseinheit " + activity + ", welche " + duration + " hh:mm gedauert hat in maximal 10 Wörtern. Antwort: </s>\n<|assistant|>\n",
        "parameters": {
            "return_full_text": false,
            "max_new_tokens": 50
        },
        "options": {
            "use_cache": false
        }
    };
}

export async function getTrainingComment(activity, duration) {
    try {
        const payload = buildPayload(activity, duration);
        const data = await query(payload);
        console.log(data[0].generated_text);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}