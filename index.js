let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")

function buildsection (ppl) {
    return `
            <section>
                <div class="profile">
                    <img class="avatar" src="${ppl.avatar}">
                    <div class="info">
                        <h2>${ppl.name}</h2>
                        <h3>${ppl.location}</h3>
                    </div>
                </div>
                <img class="post" id="${ppl.username}" src="${ppl.post}">
                <div class="functions">
                    <img class="icon" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                <p><b>${ppl.likes} likes</b></p>
                <p><b>${ppl.username}</b> ${ppl.comment}</p>
            </section>
        `
}

function render(list) {
    let result = ""
    for (let i=0; i<list.length; i+=1) {
        result += buildsection(list[i])
    }
    main.innerHTML = result          
}

render(posts)

main.addEventListener("dblclick", e => {
  if (e.target.classList.contains("post")) {
    const username = e.target.id
    const post = posts.find(p => p.username === username)
    post.likes++
    render(posts)
  }
})