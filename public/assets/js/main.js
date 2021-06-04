async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
}

document.addEventListener('DOMContentLoaded', () => {
    // TODO: Fetch
    let url = document.getElementById('url')
    let slug = document.getElementById('slug')
    let form = document.getElementById('form')
    let error = document.getElementById('errorAlert')
    let success = document.getElementById('successAlert')
    let loading = document.getElementById('loading')

    form.addEventListener('submit', e => {
        e.preventDefault()
        const { value } = url
        const path = 'http://localhost:3333/short'
        loading.classList.remove('hidden')
        postData(path, { url: value })
            .then(result => {
                console.log(result)
                slug.innerHTML = path + '/' + result?.slug
                success.classList.remove('hidden')
                error.classList.add('hidden')
                loading.classList.add('hidden')
            })
            .catch(err => {
                error.classList.remove('hidden')
                success.classList.add('hidden')
                loading.classList.add('hidden')
            })
    })
})
