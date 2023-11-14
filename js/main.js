const api = "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";

const inpData = document.getElementById('inpData');
const images = document.querySelector('.images');

const getImage = async () => {
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inpData.value,
                "n": 3,
                "size":"256x256"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)

    const data = await res.json()
    console.log(data);
    const listImages = data.data;
    images.innerHTML =''
    listImages.map(photo => {
        const box = document.createElement("div")
        images.append(box)
        const img = document.createElement("img")
        box.append(img)
        img.src = photo.url
    })
}